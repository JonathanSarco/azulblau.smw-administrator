<template>
  <h2 class="post-title">New Post</h2>

  <va-form class="new-post-form" ref="form" v-if="!isLoading">
    <div class="new-post-form__first">
      <va-input
        class="mb-4 mr-4"
        placeholder="Title"
        v-model="formValues.title"
        :rules="[(value) => (value && value.length > 0) || 'Field is required']"
      />

      <div class="mb-4 mr-4">
        <va-date-input
          placeholder="Date"
          mode="single"
          v-model="formValues.date"
        />
      </div>

      <va-input
        class="mb-4 mr-4"
        placeholder="Description"
        type="textarea"
        v-model="formValues.description"
      />

      <va-input
        v-if="!showPicker"
        class="mb-4 mr-4"
        placeholder="TAGS"
        v-model="formValues.tags"
      />

      <va-input
        v-if="!showPicker"
        class="mb-4 mr-4"
        placeholder="Discussion"
        v-model="formValues.discussion"
      />
    </div>

    <div class="new-post-form__second">
      <div class="dropbox mb-4">
        <input
          type="file"
          @change="onChangemainMuralInput($event.target.files)"
          accept="image/*"
          class="input-file"
          name="mainMural"
        />
        <p v-if="!mainMural">
          Drag your main picture<br />
          or click to browse
        </p>
        <p v-if="mainMural">- {{ mainMural.name }}</p>
      </div>
      <p
        class="new-post-form__second--error"
        v-if="pictureValuesErrors.mainMuralError"
      >
        Main Picture is required
      </p>

      <div class="dropbox mb-4">
        <input
          multiple
          type="file"
          @change="onChangeSecondaryMuralsInput($event.target.files)"
          accept="image/*"
          class="input-file"
          name="secondaryMurals"
        />
        <p v-if="secondaryMurals.length === 0">
          Drag secondary files<br />
          or click to browse
        </p>
        <div v-if="secondaryMurals.length > 0">
          <p class="multiple-files" v-for="pic in secondaryMurals" :key="pic">
            - {{ pic.name }}
          </p>
        </div>
      </div>
      <p
        class="new-post-form__second--error"
        v-if="pictureValuesErrors.secondaryMuralsError"
      >
        At least one secondary picture is required
      </p>
    </div>
  </va-form>

  <div class="loading-container" v-if="isLoading">
    <va-progress-circle :size="75" indeterminate />
  </div>

  <div class="button-container" v-if="!isLoading">
    <va-button
      class="mb-4 mr-4"
      @click="this.$refs.form.validate() ? onSubmitForm() : ''"
    >
      Create
    </va-button>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import "./style.scss";
import { useStore } from "vuex";

const defaultState = {
  title: "",
  description: "",
  date: new Date(),
  tags: "",
  discussion: "",
  mainMural: null,
  secondaryMurals: [],
};

export default {
  name: "AddPost",
  components: {},
  setup() {
    const showPicker = ref(false);
    const mainMural = ref(null);
    const secondaryMurals = ref([]);

    const { state, dispatch } = useStore();

    const pictureValuesErrors = ref({
      mainMuralError: false,
      secondaryMuralsError: false,
    });

    const formValues = ref(defaultState);

    const isLoading = computed(() => state.murals.loading);

    const onChangemainMuralInput = (file) => {
      mainMural.value = file[0];
      formValues.value.mainMural = file[0];
    };

    const onChangeSecondaryMuralsInput = (files) => {
      for (let i = 0; i < files.length; i++) {
        formValues.value.secondaryMurals.push(files[i]);
      }
      secondaryMurals.value = files;
    };

    const onClickPicker = () => {
      showPicker.value = !showPicker.value;
    };

    const checkImagesLoading = () => {
      if (!formValues.value.mainMural) {
        pictureValuesErrors.value.mainMuralError = true;
        return false;
      }
      if (formValues.value.secondaryMurals.length === 0) {
        pictureValuesErrors.value.secondaryMurals = true;
        return false;
      }
      pictureValuesErrors.value.mainMuralError = false;
      pictureValuesErrors.value.secondaryMurals = false;
      return true;
    };

    const emptyForm = () => {
      formValues.value.title = "";
      formValues.value.description = "";
      formValues.value.date = new Date();
      formValues.value.tags = "";
      formValues.value.discussion = "";
      mainMural.value = null;
      secondaryMurals.value = [];
    };

    const onSubmitForm = () => {
      if (checkImagesLoading()) {
        dispatch("saveNewMural", formValues.value);
        isLoading.value = false;
        emptyForm();
      }
    };

    return {
      formValues,
      showPicker,
      onClickPicker,
      onSubmitForm,
      onChangemainMuralInput,
      onChangeSecondaryMuralsInput,
      mainMural,
      secondaryMurals,
      isLoading,
      pictureValuesErrors,
    };
  },
};
</script>
