
<template>
    <Layout title="Inicio">
        <div class="w-full h-full justify-center items-center">
            <div v-if="!loading" class="flex flex-col w-full h-full justify-center items-center">
                <img class="w-44 h-44" src="../assets/logo.png">
                <Clock />
                <p class="text-lg">Fecha: {{ date }}</p>
                <template v-if="!showing">
                    <button @click="Loading"
                        class="w-64 md:w-64 lg:w-44 bg-blue-800 p-4 py-5 text-white text-lg font-semibold rounded-full">Verficar</button>
                </template>
                <template v-else>
                    <div v-if="!is_authorized">
                        <p>No estas en el area permitida</p>
                    </div>
                    <div v-else class="flex flex-col">
                    <button class="bg-blue-800 w-64 text-white p-4 py-5 rounded-full my-3">Marcar entrada</button>
                    <button class="bg-[#A20303] w-64 text-white p-4 py-5 rounded-full">Marcar salida</button>
                    </div>
                </template>

            </div>
            <div v-else class="w-full h-full flex flex-col justify-center items-center">
                <img class="w-72 rounded-xl" src="../assets/loading.gif" />
                <p class="text-lg font-semibold mt-3">Verificando...</p>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import { onMounted, ref, onUnmounted } from 'vue';
import Layout from '../components/Layout.vue';
import { UseUserStore } from '../stores/user.store';
import Clock from '../components/Clock.vue';
import { storeToRefs } from 'pinia';
import { UseAttendanceStore } from '../stores/attendance.store';
import { UseAuthStore } from '../stores/auth.store';

const { GetDateTime } = UseUserStore()

const { employee } = storeToRefs(UseAuthStore())

const { is_authorized } = storeToRefs(UseAttendanceStore())

const { VerifyAuth } = UseAttendanceStore()

const loading = ref(false)
const showing = ref(false)

const Loading = async () => {
    loading.value = true
    await VerifyAuth(employee.value.id_employee)
    setTimeout(() => {
        loading.value = false
        showing.value = true
    }, 5000)
}

const { date } = storeToRefs(UseUserStore())

onMounted(async () => {
    await GetDateTime()
})

onMounted(() => {
    const interval = setInterval(() => {
        showing.value = false
    }, 15000);

    onUnmounted(() => {
        clearInterval(interval)
    })
})

</script>

<style lang="scss"></style>