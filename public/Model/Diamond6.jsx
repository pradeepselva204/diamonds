/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 diamond6.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/diamond6.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.DIAMOND171.geometry} material={materials.DIAMANT} scale={[0.05, 0.04, 0.04]} />
    </group>
  )
}

useGLTF.preload('/diamond6.glb')
