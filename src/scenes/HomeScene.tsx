import {  Environment, GizmoHelper, GizmoViewport, OrbitControls, Stars } from '@react-three/drei'
import { VideoPlane } from '@/components/VideoPlane'
import { Audifonos, Chair, Dron, Guitar } from '@/models'
import { Doge } from '@/models'

export const HomeScene = () => {

  return (
    <>

      <OrbitControls /> 
      <pointLight position={[10, 15, 15]} color="#570c0c" castShadow intensity={5} shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024} />
      <directionalLight position={[10, 15, -5]} color="#570c0c" castShadow intensity={5} shadow-camera-near={0.1}
        shadow-camera-far={200}
        shadow-camera-left={-20}
        shadow-camera-right={20}
        shadow-camera-top={20}
        shadow-camera-bottom={-20}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024} />
      <Environment preset='city' />

      <GizmoHelper
        alignment="bottom-right"
        margin={[100, 100]}
      >
        <GizmoViewport axisColors={['red', 'green', 'blue']} labelColor="black" />
      </GizmoHelper> 

      <group position={[0, -3, 0]}>

        <VideoPlane videourl='/nerd.mp4'  position={[0, 5, -1.4]}  />

        {/* wall */}
        <mesh castShadow receiveShadow position={[0, 5, -3]}>
          <boxGeometry args={[19, 10, 1]} />
          <meshStandardMaterial color="red" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
        </mesh>


        {/* Tv */}
        <mesh castShadow receiveShadow position={[0, 5, -2]}>
          <boxGeometry args={[9, 6, 1]} />
          <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0.2} metalness={0.8} />
        </mesh>

        {/* ground */}
        <mesh position={[0, -5, 0]}>
          <cylinderGeometry args={[12, 12, 10, 64]} />
          <meshStandardMaterial color="black" envMapIntensity={0.5} roughness={0} metalness={0} />
        </mesh>

        <Chair position={[-1.6, 0, 7]} scale={4} />
        <Doge position={[5, 0, 3]} rotation-y={Math.PI / 0.31} scale={1.5} />
        <Dron  position={[7, 10, 7]} scale={1}  rotation-y={Math.PI / 0.85}  />
        <Audifonos position={[-7.5, 6, -2.5]}  scale={0.8} />
        <Guitar position={[7, 1.65, -2]}  scale={5.5} />
      </group>

      <Stars radius={50} depth={50} count={5000} factor={20} saturation={1} fade speed={1} />

{/*      <Suspense>
        <Doge position={[4, -2.8, -3]} rotation-y={Math.PI / 0.31} scale={1.5} />
      </Suspense>
      <Effects /> */}
    </>
  )
}