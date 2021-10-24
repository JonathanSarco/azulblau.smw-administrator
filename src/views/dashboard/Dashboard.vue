<template>
  <div class="dashboard-container">
    <h1>posts</h1>
    <div class="table-container">
      <Table />
    </div>
  </div>
</template>

<script>
import Table from "../../components/table/Table.vue";
import "./style.scss";
const Dashboard = {
  components: {
    Table,
  },
  setup() {},
};

export default Dashboard;
</script>

<style></style>
