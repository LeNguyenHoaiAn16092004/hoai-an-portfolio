import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import type { Group, Mesh } from 'three';
import { useTheme } from '../theme';
import { mediaQueries, useMediaQuery, useReducedMotion } from '../responsive';

interface SculptureProps {
  core: string;
  wire: string;
  ring: string;
  distort: number;
  speed: number;
  rotateSpeed: number;
  interactive: boolean;
}

/**
 * TechnicalSculpture — Layered orbital artifact.
 *
 * A wireframe shell over a solid distorted core, two tilted orbit rings,
 * and three satellite octahedrons. Slow ambient rotation plus subtle
 * pointer tilt on hover-capable pointers. All motion is transform-only
 * and cheap; the whole scene stays inside one small canvas.
 */
function TechnicalSculpture({
  core,
  wire,
  ring,
  distort,
  speed,
  rotateSpeed,
  interactive,
}: SculptureProps) {
  const group = useRef<Group>(null);
  const coreMesh = useRef<Mesh>(null);
  const satellites = useRef<Group>(null);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    g.rotation.y += delta * rotateSpeed;
    if (interactive) {
      const targetX = 0.18 + state.pointer.y * 0.22;
      const targetZ = state.pointer.x * 0.18;
      g.rotation.x += (targetX - g.rotation.x) * 0.04;
      g.rotation.z += (targetZ - g.rotation.z) * 0.04;
    }
    if (satellites.current) {
      satellites.current.rotation.z -= delta * rotateSpeed * 1.8;
    }
    if (coreMesh.current) {
      coreMesh.current.rotation.x += delta * 0.25;
      coreMesh.current.rotation.y -= delta * 0.18;
    }
  });

  return (
    <group ref={group} rotation-x={0.18}>
      {/* outer wireframe shell */}
      <mesh>
        <icosahedronGeometry args={[1.15, 1]} />
        <meshBasicMaterial color={wire} wireframe transparent opacity={0.85} />
      </mesh>
      {/* orbit rings */}
      <mesh rotation-x={Math.PI / 2.4}>
        <torusGeometry args={[1.55, 0.015, 12, 96]} />
        <meshBasicMaterial color={ring} transparent opacity={0.8} />
      </mesh>
      <mesh rotation-x={Math.PI / 1.9} rotation-y={0.35}>
        <torusGeometry args={[1.85, 0.01, 12, 96]} />
        <meshBasicMaterial color={core} transparent opacity={0.65} />
      </mesh>
      {/* solid distorted core */}
      <mesh ref={coreMesh} scale={0.62}>
        <dodecahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color={core}
          distort={distort}
          speed={speed}
          roughness={0.45}
          metalness={0.55}
        />
      </mesh>
      {/* satellites */}
      <group ref={satellites}>
        {[0, 1, 2].map((i) => {
          const angle = (i / 3) * Math.PI * 2;
          return (
            <mesh
              key={i}
              position={[Math.cos(angle) * 1.55, Math.sin(angle) * 1.55, 0]}
              rotation-x={Math.PI / 2.4}
            >
              <octahedronGeometry args={[0.11, 0]} />
              <meshStandardMaterial color={core} roughness={0.4} metalness={0.6} />
            </mesh>
          );
        })}
      </group>
    </group>
  );
}

function StaticFallback() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 'var(--radius-lg)',
        background:
          'radial-gradient(circle at 50% 42%, var(--color-accent) 0%, transparent 62%), var(--color-bg-subtle)',
        opacity: 0.85,
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
  const { theme } = useTheme();
  const reducedMotion = useReducedMotion();
  const isMobile = useMediaQuery(mediaQueries.mobile);
  const isTablet = useMediaQuery(mediaQueries.tablet);
  const [canHover] = useState(
    () =>
      typeof window !== 'undefined' &&
      window.matchMedia('(hover: hover) and (pointer: fine)').matches,
  );

  const palette =
    theme === 'dark'
      ? { core: '#d46050', wire: '#8f857c', ring: '#9a9089' }
      : { core: '#b84c3c', wire: '#6e6963', ring: '#6b6560' };

  const quality = isTablet
    ? { dpr: [1, 1.5] as [number, number], antialias: false, distort: 0.2, speed: 0.8, rotateSpeed: 0.25 }
    : { dpr: [1, 2] as [number, number], antialias: true, distort: 0.3, speed: 1.4, rotateSpeed: 0.45 };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
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
      <div style={{ width: 'min(100%, 420px)', aspectRatio: '1', position: 'relative', zIndex: 1 }}>
        {reducedMotion || isMobile ? (
          <StaticFallback />
        ) : (
          <Canvas
            camera={{ position: [0, 0, 4.4], fov: 45 }}
            dpr={quality.dpr}
            gl={{ antialias: quality.antialias }}
            style={{ width: '100%', height: '100%' }}
          >
            <ambientLight intensity={0.55} />
            <directionalLight position={[5, 7, 6]} intensity={1.2} />
            <pointLight position={[-6, -3, -4]} color={palette.core} intensity={12} />
            <TechnicalSculpture
              core={palette.core}
              wire={palette.wire}
              ring={palette.ring}
              distort={quality.distort}
              speed={quality.speed}
              rotateSpeed={quality.rotateSpeed}
              interactive={canHover}
            />
          </Canvas>
        )}
      </div>
    </div>
  );
}
