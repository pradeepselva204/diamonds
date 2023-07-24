
import { Canvas } from '@react-three/fiber'
import React from 'react'
import PortalElements from './PortalElements'

const Portals = () => {

  return (
    <div className='canvasmodel'>
        <Canvas>
          <PortalElements/>
        </Canvas>

    </div>
  )
}

export default Portals