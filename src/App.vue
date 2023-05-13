
<script setup lang="ts">
import { onMounted } from "vue"
import { UseAuthStore } from "./stores/auth.store"
import "vue-toastification/dist/index.css";

const { SetInfo } = UseAuthStore()

onMounted(async () => {
  await SetInfo()
})

</script>

<template>
  <RouterView />
</template>

