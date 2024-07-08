// src/app/components/ThreeDModel.jsx
"use client";

import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const gltf = useGLTF('/3dmodel/space_boi/scene.gltf'); // Chemin vers votre modèle .gltf
  return <primitive object={gltf.scene} scale={0.4} />;
}

const ThreeDModel = () => {
  const controls = useRef();

  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[100, 100, 100]} />
      <Model />
      <OrbitControls
        ref={controls}
        enableZoom={false} // Bloque le zoom
      />
    </Canvas>
  );
};

export default ThreeDModel;
