<template>
  <div ref="sceneWrap" class="pillar-renderer-wrap">
    <div class="pillar-renderer-content">
      <div class="pillar-renderer-content-div">
        <div class="pillar-renderer-content-title">
          <h2>{{ $prismic.asText(pillarInfo.section_title) }}</h2>
          <hr />
          <div class="pillar-renderer-content-cta-container">
            <a
              v-if="pillarInfo.downloadable_link_text[0].text !== ''"
              :href="pillarInfo.downloadable.url"
              target="_blank"
              to="#"
              >{{ $prismic.asText(pillarInfo.downloadable_link_text) }}</a
            >
            <nuxt-link :to="localePath(`/${pillarInfo.section_link.uid}`)">
              {{ $prismic.asText(pillarInfo.section_link_text) }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
    <canvas ref="canvas" class="webgl"></canvas>
  </div>
</template>

<script>
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
export default {
  name: 'Scene',
  props: {
    pillarInfo: {
      type: Object,
      default() {
        return {}
      },
    },
    modelInfo: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      scene: null,
      canvas: null,
      gltfLoader: null,
      geometry: null,
      material: null,
      mesh: null,
      camera: null,
      lights: {
        ambient: null,
        point: null,
        directional: null,
        directionalCameraHelper: null,
      },
      cubeTextureLoader: null,
      envMapTexture: null,
      renderer: null,
      sizes: {
        width: null,
        height: null,
      },
      controls: null,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      // Scene Set Up
      this.scene = new THREE.Scene()
      // CubeLoader
      this.cubeTextureLoader = new THREE.CubeTextureLoader()
      this.envMapTexture = this.cubeTextureLoader.load([
        '/textures/environmentMaps/px.webp',
        '/textures/environmentMaps/nx.webp',
        '/textures/environmentMaps/px.webp',
        '/textures/environmentMaps/px.webp',
        '/textures/environmentMaps/pz.webp',
        '/textures/environmentMaps/nz.webp',
      ])

      // TEST GEOMETRY
      // this.geometry = new THREE.BoxGeometry(1, 1, 1)

      // Material
      this.material = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.7,
        roughness: 0.2,
        envMap: this.envMapTexture,
      })

      // Mesh
      // this.mesh = new THREE.Mesh(this.geometry, this.material)
      // this.mesh.position.x = -1.5

      // Renderer Sizes
      this.sizes.width = window.innerWidth
      this.sizes.height = this.$refs.sceneWrap.clientHeight

      // Lights
      this.lights.ambient = new THREE.AmbientLight(0xffffff, 0.25)
      this.lights.point = new THREE.PointLight(0xffffff, 0.35)
      this.lights.point.position.set(2, 3, 4)
      this.lights.directional = new THREE.DirectionalLight('#ffffff', 0.25)
      this.lights.directional.position.set(0.25, 3, -2.25)
      this.lights.directional.castShadow = true
      this.lights.directional.shadow.camera.far = 15
      this.lights.directional.shadow.mapSize.set(1024, 1024)
      this.lights.directional.shadow.normalBias = 0.05
      this.lights.directionalCameraHelper = new THREE.CameraHelper(
        this.lights.directional.shadow.camera
      )

      // Camera
      this.camera = new THREE.PerspectiveCamera(
        45,
        this.sizes.width / this.sizes.height,
        0.1,
        100
      )
      this.camera.position.z = 3
      this.camera.lookAt(new THREE.Vector3(-0.5, 0, 0))

      // GLTFLoader & Materials

      const updateMaterials = () => {
        this.scene.traverse((child) => {
          if (
            child instanceof THREE.Mesh &&
            child.material instanceof THREE.MeshStandardMaterial
          ) {
            child.material.envMap = this.envMapTexture
            child.castShadow = true
            child.receiveShadow = true
            child.material.wireframe = this.modelInfo.wireframe
          }
        })
      }

      this.gltfLoader = new GLTFLoader()
      this.gltfLoader.load(`/models/${this.modelInfo.file}`, (gltf) => {
        const children = [...gltf.scenes[0].children]
        for (const child of children) {
          child.scale.set(12, 12, 12)
          child.rotation.x = 0
          child.rotation.y = Math.PI * `${this.modelInfo.rotationY}` * 0.5
          child.rotation.z = Math.PI * 0.5
          child.position.x = -0.5
          this.scene.add(child)

          updateMaterials()
        }
      })

      // Scene Add
      this.scene.add(
        // this.mesh,
        this.camera,
        this.lights.ambient,
        this.lights.point,
        this.lights.directional
      )
      this.scene.background = new THREE.Color(`${this.modelInfo.color}`)
      // ${this.modelInfo.color}

      // Canvas
      this.canvas = this.$refs.canvas

      // Render
      this.renderer = new THREE.WebGLRenderer({
        canvas: this.canvas,
        alpha: false,
        transparent: false,
        physicallyCorrectLights: true,
        antialias: true,
        toneMapping: THREE.ReinhardToneMapping,
      })
      this.renderer.setSize(this.sizes.width, this.sizes.height)
      this.renderer.shadowMap.enabled = true
      this.renderer.shadowMap.type = THREE.PCFShadowMap
      this.renderer.render(this.scene, this.camera)

      window.addEventListener('resize', () => {
        this.sizes.width = window.innerWidth
        this.sizes.height = this.$refs.sceneWrap.clientHeight

        this.camera.aspect = this.sizes.width / this.sizes.height
        this.camera.updateProjectionMatrix()

        this.renderer.setSize(this.sizes.width, this.sizes.height)
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      })

      // OrbitControls
      this.controls = new OrbitControls(this.camera, this.canvas)
      this.controls.enableDamping = true
      this.controls.autoRotate = true
      this.controls.enableZoom = false
      this.controls.autoRotate = 0.35

      // Animate
      const tick = () => {
        this.controls.update()
        this.renderer.render(this.scene, this.camera)
        window.requestAnimationFrame(tick)
      }
      tick()
    },
  },
}
</script>
