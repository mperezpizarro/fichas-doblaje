<script setup>
const { data: fichas } = await useFetch("/api/getFicha")
</script>

<template>
    <PageTitle>ÚLTIMAS FICHAS AÑADIDAS</PageTitle>
    <Grid extraCSS="mt-4">
        <LinkCard v-for="data in fichas" :ficha="data" />
    </Grid>
</template>