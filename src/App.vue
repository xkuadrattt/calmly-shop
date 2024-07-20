<template>
  <HeaderNavigation />
  <main class="container mx-auto px-2 sm:px-0">
    <router-view />
  </main>
</template>

<script setup>
import HeaderNavigation from "@/components/HeaderNavigation.vue";
</script>
