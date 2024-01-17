<script setup lang="ts"></script>

<template>
  <div id="user-product-form" class="col-span-4 col-start-2 rounded-2xl bg-blue-600/30 px-6 py-4">
    <section class="mb-4">
      <p class="mb-2 font-messiri text-2xl font-bold">Mau makan apa hari ini?</p>
      <div class="flex flex-wrap gap-2 font-jost text-xl">
        <button class="rounded-full border-2 px-3 py-1">Yang pedes-pedes</button>
        <button class="rounded-full border-2 px-3 py-1">Gurih-gurih</button>
        <button class="rounded-full border-2 px-3 py-1">Manis</button>
        <button class="rounded-full border-2 px-3 py-1">Kuah seger</button>
        <button class="rounded-full border-2 px-3 py-1">Terserah!</button>
      </div>
    </section>
    <section>
      <p class="mb-2 font-messiri text-2xl font-bold">Buat berapa orang kak?</p>
      <div class="flex flex-wrap gap-2 font-jost text-xl">
        <button class="rounded-full border-2 px-3 py-1">1 orang</button>
        <button class="rounded-full border-2 px-3 py-1">makan berdua</button>
        <button class="rounded-full border-2 px-3 py-1">buat ramean nih</button>
        <button class="rounded-full border-2 px-3 py-1">Terserah!</button>
      </div>
    </section>
  </div>
  <div id="product-list" class="col-span-6 flex flex-col gap-3">
    <div class="flex gap-2">
      <img src="@/assets/sosis-bakar.webp" alt="sosis-bakar" class="w-56 object-cover" />
      <section class="flex flex-col p-3 font-jost">
        <p class="mb-2 font-messiri text-3xl">Sosis Bakar Sambal Mangga</p>
        <p class="mb-1 text-green-600">Rp 15k - Rp 25k</p>
        <p class="flex-grow">
          Sosis bakar, dengan pilihan sambal mangga, sambal nanas atau saus sambal mayo. Wajib
          cobain semua sambelnya ga sih?
        </p>
        <div class="flex justify-end gap-2">
          <button class="rounded-lg bg-blue-700 px-4 py-2 text-white">Ambil sendiri</button>
          <button class="rounded-lg bg-green-700 px-4 py-2 text-white">Bungkus</button>
        </div>
      </section>
    </div>
    <div class="relative flex gap-2">
      <p
        class="absolute -left-2 -top-2 rounded-br-2xl rounded-tl-2xl border-4 border-white bg-yellow-300 px-5 py-1"
      >
        Recommended
      </p>
      <img src="@/assets/sosis-bakar.webp" alt="sosis-bakar" class="w-56 object-cover" />
      <section class="flex flex-col p-3 font-jost">
        <p class="mb-2 font-messiri text-3xl">Sosis Bakar Sambal Mangga</p>
        <p class="mb-1 text-green-600">Rp 15k - Rp 25k</p>
        <p class="flex-grow">
          Sosis bakar, dengan pilihan sambal mangga, sambal nanas atau saus sambal mayo. Wajib
          cobain semua sambelnya ga sih?
        </p>
        <div class="flex justify-end gap-2">
          <section class="flex flex-grow items-center self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="h-6 w-6 text-yellow-400"
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clip-rule="evenodd"
              />
            </svg>
            <p class="ml-1">4.8</p>
          </section>
          <button class="rounded-lg bg-blue-700 px-4 py-2 text-white">Ambil sendiri</button>
          <button class="rounded-lg bg-green-700 px-4 py-2 text-white">Bungkus</button>
        </div>
      </section>
    </div>
    <div class="flex gap-2">
      <img src="@/assets/sosis-bakar.webp" alt="sosis-bakar" class="w-56 object-cover" />
      <section class="flex flex-col p-3 font-jost">
        <p class="mb-2 font-messiri text-3xl">Sosis Bakar Sambal Mangga</p>
        <p class="mb-1 text-green-600">Rp 15k - Rp 25k</p>
        <p class="flex-grow">
          Sosis bakar, dengan pilihan sambal mangga, sambal nanas atau saus sambal mayo. Wajib
          cobain semua sambelnya ga sih?
        </p>
        <div class="flex justify-end gap-2">
          <button class="rounded-lg bg-blue-700 px-4 py-2 text-white">Ambil sendiri</button>
          <button class="rounded-lg bg-green-700 px-4 py-2 text-white">Bungkus</button>
        </div>
      </section>
    </div>
  </div>
</template>
