import { Canvas } from '@react-three/fiber' 
/* import { useRef } from 'react'
import { Environment, OrbitControls, ScrollControls } from '@react-three/drei' */
import { HomeScene } from '@/scenes'

export const App= ()=> {
/*   const dom = useRef<HTMLElement>(null) */
  return (
    <>
       <main className="app">
        <section className='hero'>
          <h1  style={{ fontSize:50 , paddingBottom:10}}>Web 3D Faith Media Producciones</h1>
          <h2  style={{ fontSize:30 }}>By E.Mendez</h2>
        </section>
      </main>
      <Canvas
        //@ts-ignore 
        // eventSource={dom}
        className='canvas'
        shadows 
        camera={{ position: [0, 30, 60], fov: 15 }}
      >
          <HomeScene />
      </Canvas>
    </>
  )
}
