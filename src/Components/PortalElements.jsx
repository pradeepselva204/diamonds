import { Float, OrbitControls, useTexture } from '@react-three/drei'
import React from 'react'
import { Cyclops } from '../../public/Model/Cyclops'

const PortalElements = () => {
    const texture = useTexture("/Images/cyclops.jpg")
  return (
    <>
        <ambientLight intensity={10} color="red"/>
        <pointLight/>
        <Float floatIntensity={2} speed={3}>
            {/* <Cactus/> */}
            {/* <Deer/> */}
            <Cyclops/>
        </Float>
        <mesh>
            <sphereGeometry args={[1,32,32]}/>
            <meshStandardMaterial map={texture}/>
        </mesh>
        <OrbitControls/>
    </>
  )
}

export default PortalElements