import React from 'react';
import * as THREE from 'three';
import {useFrame, Canvas} from "@react-three/fiber";
import {OrbitControls,ScrollControls,Scroll} from "@react-three/drei";


function App()
{
    return (
        <Canvas className='canvas'>

            <OrbitControls></OrbitControls>
            <ScrollControls>
                <color attach="background" args={['#000000']}/>
                <directionalLight
                    color={0xffffff}
                    position={[2, 5, 10]}
                    intensity={1}
                />
                <mesh>
                    {/* eslint-disable-next-line react/no-unknown-property */}
                    <sphereGeometry args={[1, 50, 50, 0, Math.PI * 2, 0, Math.PI]}></sphereGeometry>
                    <meshStandardMaterial color={'red'}></meshStandardMaterial>
                </mesh>
                <Scroll html style={{width: '100%', height: '100%'}}>
                    <div className='absolute items-center justify-center text-7xl z-50 w-full h-full flex'>
                        <h>Hello world</h>
                        <p>this is a sentence</p>
                        <p>Another sentence</p>
                    </div>
                </Scroll>
            </ScrollControls>


        </Canvas>

    );
}

export default App;
