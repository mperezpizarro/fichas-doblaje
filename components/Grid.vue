<script setup>
    const props = defineProps({
        extraCSS: String
    })
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 px-4 py-2 gap-6" :class="extraCSS">
        <slot />
    </div>
</template>