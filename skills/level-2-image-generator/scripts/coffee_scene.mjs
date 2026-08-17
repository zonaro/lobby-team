// Prompt: "a minimalist logo for a coffee shop" (1:1)
// Style: Apple Light — clean high-key white studio product shot of a
// minimalist coffee cup + saucer, aluminum handle, thin steam ribbons.
import {
  THREE, createRenderer, captureFrame, addStudioEnvironment, seededRandom,
} from './pipeline.mjs';

const seed = 7;
let s = seed;
const nextRand = () => { s += 1; return seededRandom(s); };

const { renderer, glContext, W, H, OUT_W, OUT_H } =
  createRenderer('1:1', { exposure: 1.08 });

const scene = new THREE.Scene();
addStudioEnvironment(renderer, scene);

// Sky: white -> pale blue-gray, no fog (Apple Light rule)
{
  const skyGeo = new THREE.SphereGeometry(60, 32, 32);
  const skyMat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      top: { value: new THREE.Color(0xffffff) },
      bottom: { value: new THREE.Color(0xe2e4e9) },
    },
    vertexShader: `varying vec3 vPos; void main(){ vPos = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec3 vPos; uniform vec3 top; uniform vec3 bottom; void main(){ float t = clamp(vPos.y/60.0+0.5,0.0,1.0); gl_FragColor = vec4(mix(bottom,top,t),1.0); }`,
  });
  scene.add(new THREE.Mesh(skyGeo, skyMat));
}

// Lights — Apple Light preset
scene.add(new THREE.AmbientLight(0xffffff, 0.32));
const key = new THREE.DirectionalLight(0xffffff, 1.15);
key.position.set(4, 10, 7);
key.castShadow = true;
key.shadow.radius = 10;
key.shadow.mapSize.set(2048, 2048);
scene.add(key);
const fill = new THREE.DirectionalLight(0xffffff, 0.32);
fill.position.set(-7, 5, 5);
scene.add(fill);
const coolEdge = new THREE.DirectionalLight(0xdfe9ff, 0.7);
coolEdge.position.set(-3, 7, -7);
scene.add(coolEdge);
scene.add(new THREE.HemisphereLight(0xffffff, 0xc8cad2, 0.35));

// ---- Hero: minimalist coffee cup on a saucer -------------------------------
const hero = new THREE.Group();

const cupMat = new THREE.MeshPhysicalMaterial({
  color: 0xaeb2b9, metalness: 0.55, roughness: 0.42, envMapIntensity: 1.0,
  side: THREE.DoubleSide,
});
const insideMat = new THREE.MeshPhysicalMaterial({
  color: 0x6f4a30, metalness: 0.0, roughness: 0.5, envMapIntensity: 0.4,
  side: THREE.DoubleSide,
});
const shellMat = new THREE.MeshPhysicalMaterial({
  color: 0xc7cbd1, metalness: 0.9, roughness: 0.38, envMapIntensity: 1.05,
});

// Cup body: straight cylinder, open-ended (no caps) so the coffee disc reads
// through the open top; a thin flared lip ring sits at the rim.
const cupGeo = new THREE.CylinderGeometry(0.66, 0.60, 1.3, 48, 1, true);
const cup = new THREE.Mesh(cupGeo, cupMat);
cup.position.y = 0.65;
cup.castShadow = true;
cup.receiveShadow = true;
hero.add(cup);

const cupBottom = new THREE.Mesh(new THREE.CircleGeometry(0.60, 48), cupMat);
cupBottom.rotation.x = Math.PI / 2;
cupBottom.position.y = 0.0;
hero.add(cupBottom);

const lipGeo = new THREE.TorusGeometry(0.665, 0.028, 12, 48);
lipGeo.rotateX(Math.PI / 2);
const lip = new THREE.Mesh(lipGeo, cupMat);
lip.position.y = 1.3;
hero.add(lip);

// Inner dark disc (coffee) near the rim
const inner = new THREE.Mesh(new THREE.CircleGeometry(0.63, 48), insideMat);
inner.rotation.x = -Math.PI / 2;
inner.position.y = 1.32;
hero.add(inner);

// Handle: torus arc, baked rotation
const handleGeo = new THREE.TorusGeometry(0.42, 0.075, 16, 48, Math.PI * 1.15);
handleGeo.rotateZ(-((Math.PI * 1.15) - Math.PI) / 2);
const handle = new THREE.Mesh(handleGeo, shellMat);
handle.rotation.y = Math.PI / 2;
handle.position.set(0.66, 0.66, 0);
handle.castShadow = true;
hero.add(handle);

// Saucer
const saucerGeo = new THREE.CylinderGeometry(1.15, 1.05, 0.08, 64);
const saucer = new THREE.Mesh(saucerGeo, shellMat);
saucer.position.y = -0.06;
saucer.castShadow = true;
saucer.receiveShadow = true;
hero.add(saucer);

hero.position.y = 0.05;
hero.rotation.y = -0.5;
hero.rotation.z = 0.02;
scene.add(hero);

// Steam: three thin curved tubes rising above the cup
const steamMat = new THREE.MeshPhysicalMaterial({
  color: 0xd9dce2, metalness: 0.3, roughness: 0.5, transparent: true, opacity: 0.55,
});
const steamCurves = [
  [[0.0, 0.0, 0.0], [0.05, 0.35, 0.02], [-0.05, 0.7, -0.02], [0.04, 1.05, 0.0]],
  [[0.22, 0.05, 0.0], [0.28, 0.42, -0.03], [0.18, 0.78, 0.03], [0.26, 1.1, 0.0]],
  [[-0.22, 0.05, 0.0], [-0.16, 0.4, 0.03], [-0.28, 0.75, -0.03], [-0.2, 1.08, 0.0]],
];
for (const pts of steamCurves) {
  const curve = new THREE.CatmullRomCurve3(pts.map(p => new THREE.Vector3(...p)));
  const tubeGeo = new THREE.TubeGeometry(curve, 24, 0.028, 8, false);
  const tube = new THREE.Mesh(tubeGeo, steamMat);
  tube.position.set(0, 1.35, 0);
  tube.castShadow = false;
  hero.add(tube);
}

// ---- Product stage: floor + fake reflection + contact shadow --------------
const floor = new THREE.Mesh(
  new THREE.CircleGeometry(40, 64),
  new THREE.MeshPhysicalMaterial({
    color: 0xf3f4f6, roughness: 0.35, metalness: 0.15,
    envMapIntensity: 0.4, transparent: true, opacity: 0.9,
  })
);
floor.rotation.x = -Math.PI / 2;
floor.position.y = -0.1;
floor.receiveShadow = true;
scene.add(floor);

const reflection = hero.clone(true);
reflection.traverse((o) => {
  if (o.isMesh) {
    o.castShadow = false;
    const m = o.material.clone();
    m.transparent = true; m.opacity = 0.14; m.depthWrite = false;
    if (m.envMapIntensity !== undefined) m.envMapIntensity *= 0.5;
    o.material = m;
  }
});
reflection.scale.y = -1;
reflection.position.y = -0.1 - (hero.position.y - (-0.1));
reflection.rotation.y = hero.rotation.y;
reflection.rotation.z = -hero.rotation.z;
scene.add(reflection);

// Contact shadow (radial-alpha disc)
{
  const contactMat = new THREE.ShaderMaterial({
    transparent: true, depthWrite: false,
    uniforms: { color: { value: new THREE.Color(0.32, 0.34, 0.4) } },
    vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader: `varying vec2 vUv; uniform vec3 color; void main(){ float d = distance(vUv, vec2(0.5)); float a = smoothstep(0.5, 0.0, d) * 0.42; gl_FragColor = vec4(color, a); }`,
  });
  const contact = new THREE.Mesh(new THREE.CircleGeometry(1.6, 48), contactMat);
  contact.rotation.x = -Math.PI / 2;
  contact.position.y = -0.088;
  scene.add(contact);
}

// Camera
const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 200);
camera.position.set(2.6, 2.0, 4.6);
camera.lookAt(0, 0.5, 0);

await captureFrame({
  renderer, glContext, scene, camera, W, H, OUT_W, OUT_H,
  outPath: '/root/scene-render/coffee-cup-3d.png',
});
console.log('DONE');
