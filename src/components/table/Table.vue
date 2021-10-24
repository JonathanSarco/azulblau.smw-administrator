<template>
  <table-lite
    :is-slot-mode="true"
    :has-checkbox="true"
    :is-loading="murals.length === 0"
    :is-re-search="table.isReSearch"
    :columns="table.columns"
    :rows="murals"
    :total="table.totalRecordCount"
    :sortable="table.sortable"
    :messages="table.messages"
    @do-search="doSearch"
    @is-finished="table.isLoading = false"
    @return-checked-rows="updateCheckedRows"
  >
    <template
      v-for="(col, i) of table.columns"
      v-slot:[col.field]="data"
      :key="i"
    >
      <div>
        {{ data.value[1][col.field] }}
      </div>
    </template>
  </table-lite>
</template>

<script>
import { computed, reactive } from "@vue/reactivity";
import TableLite from "vue3-table-lite";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Table",
  components: {
    TableLite,
  },
  setup() {
    const { state, dispatch } = useStore();
    const murals = computed(() => state.fetchMurals.murals);

    onMounted(async () => {
      dispatch("fetchMurals");
    });

    const tableLoadingFinish = () => {
      table.isLoading = false;
    };

    const updateCheckedRows = (rowsKey) => {
      // do your checkbox click event
      console.log(rowsKey);
    };

    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: "Title",
          field: "title",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Subtitle",
          field: "subtitle",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        // {
        //   label: "Description",
        //   field: "titleDescription",
        //   width: "10%",
        //   sortable: false,
        // },
        {
          label: "Tags",
          field: "tags",
          width: "10%",
          sortable: false,
        },
      ],
      totalRecordCount: 2,
      sortable: {
        order: "title",
        sort: "asc",
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data",
      },
    });

    return {
      table,
      murals,
      tableLoadingFinish,
      updateCheckedRows,
    };
  },
};
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>
