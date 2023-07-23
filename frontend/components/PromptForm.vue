<script setup lang="ts"></script>

<template>
  <FormKit type="form">
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
