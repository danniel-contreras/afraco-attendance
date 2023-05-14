
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
                    <div v-else>
                        <div class="flex flex-col">
                            <button v-if="!attendance" @click="MarkAttendance"
                                class="bg-blue-800 w-64 text-white p-4 py-5 rounded-full my-3">Marcar entrada</button>
                            <p v-else class="text-lg text-center pt-10"><span class="font-semibold">Hora entrada:</span> {{
                                attendance?.entryTime }}</p>
                            <button v-if="!attendance?.exitState" @click="MarkAttendanceExit" :disabled="!attendance"
                                class="bg-[#A20303] w-64 text-white p-4 py-5 rounded-full">Marcar salida</button>
                            <p v-else class="text-lg text-center pt-5"><span class="font-semibold">Hora entrada:</span> {{
                                attendance?.exitTime }}</p>
                        </div>
                    </div>
                </template>

            </div>
            <div v-else class="w-full h-full flex flex-col justify-center items-center">
                <img class="w-44 rounded-xl" src="../assets/Recortada.gif" />
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
import { format_date } from '../utils/utils';
import { AddAttendance, CloseAttendance } from '../types/attendance.types';

const { GetDateTime } = UseUserStore()

const { date, time, datetime } = storeToRefs(UseUserStore())

const { employee } = storeToRefs(UseAuthStore())

const {SetInfo} = UseAuthStore()

const { is_authorized, attendance } = storeToRefs(UseAttendanceStore())

const { VerifyAuth, AddNewAttendance, VerifyAttendance, ExitAttendance } = UseAttendanceStore()

const loading = ref(true)
const showing = ref(false)

const Loading = async () => {
    loading.value = true
    await VerifyAuth(employee.value.id_employee)
    await VerifyAttendance(employee.value.id_employee, format_date(datetime.value.datetime))
    setTimeout(() => {
        loading.value = false
        showing.value = true
    }, 5000)
}

onMounted(async () => {
    await SetInfo()
    await GetDateTime()
    await VerifyAuth(employee.value.id_employee)
    await VerifyAttendance(employee.value.id_employee, format_date(datetime.value.datetime))
    setTimeout(() => {
        loading.value = false
        showing.value = true
    }, 5000)

})

onMounted(() => {
    let interval: ReturnType<typeof setInterval>

    interval = setInterval(() => {
        showing.value = false
    }, 30000);


    onUnmounted(() => {
        clearInterval(interval)
    })
})

const MarkAttendance = async () => {
    const data: AddAttendance = {
        entryTime: time.value,
        day: format_date(datetime.value.datetime),
        employeeId: employee.value.id_employee
    }
    await AddNewAttendance(data)
}

const MarkAttendanceExit = async () => {
    const data: CloseAttendance = {
        exitTime: time.value,
        employeeId: employee.value.id_employee
    }

    if (attendance.value) await ExitAttendance(data, attendance.value.id, format_date(datetime.value.datetime))
}


</script>

<style lang="scss"></style>