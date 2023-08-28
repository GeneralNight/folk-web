<script lang="ts" setup>
const props = defineProps<{
  variant: "info" | "warning" | "error" | "success";
  text: string;
  dismissible?: boolean;
}>();

const emits = defineEmits<{
  (e: "dismiss"): void;
}>();
</script>

<template>
  <div
    :class="`rounded-lg w-full py-3 sm:py-3 px-3 sm:px-5 flex items-center justify-between ${
      variant ?? 'info'
    }`"
  >
    <span class="font-bold text-sm sm:text-[16px]">{{ text }}</span>
    <button
      class="hover:brightness-95 duration-100"
      @click="emits('dismiss')"
      v-if="dismissible"
    >
      <NuxtIcon name="close" class="text-lg" />
    </button>
  </div>
</template>

<style scoped>
.info {
  @apply text-cyan-800 bg-[#9BE2EE];
}

.warning {
  @apply text-yellow-900 bg-[#FFC24C];
}

.error {
  @apply text-red-800 bg-[#F9B4B4];
}

.success {
  @apply text-emerald-900 bg-[#87DCC0];
}
</style>
