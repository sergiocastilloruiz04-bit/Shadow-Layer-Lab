import { useEffect, useRef, useState } from 'react';
import ReactGlobe from 'react-globe.gl';

export function Globe() {
    const globeEl = useRef<any>();
    const [arcsData, setArcsData] = useState<any[]>([]);
    const [countries, setCountries] = useState({ features: [] });

    useEffect(() => {
        // Configure rotation and POV
        if (globeEl.current) {
            globeEl.current.controls().autoRotate = true;
            globeEl.current.controls().autoRotateSpeed = 0.8;
            globeEl.current.controls().enableZoom = false;
            globeEl.current.pointOfView({ altitude: 2.2 });
        }

        // Fetch geojson for country borders
        fetch('https://raw.githubusercontent.com/vasturiano/react-globe.gl/master/example/datasets/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setCountries);

        // High risk / military-like coordinates
        const nodes = [
            { lat: 37.7595, lng: -122.4367 }, // SF
            { lat: 40.7128, lng: -74.006 },   // NY
            { lat: 51.5072, lng: -0.1276 },   // LDN
            { lat: 52.5200, lng: 13.4050 },   // BER
            { lat: 35.6895, lng: 139.6917 },  // TOK
            { lat: 1.3521, lng: 103.8198 },   // SIN
            { lat: -33.8688, lng: 151.2093 }, // SYD
            { lat: 48.8566, lng: 2.3522 },    // PAR
            { lat: 55.7558, lng: 37.6173 },   // MOW
            { lat: 35.6892, lng: 51.3890 },   // TEH
            { lat: 30.0444, lng: 31.2357 },   // CAI
        ];

        // Generate lines connecting them randomly
        const arcs = [];
        for (let i = 0; i < 25; i++) {
            const source = nodes[Math.floor(Math.random() * nodes.length)];
            const target = nodes[Math.floor(Math.random() * nodes.length)];
            if (source !== target) {
                arcs.push({
                    startLat: source.lat,
                    startLng: source.lng,
                    endLat: target.lat,
                    endLng: target.lng,
                    color: ['#ffffff', '#ffffff', '#aaaaaa'][Math.floor(Math.random() * 3)],
                });
            }
        }
        setArcsData(arcs);
    }, []);

    return (
        <div className="w-full h-full flex items-center justify-center cursor-move">
            <ReactGlobe
                ref={globeEl}
                width={600}
                height={600}
                backgroundColor="rgba(0,0,0,0)"

                // Wireframe earth without grid
                showGlobe={false}
                showAtmosphere={true}
                atmosphereColor="#ffffff"
                atmosphereAltitude={0.15}

                // Draw country borders
                polygonsData={countries.features}
                polygonCapColor={() => 'rgba(0,0,0,0)'}
                polygonSideColor={() => 'rgba(0,0,0,0)'}
                polygonStrokeColor={() => '#ffffff'}

                // Arc styles
                arcsData={arcsData}
                arcColor="color"
                arcDashLength={0.4}
                arcDashGap={0.2}
                arcDashInitialGap={() => Math.random()}
                arcDashAnimateTime={2000}
                arcStroke={0.5}
            />
        </div>
    );
}
