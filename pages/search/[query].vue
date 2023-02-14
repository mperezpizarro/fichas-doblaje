<script setup>
    const { query } = useRoute().params
    const { data: resultado } = await useFetch(`/api/searchFicha?search=${encodeURIComponent(query.toLowerCase())}`, {key: query})

    definePageMeta({
        layout: 'search'
    })
</script>

<template>
    <Grid extraCSS="mt-4">
        <LinkCard v-for="data in resultado" :ficha="data" />
    </Grid>
</template>