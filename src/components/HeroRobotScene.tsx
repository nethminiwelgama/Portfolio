import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { Robot3D } from './Robot3D'

interface HeroRobotSceneProps {
  cursorNorm: { x: number; y: number } | null
}

export function HeroRobotScene({ cursorNorm }: HeroRobotSceneProps) {
  return (
    <Suspense fallback={
      <div style={{ 
        width: '100%', 
        height: '100%', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        color: '#00d9ff'
      }}>
        Loading...
      </div>
    }>
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: 'high-performance',
          preserveDrawingBuffer: false
        }}
        camera={{
          position: [0, 0, 3],
          fov: 50,
          near: 0.1,
          far: 100
        }}
        style={{ background: 'transparent', width: '100%', height: '100%' }}
        dpr={[1, 2]}
        frameloop="always"
      >
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <directionalLight position={[-5, 2, 3]} intensity={0.5} />
        <pointLight position={[0, 5, 0]} intensity={0.5} />
        <Robot3D cursorNorm={cursorNorm} />
      </Canvas>
    </Suspense>
  )
}
