<template>
  <div class="single-table-container">
    <div class="single-table-title">
      <h2>{{ $prismic.asText(sectionTitle) }}</h2>
      <hr />
    </div>
    <div class="single-table--table-container">
      <table class="single-table--table">
        <tbody>
          <template v-for="(row, i) in rows">
            <tr :key="i">
              <template v-for="(cell, index) in row.items">
                <td :key="index">
                  <template v-if="cell.color">
                    <span v-html="cell.color"></span>
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

<script>
export default {
  name: 'ProductTable',
  props: {
    sectionTitle: {
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
}
</script>
