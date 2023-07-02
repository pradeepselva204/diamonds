import React from 'react'
import { useGLTF,Decal,useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
const ShirtModel = (props) => {
    const texture = useTexture(`/Images/8lements.png`)
    const { nodes, materials } = useGLTF('/Model/shirt.glb')
    materials.lambert1.color = new THREE.Color("red")
    useFrame((state,delta)=>{
      easing.dampC(materials.lambert1.color,"red",0.25,delta)
    //   console.log("Position : ",state.camera.position)
    //   console.log("Rotation : ", state.camera.rotation)

    })
    return (
      <mesh
        castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        {...props}
        dispose={null}>
          <Decal 
            position={props.position}
            rotation={[0.15,0,0]}
            scale={0.5}
            opacity={0.5}
            // map-anisotrophy={16}
            map={texture}/>
        </mesh>
    )
  
}

export default ShirtModel