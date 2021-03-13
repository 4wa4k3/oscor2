<template>
  <div ref="container" class="single-table-container">
    <div class="single-table-title">
      <h2>{{ $prismic.asText(sectionTitle) }}</h2>
      <hr />
    </div>
    <template v-for="(table, i) in tables">
      <div ref="tables" :key="i" class="single-table--table-container">
        <h3 ref="tableTitle">
          {{ $prismic.asText(table.primary.table_title) }}
          <span ref="plus"></span>
        </h3>
        <div ref="tableContent" class="single-table--table-content">
          <article v-html="$prismic.asHtml(table.primary.table_info)"></article>
          <table class="single-table--table">
            <tbody>
              <tr>
                <template v-for="(row, index) in table.items">
                  <th :key="index">{{ $prismic.asText(row.row) }}</th>
                </template>
              </tr>
              <template v-for="(row, idx) in rows">
                <tr
                  v-if="
                    $prismic.asText(row.primary.for) ===
                    $prismic.asText(table.primary.table_title).toLowerCase()
                  "
                  :key="idx"
                >
                  <template v-for="(cell, inx) in row.items">
                    <td :key="inx">
                      <template v-if="cell.color">
                        <client-only
                          ><span v-html="cell.color"></span
                        ></client-only>
                      </template>
                      {{ $prismic.asText(cell.cell) }}
                    </td>
                  </template>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  name: 'ProductTable',
  props: {
    sectionTitle: {
      type: Array,
      default() {
        return []
      },
    },
    tables: {
      type: Array,
      default() {
        return []
      },
    },
    rows: {
      type: Array,
      default() {
        return []
      },
    },
  },
  mounted() {
    const container = this.$refs.container
    const titles = this.$refs.tableTitle
    const tables = this.$refs.tables
    const contents = this.$refs.tableContent
    const plus = this.$refs.plus

    function setClass(el, elem) {
      elem.classList.add('active')
      el.classList.add('active')
    }
    setClass(contents[0], plus[0])

    function checkClass(el, elem) {
      el.classList.contains('active')
        ? (el.style.maxHeight = `${el.scrollHeight}px`)
        : (el.style.maxHeight = '0')

      elem.classList.contains('active')
        ? (elem.style.transform = `rotate(45deg)`)
        : (elem.style.transform = `rotate(0)`)
    }
    checkClass(contents[0], plus[0])

    titles.forEach((title) => {
      title.addEventListener('click', () => {
        const content = title.nextElementSibling
        const sign = title.children[0]
        content.classList.toggle('active')
        sign.classList.toggle('active')

        checkClass(content, sign)
      })
    })

    this.$nextTick(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          markers: false,
          start: 'top center',
          end: 'bottom bottom',
        },
      })

      tl.from(container.children[0], { y: -100, opacity: 0, duration: 1 })
    })

    tables.forEach((table) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          markers: false,
          start: 'top center',
          end: 'bottom bottom',
        },
      })
      tl.from(table, { y: -100, opacity: 0, duration: 1 })
    })
  },
}
</script>
