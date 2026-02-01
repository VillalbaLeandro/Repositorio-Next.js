'use client';

import { useMemo, useRef } from 'react';
import gsap from 'gsap';
import styles from './DownloadCvButton.module.css';

export default function DownloadCvButton({
    href,
    fileName = 'cv.pdf',
    durationMs = 2600,
    label = 'Descargar',
    loadingLabel = 'Descargando ',
    doneLabel = 'Listo!',
    resetAfterMs = 2000
}) {
    const btnRef = useRef(null);
    const svgRef = useRef(null);
    const busyRef = useRef(false);

    const initialPath = useMemo(() => getPath(20, 0, null), []);
    const donePath = useMemo(
        () =>
            getPath(0, 0, [
                [3, 14],
                [8, 19],
                [21, 6]
            ]),
        []
    );

    const startDownload = () => {
        // fuerza descarga sin navegar
        const a = document.createElement('a');
        a.href = href;
        a.download = fileName;
        a.rel = 'noopener';
        document.body.appendChild(a);
        a.click();
        a.remove();
    };

    const handleClick = (e) => {
        e.preventDefault();

        const button = btnRef.current;
        const svg = svgRef.current;
        if (!button || !svg) return;

        if (busyRef.current) return;
        busyRef.current = true;

        // estado visual
        button.classList.add(styles.loading);

        // inicia descarga con delay de 1s para que se vea la animación
        setTimeout(() => {
            startDownload();
        }, 1000);

        // animación del path (reemplaza Proxy del snippet por attrs reales)
        const state = { y: 20, smoothing: 0 };

        const render = () => {
            svg.innerHTML = getPath(state.y, state.smoothing, null);
        };

        render();
        button.style.setProperty('--duration', String(durationMs));

        gsap.to(state, {
            smoothing: 0.3,
            duration: (durationMs * 0.065) / 1000,
            onUpdate: render
        });

        gsap.to(state, {
            y: 12,
            duration: (durationMs * 0.265) / 1000,
            delay: (durationMs * 0.065) / 1000,
            ease: 'elastic.out(1.12, 0.4)',
            onUpdate: render
        });

        // en la mitad, pone check
        setTimeout(() => {
            svg.innerHTML = donePath;
        }, durationMs / 2);

        // al final, mostrás “Listo!”
        setTimeout(() => {
            button.classList.add(styles.done);

            // opcional: volver a estado inicial
            setTimeout(() => {
                button.classList.remove(styles.loading);
                button.classList.remove(styles.done);
                svg.innerHTML = initialPath;
                busyRef.current = false;
            }, resetAfterMs);
        }, durationMs);
    };

    return (
        <a
            ref={btnRef}
            href={href}
            className={styles.button}
            onClick={handleClick}
            aria-label="Download CV"
        >
            <ul className={styles.text}>
                <li>{label}</li>
                <li>{loadingLabel}</li>
                <li>{doneLabel}</li>
            </ul>

            <div className={styles.iconBox} aria-hidden="true">
                <svg ref={svgRef} viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: initialPath }} />
            </div>
        </a>
    );
}

/** ==== helpers ==== */
function getPoint(point, i, a, smoothing) {
    const cp = (current, previous, next, reverse) => {
        const p = previous || current;
        const n = next || current;
        const o = {
            length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
            angle: Math.atan2(n[1] - p[1], n[0] - p[0])
        };
        const angle = o.angle + (reverse ? Math.PI : 0);
        const length = o.length * smoothing;
        return [current[0] + Math.cos(angle) * length, current[1] + Math.sin(angle) * length];
    };

    const cps = cp(a[i - 1], a[i - 2], point, false);
    const cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
}

function getPath(update, smoothing, pointsNew) {
    const points = pointsNew
        ? pointsNew
        : [
            [4, 12],
            [12, update],
            [20, 12]
        ];
    const d = points.reduce((acc, point, i, a) => (i === 0 ? `M ${point[0]},${point[1]}` : `${acc} ${getPoint(point, i, a, smoothing)}`), '');
    return `<path d="${d}" />`;
}
