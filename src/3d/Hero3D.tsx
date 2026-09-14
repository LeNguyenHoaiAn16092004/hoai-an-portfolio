import { Canvas } from '@react-three/fiber';
import { OrbitControls, MeshDistortMaterial } from '@react-three/drei';
import { useReducedMotion } from '../responsive';

function Artifact() {
   const reducedMotion = useReducedMotion();

   return (
      <mesh
         rotation-x={0.3}
         rotation-y={0.5}
         scale={1.2}
      >
         <dodecahedronGeometry args={[1, 0]} />
         <MeshDistortMaterial
            color="#b84c3c"
            distort={reducedMotion ? 0 : 0.3}
            speed={reducedMotion ? 0 : 1.5}
            roughness={0.4}
            metalness={0.6}
         />
      </mesh>
   );
}

export default function Hero3D() {
   const reducedMotion = useReducedMotion();

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
            {reducedMotion ? (
               <div
                  style={{
                     width: '100%',
                     height: '100%',
                     borderRadius: 'var(--radius-lg)',
                     background: 'var(--color-accent)',
                     opacity: 0.2,
                  }}
               />
            ) : (
               <Canvas
                  camera={{ position: [0, 0, 3], fov: 50 }}
                  style={{ width: '100%', height: '100%' }}
               >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} />
                  <Artifact />
                  <OrbitControls
                     enableZoom={false}
                     enablePan={false}
                     autoRotate
                     autoRotateSpeed={0.5}
                  />
               </Canvas>
            )}
         </div>
      </div>
   );
}
