import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';

export function Globe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        let phi = 0;

        if (!canvasRef.current) return;

        const globe = createGlobe(canvasRef.current, {
            devicePixelRatio: 2,
            width: 600 * 2,
            height: 600 * 2,
            phi: 0,
            theta: 0.3,
            dark: 1,
            diffuse: 1.2,
            mapSamples: 16000,
            mapBrightness: 6,
            baseColor: [0.1, 0.1, 0.1], // Dark gray body
            markerColor: [0, 0.8, 0.4], // Primary green tone
            glowColor: [0.05, 0.1, 0.05], // Subtle green glow
            markers: [
                // Simulated secure node locs (approx)
                { location: [37.7595, -122.4367], size: 0.03 },
                { location: [40.7128, -74.006], size: 0.1 },
                { location: [51.5072, -0.1276], size: 0.05 },
                { location: [52.5200, 13.4050], size: 0.08 },
                { location: [35.6895, 139.6917], size: 0.07 },
                { location: [1.3521, 103.8198], size: 0.05 },
                { location: [-33.8688, 151.2093], size: 0.06 },
                { location: [48.8566, 2.3522], size: 0.04 },
                { location: [55.7558, 37.6173], size: 0.09 }, // High risk areas
                { location: [35.6892, 51.3890], size: 0.08 },
            ],
            onRender: (state) => {
                // Called on every animation frame.
                state.phi = phi;
                phi += 0.005; // speed
            },
        });

        return () => {
            globe.destroy();
        };
    }, []);

    return (
        <div className="w-full h-full max-w-[600px] max-h-[600px] aspect-square m-auto relative z-0 opacity-80 mix-blend-screen pointer-events-none">
            <canvas
                ref={canvasRef}
                className="w-full h-full object-contain"
                style={{ width: "100%", height: "100%" }}
            />
        </div>
    );
}
