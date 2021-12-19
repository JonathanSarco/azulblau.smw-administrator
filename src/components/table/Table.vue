<template>
  <va-data-table :items="murals" :loading="isLoading">
    <template #cell(id)="{ source: id }">
      <va-chip>{{ id }}</va-chip>
    </template>

    <template #cell(title)="{ source: title }">
      <va-chip>{{ title }}</va-chip>
    </template>

    <template #cell(date)="{ source: date }">
      <va-chip
        color="#596068"
        v-if="formatDateToFullDate(date) == 'Invalid date'"
        >{{ formatDateToFullDate(date) }}
      </va-chip>
      <div v-if="formatDateToFullDate(date) != 'Invalid date'">
        {{ formatDateToFullDate(date) }}
      </div>
    </template>

    <template #bodyAppend v-if="!isLoading">
      <tr>
        <td colspan="8" class="table--pagination">
          <va-pagination
            :visible-pages="5"
            v-model="currentPage"
            boundary-numbers
            :page-size="initialQuery.limit"
            :total="totalMurals"
          />
        </td>
      </tr>
    </template>
  </va-data-table>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted, watch } from "@vue/runtime-core";
import { formatDateToFullDate } from "../../helpers/DateFormatter";
import "./style.scss";

const initialQuery = {
  limit: 10,
  offset: 0,
};

export default {
  name: "Table",
  components: {},
  setup() {
    const { state, dispatch } = useStore();

    const murals = computed(() => {
      return state.murals.murals.data;
    });

    const isLoading = computed(() => {
      return state.murals.loading;
    });

    const totalMurals = computed(() => {
      return state.murals.murals.total;
    });

    onMounted(async () => {
      dispatch("fetchMurals", initialQuery);
    });

    const currentPage = ref(10);

    watch(currentPage, (newValue) => {
      let newOffset = Math.floor(newValue / initialQuery.limit);

      let newQuery = {
        limit: initialQuery.limit,
        offset: newOffset,
      };
      dispatch("fetchMurals", newQuery);
    });

    const onChange = () => {
      // console.log("onChange", event);
    };

    return {
      murals,
      totalMurals,
      formatDateToFullDate,
      currentPage,
      onChange,
      initialQuery,
      isLoading,
    };
  },
};
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>
