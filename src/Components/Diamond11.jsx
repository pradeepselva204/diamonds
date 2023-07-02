/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 diamond11.glb
*/
//nodes.Plane007.geometry
import React, { useRef, useState, useMemo} from 'react'
import { useThree, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF, useTexture, MeshRefractionMaterial, CubeCamera } from "@react-three/drei"
import { RGBELoader } from 'three-stdlib'
import Data from './Data'
import * as THREE from "three"
export function Diamond11(props) {
  const model = useRef()
  const [id, setId] = useState()
  const { nodes, materials } = useGLTF('/Model/diamond11.glb')
  const dummy = useMemo(() => new THREE.Object3D(), [])
  let diamondArray = Data[props.id].data
  const diamonds = useMemo(
      () => diamondArray,
      []
    )
  useFrame((state, delta) => {
    // Update instanced diamonds
    diamonds.forEach((data, i) => {
        const { position, rotation,scale,size } = data
        // console.log(data)
        dummy.position.set(position[0], position[1], position[2])
        dummy.rotation.set(rotation[0] , rotation[1], 1)
        dummy.scale.setScalar( id === i ? scale : size)
        dummy.updateMatrix()            
        model.current.setMatrixAt(i, dummy.matrix)
        // console.log(model)
    })
    model.current.instanceMatrix.needsUpdate = true
    })
  const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
  const config = {
    bounces: 3,
    aberrationStrength: 0.01,
    ior: 2.75,
    fresnel: 1,
    // color: '#fff',
    fastChroma: true
    }
  return (

    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        //  args={[nodes.Diamond_1_0.geometry, null, diamonds.length]}
        <instancedMesh ref={model} args={[nodes.Plane007.geometry, null, diamonds.length]}>
          <MeshRefractionMaterial envMap={texture} toneMapped={false} {...config}/>
        </instancedMesh>
      )}
    </CubeCamera>

    // <group {...props} dispose={null}>
    //   <mesh geometry={nodes.Plane014.geometry} material={materials.DIAMANT} rotation={[-Math.PI / 2, 0, 0]} scale={0.01} />
    // </group>
  )
}

useGLTF.preload('/Model/diamond11.glb')