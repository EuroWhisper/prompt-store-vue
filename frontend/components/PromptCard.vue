<script setup lang="ts">
import IconTrash from '../assets/icons/icon-trash.svg';

import { Prompt } from '../types';

const props = defineProps<{
  prompt: Prompt;
}>();

const isModalOpen = ref(false);

const emit = defineEmits(['promptDeleted']);

const confirmDelete = async () => {
  await $fetch(`http://localhost:8000/prompt/${props.prompt.id.toString()}`, {
    method: 'DELETE',
  });
  emit('promptDeleted');

  isModalOpen.value = false;
};

const handleDelete = () => {
  isModalOpen.value = true;
};

const handleCloseModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <div class="m-4 p-4 bg-slate-100">
    <p>ID: {{ prompt.id }}</p>
    <p>User: {{ prompt.userId }}</p>
    <p>Prompt: {{ prompt.prompt }}</p>
    <IconTrash class="text-xl" @click="handleDelete" />
  </div>
  <Modal v-if="isModalOpen" @modalClosed="handleCloseModal"
    ><h1>Are you sure you want to delete?</h1>
    <button @click="confirmDelete">Yes</button>
    <button @click="handleCloseModal">No</button></Modal
  >
</template>
