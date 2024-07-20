<template>
  <h1 class="text-2xl font-bold mb-16">Detail Product</h1>
  <div class="flex flex-col md:flex-row gap-8">
    <img :src="product.image" class="max-w-40 md:max-w-72" alt="image" />
    <div class="flex flex-col gap-y-2">
      <h2 class="font-bold text-xl">{{ product.title }}</h2>
      <div class="flex gap-x-2 text-sm text-gray-500">
        <p>Sold {{ product.rating.count }}</p>
        <p>Rating {{ product.rating.rate }}</p>
      </div>
      <div class="text-green-800 text-xl font-bold my-4">
        &dollar;{{ product.price }}
      </div>
      <div class="leading-relaxed">
        {{ product.description }}
      </div>
      <div class="mt-2">
        <button
          type="button"
          class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import axiosInit from "@/api";
import { ref } from "vue";
import { useRoute } from "vue-router";

const product = ref();
const route = useRoute();

const getProductId = async () => {
  const response = await axiosInit.get(`products/${route.query.id}`);
  product.value = response.data;
  console.log(product.value);
};

getProductId();
</script>
