const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, '../public/img/skills');
const MAX_WIDTH = 1200;
const WEBP_QUALITY = 80;

// Función para obtener todos los archivos de imagen recursivamente
function getAllImageFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            getAllImageFiles(filePath, fileList);
        } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Función para optimizar una imagen
async function optimizeImage(inputPath) {
    try {
        const ext = path.extname(inputPath).toLowerCase();
        const dir = path.dirname(inputPath);
        const baseName = path.basename(inputPath, ext);
        const outputPath = path.join(dir, `${baseName}.webp`);

        // Obtener tamaño original
        const originalStats = fs.statSync(inputPath);
        const originalSizeKB = (originalStats.size / 1024).toFixed(2);

        // Optimizar y convertir a WebP
        await sharp(inputPath)
            .resize(MAX_WIDTH, null, {
                withoutEnlargement: true,
                fit: 'inside'
            })
            .webp({ quality: WEBP_QUALITY })
            .toFile(outputPath);

        // Obtener tamaño optimizado
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSizeKB = (optimizedStats.size / 1024).toFixed(2);
        const reduction = ((1 - optimizedStats.size / originalStats.size) * 100).toFixed(1);

        console.log(`✅ ${path.relative(PROJECTS_DIR, inputPath)}`);
        console.log(`   ${originalSizeKB}KB → ${optimizedSizeKB}KB (${reduction}% reducción)`);

        // Eliminar archivo original
        fs.unlinkSync(inputPath);

        return {
            original: originalStats.size,
            optimized: optimizedStats.size,
            reduction: reduction
        };
    } catch (error) {
        console.error(`❌ Error optimizando ${inputPath}:`, error.message);
        return null;
    }
}

// Función principal
async function main() {
    console.log('🚀 Iniciando optimización de imágenes...\n');
    console.log(`📁 Directorio: ${PROJECTS_DIR}`);
    console.log(`🎯 Configuración: Max ${MAX_WIDTH}px, WebP ${WEBP_QUALITY}% calidad\n`);

    const imageFiles = getAllImageFiles(PROJECTS_DIR);

    if (imageFiles.length === 0) {
        console.log('⚠️  No se encontraron imágenes para optimizar');
        return;
    }

    console.log(`📸 Encontradas ${imageFiles.length} imágenes\n`);

    let totalOriginal = 0;
    let totalOptimized = 0;
    let successCount = 0;

    for (const imagePath of imageFiles) {
        const result = await optimizeImage(imagePath);
        if (result) {
            totalOriginal += result.original;
            totalOptimized += result.optimized;
            successCount++;
        }
        console.log(''); // Línea en blanco entre archivos
    }

    const totalReduction = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

    console.log('═'.repeat(60));
    console.log('✨ RESUMEN DE OPTIMIZACIÓN');
    console.log('═'.repeat(60));
    console.log(`📊 Imágenes procesadas: ${successCount}/${imageFiles.length}`);
    console.log(`💾 Tamaño original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
    console.log(`💾 Tamaño optimizado: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🎉 Reducción total: ${totalReduction}% (${((totalOriginal - totalOptimized) / 1024 / 1024).toFixed(2)} MB ahorrados)`);
    console.log('═'.repeat(60));
}

main().catch(console.error);
