<template>
  <va-data-table :items="murals">
    <template #cell(id)="{ source: id }"
      ><va-chip>{{ id }}</va-chip></template
    >
  </va-data-table>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Table",
  components: {},
  setup() {
    const { state } = useStore();

    const murals = computed(() => {
      return state.murals.murals;
    });

    onMounted(async () => {
      // dispatch("fetchMurals");
    });

    return {
      murals,
    };
  },
};
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>
