<template>
    <div class="bg-gray-50 w-full min-h-screen px-4 py-2 flex flex-col items-center justify-center">
        <section class="w-full max-w-sm rounded-lg shadow-md px-6 py-4 text-center flex flex-col gap-y-4 items-center">
            <PageTitle>Error {{ error.statusCode }}</PageTitle>
            <p>{{ error.statusMessage }}</p>
            <button @click="handleError" class="bg-amber-700 text-white px-4 py-2 rounded-md mt-6">Volver al inicio</button>
        </section>
    </div>
</template>

<script setup>
    const props = defineProps({
        error: Object
    })

    function handleError() {
        clearError({ redirect: '/' })
    }
</script>