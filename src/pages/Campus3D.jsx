import React, { useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sky, Html } from '@react-three/drei';

const BuildingLabel = ({ name, info, clicked, hovered, height }) => (
    <Html position={[0, height + 2, 0]} center zIndexRange={[100, 0]}>
        <div style={{
            background: 'rgba(0, 0, 0, 0.8)',
            color: 'white',
            padding: '10px',
            borderRadius: '8px',
            whiteSpace: 'nowrap',
            pointerEvents: 'none',
            boxShadow: '0 4px 6px rgba(0,0,0,0.3)',
            fontFamily: 'sans-serif'
        }}>
            <h3 style={{ margin: '0 0 5px 0', fontSize: '16px' }}>{name}</h3>
            {clicked && <p style={{ margin: 0, fontSize: '12px', color: '#ccc' }}>{info}</p>}
        </div>
    </Html>
);

const MainBuilding = ({ position }) => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);
    const wallColor = "#f5a9b8";
    const roofColor = "#b22222";
    const blueDetail = "#1E90FF";

    return (
        <group 
            position={position}
            onClick={(e) => { e.stopPropagation(); setClicked(!clicked); }}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
            onPointerOut={() => setHovered(false)}
        >
            {/* Center Block */}
            <mesh position={[0, 10, 0]}>
                <boxGeometry args={[20, 20, 16]} />
                <meshStandardMaterial color={hovered ? 'lightpink' : wallColor} />
            </mesh>
            <mesh position={[0, 23, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[15, 6, 4]} />
                <meshStandardMaterial color={roofColor} />
            </mesh>
            <mesh position={[0, 28, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[6, 6, 4]} />
                <meshStandardMaterial color={blueDetail} />
            </mesh>

            {/* Left Wing */}
            <mesh position={[-25, 8, 0]}>
                <boxGeometry args={[30, 16, 14]} />
                <meshStandardMaterial color={hovered ? 'lightpink' : wallColor} />
            </mesh>
            <mesh position={[-25, 19, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[18, 6, 4]} />
                <meshStandardMaterial color={roofColor} />
            </mesh>

            {/* Right Wing */}
            <mesh position={[25, 8, 0]}>
                <boxGeometry args={[30, 16, 14]} />
                <meshStandardMaterial color={hovered ? 'lightpink' : wallColor} />
            </mesh>
            <mesh position={[25, 19, 0]} rotation={[0, Math.PI / 4, 0]}>
                <coneGeometry args={[18, 6, 4]} />
                <meshStandardMaterial color={roofColor} />
            </mesh>

            {/* Entrance Canopy */}
            <mesh position={[0, 6, 10]}>
                <boxGeometry args={[10, 1, 8]} />
                <meshStandardMaterial color={blueDetail} />
            </mesh>
            <mesh position={[-4, 3, 13]}>
                <cylinderGeometry args={[0.4, 0.4, 6]} />
                <meshStandardMaterial color="#ddd" />
            </mesh>
            <mesh position={[4, 3, 13]}>
                <cylinderGeometry args={[0.4, 0.4, 6]} />
                <meshStandardMaterial color="#ddd" />
            </mesh>

            {(clicked || hovered) && (
                <BuildingLabel name="Main Building" info="Administration & Academic Blocks" clicked={clicked} hovered={hovered} height={30} />
            )}
        </group>
    );
};

const CanteenBuilding = ({ position }) => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <group 
            position={position}
            onClick={(e) => { e.stopPropagation(); setClicked(!clicked); }}
            onPointerOver={(e) => { e.stopPropagation(); setHovered(true); }}
            onPointerOut={() => setHovered(false)}
        >
            <mesh position={[0, 5, 0]}>
                <boxGeometry args={[24, 10, 16]} />
                <meshStandardMaterial color={hovered ? '#fff0d4' : "#ffe4b5"} />
            </mesh>
            <mesh position={[0, 10.5, 0]}>
                <boxGeometry args={[25, 1, 17]} />
                <meshStandardMaterial color="#d3d3d3" />
            </mesh>
            <mesh position={[0, 6, 8.1]}>
                <boxGeometry args={[8, 2.5, 0.2]} />
                <meshStandardMaterial color="#1E90FF" />
            </mesh>
            {(clicked || hovered) && (
                <BuildingLabel name="Canteen" info="Food & Beverages" clicked={clicked} hovered={hovered} height={10} />
            )}
        </group>
    );
};

const Tree = ({ position }) => (
    <group position={position}>
        <mesh position={[0, 1.5, 0]}>
            <cylinderGeometry args={[0.3, 0.5, 3]} />
            <meshStandardMaterial color="#8B4513" />
        </mesh>
        <mesh position={[0, 4, 0]}>
            <sphereGeometry args={[2.5, 16, 16]} />
            <meshStandardMaterial color="#228B22" />
        </mesh>
        <mesh position={[1, 5, 1]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial color="#2E8B57" />
        </mesh>
        <mesh position={[-1, 5, -1]}>
            <sphereGeometry args={[2, 16, 16]} />
            <meshStandardMaterial color="#3CB371" />
        </mesh>
    </group>
);

const Campus3D = () => {
    return (
        <div style={{ width: '100%', height: 'calc(100vh - 80px)', backgroundColor: '#87CEEB', position: 'relative' }}>
            <Canvas camera={{ position: [0, 60, 90], fov: 45 }}>
                <Sky sunPosition={[100, 20, 100]} />
                <ambientLight intensity={0.6} />
                <directionalLight position={[20, 40, 20]} intensity={1.2} castShadow />

                <OrbitControls 
                    makeDefault
                    minPolarAngle={0} 
                    maxPolarAngle={Math.PI / 2 - 0.05}
                    minDistance={10} 
                    maxDistance={200} 
                />

                {/* Ground */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.1, 0]}>
                    <planeGeometry args={[300, 300]} />
                    <meshStandardMaterial color="#4CAF50" />
                </mesh>

                {/* Main Road Network */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 25]}>
                    <planeGeometry args={[250, 12]} />
                    <meshStandardMaterial color="#444444" />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                    <planeGeometry args={[12, 60]} />
                    <meshStandardMaterial color="#444444" />
                </mesh>
                
                {/* Circular Road Area */}
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.01, 10]}>
                    <ringGeometry args={[8, 16, 32]} />
                    <meshStandardMaterial color="#444444" />
                </mesh>
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 10]}>
                    <circleGeometry args={[8, 32]} />
                    <meshStandardMaterial color="#4CAF50" />
                </mesh>

                {/* Buildings */}
                <MainBuilding position={[0, 0, -25]} />
                <CanteenBuilding position={[-45, 0, 5]} />

                {/* Sports Ground */}
                <group position={[55, 0.01, 10]}>
                    <mesh rotation={[-Math.PI / 2, 0, 0]}>
                        <planeGeometry args={[50, 70]} />
                        <meshStandardMaterial color="#A0522D" />
                    </mesh>
                    {/* Field Lines */}
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
                        <ringGeometry args={[8, 8.5, 32]} />
                        <meshStandardMaterial color="#ffffff" />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
                        <planeGeometry args={[50, 0.5]} />
                        <meshStandardMaterial color="#ffffff" />
                    </mesh>
                    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]}>
                        <planeGeometry args={[48, 68]} />
                        <meshBasicMaterial transparent opacity={0} />
                        <Html position={[0, 5, 0]} center zIndexRange={[100, 0]}>
                            <div style={{ pointerEvents: 'none' }}>
                                <span style={{ background: '#0056b3', color: 'white', padding: '6px 12px', borderRadius: '6px', fontSize: '14px', boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                    🏃 Sports Ground
                                </span>
                            </div>
                        </Html>
                    </mesh>
                </group>

                {/* Hills Background */}
                <mesh position={[0, 15, -90]}>
                    <sphereGeometry args={[50, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#2E8B57" />
                </mesh>
                <mesh position={[-60, 12, -80]}>
                    <sphereGeometry args={[40, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#228B22" />
                </mesh>
                <mesh position={[60, 20, -85]}>
                    <sphereGeometry args={[45, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#3CB371" />
                </mesh>
                <mesh position={[-100, 15, -60]}>
                    <sphereGeometry args={[35, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#2E8B57" />
                </mesh>
                <mesh position={[100, 18, -60]}>
                    <sphereGeometry args={[40, 32, 16, 0, Math.PI, 0, Math.PI / 2]} />
                    <meshStandardMaterial color="#228B22" />
                </mesh>

                {/* Trees around campus */}
                <Tree position={[-25, 0, -10]} />
                <Tree position={[-35, 0, -5]} />
                <Tree position={[-15, 0, 15]} />
                <Tree position={[-25, 0, 20]} />
                <Tree position={[25, 0, 15]} />
                <Tree position={[35, 0, 20]} />
                <Tree position={[25, 0, -5]} />
                <Tree position={[35, 0, -10]} />
                <Tree position={[0, 0, 10]} />
                <Tree position={[-15, 0, 40]} />
                <Tree position={[15, 0, 40]} />
                <Tree position={[-30, 0, 40]} />
                <Tree position={[30, 0, 40]} />
                <Tree position={[-50, 0, 25]} />
                <Tree position={[-60, 0, 15]} />
                <Tree position={[70, 0, -15]} />
                <Tree position={[80, 0, 5]} />
                
            </Canvas>
            
            {/* Overlay UI */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: 'rgba(0,0,0,0.6)', color: 'white', padding: '15px', borderRadius: '8px', pointerEvents: 'none', fontFamily: 'sans-serif' }}>
                <h3 style={{ margin: '0 0 10px 0' }}>Controls</h3>
                <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '14px' }}>
                    <li><strong>Left Click + Drag:</strong> Rotate</li>
                    <li><strong>Right Click + Drag:</strong> Pan</li>
                    <li><strong>Scroll:</strong> Zoom</li>
                    <li><strong>Click Buildings:</strong> Show Info</li>
                </ul>
            </div>
        </div>
    );
};

export default Campus3D;