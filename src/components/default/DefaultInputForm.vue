<script lang="ts" setup>
const props = defineProps<{
  icon: string;
  type: string;
  placeholder: string;
  inputValue: string;
  error?: boolean;
  errorLabel?: string;
  disabled?: boolean;
}>();

const emits = defineEmits<{
  (e: "update:inputValue", val: string): void;
}>();

const isFocused = ref(false);
</script>

<template>
  <div class="flex flex-col gap-2">
    <div
      class="flex flex-1 items-center gap-4 border border-opacity-50 rounded-lg pl-[15px] bg-white text-sm sm:text-[16px]"
      :class="{
        'border-yellow-primary border-opacity-100': isFocused,
        'border-red-600 border-opacity-100': error,
        'opacity-50 pointer-events-none': disabled,
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
    <div
      class="flex items-center gap-2 text-sm text-red-600 font-semibold"
      v-if="error && errorLabel?.length"
    >
      <NuxtIcon name="info" />
      <span class="">{{ errorLabel }}</span>
    </div>
  </div>
</template>
