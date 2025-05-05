import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

const mainColor = "#20B2AA"; 
const edgeColor = "#40E0D0"; 

const PolyhedronModel = () => {
  const polyRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  const radius = 2; 
  const detail = 0; 
  
  const vertices = React.useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(radius, detail);
    const positions = geo.attributes.position.array;
    const points: THREE.Vector3[] = [];
    
    for (let i = 0; i < positions.length; i += 3) {
      points.push(new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      ));
    }
    
    return points;
  }, [radius, detail]);
  
  const pointPositions = React.useMemo(() => {
    const positions = new Float32Array(vertices.length * 3);
    
    vertices.forEach((vertex, i) => {
      positions[i * 3] = vertex.x;
      positions[i * 3 + 1] = vertex.y;
      positions[i * 3 + 2] = vertex.z;
    });
    
    return positions;
  }, [vertices]);
  
  const edges = React.useMemo(() => {
    const tempEdges: [THREE.Vector3, THREE.Vector3][] = [];
    const geo = new THREE.IcosahedronGeometry(radius, detail);
    
    const edgesGeometry = new THREE.EdgesGeometry(geo);
    const positions = edgesGeometry.attributes.position.array;
    
    for (let i = 0; i < positions.length; i += 6) {
      const start = new THREE.Vector3(
        positions[i],
        positions[i + 1],
        positions[i + 2]
      );
      
      const end = new THREE.Vector3(
        positions[i + 3],
        positions[i + 4],
        positions[i + 5]
      );
      
      tempEdges.push([start, end]);
    }
    
    return tempEdges;
  }, [radius, detail]);
  
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    if (polyRef.current) {
      polyRef.current.rotation.y = time * 0.2;
      polyRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      polyRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
    }
    
    if (edgesRef.current && polyRef.current) {
      edgesRef.current.rotation.copy(polyRef.current.rotation);
    }
    
    if (pointsRef.current && polyRef.current) {
      pointsRef.current.rotation.copy(polyRef.current.rotation);
    }
  });
  
  return (
    <>
      <mesh ref={polyRef}>
        <icosahedronGeometry args={[radius, detail]} />
        <meshPhysicalMaterial 
          color={mainColor}
          transparent={true}
          opacity={0.7}
          metalness={0.2}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      <group ref={edgesRef}>
        {edges.map((edge, index) => (
          <line key={index}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  edge[0].x, edge[0].y, edge[0].z,
                  edge[1].x, edge[1].y, edge[1].z
                ])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={edgeColor} />
          </line>
        ))}
      </group>
      
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={vertices.length}
            array={pointPositions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color={edgeColor}
          size={0.15}
          sizeAttenuation={true}
        />
      </points>
    </>
  );
};

const BioModel: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <PolyhedronModel />
    </Canvas>
  );
};

export default BioModel;