<script setup lang="ts">
import IconTrash from '../assets/icons/icon-trash.svg';

import { Prompt } from '../types';

const props = defineProps<{
  prompt: Prompt;
}>();

const emit = defineEmits(['promptDeleted']);

const deletePrompt = async () => {
  await $fetch(`http://localhost:8000/prompt/${props.prompt.id.toString()}`, {
    method: 'DELETE',
  });
  emit('promptDeleted');
};
</script>

<template>
  <div class="m-4 p-4 bg-slate-100">
    <p>ID: {{ prompt.id }}</p>
    <p>User: {{ prompt.userId }}</p>
    <p>Prompt: {{ prompt.prompt }}</p>
    <IconTrash class="text-xl" @click="deletePrompt" />
  </div>
</template>
