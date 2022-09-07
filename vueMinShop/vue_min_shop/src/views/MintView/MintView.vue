<template>
  <div>
    <router-view />
    <navigation />
  </div>
</template>
<script>
import navigation from "@/components/navigation_view.vue";

export default {
  components: {
    navigation,
  },
};
</script>

<style scoped></style>
