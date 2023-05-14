<template>
    <Layout title="Mi Cuenta">
        <div class="w-full h-full justify-center items-center">
            <div class="w-full flex justify-center items-center">
                <img class="w-44" src="../assets/profile.png" />
            </div>
            <div>
                <p class="text-lg"><span class="font-semibold">Nombre:</span> {{ employee_info.names + " " + employee_info.lastNames }}</p>
                <p class="text-lg"><span class="font-semibold">Direccion:</span> {{ employee_info.address }}</p>
                <p class="text-lg"><span class="font-semibold">Edad:</span> {{ employee_info.age }}</p>
                <p class="text-lg"><span class="font-semibold">Telefono:</span> {{ employee_info.phone }}</p>
                <p class="text-lg"><span class="font-semibold">Fecha de ingreso:</span> {{ new Date(employee_info.dateOfHire).toLocaleDateString() }}</p>
            </div>
            <button>Cambiar contraseña</button>
            <button>Cerrar sesion</button>
        </div>
    </Layout>
</template>

<script lang="ts" setup>
import Layout from '../components/Layout.vue';
import { storeToRefs } from 'pinia';
import { UseAuthStore } from '../stores/auth.store';
import { UseEmployeeStore } from '../stores/employee.store';
import { onMounted } from 'vue';

const { employee } = storeToRefs(UseAuthStore())

const {SetInfo} = UseAuthStore()

const { GetEmployee } = UseEmployeeStore()

const {employee_info} = storeToRefs(UseEmployeeStore())

onMounted(async () => {
    await SetInfo()
    await GetEmployee(employee.value.id_employee)
})

</script>

<style lang="scss"></style>