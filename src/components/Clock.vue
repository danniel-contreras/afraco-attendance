<template>
    <div>
        <p class="text-lg">Hora: {{ time }}</p>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { storeToRefs } from 'pinia';
import { UseUserStore } from '../stores/user.store';


const { GetDateTime } = UseUserStore()

const { time } = storeToRefs(UseUserStore())

const interval = ref<ReturnType<typeof setInterval>>()


const RefreshClock = async () => {
    await GetDateTime()
}

onMounted(() => {
    interval.value = setInterval(RefreshClock, 1000);
});

onUnmounted(() => {
    clearInterval(interval.value)
})

</script>

<style lang="scss"></style>