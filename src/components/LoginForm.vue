<template>
  <div class="sm:w-max w-full p-4 mx-auto bg-blue-200/30 rounded-lg">
    <div class="flex flex-col p-8 bg-white rounded-lg">
      <h1 class="text-xl font-bold leading-relaxed">Hi</h1>
      <Form novalidate @submit="handleLogin" class="flex flex-col gap-y-6">
        <div class="flex flex-col gap-y-2">
          <label for="username">Username</label>
          <Field
            type="text"
            v-model="username"
            placeholder="username"
            name="username"
            id="username"
            class="px-3 py-1 border border-blue-300 focus:border-blue-400 rounded-lg"
            :rules="validateField"
          />
          <ErrorMessage name="username" class="text-sm text-pink-600" />
        </div>
        <div class="flex flex-col gap-y-2">
          <label for="password">Password</label>
          <Field
            name="password"
            type="password"
            v-model="password"
            placeholder="******"
            id="password"
            class="px-3 py-1 border border-blue-300 focus:border-blue-400 rounded-lg"
            :rules="validateField"
          />
          <ErrorMessage name="password" class="text-sm text-pink-600" />
        </div>
        <div class="flex gap-x-2 mt-3">
          <button
            class="bg-cyan-200 hover:bg-cyan-500 border border-cyan-300 px-2 py-1 rounded-lg"
          >
            Submit
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>
<script setup>
import { useUserStore } from "@/stores/UserStore";
import { Form, Field, ErrorMessage } from "vee-validate";
import { ref } from "vue";

const username = ref("");
const password = ref("");

const validateField = (value) => {
  if (!value && !value.trim()) {
    return "this field is required";
  }
  return true;
};

const userStore = useUserStore();
const handleLogin = (values) => {
  // userStore.loginUser(username.value, password.value);
  console.log(values);
};
</script>
