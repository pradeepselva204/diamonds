import React,{useLayoutEffect} from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import {
  useGLTF,
  Caustics,
  CubeCamera,
  Environment,
  Stage,
  OrbitControls,
  RandomizedLight,
  AccumulativeShadows,
  MeshRefractionMaterial,
  MeshTransmissionMaterial,
  Float,
  Center,
  Backdrop,
  AsciiRenderer,
  Line
} from '@react-three/drei'
// import { Gradient } from '../../public/lib/Gradient'
import { EffectComposer, Bloom, DepthOfField, Glitch, Noise, Vignette } from '@react-three/postprocessing'

import {useParams} from 'react-router-dom';
import ShirtModel from './ShirtModel'
// import { Effects } from './Effects'
const ShirtComponent = () => {
  function Rig() {
    useFrame((state) => {
      state.camera.position.lerp({ x: -6.209280943197924, y: -state.pointer.y / 4, z: state.pointer.x / 2 }, 0.1)
      state.camera.lookAt(-6.209280943197924,  -2.419652943042318, -0.028353440371339824)
    })
  }
  return (
    <>
        <div className='canvasmodel'>
            <Canvas dpr={[1, 1.5]} performance={{min:0.5}} camera={{ position: [-0.09503186011875245, 0.11345368086545536, 1.155616691434964], fov: 45, rotation:[-0.09786226605778603,-0.08165929090625416,-0.008007894462502222] }}>
            <fog attach="fog" args={['red', 150, 150]} />
            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />          
                <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}>
                  {/* <Float floatIntensity={.2}  rotationIntensity={1.5} speed={4}> */}
                    <ShirtModel/>
                  {/* </Float> */}
                </Stage>
        
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


    
            </Canvas>
        </div>
    </>
  )
}

export default ShirtComponent