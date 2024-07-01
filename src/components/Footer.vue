<template>
    <footer class="container-fluid">
        <div class="row">
            <p class="lead">Mohammad Mohamed &copy; <span class="shadow">{{ aYear }}</span></p>
        </div>
    </footer>
</template>
<script>
export default {
    name: "FooterComp",
    data() {
        return {
            aYear: new Date().getUTCFullYear()
        }
    }
}
</script>
<style scoped>
    
</style>