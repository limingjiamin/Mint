<template>
  <div style="height: 2000px">
    <herder />
    <list />
    <merchant />
  </div>
</template>

<script>
// @ is an alias to /src
import herder from "@/components/HomeView/home_herder.vue";
import list from "@/components/HomeView/home_list.vue";
import merchant from "@/components/HomeView/home_merchant.vue";

export default {
  components: { herder, list, merchant },
};
</script>
