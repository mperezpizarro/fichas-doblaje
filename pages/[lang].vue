<script setup>
    const { lang } = useRoute().params
    const { data: fichas } = await useFetch(`/api/getFicha?lang=${lang}`, {key: lang})
    
    if(fichas.value.length === 0) { 
        throw createError({ statusCode: 404, statusMessage: "No existen fichas para este idioma.", fatal: true })
    }
</script>

<template>
    <PageTitle v-if="lang === 'es'">FICHAS EN CASTELLANO</PageTitle>
    <PageTitle v-else-if="lang === 'ca'">FICHAS EN CATALÁN</PageTitle>
    <PageTitle v-else-if="lang === 'ga'">FICHAS EN GALLEGO</PageTitle>
    <Grid extraCSS="mt-4">
        <LinkCard v-for="data in fichas" :ficha="data" />
    </Grid>
</template>