<script setup lang="ts">
import IconTrash from '../assets/icons/icon-trash.svg';

import { Prompt } from '../types';

defineProps<{
  prompt: Prompt;
}>();
</script>

<template>
  <div class="m-4 p-4 bg-slate-100">
    <p>ID: {{ prompt.id }}</p>
    <p>User: {{ prompt.userId }}</p>
    <p>Prompt: {{ prompt.prompt }}</p>
    <IconTrash class="text-xl" />
  </div>
</template>
