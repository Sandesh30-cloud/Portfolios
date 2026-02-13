import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const STAR_COUNT = 3000;

const PLANET_DEFS = [
  { name: 'Mercury', orbit: 7, size: 0.34, speed: 0.018, color: 0xb7b7b7 },
  { name: 'Venus', orbit: 9.2, size: 0.55, speed: 0.014, color: 0xd5c39a },
  { name: 'Earth', orbit: 11.8, size: 0.58, speed: 0.011, color: 0x5aa7ff },
  { name: 'Mars', orbit: 14.1, size: 0.45, speed: 0.009, color: 0xca6f56 },
  { name: 'Jupiter', orbit: 18.2, size: 1.35, speed: 0.006, color: 0xb7936f },
  { name: 'Saturn', orbit: 22.8, size: 1.15, speed: 0.0049, color: 0xc6b37c },
  { name: 'Uranus', orbit: 27.4, size: 0.82, speed: 0.0038, color: 0x8fd5d2 },
  { name: 'Neptune', orbit: 31.2, size: 0.8, speed: 0.0032, color: 0x557bd7 }
];

const GalaxyScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return undefined;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1500);
    camera.position.set(0, 15, 58);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const resize = () => {
      const width = mount.clientWidth;
      const height = mount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const ambient = new THREE.AmbientLight(0x6070a0, 0.35);
    scene.add(ambient);

    const sunLight = new THREE.PointLight(0xfff2c2, 2.6, 350, 2);
    scene.add(sunLight);

    const sunGeometry = new THREE.SphereGeometry(2.2, 32, 32);
    const sunMaterial = new THREE.MeshBasicMaterial({ color: 0xffcf63 });
    const sun = new THREE.Mesh(sunGeometry, sunMaterial);
    scene.add(sun);

    const sunGlowTexture = new THREE.TextureLoader().load(
      'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij48ZGVmcz48cmFkaWFsR3JhZGllbnQgaWQ9ImciIGN4PSI1MCUiIGN5PSI1MCUiIHI9IjUwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3RvcC1jb2xvcj0iI2ZmZDY4YSIgc3RvcC1vcGFjaXR5PSIxIi8+PHN0b3Agb2Zmc2V0PSI0NSUiIHN0b3AtY29sb3I9IiNmZmE5MzMiIHN0b3Atb3BhY2l0eT0iLjYiLz48c3RvcCBvZmZzZXQ9IjEwMCUiIHN0b3AtY29sb3I9IiNmZjY2MDAiIHN0b3Atb3BhY2l0eT0iMCIvPjwvcmFkaWFsR3JhZGllbnQ+PC9kZWZzPjxjaXJjbGUgY3g9IjY0IiBjeT0iNjQiIHI9IjY0IiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+'
    );

    const sunGlow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: sunGlowTexture,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      })
    );
    sunGlow.scale.set(14, 14, 1);
    scene.add(sunGlow);

    const starPositions = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i += 1) {
      const radius = 130 + Math.random() * 400;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const idx = i * 3;
      starPositions[idx] = radius * Math.sin(phi) * Math.cos(theta);
      starPositions[idx + 1] = radius * Math.sin(phi) * Math.sin(theta);
      starPositions[idx + 2] = radius * Math.cos(phi);
    }

    const starsGeometry = new THREE.BufferGeometry();
    starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    const starsMaterial = new THREE.PointsMaterial({
      color: 0xcdd9ff,
      size: 0.34,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });
    const stars = new THREE.Points(starsGeometry, starsMaterial);
    scene.add(stars);

    const solarGroup = new THREE.Group();
    solarGroup.rotation.x = -0.22;
    scene.add(solarGroup);

    const planets = [];

    PLANET_DEFS.forEach((def, index) => {
      const orbitLine = new THREE.LineLoop(
        new THREE.BufferGeometry().setFromPoints(
          new Array(100).fill(0).map((_, i) => {
            const a = (i / 100) * Math.PI * 2;
            return new THREE.Vector3(Math.cos(a) * def.orbit, Math.sin(a) * def.orbit, 0);
          })
        ),
        new THREE.LineBasicMaterial({ color: 0x607ab8, transparent: true, opacity: 0.25 })
      );
      orbitLine.rotation.x = Math.PI / 2;
      solarGroup.add(orbitLine);

      const pivot = new THREE.Object3D();
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(def.size, 24, 24),
        new THREE.MeshStandardMaterial({
          color: def.color,
          roughness: 0.8,
          metalness: 0.1,
          emissive: new THREE.Color(def.color).multiplyScalar(0.08)
        })
      );
      sphere.position.x = def.orbit;
      sphere.rotation.z = Math.random() * Math.PI * 2;
      pivot.rotation.y = Math.random() * Math.PI * 2;
      pivot.add(sphere);
      solarGroup.add(pivot);

      if (def.name === 'Saturn') {
        const saturnRing = new THREE.Mesh(
          new THREE.RingGeometry(def.size * 1.45, def.size * 2.15, 64),
          new THREE.MeshBasicMaterial({ color: 0xd8c48f, side: THREE.DoubleSide, transparent: true, opacity: 0.55 })
        );
        saturnRing.rotation.x = Math.PI / 2.4;
        sphere.add(saturnRing);
      }

      planets.push({ def, pivot, sphere, spinSeed: index * 0.1 + 0.3 });
    });

    const mouse = new THREE.Vector2(0, 0);
    const onPointerMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      const t = clock.getElapsedTime();

      sun.rotation.y += 0.004;
      sunGlow.material.opacity = 0.7 + Math.sin(t * 1.8) * 0.16;

      solarGroup.rotation.z = Math.sin(t * 0.1) * 0.06;

      planets.forEach(({ def, pivot, sphere, spinSeed }) => {
        pivot.rotation.y += def.speed;
        sphere.rotation.y += 0.006 + spinSeed * 0.002;
      });

      stars.rotation.y += 0.0004;
      stars.rotation.x = Math.sin(t * 0.08) * 0.05;

      camera.position.x += (mouse.x * 7 - camera.position.x) * 0.025;
      camera.position.y += (12 + mouse.y * 4 - camera.position.y) * 0.025;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = window.requestAnimationFrame(animate);
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove);
    frameId = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);

      sunGeometry.dispose();
      sunMaterial.dispose();
      sunGlow.material.dispose();
      sunGlowTexture.dispose();

      planets.forEach(({ pivot, sphere }) => {
        pivot.remove(sphere);
        sphere.geometry.dispose();
        sphere.material.dispose();
      });

      starsGeometry.dispose();
      starsMaterial.dispose();

      renderer.dispose();
      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="galaxy-scene" aria-hidden="true">
      <div ref={mountRef} className="galaxy-canvas" />
      <div className="planet planet-main" />
      <div className="planet planet-secondary" />
    </div>
  );
};

export default GalaxyScene;
