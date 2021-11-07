<template>
  <h2 class="post-title">New Post</h2>

  <va-form class="login-form" ref="form">
    <div class="login-first">
      <va-input
        class="mb-4 mr-4"
        placeholder="Title"
        v-model="formValues.title"
        :rules="[(value) => (value && value.length > 0) || 'Field is required']"
      />
      <va-input
        class="mb-4 mr-4"
        placeholder="Description"
        type="textarea"
        v-model="formValues.description"
      />
    </div>

    <div class="login-second">
      <div class="mb-4">
        <va-date-input placeholder="Date" v-model="formValues.date" />
      </div>

      <va-input
        v-if="!showPicker"
        class="mb-4"
        placeholder="TAGS"
        v-model="formValues.tags"
      />

      <va-input
        v-if="!showPicker"
        class="mb-4"
        placeholder="Discussion"
        v-model="formValues.discussion"
      />
    </div>
  </va-form>

  <div class="button-container">
    <va-button
      class="mb-4 mr-4"
      @click="this.$refs.form.validate() ? onSubmitForm() : ''"
    >
      Create
    </va-button>
  </div>
</template>

<script>
import { ref } from "@vue/reactivity";
import "./style.scss";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "AddPost",
  components: {},
  setup() {
    const showPicker = ref(false);
    const formValues = ref({
      title: "",
      description: "",
      date: "",
      tags: "",
      discussion: "",
    });

    onMounted(() => {});

    const onClickPicker = () => {
      showPicker.value = !showPicker.value;
    };

    const onSubmitForm = () => {
      console.log(formValues.value);
    };

    return {
      formValues,
      showPicker,
      onClickPicker,
      onSubmitForm,
    };
  },
};
</script>
