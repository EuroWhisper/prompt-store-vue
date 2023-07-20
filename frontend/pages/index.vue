<template>
  <div>
    <h1 class="text-xl">Prompt List</h1>
    <div v-for="prompt in prompts" class="p-12">
      <p>ID: {{ prompt.id }}</p>
      <p>User: {{ prompt.userId }}</p>
      <p>Prompt: {{ prompt.prompt }}</p>
    </div>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Prompt } from 'types';

const {
  data: prompts,
  pending,
  error,
} = await useFetch<Prompt[]>('http://localhost:8000/prompts');
</script>
