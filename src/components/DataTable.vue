<template>
  <div class="data-table">
    <div class="data-table__filter">
      <ui-money v-model.number="moneyFilter" />
    </div>

    <!-- Your component code here -->
    <div class="table">
      <div class="table__row table__head">
        <div
          v-for="column in columns"
          :key="column.label"
          class="table__cell"
          :style="{'width': column.width}"
        >{{ column.label }}</div>
      </div><!-- / table__head-->

      <div
        v-for="row of rows"
        :key="row.id"
        class="table__row"
      >
        <div
          v-for="(value, key, idx) in row"
          :key="key"
          class="table__cell"
          :style="{'width':  isMobile ? '' : cellParam[key]}"
        >
          <div v-if="isMobile">{{ cellParam[idx] }}</div>
          {{ useFilters(value, key) }}
        </div>
      </div>
    </div>

    <div class="data-table__paginator">
      <ui-pagination
        v-model="page"
        :pages="pageCount"
      />
    </div>
  </div>
</template>

<script>
export default {

  name: 'DataTable',

  props: {
    rows: {
      type: Array,
      required: true,
    },
    columns: {
      type: Array,
      required: true,
    },
  },

  data: () => ({
    page: 1,
    pageSize: 4,
    moneyFilter: 0,
    isMobile: true,
  }),

  created() {
    this.checkWidth();
    window.addEventListener('resize', this.checkWidth);
  },

  methods: {
    checkWidth() {
      this.isMobile = window.innerWidth <= 768;
    },
    useFilters(value, key) {
      if (key === 'date') {
        return this.$options.filters.date(value);
      }

      if (key === 'money') {
        return this.$options.filters.money(value);
      }
      return value;
    },
  },

  computed: {
    pageCount() {
      return Math.ceil(this.rows.length / this.pageSize);
    },
    cellParam() {
      const param = {};
      this.columns.forEach((item, idx) => {
        // width
        param[item.prop] = item.width;
        // name cell for mobile
        param[idx] = item.label;
      });
      return param;
    },
    tableSorted() {
      return [];
    },
  },

  destroyed() {
    window.removeEventListener('resize', this.checkWidth, false);
  },
};
</script>
