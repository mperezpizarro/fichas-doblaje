<template>
    <div class="w-full min-h-screen bg-gray-50 text-gray-900">
        <Navbar />
        <main class="w-full max-w-5xl mx-auto py-2 px-4">
            <form @submit="handleSubmit" class="border-b-2 bg-none px-4 py-2 flex gap-x-4">
                <input type="text" name="search" placeholder="Introduce valor de búsqueda..." class="bg-transparent outline-none flex-grow" />
                <button type="submit">
                    <Icon name="ion:search" />
                </button>
            </form>
            <slot />
        </main>
    </div>
</template>

<script>
    export default {
        methods: {
            handleSubmit(ev) {
                ev.preventDefault()
                const form = new FormData(ev.target)
                const search = form.get("search").toString()
                const encodedSearch = encodeURI(search)
                const searchUrl = "/search/" + encodedSearch
                ev.target.reset()
                navigateTo(searchUrl)
            }
        }
    }
</script>