<template>
    <!-- component -->
    <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <div ref="sidebar"
            class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-gray-900">
            <div class="sidebar-header flex px-3 mt-8">
                <div class="inline-flex">
                    <a href="#" class="flex">
                        <img class="w-20" src="../assets/logo.png" />
                        <span class="leading-10 text-gray-100 text-sm font-semibold ml-1 mt-8 uppercase">El Sotano</span>
                    </a>
                </div>
                <button @click="close_menu" class="absolute md:hidden right-3 top-2">
                    <oh-vue-icon class="text-gray-50" scale="1.5" name="fa-times"></oh-vue-icon>
                </button>
            </div>
            <div class="sidebar-content px-4 py-6">
                <ul class="flex flex-col w-full">
                    <li class="my-px">
                        <a href="/" class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-50">
                            <span class="flex items-center justify-center text-lg text-gray-400">
                                <span class="flex items-center justify-center text-lg text-gray-400">
                               <oh-vue-icon scale="1.5" name="fa-home"/>
                            </span>
                            </span>
                            <span class="ml-3">Inicio</span>
                        </a>
                    </li>
                    <li class="my-px">
                        <a href="/account" class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-50">
                            <span class="flex items-center justify-center text-lg text-gray-400">
                                <span class="flex items-center justify-center text-lg text-gray-400">
                               <oh-vue-icon scale="1.5" name="fa-user-circle"/>
                            </span>
                            </span>
                            <span class="ml-3">Mi Cuenta</span>
                        </a>
                    </li>
                    
                    <li class="my-px" @click="MakeLoggout">
                        <span href="#" class="flex flex-row items-center h-10 px-3 rounded-lg text-gray-50">
                            <span class="flex items-center justify-center text-lg text-gray-400">
                               <oh-vue-icon scale="1.5" name="hi-logout"/>
                            </span>
                            <span class="ml-3">Cerrar Sesion</span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
        <main class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
            <header class="header bg-white shadow-lg py-4 px-4">
                <div class="header-content flex bg-white items-center flex-row">
                    <button @click="open_menu" class="md:hidden">
                        <oh-vue-icon class="text-gray-600" scale="1.5" name="oi-three-bars"></oh-vue-icon>
                    </button>
                    <p class="text-xl font-semibold ml-5">{{ title }}</p>
                    <div class="flex ml-auto mr-3">
                        <a class="flex flex-row items-center">
                            <img src="../assets/profile.png" class="h-10 w-10 bg-gray-200 border rounded-full" />
                            <span class="flex flex-col ml-2">
                                <span class="truncate w-32 font-semibold tracking-wide text-sm leading-none">{{ employee.name }}</span>
                                <span class="truncate w-32 text-gray-500 text-xs leading-none mt-1">{{ employee.lastName }}</span>
                            </span>
                        </a>
                    </div>
                </div>
            </header>
            <div class="main-content flex flex-col justify-center items-center bg-gray-50 flex-grow p-4">
                <div
                    class="flex flex-col justify-center items-center w-full flex-grow max-h-[85vh] border-2 border-dashed border-gray-300 bg-white rounded mt-4">

                    <div class="w-full h-full">
                        <!-- <slot /> -->
                        <slot />
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';
import { OhVueIcon } from "../plugins/oh-vue-icons"
import { UseAuthStore } from '../stores/auth.store';
import { storeToRefs } from 'pinia';

interface Props {
    title: string
}

const {MakeLoggout} = UseAuthStore()
const {employee} = storeToRefs(UseAuthStore())

const { title } = defineProps<Props>()

const sidebar = ref<HTMLDivElement>();

const open_menu = () => {
    if (sidebar.value) {
        sidebar.value.classList.replace("-translate-x-full", "translate-x-0");
    }
};

const close_menu = () => {
    if (sidebar.value) {
        sidebar.value.classList.replace("translate-x-0", "-translate-x-full");
    }
};


</script>
  
<style lang="scss"></style>