<template>
    <footer class="footer">
        <div class="footer-content">
            <p class="lead">All Rights Reserved | Mohammad Mohamed | &copy; <span class="shadow">{{ aYear }}</span></p>
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
.footer {
    background-color: #191919;
    padding: 40px 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px -20px 0px 20px rgb(9, 9, 9);

}

.footer-content {
    display: flex;
    justify-content: center;
    align-items: center;
}

.lead {
    color: white;
    font-size: 1.2rem;
}

.shadow {
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.footer {
  box-shadow: 0px -20px 0px 20px rgb(9, 9, 9);
  background-color: rgb(9, 9, 9);;
  padding: 40px;

}
</style>
