<script setup>
    const props = defineProps({
        ficha: Object
    })
</script>

<template>
    <div class="shadow-md bg-white rounded-lg px-4 py-2">
        <NuxtLink :to="`/ficha/${ficha.id}`" class="flex flex-col justify-between gap-4 h-full">
            <h3 class="font-bold text-center my-3">
                {{ ficha.info_tecnica.titulo }} <br />
                <span class="font-normal" v-if="ficha.info_tecnica.titulo !== ficha.info_tecnica.titulo_vo">
                    {{ `(${ficha.info_tecnica.titulo_vo})` }}
                </span>
            </h3>
            <p class="text-right">
                {{ ficha.lang === "es" ? "Castellano" : "" }}
                {{ ficha.lang === "ca" ? "Català" : "" }}
                {{ ficha.lang === "ga" ? "Galego" : "" }}
            </p>
        </NuxtLink>
    </div>
</template>