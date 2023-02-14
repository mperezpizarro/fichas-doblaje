<template>
    <header class="w-full flex items-center justify-center sticky top-0 z-10 h-[80px] bg-gray-50/60 backdrop-blur-lg">
        <nav class="w-full max-w-5xl flex items-center justify-between px-4 py-2">
            <h2 class="text-xl font-bold">
                <NuxtLink to="/">
                    FICHAS DE DOBLAJE
                </NuxtLink>
            </h2>
            <div class="mmd:hidden">
                <NuxtLink to="/search" class="text-gray-900 text-2xl">
                    <Icon name="ion:search" />
                </NuxtLink>
            </div>
            <button v-on:click="menuHidden = !menuHidden" class="mmd:hidden text-2xl">
                <Icon name="ri:menu-3-fill" />
            </button>
            <ul class="hidden mmd:flex gap-x-4">
                <li>
                    <NuxtLink to="/search" class="hover:underline">
                        BUSCAR
                    </NuxtLink>
                </li>
                <li v-for="link in links">
                    <NuxtLink :to="link.href" class="hover:underline">
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
            <!-- En base al valor de la variable asigna una clase u otra. Nota: :class es una abreviatura de v-bind:class -->
            <ul 
                :class="menuHidden ? 'hidden' : 'block'" 
                class="mmd:hidden gap-x-4 fixed top-0 left-0 w-full h-screen z-20 bg-gray-50/60 backdrop-blur-sm flex items-center justify-center gap-y-4 flex-col"
            >
                <button v-on:click="menuHidden = !menuHidden" class="mmd:hidden text-2xl mb-8">
                    <Icon name="ion:close-round" />
                </button>
                <li v-for="link in links">
                    <NuxtLink :to="link.href" class="hover:underline">
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script setup>
    const links = [
        {label: "FICHAS EN CASTELLANO", href: "/es"},
        {label: "FICHAS EN CATALÁN", href: "/ca"},
        {label: "FICHAS EN GALLEGO", href: "/ga"}
    ]
</script>

<script>
    export default {
        data() {
            return {
                menuHidden: true
            }
        }
    }
</script>

<style scoped>
    .router-link-exact-active {
        @apply text-amber-700 font-bold
    }
</style>