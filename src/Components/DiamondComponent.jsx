import React from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  Float,
  Center
} from '@react-three/drei'
import { EffectComposer, Bloom, DepthOfField } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'
import Diamonds from './Diamonds'
import {useParams} from 'react-router-dom';
import Data from './Data'
const DiamondComponent = () => {
  let params = useParams().id
  if (params ==undefined) {
    params = 0
  }
  console.log(params)
  console.log(Data[params])
  return (
    <>
        <div className='canvasmodel'>
            <Canvas dpr={[1, 1.5]} shadows performance={{min:0.5}} camera={{ position: [-6.209280943197924, -2.419652943042318, -0.028353440371339824], fov: 45, rotation:[1.6906878582880733,-1.2300716727508472,1.6979241608615683] }}>
            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />          
            {/* <Float> */}
                <Diamonds id={params}/>
            {/* <Diamonds/> */}
                {/* <CameraRig>
                
                </CameraRig> */}
            {/* </Float> */}
            <AccumulativeShadows
                temporal
                frames={100}
                color="orange"
                colorBlend={2}
                toneMapped={true}
                alphaTest={0.8}
                opacity={1}
                scale={12}
                position={[0, -0.5, 0]}>
                <RandomizedLight amount={8} radius={10} ambient={0.5} intensity={1} position={[5, 5, -10]} bias={0.001} />
            </AccumulativeShadows>
            <Environment files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr" />
            <OrbitControls/>
            <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
            </EffectComposer>
            </Canvas>
        </div>
    </>
  )
}

export default DiamondComponent