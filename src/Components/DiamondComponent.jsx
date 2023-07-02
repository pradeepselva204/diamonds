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
import { Gradient } from '../../public/lib/Gradient'
import { EffectComposer, Bloom, DepthOfField, Glitch, Noise, Vignette } from '@react-three/postprocessing'
import { useControls } from 'leva'
import { RGBELoader } from 'three-stdlib'
import Diamonds from './Diamonds'
import {useParams} from 'react-router-dom';
import Data from './Data'
import { Human } from './Human'
import { HumanFBX } from './Humanfbx'
import { Diamond1 } from './Diamond1'
import { Diamond2 } from './Diamond2'
import { Diamond3 } from './Diamond3'
import { Diamond4 } from './Diamond4'
import { Diamond5 } from './Diamond5'
import { Diamond6 } from './Diamond6'
import { Diamond7 } from './Diamond7'
import { Diamond8 } from './Diamond8'
import { Diamond12 } from './Diamond12'
import { Diamond9 } from './Diamond9'
import { Diamond10 } from './Diamond10'
import { Diamond11 } from './Diamond11'
import { HumanModel } from './Humantest'
// import { Effects } from './Effects'
const DiamondComponent = () => {
  useLayoutEffect(() => {
    const gradient = new Gradient()
    gradient.initGradient('#gradient-canvas')
  }, [])
  let params = useParams().id
  if (params ==undefined) {
    params = 0
  }
  console.log(params)
  console.log(Data[params])
  function Rig() {
    useFrame((state) => {
      state.camera.position.lerp({ x: -6.209280943197924, y: -state.pointer.y / 4, z: state.pointer.x / 2 }, 0.1)
      state.camera.lookAt(-6.209280943197924,  -2.419652943042318, -0.028353440371339824)
    })
  }
  return (
    <>
        {/* <canvas id="gradient-canvas" data-transition-in /> */}
        <div className='canvasmodel'>
        {/* camera={{ position: [-6.209280943197924, -2.419652943042318, -0.028353440371339824], fov: 45, rotation:[1.6906878582880733,-1.2300716727508472,1.6979241608615683] }} */}
        {/* camera={{ position: [0.12071434843854326, 5.8318366303089477, 9.501849397396124], fov: 45, rotation:[-0.2835008290720362, 0.1294232952762892, 0.008570985166165508] }} */}
            <Canvas dpr={[1, 1.5]} performance={{min:0.5}} camera={{ position: [-6.209280943197924, -2.419652943042318, -0.028353440371339824], fov: 45, rotation:[1.6906878582880733,-1.2300716727508472,1.6979241608615683] }}>
              {/* <AsciiRenderer fgColor="white" bgColor="transparent" /> */}
              {/* <Effects/> */}
            {/* <Rig from={-Math.PI / 2} to={Math.PI / 2.66} /> */}
            <fog attach="fog" args={['red', 150, 150]} />
            <color attach="background" args={["#000"]} />
            <ambientLight intensity={0.5} />
            <spotLight position={[5, 5, -10]} angle={0.15} penumbra={1} />
            {/* <Backdrop castShadow floor={2} position={[0, -0.5, -3]} scale={[50, 10, 4]}>
              <meshStandardMaterial color="#353540" envMapIntensity={0.1} />
            </Backdrop> */}
            <pointLight position={[-10, -10, -10]} />          
            {/* <Float> */}
                {/* <Diamonds id={params}/> */}
                <Stage intensity={0.5} environment="city" shadows={{ type: 'accumulative', bias: -0.001 }} adjustCamera={false}>
                  <Diamond8 id={params}/>
                  {/* <HumanModel/> */}
                </Stage>
                {/* <Line points={[0, 1.4, 0, 0, -0.9, 0]} color="red" linewidth={1} /> */}
                {/* <Line points={[0, 1.4, .5, 0, -0.9, 0.5]} color="red" linewidth={1} /> */}
                
                {/* <Diamond3/> */}
                {/* <Diamond6/> */}
                {/* <Diamond12/> */}
                {/* <Diamond3/> */}
                {/* <Diamond4/> */}
                {/* <Human/> */}
                {/* <HumanFBX/> */}
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
            {/* <OrbitControls autoRotate autoRotateSpeed={1}/> */}
            <OrbitControls/>
            {/* <EffectComposer>
              <Bloom luminanceThreshold={0.8} intensity={3} levels={9} mipmapBlur />
              <DepthOfField target={[0, 0, -10]} focalLength={0.1} bokehScale={1} height={1000} />
            </EffectComposer> */}
            <EffectComposer>
              {/* <Glitch delay={[1.5, 3.5]} duration={[0.1, 0.5]} strength={[0.2, 0.6]} /> */}
              <Bloom luminanceThreshold={0.8} intensity={3} levels={9} mipmapBlur />              
              {/* <Noise opacity={0.1} /> */}
              {/* <DepthOfField target={[0, 0, -10]} focalLength={0.1} bokehScale={1} height={1000} /> */}
              {/* <Vignette eskil={false} offset={.1} darkness={.1} /> */}
            </EffectComposer>
            {/* <EffectComposer>
                <Bloom luminanceThreshold={1} intensity={2} levels={9} mipmapBlur />
            </EffectComposer> */}
            {/* <gridHelper /> */}
            </Canvas>
        </div>
    </>
  )
}

export default DiamondComponent