import axiosInit from "@/api";
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useGetProductStore = defineStore("getProduct", () => {
  const products = ref();

  const getterProducts = computed(() => products.value);

  const getProducts = async () => {
    const response = await axiosInit.get("products");
    products.value = response.data;
    console.log("from store", products);
  };

  return {
    getProducts,
    products,
    getterProducts,
  };
});
