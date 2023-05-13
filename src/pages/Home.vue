
<template>
    <div>
        <p>Home</p>
        <button @click="MakeLoggout">Cerrar Sesion</button>
    </div>
</template>

<script lang="ts" setup>

import { UseAuthStore } from '../stores/auth.store';
const { MakeLoggout } = UseAuthStore()
</script>

<style lang="scss"></style>