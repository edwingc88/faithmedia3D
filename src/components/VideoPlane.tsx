import { useEffect, useState } from "react"

export const VideoPlane = ({ videourl, ...props }: any) => {
  const [video] = useState(
    () => Object.assign(document.createElement('video'), { src: videourl, crossOrigin: 'Anonymous', loop: true, muted: true })
  )
  useEffect(() => {
    video.play()
  }, [video])
  return (
    <mesh castShadow receiveShadow rotation={[0, 0, 0]} scale={[8, 5, 1]} {...props}>
      <planeGeometry />
      <meshBasicMaterial toneMapped={false}>
        <videoTexture attach="map" args={[video]}  />
      </meshBasicMaterial>
    </mesh>
  )
}