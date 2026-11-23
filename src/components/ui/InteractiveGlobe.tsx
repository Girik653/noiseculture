"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export function InteractiveGlobe({ className = "" }: { className?: string }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const previousMousePosition = useRef({ x: 0, y: 0 });
  const hoverOffset = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 2.75;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // Root Globe Group for interactive rotation
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.24;
    globeGroup.rotation.y = -1.15;
    scene.add(globeGroup);

    // Texture Loader
    const textureLoader = new THREE.TextureLoader();
    let earthMesh: THREE.Mesh;
    let cloudsMesh: THREE.Mesh;

    // Earth Sphere Geometry
    const earthRadius = 1;
    const earthGeometry = new THREE.SphereGeometry(earthRadius, 64, 64);

    // Load Photorealistic NASA Earth Textures
    const earthMap = textureLoader.load(
      "/images/earth-blue-marble.jpg",
      () => {
        setIsLoaded(true);
      },
      undefined,
      (err) => {
        console.warn("Failed to load earth texture, fallback active:", err);
      }
    );

    const nightMap = textureLoader.load("/images/earth-night.jpg");
    const cloudsMap = textureLoader.load("/images/earth-clouds.jpg");

    // Earth Material: Standard material with realistic roughness and night light emission
    const earthMaterial = new THREE.MeshStandardMaterial({
      map: earthMap,
      roughness: 0.65,
      metalness: 0.12,
      emissiveMap: nightMap,
      emissive: new THREE.Color(0xffad32),
      emissiveIntensity: 0.48,
    });

    earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
    globeGroup.add(earthMesh);

    // Realistic Cloud Layer (slightly larger radius)
    const cloudsGeometry = new THREE.SphereGeometry(earthRadius + 0.016, 48, 48);
    const cloudsMaterial = new THREE.MeshStandardMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.38,
      blending: THREE.AdditiveBlending,
    });
    cloudsMesh = new THREE.Mesh(cloudsGeometry, cloudsMaterial);
    globeGroup.add(cloudsMesh);

    // Outer Atmospheric Rim Light (Fresnel Glow)
    const atmosphereGeometry = new THREE.SphereGeometry(earthRadius + 0.045, 48, 48);
    const atmosphereMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vNormal;
        void main() {
          float intensity = pow(0.68 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.4);
          gl_FragColor = vec4(1.0, 0.72, 0.28, 1.0) * intensity * 0.95;
        }
      `,
      blending: THREE.AdditiveBlending,
      side: THREE.BackSide,
      transparent: true,
    });
    const atmosphereMesh = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial);
    globeGroup.add(atmosphereMesh);

    // Orbiting Golden Stardust Culture Particles
    const particleCount = 150;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const r = earthRadius * (1.12 + Math.random() * 0.42);
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      particlePositions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      particlePositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      particlePositions[i * 3 + 2] = r * Math.cos(phi);
    }
    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      color: 0xffad32,
      size: 0.02,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const stardustParticles = new THREE.Points(particleGeo, particleMat);
    globeGroup.add(stardustParticles);

    // Add Culture Hub Markers (Jaipur, Mumbai, Delhi, London, NYC, Tokyo, Dubai)
    const hubs = [
      { name: "JAIPUR", lat: 26.9124, lon: 75.7873 },
      { name: "NEW DELHI", lat: 28.6139, lon: 77.209 },
      { name: "MUMBAI", lat: 19.076, lon: 72.877 },
      { name: "LONDON", lat: 51.5074, lon: -0.1278 },
      { name: "NEW YORK", lat: 40.7128, lon: -74.006 },
      { name: "TOKYO", lat: 35.6762, lon: 139.6503 },
      { name: "DUBAI", lat: 25.2048, lon: 55.2708 },
    ];

    const convertGeoToVector = (lat: number, lon: number, radius: number) => {
      const phi = (90 - lat) * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -(radius * Math.sin(phi) * Math.cos(theta)),
        radius * Math.cos(phi),
        radius * Math.sin(phi) * Math.sin(theta)
      );
    };

    const markersGroup = new THREE.Group();
    const pulseRings: { mesh: THREE.Mesh; speed: number; offset: number }[] = [];

    hubs.forEach((hub) => {
      const pos = convertGeoToVector(hub.lat, hub.lon, earthRadius + 0.02);

      // Core glowing dot
      const markerGeo = new THREE.SphereGeometry(0.018, 16, 16);
      const markerMat = new THREE.MeshBasicMaterial({ color: 0xffad32 });
      const marker = new THREE.Mesh(markerGeo, markerMat);
      marker.position.copy(pos);
      markersGroup.add(marker);

      // Primary outer pulse ring
      const ringGeo = new THREE.RingGeometry(0.024, 0.038, 24);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0xffad32,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.8,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.position.copy(pos);
      ring.lookAt(pos.clone().multiplyScalar(2));
      markersGroup.add(ring);
      pulseRings.push({ mesh: ring, speed: 3.5, offset: Math.random() });

      // Secondary delayed concentric radar ring
      const ringGeo2 = new THREE.RingGeometry(0.035, 0.046, 24);
      const ringMat2 = new THREE.MeshBasicMaterial({
        color: 0xffe082,
        side: THREE.DoubleSide,
        transparent: true,
        opacity: 0.6,
      });
      const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
      ring2.position.copy(pos);
      ring2.lookAt(pos.clone().multiplyScalar(2));
      markersGroup.add(ring2);
      pulseRings.push({ mesh: ring2, speed: 2.8, offset: Math.random() + 0.5 });
    });
    globeGroup.add(markersGroup);

    // Realistic Lighting Setup
    const sunLight = new THREE.DirectionalLight(0xfff6e5, 2.8);
    sunLight.position.set(5, 3, 4);
    scene.add(sunLight);

    const ambientLight = new THREE.AmbientLight(0x181825, 0.9);
    scene.add(ambientLight);

    const rimLight = new THREE.DirectionalLight(0x284b70, 1.1);
    rimLight.position.set(-5, -2, -3);
    scene.add(rimLight);

    // Animation Loop with Clock
    const clock = new THREE.Clock();
    let animationFrameId: number;
    let baseRotationY = globeGroup.rotation.y;
    let baseRotationX = globeGroup.rotation.x;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Continuous slow realistic Earth spin
      if (!isDragging.current) {
        baseRotationY += 0.0018;
      }

      // Smooth interpolation for rotation including gentle mouse follow parallax
      const targetY = baseRotationY + (isDragging.current ? 0 : hoverOffset.current.x * 0.15);
      const targetX = baseRotationX + (isDragging.current ? 0 : hoverOffset.current.y * 0.15);

      globeGroup.rotation.y += (targetY - globeGroup.rotation.y) * 0.08;
      globeGroup.rotation.x += (targetX - globeGroup.rotation.x) * 0.08;

      // Rotate clouds slightly faster for realistic dynamic atmosphere
      if (cloudsMesh) {
        cloudsMesh.rotation.y += 0.0006;
      }

      // Rotate stardust orbit
      if (stardustParticles) {
        stardustParticles.rotation.y += 0.0009;
        stardustParticles.rotation.x -= 0.0004;
      }

      // Animate Culture Hub Pulse Radar Waves
      pulseRings.forEach((item) => {
        const pulse = (Math.sin(elapsed * item.speed + item.offset) + 1) / 2;
        item.mesh.scale.setScalar(0.85 + pulse * 0.85);
        (item.mesh.material as THREE.MeshBasicMaterial).opacity = Math.max(0, 0.85 - pulse * 0.8);
      });

      renderer.render(scene, camera);
    };

    animate();

    // Mouse and Touch Interaction Handlers
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      isDragging.current = true;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;
      previousMousePosition.current = { x: clientX, y: clientY };
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const clientY = "touches" in e ? e.touches[0].clientY : e.clientY;

      if (isDragging.current) {
        const deltaX = clientX - previousMousePosition.current.x;
        const deltaY = clientY - previousMousePosition.current.y;

        baseRotationY += deltaX * 0.005;
        baseRotationX += deltaY * 0.005;

        // Clamp X rotation to avoid flipping upside down
        baseRotationX = Math.max(-0.8, Math.min(0.8, baseRotationX));

        previousMousePosition.current = { x: clientX, y: clientY };
      } else if (container) {
        // Gentle hover parallax calculation
        const rect = container.getBoundingClientRect();
        const normX = ((clientX - rect.left) / rect.width - 0.5) * 2;
        const normY = ((clientY - rect.top) / rect.height - 0.5) * 2;
        hoverOffset.current = {
          x: Math.max(-1, Math.min(1, normX)),
          y: Math.max(-1, Math.min(1, normY)),
        };
      }
    };

    const onPointerUp = () => {
      isDragging.current = false;
    };

    const domElement = renderer.domElement;
    domElement.addEventListener("mousedown", onPointerDown);
    domElement.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("mouseup", onPointerUp);
    window.addEventListener("touchend", onPointerUp);

    // Responsive Resize Handler
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      domElement.removeEventListener("mousedown", onPointerDown);
      domElement.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      window.removeEventListener("touchend", onPointerUp);
      window.removeEventListener("resize", handleResize);

      if (container && domElement && container.contains(domElement)) {
        container.removeChild(domElement);
      }

      earthGeometry.dispose();
      cloudsGeometry.dispose();
      atmosphereGeometry.dispose();
      particleGeo.dispose();
      earthMaterial.dispose();
      cloudsMaterial.dispose();
      atmosphereMaterial.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div className={`relative w-full aspect-square max-w-[620px] mx-auto ${className}`}>
      {/* Three.js Canvas Mount */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing select-none"
      />

      {/* Atmospheric Ambient Glow behind globe */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial from-[#FFAD32]/12 via-transparent to-transparent pointer-events-none blur-3xl" />

      {/* Interactive Helper Pill */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-black/80 border border-white/15 text-[10px] font-mono text-neutral-300 pointer-events-none uppercase tracking-wider backdrop-blur-md shadow-2xl flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FFAD32] animate-ping" />
        <span>Drag to rotate real Earth • Delhi • Mumbai • Jaipur Hubs</span>
      </div>
    </div>
  );
}