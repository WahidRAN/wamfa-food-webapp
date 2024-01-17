<script setup lang="ts">
import { useRoute } from 'vue-router'

const menus = ['Home', 'Products', 'Services', 'Project', 'Blog', 'Contact']

const route = useRoute()
const isSelected = (menu: string) => {
  return menu.toLowerCase() === route.name ? 'min-w-32' : ''
}
</script>

<template>
  <header class="col-span-12 -mx-6 -mt-6 flex flex-col items-center gap-4 px-6 pt-6">
    <img src="../assets/wamfa-logo.svg" alt="brand-logo" class="w-32 justify-self-center" />
    <nav>
      <ul class="flex gap-6 font-jost">
        <li
          v-for="(menu, index) in menus"
          :key="index"
          class="hover:text-wamfa-primary group relative min-w-32 cursor-pointer rounded-e-lg rounded-s-sm px-4 py-2 text-xl text-slate-600 transition-all ease-in-out"
        >
          <div
            class="border-black-300 absolute inset-0 w-0 origin-left transform rounded-e-xl rounded-s-sm border-t-8 transition-all duration-300 group-hover:w-full"
            :class="isSelected(menu)"
          ></div>
          <div
            class="absolute inset-0 w-0 origin-left transform rounded-e-xl rounded-s-sm border-t-4 border-blue-300 transition-all duration-300 group-hover:w-full"
            :class="isSelected(menu)"
          ></div>
          {{ menu }}
        </li>
      </ul>
    </nav>
  </header>
</template>
