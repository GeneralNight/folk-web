<script lang="ts" setup>
const props = defineProps<{
  label: string;
  inputValue: boolean;
  routeRedirect?: {
    label: string;
    path: string;
    blank?: boolean;
  };
}>();

const emits = defineEmits<{
  (e: "update:inputValue", val: boolean): void;
}>();
</script>

<template>
  <div class="flex items-center gap-2">
    <div
      class="w-5 h-5 rounded border border-opacity-50 bg-white duration-100 cursor-pointer text-yellow-400 flex items-center justify-center text-2xl"
      :class="{ 'bg-yellow-primary': inputValue }"
      @click="$emit('update:inputValue', !inputValue)"
    >
      <NuxtIcon name="check" v-if="inputValue" />
    </div>
    <div class="flex items-center gap-2 text-sm sm:text-[16px]">
      <span
        class="cursor-pointer"
        @click="$emit('update:inputValue', !inputValue)"
        >{{ label }}</span
      >
      <NuxtLink
        :to="`${routeRedirect.path}`"
        class="text-yellow-400 font-bold underline"
        :target="routeRedirect.blank ? ' _blank' : ''"
      >
        {{ routeRedirect.label }}
      </NuxtLink>
    </div>
  </div>
</template>
