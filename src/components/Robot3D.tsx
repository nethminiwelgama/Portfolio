import React, { useRef, useMemo, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF, useAnimations } from '@react-three/drei'
import type { Group } from 'three'
import * as THREE from 'three'

// Import the GLB file - Vite will handle the path
import robotModelUrl from '../assets/roboter_cute.glb?url'

interface Robot3DProps {
  /** Normalized cursor position: x and y in 0..1 (0.5 = center) */
  cursorNorm: { x: number; y: number } | null
}

export function Robot3D({ cursorNorm }: Robot3DProps) {
  const groupRef = useRef<Group>(null)
  const { scene, animations } = useGLTF(robotModelUrl)
  const { actions } = useAnimations(animations, groupRef)
  const clonedScene = useMemo(() => scene.clone(), [scene])

  // Play animations if available
  useEffect(() => {
    if (animations.length > 0 && actions) {
      Object.values(actions).forEach((action) => {
        if (action) {
          action.play()
        }
      })
    }
  }, [animations, actions])

  useFrame(() => {
    const group = groupRef.current
    if (!group) return
    
    // Face direction: cursor right -> robot turns right
    if (cursorNorm) {
      const dx = cursorNorm.x - 0.5
      const dy = cursorNorm.y - 0.5
      const targetY = Math.atan2(dx, 1) * 0.6 // limit rotation
      group.rotation.y += (targetY - group.rotation.y) * 0.1
    }
  })

  // Center and scale the model
  useEffect(() => {
    if (clonedScene) {
      const box = new THREE.Box3().setFromObject(clonedScene)
      const center = box.getCenter(new THREE.Vector3())
      const size = box.getSize(new THREE.Vector3())
      const maxDim = Math.max(size.x, size.y, size.z)
      const scale = (2.5 * 0.7) / maxDim // smaller (70% of previous size)
      
      clonedScene.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.castShadow = true
          child.receiveShadow = true
        }
      })
      
      clonedScene.scale.setScalar(scale)
      clonedScene.position.sub(center.multiplyScalar(scale))
    }
  }, [clonedScene])

  return (
    <group ref={groupRef} rotation={[0.2, 0, 0]}>
      <primitive object={clonedScene} />
    </group>
  )
}

useGLTF.preload(robotModelUrl)
