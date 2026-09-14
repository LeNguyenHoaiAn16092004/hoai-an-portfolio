import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { mediaQueries, useMediaQuery, useReducedMotion } from '../responsive';

interface ArtifactProps {
  distort: number;
  speed: number;
}

function Artifact({ distort, speed }: ArtifactProps) {
  return (
    <mesh rotation-x={0.3} rotation-y={0.5} scale={1.2}>
      <dodecahedronGeometry args={[1, 0]} />
      <MeshDistortMaterial
        color="#b84c3c"
        distort={distort}
        speed={speed}
        roughness={0.4}
        metalness={0.6}
      />
    </mesh>
  );
}

function StaticFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 'var(--radius-lg)',
        background: 'var(--color-accent)',
        opacity: 0.2,
      }}
    />
  );
}

/**
 * Hero3D — Abstract hero artifact with capability tiers.
 *
 * - Mobile viewports and reduced-motion preferences get a static fallback
 *   (no WebGL cost at all).
 * - Tablet gets reduced pixel ratio, no antialiasing, and gentler motion.
 * - Desktop gets the full artifact.
 * The scene stays lazy-loaded by the parent, so it never blocks content.
 */
export default function Hero3D() {
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isTablet = useMediaQuery(mediaQueries.tablet);

  const quality = isTablet
    ? { dpr: [1, 1.5] as [number, number], antialias: false, distort: 0.2, speed: 0.8, rotateSpeed: 0.3 }
    : { dpr: [1, 2] as [number, number], antialias: true, distort: 0.3, speed: 1.5, rotateSpeed: 0.5 };

  return (
    <div
      style={{
        width: '100%',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--color-bg-subtle)',
          borderRadius: 'var(--radius-lg)',
          border: 'var(--border-width-thin) solid var(--color-border-subtle)',
        }}
      />
      <div style={{ width: '300px', height: '300px', position: 'relative', zIndex: 1 }}>
        {reducedMotion || isMobile ? (
          <StaticFallback />
        ) : (
          <Canvas
            camera={{ position: [0, 0, 3], fov: 50 }}
            dpr={quality.dpr}
            gl={{ antialias: quality.antialias }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <Artifact distort={quality.distort} speed={quality.speed} />
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={quality.rotateSpeed}
            />
          </Canvas>
        )}
      </div>
    </div>
  );
}
