<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const show = ref(false)
onMounted(() => {
  show.value = true
})

onUnmounted(() => {
  show.value = false
})
</script>

<template>
  <div class="flex h-svh flex-col overflow-hidden">
    <section id="header" class="flex justify-between px-10 py-2">
      <div class="flex items-center gap-4">
        <img src="../assets/wamfa-logo.svg" alt="Wamfa food's logo" class="w-16" />
        <RouterLink to="/">Menu Spesial</RouterLink>
        <RouterLink to="/">Pilihan Hidangan</RouterLink>
        <RouterLink to="/">Bantuan</RouterLink>
      </div>
      <div class="flex items-center gap-4">
        <button>Masuk</button>
        <button>Daftar</button>
      </div>
    </section>
    <Transition name="slide-fade">
      <section v-if="show" id="content" class="flex grow flex-col justify-center px-10">
        <p class="text-3xl">Good Food, Good Mood!</p>
        <p class="text-5xl">Rasa Juara, Harga Nggak Nyiksa!</p>
        <RouterLink to="/" class="mt-4 text-blue-700 underline">
          Cari menu pilihan lo disini
        </RouterLink>
      </section>
    </Transition>
  </div>
</template>

<style>
.slide-fade-enter-active {
  transition: all 1.2s cubic-bezier(.03,1.4,.56,2.05);
}

.slide-fade-leave-active {
  transition: all 3s cubic-bezier(0.22, 1.58, 0.62, 1.13);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
