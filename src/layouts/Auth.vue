<script lang="ts" setup>
const route = useRoute();

const bgAside = computed(() => {
  switch (route.name) {
    case "signin":
      return "bgSignin";
    case "signup":
      return "bgSignup";
    case "recovery-password":
      return "bgRecovery";
  }
});
</script>

<template>
  <div class="flex items-center inset-0 bg-white h-[100vh] w-full">
    <div class="flex flex-col w-[50vw] h-full bg-white justify-center">
      <slot />
    </div>
    <div
      class="flex flex-col w-[50vw] bg-cover bg-center h-full customShadow fixed right-0"
      :class="bgAside"
    >
      <div class="inset-0 w-full h-full customBg"></div>
    </div>
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 5px 0px 15px 0px rgba(0, 0, 0, 0.25) inset;
}

.customBg {
  background: var(
    --bg-1,
    linear-gradient(
      180deg,
      rgba(35, 35, 35, 0.5) 0%,
      rgba(73, 31, 0, 0.25) 52.08%,
      rgba(35, 35, 35, 0.5) 100%
    )
  );
}
</style>
