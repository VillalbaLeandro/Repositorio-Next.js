'use client';

import React, { useRef, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useGLTF, OrbitControls, Sparkles, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

function useAdvancedHologram(isMobile = false) {
    const uniforms = useMemo(
        () => ({
            uTime: { value: 0 },
            uFresnelIntensity: { value: 1.5 },
            uFresnelPower: { value: 3.0 },
            uSliceCount: { value: isMobile ? 15.0 : 30.0 },
            uSliceThickness: { value: 0.02 },
            uScanlineFreq: { value: isMobile ? 50.0 : 200.0 },
            uDragGlow: { value: 0.0 },
            uGlitchIntensity: { value: 0.0 },
            uEmissiveColor: { value: new THREE.Color('#00ffff') }, // usado en shader
        }),
        [isMobile]
    );

    const material = useMemo(() => {
        const mat = new THREE.MeshStandardMaterial({
            color: new THREE.Color('#00151a'),
            transparent: true,
            // Si querés que NO se vea la “piel” y solo el wireframe, dejalo false.
            // Si querés ver el cuerpo holográfico, ponelo true.
            visible: false,
            opacity: 0.35,
            depthWrite: false,
            blending: THREE.AdditiveBlending,
            side: THREE.DoubleSide,
        });

        mat.emissive.set('#ffff00');
        mat.emissiveIntensity = 0.6;

        mat.onBeforeCompile = (shader) => {
            // uniforms
            shader.uniforms.uTime = uniforms.uTime;
            shader.uniforms.uFresnelIntensity = uniforms.uFresnelIntensity;
            shader.uniforms.uFresnelPower = uniforms.uFresnelPower;
            shader.uniforms.uSliceCount = uniforms.uSliceCount;
            shader.uniforms.uSliceThickness = uniforms.uSliceThickness;
            shader.uniforms.uScanlineFreq = uniforms.uScanlineFreq;
            shader.uniforms.uDragGlow = uniforms.uDragGlow;
            shader.uniforms.uGlitchIntensity = uniforms.uGlitchIntensity;
            shader.uniforms.uEmissiveColor = uniforms.uEmissiveColor; // <-- faltaba

            // precisión para móviles / GPUs débiles
            shader.fragmentShader =
                `precision mediump float;\nprecision mediump int;\n` + shader.fragmentShader;

            // VERTEX
            shader.vertexShader = `
        uniform float uTime;
        uniform float uGlitchIntensity;
        varying vec3 vWorldPosition;
        varying vec3 vNormalView;
        varying float vObjectY;
        ${shader.vertexShader}
      `
                .replace(
                    '#include <begin_vertex>',
                    `
          #include <begin_vertex>
          vObjectY = position.y;

          // Flicker posicional sutil
          transformed.x += sin(position.y * 10.0 + uTime * 4.0) * 0.005;

          // Glitch geométrico (más visible)
          transformed.x += sin(uTime * 50.0) * uGlitchIntensity * 0.3;
          transformed.z += cos(uTime * 30.0) * uGlitchIntensity * 0.2;
        `
                )
                .replace(
                    '#include <worldpos_vertex>',
                    `
          #include <worldpos_vertex>
          vWorldPosition = (modelMatrix * vec4(transformed, 1.0)).xyz;
          vNormalView = normalize(normalMatrix * normal);
        `
                );

            // FRAGMENT
            shader.fragmentShader = `
        uniform float uTime;
        uniform float uFresnelIntensity;
        uniform float uFresnelPower;
        uniform float uSliceCount;
        uniform float uSliceThickness;
        uniform float uScanlineFreq;
        uniform float uDragGlow;
        uniform float uGlitchIntensity;
        uniform vec3 uEmissiveColor;
        varying vec3 vWorldPosition;
        varying vec3 vNormalView;
        varying float vObjectY;
        ${shader.fragmentShader}
      `.replace(
                '#include <output_fragment>',
                `
        vec3 viewDir = normalize(vViewPosition);

        float facing = gl_FrontFacing ? 1.0 : -1.0;
        float fresnel = pow(1.0 - abs(dot(vNormalView * facing, viewDir)), uFresnelPower);

        // slices estables en Y mundo
        float y = vWorldPosition.y * uSliceCount - uTime * 0.4;
        float slice = smoothstep(0.0, uSliceThickness, fract(y));
        slice *= smoothstep(uSliceThickness * 2.0, uSliceThickness, fract(y));

        // scanlines
        float scanline = sin(vWorldPosition.y * uScanlineFreq - uTime * 15.0) * 0.08;

        float flicker = (sin(uTime * 20.0) * 0.02) + 1.0;

        float glowBoost = 1.0 + (uDragGlow * 0.8);

        vec3 baseEmissive = totalEmissiveRadiance;
        vec3 holoColor = (baseEmissive + uEmissiveColor * fresnel * uFresnelIntensity) * glowBoost;

        float alpha = clamp((0.2 + slice * 0.6 + scanline) * fresnel, 0.15, 1.0);

        alpha *= mix(1.0, 0.8, uGlitchIntensity);
        holoColor *= mix(1.0, 0.6, uGlitchIntensity);

        gl_FragColor = vec4(holoColor * flicker, alpha);

        #include <tonemapping_fragment>
        #include <encodings_fragment>
        #include <fog_fragment>
        `
            );
        };

        // IMPORTANTE: si cambiás onBeforeCompile, esto fuerza un compile “una vez”.
        mat.needsUpdate = true;

        return mat;
    }, [uniforms]);

    return { material, uniforms };
}

function Model({ isDragging, isMobile, ...props }) {
    const { scene } = useGLTF('/img/myPics/hologram.glb');
    const { material, uniforms } = useAdvancedHologram(isMobile);

    const lastGlitchTime = useRef(0);
    const nextGlitchDelay = useRef(5 + Math.random() * 3);

    useFrame((state) => {
        const elapsed = state.clock.getElapsedTime();
        uniforms.uTime.value = elapsed;

        uniforms.uDragGlow.value = THREE.MathUtils.lerp(
            uniforms.uDragGlow.value,
            isDragging ? 1.0 : 0.0,
            0.12
        );

        if (elapsed - lastGlitchTime.current > nextGlitchDelay.current) {
            lastGlitchTime.current = elapsed;
            nextGlitchDelay.current = 5 + Math.random() * 3;
        }

        const timeSinceGlitch = elapsed - lastGlitchTime.current;
        const glitchDuration = 0.7;
        let glitchValue = 0.0;

        if (timeSinceGlitch < glitchDuration) {
            const progress = timeSinceGlitch / glitchDuration;
            glitchValue = Math.sin(progress * Math.PI) * (Math.random() * 0.5 + 0.5);
        }

        uniforms.uGlitchIntensity.value = THREE.MathUtils.lerp(
            uniforms.uGlitchIntensity.value,
            glitchValue,
            0.6
        );
    });

    const { invalidate } = useThree();

    useEffect(() => {
        scene.traverse((child) => {
            if (!child.isMesh) return;

            // Evitar tocar el overlay
            if (child.userData.isWireframe) return;

            child.material = material;

            // Overlay wireframe una sola vez por mesh
            const already = child.getObjectByName('wireframe-overlay');
            if (!already) {
                const wireMat = new THREE.MeshBasicMaterial({
                    color: '#00ffff',
                    wireframe: true,
                    transparent: true,
                    opacity: 0.04,
                    depthWrite: false,
                    depthTest: false,
                    polygonOffset: true,
                    polygonOffsetFactor: -1,
                    polygonOffsetUnits: -1,
                    blending: THREE.AdditiveBlending,
                });

                const wire = new THREE.Mesh(child.geometry, wireMat);
                wire.name = 'wireframe-overlay';
                wire.userData.isWireframe = true;
                child.add(wire);
            }
        });

        // 🔥 Importante: Forzar un frame nuevo para que se vea el cambio de material
        // al iniciar en modo 'demand'
        invalidate();
    }, [scene, material, invalidate]);

    return (
        <Float speed={2} rotationIntensity={0.1} floatIntensity={0.3}>
            <primitive object={scene} {...props} />
        </Float>
    );
}

export default function Avatar3D({ isDraggingProp = false }) {
    const [isMobile, setIsMobile] = useState(false);
    const [isRotating, setIsRotating] = useState(false); // Renamed from isDragging to avoid confusion
    const controlsRef = useRef(null);

    // Combine both states for performance optimizations
    const effectiveIsDragging = isRotating || isDraggingProp;

    // 🔥 Perf: Calcular DPR y partículas dinámicamente según estado
    const dpr = effectiveIsDragging ? [1, 1] : (isMobile ? [1, 1] : [1, 2]);
    const sparklesCount = effectiveIsDragging ? (isMobile ? 8 : 12) : (isMobile ? 15 : 35);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Toggle OrbitControls cuando draggeás UI (no 3D)
    useEffect(() => {
        if (!controlsRef.current) return;
        // Si se arrastra un badge, desactivamos los controles para evitar conflictos
        controlsRef.current.enabled = !isDraggingProp;
    }, [isDraggingProp]);

    return (
        <motion.div
            className={`w-full ${isMobile ? 'h-[400px]' : 'h-[550px]'} bg-transparent overflow-hidden touch-none`}
            initial={isMobile ? { y: 100, opacity: 0 } : false}
            animate={isMobile ? { y: 0, opacity: 1 } : {}}
            transition={isMobile ? {
                duration: 0.8,
                delay: 0.3,
                ease: [0.16, 1, 0.3, 1] // easeOutExpo
            } : {}}
        >
            <Canvas
                events={null} // ok: evita el raycasting de R3F
                camera={{ position: [0, 0, 8], fov: 20 }}
                dpr={dpr}
                shadows={!effectiveIsDragging}
                frameloop="always"
                onPointerDown={(e) => e.stopPropagation()}
                gl={{
                    antialias: !isMobile,
                    alpha: true,
                    powerPreference: 'high-performance',
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                    // Evitar scroll/gestos nativos que compiten
                    gl.domElement.style.touchAction = 'none';
                    gl.domElement.style.overscrollBehavior = 'contain';
                }}
            >
                <ambientLight intensity={0.5} />

                <Sparkles
                    count={sparklesCount}
                    scale={[4, 6, 4]}
                    speed={0.2}
                    color="#ff00ff"
                />

                <group position={[0, -1.6, 0]}>
                    <Model scale={5} isDragging={effectiveIsDragging} isMobile={isMobile} />
                </group>

                <OrbitControls
                    ref={controlsRef}
                    enableZoom={false}
                    enablePan={false}
                    enableDamping={true}
                    dampingFactor={0.05}
                    autoRotate={!effectiveIsDragging}          // 🔥 corta autorotate cuando arrastrás
                    autoRotateSpeed={0.5}
                    maxPolarAngle={Math.PI / 1.7}
                    minPolarAngle={Math.PI / 2.3}
                    onStart={() => setIsRotating(true)}
                    onEnd={() => setIsRotating(false)}
                />
            </Canvas>
        </motion.div>
    );
}

useGLTF.preload('/img/myPics/hologram.glb');
