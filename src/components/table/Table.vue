<template>
    <va-data-table :items="murals" />
</template>

<script>
import { computed } from "@vue/reactivity";
import { useStore } from "vuex";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "Table",
  components: {
  },
  setup() {
    const { state, dispatch } = useStore();

    const murals = computed(() => state.fetchMurals.murals);

    onMounted(async () => {
      dispatch("fetchMurals");
    });

    return {
      murals
    };
  },
};
</script>

<style>
.va-table-responsive {
  overflow: auto;
}
</style>
