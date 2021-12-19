<template>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-table"
      title="CISA Log4J Database"
      :filter="filter"
      no-data-label="I didn't find anything for you"
      no-results-label="The filter didn't uncover any results"
      virtual-scroll
      :rows-per-page-options="[0]"
      v-model:pagination="pagination"
      :rows="log4jData"
      :columns="columns"
    >
    <template v-slot:body-cell-Vendor_link="props">
        <q-td :props="props">
          <div>
            <a :href="props.value" target="_blank">External Link </a>
          </div>
        </q-td>
    </template>
    <template v-slot:top-left>
        <q-input dense debounce="300" v-model="filter" placeholder="Search">
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
      </template>
    <template v-slot:no-data="{ icon, message, filter }">
        <div class="full-width row flex-center text-accent q-gutter-sm">
          <q-icon size="2em" name="sentiment_dissatisfied" />
          <span>
            Well this is sad... {{ message }}
          </span>
          <q-icon size="2em" :name="filter ? 'filter_b_and_w' : icon" />
        </div>
    </template>
    <template v-slot:top-right>
        <q-btn
          color="primary"
          icon-right="archive"
          label="Export to csv"
          no-caps
          @click="exportTable"
    />
    </template>
    <template v-slot:header="props">
        <q-tr :props="props">
          <q-th
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
            class="text-italic text-purple"
          >
            {{ col.label }}
          </q-th>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { exportFile, useQuasar } from 'quasar'
import { ref } from 'vue'

import EventService from "@/EventService.js";

export default {
  name: 'LayoutDefault',

  components: {
  },
  data() {
    return {
      pagination: ref({
        rowsPerPage: 0
      }),
      filter: ref(''),
      q: useQuasar(),
      log4jData: [],
      columns: [
        { name: 'Vendor', label: 'Vendor', field:"Vendor", sortable: true},
        { name: 'Product', label: 'Product', field:"Product"},
        { name: 'Version', label: 'Version', field:"Version"},
        { name: 'Status', label: 'Status', field:"Status", sortable: true},
        { name: 'Update available', label: 'Update available', field:"Update available", sortable: true},
        { name: 'Vendor_link', label: 'Vendor link', field:"Vendor_link", format: val => this.formatLinks(val)},
        { name: 'Notes', label: 'Notes', field:"Notes"},
        { name: 'Other References', label: 'Other References', field:"Other References"},
        { name: 'Last Updated', label: 'Last Updated', field:"Last Updated", sortable: true},
      ],
      fields: [
        'Vendor',
        'Product',
        'Version',
        'Status',
        'Update available',
        'Vendor_link',
        'Notes',
        'Other References',
        'Last Updated'
      ],
    }
  },
  methods: {
    wrapCsvValue (val, formatFn) {
      let formatted = formatFn !== void 0
        ? formatFn(val)
        : val
      formatted = formatted === void 0 || formatted === null
        ? ''
        : String(formatted)
      formatted = formatted.split('"').join('""')
      /**
       * Excel accepts \n and \r in strings, but some other CSV parsers do not
       * Uncomment the next two lines to escape new lines
       */
      // .split('\n').join('\\n')
      // .split('\r').join('\\r')
      return `"${formatted}"`
    },
    printData() {
      console.log(this.log4jData)
    },
    
    formatLinks(link) {
      if (link && link.includes('](')) {
        return link.split('](')[1].slice(0, -1)
      }
      else {
        return link
      }
    },
    exportTable () {
        // naive encoding to csv format
        const content = [this.columns.map(col => this.wrapCsvValue(col.label))].concat(
          this.log4jData.map(row => this.columns.map(col => this.wrapCsvValue(
            typeof col.field === 'function'
              ? col.field(row)
              : row[ col.field === void 0 ? col.name : col.field ],
            col.format
          )).join(','))
        ).join('\r\n')
        const status = exportFile(
          'table-export.csv',
          content,
          'text/csv'
        )
        if (status !== true) {
          this.q.notify({
            message: 'Browser denied file download...',
            color: 'negative',
            icon: 'warning'
        })
      }
    },
    getLog4jData() {
      EventService.getLog4jData()
      .then((res) => {
					this.log4jData = this.parseData(res);
				})
      .catch((error) => console.log(error.message));
    },
    parseData(data) {
      let results = []
      data = data.split('| ------ | -------------------- | ---- | ----- | --------------- | ----------- | ----- | ---------------- | ------------ |')[1]
      let lines = data.split('\n').filter(n=>n)
      for (var line of lines) {
        let values = line.split('|').splice(1, 10)
        var obj = {};
        this.fields.forEach(function(item, i) {
          if (values[i]) {
            obj[item] = values[i].trim();
          }
        });
        results.push(obj)
      }
      return results
    }
  
  },
  created() {
    this.getLog4jData()
  },
}
</script>
<style>
.q-table td, .q-data-table th {
    /* don't shorten cell contents */
    white-space: normal !important;
    overflow-wrap: anywhere !important;
}
</style>

<style lang="sass">
.my-sticky-header-table
  /* height or max-height is important */
  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th
    /* bg color is important for th; just specify one */
    background-color: #c1f4cd
  thead tr th
    position: sticky
    z-index: 1
  thead tr:first-child th
    top: 0
</style>