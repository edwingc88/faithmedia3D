/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/
        
import * as THREE from 'three'
        import React, { useRef } from 'react'
        import { useGLTF, 
        
         } from '@react-three/drei'
        import { GLTF } from "three/examples/jsm/loaders/GLTFLoader"
        
type GLTFResult = GLTF & {
    nodes: {
      Generic_Les_Paul_Mesh: THREE.Mesh,Generic_Les_Paul_Mesh_1: THREE.Mesh,Generic_Les_Paul_Mesh_2: THREE.Mesh,Generic_Les_Paul_Mesh_3: THREE.Mesh,Generic_Les_Paul_Mesh_4: THREE.Mesh,Generic_Les_Paul_Mesh_5: THREE.Mesh,Generic_Les_Paul_Mesh_6: THREE.Mesh,Generic_Les_Paul_Mesh_7: THREE.Mesh,Generic_Les_Paul_Mesh_8: THREE.Mesh
      
    }
    materials: {
      Plastic: THREE.MeshStandardMaterial,['Golden Metal']: THREE.MeshStandardMaterial,['Fretboard Wood']: THREE.MeshStandardMaterial,Ivory: THREE.MeshStandardMaterial,Finish: THREE.MeshStandardMaterial,['Silver Metal']: THREE.MeshStandardMaterial,Knobs: THREE.MeshStandardMaterial,['Pickup Wrap Fabric']: THREE.MeshStandardMaterial
    }
  }

        export const Guitar=  (props: JSX.IntrinsicElements['group']) => {
          const group = useRef<THREE.Group>()
          const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/les-paul/model.gltf') as GLTFResult
          return (
            <group ref={group} {...props} dispose={null}>
        <mesh geometry={nodes.Generic_Les_Paul_Mesh.geometry} material={nodes.Generic_Les_Paul_Mesh.material} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_1.geometry} material={materials['Golden Metal']} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_2.geometry} material={materials['Fretboard Wood']} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_3.geometry} material={materials.Ivory} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_4.geometry} material={materials.Finish} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_5.geometry} material={materials['Silver Metal']} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_6.geometry} material={nodes.Generic_Les_Paul_Mesh_6.material} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_7.geometry} material={materials.Knobs} />
<mesh geometry={nodes.Generic_Les_Paul_Mesh_8.geometry} material={materials['Pickup Wrap Fabric']} />

            </group>
          )
        }

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/les-paul/model.gltf')