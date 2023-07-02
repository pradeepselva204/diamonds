/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 diamond4.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/diamond4.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Plane005.geometry} material={materials.DIAMANT} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/diamond4.glb')