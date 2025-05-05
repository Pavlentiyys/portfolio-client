import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Бирюзовый цвет для модели
const mainColor = "#20B2AA"; // Light Sea Green/Бирюзовый
const edgeColor = "#40E0D0"; // Turquoise/Ярко-бирюзовый

const PyramidModel = () => {
  // Ссылки на объекты с правильными типами
  const polyRef = useRef<THREE.Mesh>(null);
  const edgesRef = useRef<THREE.Group>(null);
  const pointsRef = useRef<THREE.Points>(null);
  
  // Создаем пирамиду (тетраэдр - многогранник с 4 гранями)
  const pyramidBaseSize = 2.5; // Размер основания
  const pyramidHeight = 3; // Высота пирамиды
  
  // Создаем позиции для вершин пирамиды
  const vertices = React.useMemo(() => {
    // Вершины правильной пирамиды с квадратным основанием
    return [
      // Вершина пирамиды
      new THREE.Vector3(0, pyramidHeight/2, 0),
      // Четыре угла основания
      new THREE.Vector3(-pyramidBaseSize/2, -pyramidHeight/2, -pyramidBaseSize/2),
      new THREE.Vector3(pyramidBaseSize/2, -pyramidHeight/2, -pyramidBaseSize/2),
      new THREE.Vector3(pyramidBaseSize/2, -pyramidHeight/2, pyramidBaseSize/2),
      new THREE.Vector3(-pyramidBaseSize/2, -pyramidHeight/2, pyramidBaseSize/2)
    ];
  }, [pyramidBaseSize, pyramidHeight]);
  
  // Создаем позиции для точек вершин
  const pointPositions = React.useMemo(() => {
    const positions = new Float32Array(vertices.length * 3);
    
    vertices.forEach((vertex, i) => {
      positions[i * 3] = vertex.x;
      positions[i * 3 + 1] = vertex.y;
      positions[i * 3 + 2] = vertex.z;
    });
    
    return positions;
  }, [vertices]);
  
  // Создаем ребра пирамиды
  const edges = React.useMemo(() => {
    const tempEdges: [THREE.Vector3, THREE.Vector3][] = [
      // Рёбра от вершины к основанию
      [vertices[0], vertices[1]],
      [vertices[0], vertices[2]],
      [vertices[0], vertices[3]],
      [vertices[0], vertices[4]],
      // Рёбра основания
      [vertices[1], vertices[2]],
      [vertices[2], vertices[3]],
      [vertices[3], vertices[4]],
      [vertices[4], vertices[1]]
    ];
    
    return tempEdges;
  }, [vertices]);
  
  // Создаем индексы для граней пирамиды
  const indices = React.useMemo(() => {
    return [
      0, 1, 2, // Первая боковая грань
      0, 2, 3, // Вторая боковая грань
      0, 3, 4, // Третья боковая грань
      0, 4, 1, // Четвертая боковая грань
      1, 3, 2, // Часть основания
      1, 4, 3  // Часть основания
    ];
  }, []);
  
  // Создаем геометрию пирамиды
  const pyramidGeometry = React.useMemo(() => {
    const geometry = new THREE.BufferGeometry();
    
    // Установка позиций вершин
    geometry.setAttribute(
      'position',
      new THREE.Float32BufferAttribute(pointPositions, 3)
    );
    
    // Установка индексов для определения граней
    geometry.setIndex(indices);
    
    // Вычисляем нормали для правильного освещения
    geometry.computeVertexNormals();
    
    return geometry;
  }, [pointPositions, indices]);
  
  // Анимация вращения
  useFrame(({ clock }) => {
    const time = clock.getElapsedTime();
    
    // Плавное вращение основной фигуры
    if (polyRef.current) {
      polyRef.current.rotation.y = time * 0.2;
      polyRef.current.rotation.x = Math.sin(time * 0.3) * 0.2;
      polyRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
    }
    
    // Синхронное вращение ребер
    if (edgesRef.current && polyRef.current) {
      edgesRef.current.rotation.copy(polyRef.current.rotation);
    }
    
    // Синхронное вращение точек
    if (pointsRef.current && polyRef.current) {
      pointsRef.current.rotation.copy(polyRef.current.rotation);
    }
  });
  
  return (
    <>
      {/* Основная пирамида */}
      <mesh ref={polyRef} geometry={pyramidGeometry}>
        <meshPhysicalMaterial 
          color={mainColor}
          transparent={true}
          opacity={0.7}
          metalness={0.2}
          roughness={0.3}
          side={THREE.DoubleSide}
        />
      </mesh>
      
      {/* Ребра пирамиды */}
      <group ref={edgesRef}>
        {edges.map((edge, index) => (
          <line key={index}>
            <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[
                new Float32Array([
                  edge[0].x, edge[0].y, edge[0].z,
                  edge[1].x, edge[1].y, edge[1].z
                ]),
                3 // itemSize
              ]}
            />

            </bufferGeometry>
            <lineBasicMaterial color={edgeColor} />
          </line>
        ))}
      </group>
      
      {/* Точки в вершинах */}
      <points ref={pointsRef}>
        <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[pointPositions, 3]}
        />

        </bufferGeometry>
        <pointsMaterial
          color={edgeColor}
          size={0.2}
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
      <PyramidModel />
    </Canvas>
  );
};

export default BioModel;