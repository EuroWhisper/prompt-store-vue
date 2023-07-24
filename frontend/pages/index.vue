<script setup lang="ts">
import { Prompt } from 'types';

const {
  data: prompts,
  pending,
  error,
  refresh,
} = await useFetch<Prompt[]>('http://localhost:8000/prompts');
</script>

<template>
  <div>
    <h1 class="text-xl">Prompt List</h1>
    <PromptForm @prompt-saved="refresh" />
    <div v-for="prompt in prompts">
      <PromptCard :prompt="prompt" />
    </div>
    <div v-if="pending">
      <p>Loading...</p>
    </div>
  </div>
</template>
