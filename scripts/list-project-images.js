const fs = require('fs');
const path = require('path');

const PROJECTS_DIR = path.join(__dirname, '../public/img/proyects');

// Función para obtener imágenes de cada proyecto
function getProjectImages() {
    const projects = fs.readdirSync(PROJECTS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    const result = {};

    projects.forEach(project => {
        const projectPath = path.join(PROJECTS_DIR, project);
        const images = fs.readdirSync(projectPath)
            .filter(file => /\.webp$/i.test(file))
            .sort((a, b) => {
                const numA = parseInt(a.match(/\d+/)?.[0] || '0');
                const numB = parseInt(b.match(/\d+/)?.[0] || '0');
                return numA - numB;
            })
            .map(file => `./img/proyects/${project}/${file}`);

        result[project] = images;
    });

    console.log('📸 Imágenes por proyecto:\n');
    Object.entries(result).forEach(([project, images]) => {
        console.log(`${project}: ${images.length} imagen${images.length > 1 ? 'es' : ''}`);
        images.forEach(img => console.log(`  - ${img}`));
        console.log('');
    });

    return result;
}

getProjectImages();
