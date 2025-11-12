<script setup>
    import { ref } from 'vue';
    const detailsAreVisible = false;
    const friend = {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "localhost@email.com"
    }

</script>

<template>
    <li>
        <h2>{{ friend.name }}</h2>
        <button @click="toggleDetails">
            {{ detailsAreVisible ? "Hide" : ""}}
        </button>
    </li>
</template>

