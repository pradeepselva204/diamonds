import { CameraControls, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
// import { OrbitControls } from 'three-stdlib'
import BoxPortals from './BoxPortals'

const PortalComponents = () => {
  return (
    <>
        <div className='canvasmodel'>
        <Canvas shadows camera={{ position: [-3, 0.5, 3] }}>
            <BoxPortals/>
            <OrbitControls makeDefault />
        </Canvas>

        </div>
    </>
  )
}

export default PortalComponents