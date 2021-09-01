<template>
  <section class="pillar-renderer-wrap">
    <div ref="renderer" class="pillar-renderer-container">
      <!-- <div ref="scene" class="pillar-renderer-scene">
        pillar-renderer-scene 1
      </div>
      <div ref="scene" class="pillar-renderer-scene">
        pillar-renderer-scene 2
      </div> -->
      <template v-for="(s, i) in threeScenes">
        <Scene :key="i" :title="s.section_title" />
      </template>
    </div>
  </section>
</template>

<script>
// https://threejsfundamentals.org/threejs/lessons/threejs-multiple-scenes.html
import * as THREE from 'three'
import Scene from '~/components/three/Scene'
export default {
  name: 'Renderer',
  components: {
    Scene,
  },
  props: {
    threeScenes: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      scene: null,
      sceneInfo: null,
      renderer: null,
      canvas: null,
      sizes: {
        width: null,
        height: null,
      },
      camera: {
        fov: null,
        near: null,
        far: null,
      },
      lights: {
        ambient: null,
        point: null,
        directional: null,
        directionalCameraHelper: null,
      },
    }
  },
  mounted() {
    this.init()
    // this.animate()
  },
  methods: {
    init() {
      // Renderer
      this.renderer = new THREE.WebGLRenderer()
      this.renderer.canvas = this.canvas
      this.renderer.toneMapping = THREE.ReinhardToneMapping
      this.renderer.antialias = true
      this.renderer.physicallyCorrectLights = true
      // Canvas
      this.canvas = this.$refs.renderer

      // Sizes
      this.sizes.width = window.innerWidth
      this.sizes.height = this.$refs.renderer.clientHeight

      // Camera Settings
      this.camera.fov = 45
      this.camera.near = 0.1
      this.camera.far = 100

      // Animation
      this.animate()
    },

    makeScene(el) {
      this.scene = new THREE.Scene()
      this.camera = new THREE.PerspectiveCamera(
        this.fov,
        this.sizes.width / this.sizes.height,
        this.camera.near,
        this.camera.far
      )
      this.camera.position.z = 3
      this.camera.lookAt(new THREE.Vector3(-0.5, 0, 0))
      return { scene: this.scene, camera: this.camera, el }
    },

    animate() {},
  },
}
</script>
