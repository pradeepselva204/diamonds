import React from 'react'
import * as THREE from "three"
import { useMemo, useRef, useState } from "react"
import { useThree, useFrame, useLoader } from "@react-three/fiber"
import { useGLTF, useTexture, MeshRefractionMaterial, CubeCamera } from "@react-three/drei"
import { RGBELoader } from 'three-stdlib'
import { useControls } from 'leva'
import {dampC} from 'maath/easing'
import { EffectComposer, Bloom, DepthOfField } from "@react-three/postprocessing"
import Data from './Data'
const Diamonds = (props) => {
  console.log(props)
  const [diamondColor,setDiamondColor] = useState("#fff")
  const [grow,setGrow] = useState(false)
  const [id,setId] = useState()
  const changeColor = (e) =>{
    // console.log(mesh)
    if(e===0&&e!==undefined){
      setDiamondColor("red")
    }

  }
  const orginalColor = () =>{
    // mesh.object.material.uniforms.color.value = new THREE.Color("red")
    setDiamondColor("#fff") // 380909 // 2764fc // 23dbfc
    setGrow(false)
    setId(undefined)
  }
  const scaleDiamond = () =>{
    setGrow(true)
  }
    const { viewport, clock } = useThree()
    const model = useRef()
    const mesh = useRef()
    const { nodes } = useGLTF('/Model/dflat.glb')
    // console.log(nodes)
    const tempColor = new THREE.Color()
    // Create random position data
    const dummy = useMemo(() => new THREE.Object3D(), [])
    let pos = 0.2 
 
    // let diamondArray = [{
    //     position:[0, -0.2, 0],
    //     rotation:[0, 0, 0.715],
    //     factor: 0.75 + Math.random() * 2,
    //     direction: Math.random() < 0.5 ? -1 : 1,
    //     size:0.4,
    //     scale:0.5
    // },
    // {
    //     position:[0, .4, 3],
    //     rotation:[0, 0, 0.715],
    //     factor: 0.75 + Math.random() * 2,
    //     direction: Math.random() < 0.5 ? -1 : 1,
    //     size:0.4,
    //     scale:0.2
    // },
    // {
    //     position:[0, 0.4, -3],
    //     rotation:[0, 0, 0.715],
    //     factor: 0.75 + Math.random() * 2,
    //     direction: Math.random() < 0.5 ? -1 : 1,
    //     size:0.4,
    //     scale:0.2
    // },
    // {
    //     position:[0, -1, 3],
    //     rotation:[0, 0, 0.715],
    //     factor: 0.75 + Math.random() * 2,
    //     direction: Math.random() < 0.5 ? -1 : 1,
    //     size:0.4,
    //     scale:0.2
    // },
    // {
    //     position:[0, -1, -3],
    //     rotation:[0, 0, 0.715],
    //     factor: 0.75 + Math.random() * 2,
    //     direction: Math.random() < 0.5 ? -1 : 1,
    //     size:0.4,
    //     scale:0.2
    // }

    //     ]
    // console.log(Data[0])
    let diamondArray = Data[props.id].data
    const diamonds = useMemo(
        () => diamondArray,
        []
        )
        // console.log(diamondArray)
    useFrame((state, delta) => {
        // Update instanced diamonds
        diamonds.forEach((data, i) => {
            const { position, rotation,scale,size } = data
            // console.log(data)
            dummy.position.set(position[0], position[1], position[2])
            dummy.rotation.set(rotation[0] , rotation[1], rotation[2])
            dummy.scale.setScalar( id === i ? scale : size)
            dummy.updateMatrix()
            
            model.current.setMatrixAt(i, dummy.matrix)
            // console.log(model)
        })
        model.current.instanceMatrix.needsUpdate = true
        })
        const config = useControls({
        bounces: { value: 3, min: 0, max: 8, step: 1 },
        aberrationStrength: { value: 0.01, min: 0, max: 0.1, step: 0.01 },
        ior: { value: 2.75, min: 0, max: 10 },
        fresnel: { value: 1, min: 0, max: 1 },
        color: '#fff',
        fastChroma: true
        })
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr')
    
  return (
    <CubeCamera resolution={256} frames={1} envMap={texture}>
      {(texture) => (
        <instancedMesh ref={model} args={[nodes.Diamond_1_0.geometry, null, diamonds.length]} >
          <MeshRefractionMaterial envMap={texture} toneMapped={false} {...config}/>
        </instancedMesh>
      )}
    </CubeCamera>
  )
}

export default Diamonds