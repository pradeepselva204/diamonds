import { Float, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Bloom, EffectComposer } from '@react-three/postprocessing'
import React,{Suspense} from 'react'
import { Floaters } from './Floaters'

const NFTComponent = () => {
  return (
    <>
        <div className='canvasmodel bg-[#ff9326]'>
            <Canvas>
                <Suspense>
                    <Stage>
                        <Float floatIntensity={2} rotationIntensity={2}>
                            <Floaters/>
                        </Float>
                    </Stage>
                </Suspense>
                {/* <Edges/> */}
                <OrbitControls enableZoom={false}/>
                <EffectComposer multisampling={0}>
                    <Bloom luminanceThreshold={.2} intensity={1} levels={9} mipmapBlur /> 
                </EffectComposer>
            </Canvas>        
        </div>
    </>
  )
}

export default NFTComponent