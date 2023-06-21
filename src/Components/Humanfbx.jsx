/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 humanfbx.glb --transform
*/

import React, { useRef,useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function HumanFBX(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Model/humanfbx-transformed.glb')
  const { actions } = useAnimations(animations, group)
  animations[0].name = "Pradeep Selva"
  console.log(actions)
  let actionTrigger = actions["Pradeep Selva"]?.reset()?.play()
    useEffect(()=>{
    actions["Pradeep Selva"]?.reset()?.play()
    // return actions["Pradeep Selva"].reset().stop()
  },[actionTrigger])
  const animate = () =>{
    console.log(actions)
    actions["Pradeep Selva"].reset().play()
  }
  return (
    <group ref={group} {...props} dispose={null} onPointerMove={animate}>
      <group name="Scene">
        <group name="Armature" rotation={[0, 1.56, 0]} scale={0.01}>
          <primitive object={nodes.CC_Base_BoneRoot} />
          <skinnedMesh name="Boots" geometry={nodes.Boots.geometry} material={materials.Boots} skeleton={nodes.Boots.skeleton} />
          <group name="CC_Base_Eye">
            <skinnedMesh name="CC_Base_Eye_1" geometry={nodes.CC_Base_Eye_1.geometry} material={materials.Std_Eye_R} skeleton={nodes.CC_Base_Eye_1.skeleton} />
            <skinnedMesh name="CC_Base_Eye_2" geometry={nodes.CC_Base_Eye_2.geometry} material={materials.Std_Cornea_R} skeleton={nodes.CC_Base_Eye_2.skeleton} />
            <skinnedMesh name="CC_Base_Eye_3" geometry={nodes.CC_Base_Eye_3.geometry} material={materials.Std_Eye_L} skeleton={nodes.CC_Base_Eye_3.skeleton} />
            <skinnedMesh name="CC_Base_Eye_4" geometry={nodes.CC_Base_Eye_4.geometry} material={materials.Std_Cornea_R} skeleton={nodes.CC_Base_Eye_4.skeleton} />
          </group>
          <group name="CC_Base_Teeth">
            <skinnedMesh name="CC_Base_Teeth_1" geometry={nodes.CC_Base_Teeth_1.geometry} material={materials.Std_Upper_Teeth} skeleton={nodes.CC_Base_Teeth_1.skeleton} />
            <skinnedMesh name="CC_Base_Teeth_2" geometry={nodes.CC_Base_Teeth_2.geometry} material={materials.Std_Lower_Teeth} skeleton={nodes.CC_Base_Teeth_2.skeleton} />
          </group>
          <group name="Gloves">
            <skinnedMesh name="Gloves_1" geometry={nodes.Gloves_1.geometry} material={materials.THD_Gloves_0212SG} skeleton={nodes.Gloves_1.skeleton} />
            <skinnedMesh name="Gloves_2" geometry={nodes.Gloves_2.geometry} material={materials.THD_Gloves_0212SG1} skeleton={nodes.Gloves_2.skeleton} />
          </group>
          <skinnedMesh name="Jeans" geometry={nodes.Jeans.geometry} material={materials.Jeans} skeleton={nodes.Jeans.skeleton} />
          <skinnedMesh name="Plaid_Punk_Shirt" geometry={nodes.Plaid_Punk_Shirt.geometry} material={materials.Plaid_Punk_Shirt} skeleton={nodes.Plaid_Punk_Shirt.skeleton} />
          <group name="CC_Base_Body">
            <skinnedMesh name="CC_Base_Body_1" geometry={nodes.CC_Base_Body_1.geometry} material={materials.Std_Skin_Head} skeleton={nodes.CC_Base_Body_1.skeleton} morphTargetDictionary={nodes.CC_Base_Body_1.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_1.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_Body_2" geometry={nodes.CC_Base_Body_2.geometry} material={materials.Std_Skin_Body} skeleton={nodes.CC_Base_Body_2.skeleton} morphTargetDictionary={nodes.CC_Base_Body_2.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_2.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_Body_3" geometry={nodes.CC_Base_Body_3.geometry} material={materials.Std_Skin_Arm} skeleton={nodes.CC_Base_Body_3.skeleton} morphTargetDictionary={nodes.CC_Base_Body_3.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_3.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_Body_4" geometry={nodes.CC_Base_Body_4.geometry} material={materials.Std_Skin_Leg} skeleton={nodes.CC_Base_Body_4.skeleton} morphTargetDictionary={nodes.CC_Base_Body_4.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_4.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_Body_5" geometry={nodes.CC_Base_Body_5.geometry} material={materials.Std_Nails} skeleton={nodes.CC_Base_Body_5.skeleton} morphTargetDictionary={nodes.CC_Base_Body_5.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_5.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_Body_6" geometry={nodes.CC_Base_Body_6.geometry} material={materials.Std_Eyelash} skeleton={nodes.CC_Base_Body_6.skeleton} morphTargetDictionary={nodes.CC_Base_Body_6.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Body_6.morphTargetInfluences} />
          </group>
          <group name="CC_Base_EyeOcclusion">
            <skinnedMesh name="CC_Base_EyeOcclusion_1" geometry={nodes.CC_Base_EyeOcclusion_1.geometry} material={materials.Std_Eye_Occlusion_R} skeleton={nodes.CC_Base_EyeOcclusion_1.skeleton} morphTargetDictionary={nodes.CC_Base_EyeOcclusion_1.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_EyeOcclusion_1.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_EyeOcclusion_2" geometry={nodes.CC_Base_EyeOcclusion_2.geometry} material={materials.Std_Eye_Occlusion_R} skeleton={nodes.CC_Base_EyeOcclusion_2.skeleton} morphTargetDictionary={nodes.CC_Base_EyeOcclusion_2.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_EyeOcclusion_2.morphTargetInfluences} />
          </group>
          <group name="CC_Base_TearLine">
            <skinnedMesh name="CC_Base_TearLine_1" geometry={nodes.CC_Base_TearLine_1.geometry} material={materials.Std_Tearline_R} skeleton={nodes.CC_Base_TearLine_1.skeleton} morphTargetDictionary={nodes.CC_Base_TearLine_1.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_TearLine_1.morphTargetInfluences} />
            <skinnedMesh name="CC_Base_TearLine_2" geometry={nodes.CC_Base_TearLine_2.geometry} material={materials.Std_Tearline_R} skeleton={nodes.CC_Base_TearLine_2.skeleton} morphTargetDictionary={nodes.CC_Base_TearLine_2.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_TearLine_2.morphTargetInfluences} />
          </group>
          <skinnedMesh name="CC_Base_Tongue" geometry={nodes.CC_Base_Tongue.geometry} material={materials.Std_Tongue} skeleton={nodes.CC_Base_Tongue.skeleton} morphTargetDictionary={nodes.CC_Base_Tongue.morphTargetDictionary} morphTargetInfluences={nodes.CC_Base_Tongue.morphTargetInfluences} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/Model/humanfbx-transformed.glb')
