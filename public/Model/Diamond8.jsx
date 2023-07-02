/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 diamond8.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/diamond8.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane012.geometry} material={materials.DIAMANT} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/diamond8.glb')