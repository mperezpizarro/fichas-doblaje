<script setup>
    const { id } = useRoute().params
    const { data: ficha } = await useFetch(`/api/getFicha?id=${id}`, {key: id})

    if(ficha.value.length === 0) {
        throw createError({ statusCode: 404, statusMessage: "La ficha que buscas no existe.", fatal: true })
    }

    const {info_tecnica, cast, info_adicional} = ficha.value[0]
</script>

<template>
    <div class="w-full overflow-x-auto">
        <PageTitle>{{ info_tecnica.titulo }}</PageTitle>
        <InfoTecnica :info="info_tecnica" />
        <Cast :cast="cast" />
    </div>
</template>