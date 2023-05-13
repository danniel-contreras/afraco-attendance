<script lang="ts" setup>
import Sotano from "../assets/sotano.jpg"
</script>

<template>
    <div class="h-screen w-screen overflow-hidden flex fixed items-center justify-center" style="background: #edf2f7;">
        <section class="min-h-screen w-screen flex items-stretch text-white ">
            <div class="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center"
                :style="`background-image: url(${Sotano})`">
                <div class="absolute bg-[rgba(0,0,0,0.7)] inset-0 z-0"></div>
                <div class="w-full h-full flex items-center px-24 z-10">
                    <p class="font-extrabold text-3xl text-center mb-20">"Cada venta es una oportunidad para hacer feliz a un
                        cliente, ¡hagámoslo juntos con pasión y
                        compromiso!"</p>
                </div>
            </div>
            <div class="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0"
                style="background-color: #161616;">
                <div class="absolute lg:hidden z-10 inset-0 bg-gray-500 bg-no-repeat bg-cover items-center"
                :style="`background-image: url(${Sotano})`">
                    <div class="absolute bg-black opacity-80 inset-0 z-0"></div>
                </div>
                <div class="w-full py-6 z-20">
                    <div class="flex justify-center items-center">
                        <img class="w-44 h-44"
                            src="../assets/logo.png"
                            alt="">
                    </div>
                    <p class="text-gray-100 py-4 text-xl font-semibold">
                        Bienvenido
                    </p>
                    <form action="" class="sm:w-2/3 w-full px-4 lg:px-0 mx-auto">
                        <div class="pb-2 pt-4">
                            <input type="email" name="email" id="email" placeholder="Correo electronico"
                                class="block w-full outline-none p-4 text-lg border-[0.1px] border-[#B9B9B9] rounded bg-[rgba(0,0,0,0.5)]">
                        </div>
                        <div class="pb-2 pt-4">
                            <input
                                class="block w-full outline-none p-4 text-lg rounded border-[0.1px] bg-[rgba(0,0,0,0.5)] border-[#B9B9B9]"
                                type="password" name="password" id="password" placeholder="Contraseña">
                        </div>
                       
                        <div class="px-4 pb-2 pt-4">
                            <button
                                class="uppercase block w-full p-4 text-lg rounded-full bg-[#A20303] focus:outline-none">Iniciar
                                Sesion</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    </div>
</template>
