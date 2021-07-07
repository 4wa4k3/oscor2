<template>
  <div
    class="capabilities-hero"
    :style="{
      background: `no-repeat center/cover url(${capabilitiesImg})`,
    }"
  ></div>
</template>

<script>
export default {
  name: 'CapabilityHeroImg',
  props: {
    capabilitiesImg: {
      type: String,
      default() {
        return ''
      },
    },
  },
}
</script>
