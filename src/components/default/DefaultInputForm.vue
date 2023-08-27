<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  type: string;
  placeholder: string;
  inputValue: string;
  error?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:inputValue", val: string): void;
}>();

const isFocused = ref(false);
</script>

<template>
  <div
    class="flex flex-1 items-center gap-4 border border-opacity-50 rounded-lg pl-[15px] bg-white text-sm sm:text-[16px]"
    :class="{
      'border-yellow-primary border-opacity-100': isFocused,
    }"
  >
    <NuxtIcon :name="icon" />
    <input
      @focusin="isFocused = true"
      @focusout="isFocused = false"
      :type="type"
      :value="inputValue"
      @input="(e)=>emits('update:inputValue', (e.target as HTMLInputElement).value)"
      class="py-3 w-full pr-[15px] outline-none rounded-lg"
      :placeholder="placeholder"
    />
  </div>
</template>
