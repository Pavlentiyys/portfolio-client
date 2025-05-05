import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils';

const mainColor = "#20B2AA";
const edgeColor = "#40E0D0";

const DodecahedronModel = () => {
  const polyRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);

  const radius = 2;
  const detail = 0;

  const vertices = React.useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(radius, detail);
    const merged = mergeVertices(geo);
    const posAttr = merged.getAttribute('position') as THREE.BufferAttribute;

    const points: THREE.Vector3[] = [];
    for (let i = 0; i < posAttr.count; i++) {
      const vertex = new THREE.Vector3().fromBufferAttribute(posAttr, i);
      points.push(vertex);
    }

    return points;
  }, [radius, detail]);

  const pointPositions = React.useMemo(() => {
    const positions = new Float32Array(vertices.length * 3);
    vertices.forEach((v, i) => {
      positions[i * 3] = v.x;
      positions[i * 3 + 1] = v.y;
      positions[i * 3 + 2] = v.z;
    });
    return positions;
  }, [vertices]);

  const edges = React.useMemo(() => {
    const geo = new THREE.DodecahedronGeometry(radius, detail);
    const edgeGeo = new THREE.EdgesGeometry(geo);
    const pos = edgeGeo.attributes.position.array;
    const temp: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < pos.length; i += 6) {
      temp.push([
        new THREE.Vector3(pos[i], pos[i + 1], pos[i + 2]),
        new THREE.Vector3(pos[i + 3], pos[i + 4], pos[i + 5]),
      ]);
    }

    return temp;
  }, [radius, detail]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (polyRef.current) {
      polyRef.current.rotation.y = t * 0.15;
      polyRef.current.rotation.x = Math.sin(t * 0.2) * 0.15;
      polyRef.current.rotation.z = Math.cos(t * 0.1) * 0.05;

      const pulse = 1 + Math.sin(t * 0.8) * 0.05;
      polyRef.current.scale.set(pulse, pulse, pulse);
    }

    if (edgesRef.current && polyRef.current) {
      edgesRef.current.rotation.copy(polyRef.current.rotation);
      edgesRef.current.scale.copy(polyRef.current.scale);
    }

    if (pointsRef.current && polyRef.current) {
      pointsRef.current.rotation.copy(polyRef.current.rotation);
      pointsRef.current.scale.copy(polyRef.current.scale);
    }
  });

  return (
    <>
      <mesh ref={polyRef}>
        <dodecahedronGeometry args={[radius, detail]} />
        <meshPhysicalMaterial
          color={mainColor}
          transparent
          opacity={0.7}
          metalness={0.2}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      <group ref={edgesRef}>
        {edges.map(([start, end], i) => (
          <line key={i}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([
                  start.x, start.y, start.z,
                  end.x, end.y, end.z,
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
        <pointsMaterial color={edgeColor} size={0.15} sizeAttenuation />
      </points>


    </>
  );
};

const BioModel: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      gl={{ alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.4} />
      <directionalLight position={[5, 5, 5]} intensity={0.6} color="#ffffff" />
      <DodecahedronModel />
    </Canvas>
  );
};

export default BioModel;
