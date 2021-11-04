<template>
  <AddPost />
</template>

<script>
import AddPost from '../../components/post/AddPost.vue'
const NewPost = {
  name: "NewPost",
  components: {
    AddPost
  },
  setup() {

  }
}

export default NewPost;
</script>
