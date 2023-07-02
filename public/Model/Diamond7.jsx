/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 diamond7.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/diamond7.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Diamond_Emerald_cut001.geometry} material={materials.DIAMANT} scale={0.02} />
    </group>
  )
}

useGLTF.preload('/diamond7.glb')
