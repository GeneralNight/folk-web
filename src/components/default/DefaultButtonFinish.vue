<script lang="ts" setup>
const props = defineProps<{
  type: "submit" | "button";
  enabled: boolean;
  label: string;
}>();
</script>

<template>
  <button
    :type="type"
    class="text-yellow-400 font-bold text-lg rounded-lg bg-yellow-primary w-full py-2 sm:py-3 customShadow hover:brightness-95 duration-100"
  >
    Entrar
  </button>
</template>
