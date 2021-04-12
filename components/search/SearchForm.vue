<template>
  <div class="top-nav__search-bar">
    <form
      ref="search"
      class="top-nav__search-form"
      :class="{ open: search }"
      :action="localePath({ name: 'search' })"
    >
      <input
        id="search"
        v-model="searchinput"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button type="submit">submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: 'SearchForm',
  props: {
    currentInput: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      searchinput: null,
    }
  },
  computed: {
    search() {
      return this.$store.getters['searchBtn/searchActive']
    },
  },
  created() {
    if (this.currentInput !== null) {
      this.searchinput = this.currentInput
    }
  },
  // mounted() {
  //   const search = this.$refs.search

  //   function checkClass(el) {
  //     console.log(el)
  //     el.classList.contains('open')
  //       ? (el.style.maxHeight = `${el.scrollHeight}px`)
  //       : (el.style.maxHeight = '0')
  //   }
  //   checkClass(search)
  // },
}
</script>
