<template>
  <Header />
  <router-view />
</template>

<script>
import Header from "./components/shared/header.vue";
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>
