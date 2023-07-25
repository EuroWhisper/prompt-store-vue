<script setup lang="ts">
const emit = defineEmits(['modalClosed']);

const handleClose = () => {
  emit('modalClosed');
};
</script>

<template>
  <Teleport to="body">
    <div
      class="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-slate-400 bg-opacity-80"
      @click.self="handleClose"
    >
      <div class="bg-white p-4 rounded-lg">
        <slot />
      </div>
    </div>
  </Teleport>
</template>
