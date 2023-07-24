<script setup lang="ts">
const emit = defineEmits(['promptSaved']);

const createPrompt = async (fields: any) => {
  await $fetch('http://localhost:8000/prompt', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(fields),
  });
  emit('promptSaved');
};
</script>

<template>
  <FormKit type="form" @submit="createPrompt">
    <div class="flex">
      <div class="mr-4">
        <FormKit
          type="text"
          name="prompt"
          label="Prompt"
          validation="required"
        />
      </div>
      <FormKit type="text" name="seed" label="Seed (optional)" />
    </div>
  </FormKit>
</template>
