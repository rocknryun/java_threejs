import React, { useRef, useState } from "react";
//R3F
import { Canvas, useFrame } from "react-three-fiber";
// Deai - R3F
import { softShadows, MeshWobbleMaterial, OrbitControls } from "drei";
//Components
import Header from "./components/header";
// Styles
import "./App.scss";
// React Spring
import { useSpring, a } from "react-spring/three";


// soft Shadows
softShadows();

const SpinningMesh = ({ position, color, speed, args }) => {
  //ref to target the mesh
  const mesh = useRef();

  //useFrame allows us to re-render/update rotation on each frame
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  //Basic expand state
  const [expand, setExpand] = useState(false);
  // React spring expand animation
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });
  return (
    <a.mesh
      position={position}
      ref={mesh}
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      castShadow>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        color={color}
        speed={speed}
        attach='material'
        factor={0.6}
      />
    </a.mesh>

    //Using Drei box if you want
    // <Box {...props} ref={mesh} castShadow>
    //   <MeshWobbleMaterial
    //     {...props}
    //     attach='material'
    //     factor={0.6}
    //     Speed={1}
    //   />
    // </Box>
  );
};


const App = () => {
  return (
    <>
      <Header />
      {/* Our Scene & Camera is already built into our canvas */}
      <Canvas
        colorManagement
        shadowMap
        camera={{ position: [0,0, 50], fov: 60 }}>
        {/* This light makes things look pretty */}
        <ambientLight intensity={0.3} />
        {/* Our main source of light, also casting our shadow */}
        <directionalLight
          castShadow
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        {/* A light to help illumnate the spinning boxes */}
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <group>
          {/* This mesh is the plane (The floor) */}
          {/*<mesh
            rotation={[-Math.PI / 2, 0, 0]}
            position={[0, -3, 0]}
            receiveShadow>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <shadowMaterial attach='material' opacity={0.3} />
  </mesh> */}


          <SpinningMesh
            position={[-9.76675, 11.8438, 3.30724]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

           <SpinningMesh
            position={[-9.47586, 11.6887, 3.08352]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
        
            <SpinningMesh
            position={[10.0963, 8.61039, -0.277518]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.68146, 11.7211, 3.67311]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.36359, 11.5045, 3.43081]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.69335,	11.8984,	2.8578]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.91476,	12.2413,	3.33859
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.88984,	12.0882,	3.79335
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.60957,	11.5464,	4.0627
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.24049,	11.3481,	3.86402
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-8.97857,	11.5098,	3.21454
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.0129,	11.6266,	2.68941
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />

            <SpinningMesh
            position={[-9.41589,	11.8761,	2.46184
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.81637,	12.3055,	2.87052
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.86284,	12.6651,	3.45051
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.89814,	12.5096,	3.91185
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.85184,	11.9099,	4.23528
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.10849,	11.2881,	4.31387
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.53639,	11.3937,	4.50912
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.83123,	11.3796,	3.65694
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[9.93504,	7.95523,	-0.248125
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.69265,	12.3359,	2.39822
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.69631,	11.5881,	2.33158
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.14695,	11.8113,	2.03147
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.79665,	12.7624,	2.9725
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.68549,	12.8948,	4.04099
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.63533,	13.0223,	3.60029
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.89532,	12.3563,	4.37165
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.78089,	11.7707,	4.69247
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.66878,	11.3073,	4.11282
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.40298,	11.288,	4.9708
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.95404,	11.1878,	4.75168
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.60057,	11.5687,	3.00447
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.46101,	11.5906,	3.50077
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.45111,	12.3306,	1.96142
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.67449,	12.8194,	2.4926
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.21043,	11.7809,	2.78165
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.38985,	11.63,	1.95337
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-8.77415,	11.7707,	1.6179
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.57789,	13.1496,	3.13917
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.71017,	12.7787,	4.48676
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.28727,	13.2528,	3.77764
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.24381,	13.18,	4.19342
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
            <SpinningMesh
            position={[-9.82193,	12.2159,	4.8255
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.67291,	11.6473,	5.16447
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.4775,	11.2577,	4.55094
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.32978,	11.5842,	3.99006
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.7845,	11.0384,	5.17191
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.25479,	11.2116,	5.44251
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.19958,	11.9005,	3.40126
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.10936,	12.2279,	1.46127
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.44984,	12.871,	2.05714
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.41537,	13.2213,	2.67604
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.96262,	11.7839,	2.29909
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.44451,	11.7681,	1.22893
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.1,	11.6259,	1.55581
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.19557,	13.3231,	3.32633
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.27634,	13.0241,	4.5889
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.70436,	12.6439,	4.92853
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[10.1611,	8.22237,	-0.577662
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.73266,	12.0954,	5.29925
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.4926,	11.5722,	5.63957
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.27244,	11.2083,	4.95359
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.17772,	11.6018,	4.45303
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.18052,	11.9496,	3.92053
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.04742,	11.1482,	5.89642
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.72982,	10.9364,	5.66936
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.00481,	12.2941,	3.38675
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.88268,	12.231,	2.92125
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.67424,	12.0664,	0.972124
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.21777,	12.9055,	1.62587
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.23098,	13.2808,	2.22042
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.01811,	13.3527,	2.88023
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.68181,	12.2154,	2.46993
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.68204,	11.7883,	1.87118
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.79713,	11.6063,	1.19567
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.13943,	11.7561,	0.852621
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.96695,	13.2567,	4.00662
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[9.88424,	9.63175,	-0.03205
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.32049,	12.8651,	4.99896
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.58179,	12.5099,	5.3409
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.50375,	11.9975,	5.73281
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.29219,	11.4769,	6.10177
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.44773,	11.0186,	5.52317

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.02854,	11.162,	5.33267

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.95267,	11.5984,	4.86985

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.06953,	11.9793,	4.40917

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.04804,	12.3398,	3.87169

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.511,	10.7974,	6.06381

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.80812,	11.0442,	6.31744

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[9.9863,	9.27374,	-0.33278

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.11213,	12.719,	3.33436

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.85166,	12.7154,	2.94307

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.36566,	12.0619,	0.568192

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.06259,	12.4829,	1.18923

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.72461,	12.4888,	0.847249

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.96189,	12.9299,	1.22839

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.00707,	13.3062,	1.77457

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.82193,	13.4373,	2.44974

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.62259,	13.3602,	3.08288

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.67056,	12.7085,	2.49716

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.39869,	12.1928,	2.04548

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.34678,	11.765,	1.43302

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.51909,	11.579,	0.930808

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-7.79407,	11.6866,	0.537118

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.43747,	13.1315,	3.70134

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.58365,	13.0962,	4.193

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.73023,	13.0592,	4.6915

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.86289,	12.9591,	5.13573

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.39115,	12.7078,	5.34499

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.36547,	12.4624,	5.73476

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-9.29467,	11.9295,	6.18562

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          /> 
           <SpinningMesh
            position={[-9.07753,	11.3858,	6.56879

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.14911,	10.8551,	5.83616

            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
           <SpinningMesh
            position={[-8.79929,	13.3118,	3.52861
            ]}
            color='white'
            args={[0.1, 0.1, 0.1]}
            speed={1}
          />
         

        

        </group>
        {/* Allows us to move the canvas around for different prespectives */}
        <OrbitControls />
      </Canvas>
    </>
  );
};

export default App;
