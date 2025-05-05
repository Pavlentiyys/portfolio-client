import React, { useRef, useMemo } from 'react';
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

  // Вершины
  const vertices = useMemo(() => {
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

  // Геометрия точек
  const pointsGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    const positionArray = new Float32Array(vertices.length * 3);
    vertices.forEach((v, i) => {
      positionArray[i * 3] = v.x;
      positionArray[i * 3 + 1] = v.y;
      positionArray[i * 3 + 2] = v.z;
    });
    geometry.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
    return geometry;
  }, [vertices]);

  // Рёбра
  const edges = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(radius, detail);
    const edgeGeo = new THREE.EdgesGeometry(geo);
    const positions = edgeGeo.attributes.position.array;
    const lines: [THREE.Vector3, THREE.Vector3][] = [];

    for (let i = 0; i < positions.length; i += 6) {
      lines.push([
        new THREE.Vector3(positions[i], positions[i + 1], positions[i + 2]),
        new THREE.Vector3(positions[i + 3], positions[i + 4], positions[i + 5])
      ]);
    }

    return lines;
  }, [radius, detail]);

  // Анимация
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (polyRef.current) {
      polyRef.current.rotation.y = t * 0.2;
      polyRef.current.rotation.x = Math.sin(t * 0.3) * 0.2;
      polyRef.current.rotation.z = Math.cos(t * 0.2) * 0.1;
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
      {/* Тело */}
      <mesh ref={polyRef}>
        <icosahedronGeometry args={[radius, detail]} />
        <meshPhysicalMaterial
          color={mainColor}
          transparent
          opacity={0.7}
          metalness={0.2}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* Рёбра */}
      <group ref={edgesRef}>
        {edges.map(([start, end], i) => {
          const lineGeo = useMemo(() => {
            const geometry = new THREE.BufferGeometry();
            const vertices = new Float32Array([
              start.x, start.y, start.z,
              end.x, end.y, end.z
            ]);
            geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
            return geometry;
          }, [start, end]);

          return (
            <primitive object={new THREE.Line(lineGeo, new THREE.LineBasicMaterial({ color: edgeColor }))} key={i} />

          );
        })}
      </group>

      {/* Вершины */}
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial
          color={edgeColor}
          size={0.15}
          sizeAttenuation
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
