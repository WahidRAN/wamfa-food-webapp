<script setup lang="ts">
import { RouterView } from 'vue-router'

import HeaderNav from '@/components/HeaderNav.vue'
import ProductForm from '@/components/ProductForm.vue';
</script>

<template>
  <RouterView />
  <div class="grid grid-cols-12 auto-rows-max gap-6 p-6 h-screen overflow-scroll">
    <HeaderNav />
    <ProductForm />
  </div>
</template>
