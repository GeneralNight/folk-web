<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const handleSignRecoveryPassword = () => {};

const focusedEmailInput = ref(false);
</script>

<template>
  <div
    class="flex flex-col justify-start items-start gap-10 px-[150px] py-20 overflow-y-scroll hide-scrollbar"
  >
    <img src="~/assets/imgs/Logo.png" class="h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-[36px]">Recupere sua senha</h1>
        <div class="flex items-center gap-2">
          <span class="opacity-75">Lembrou sua senha?</span>
          <NuxtLink to="/signin" class="text-yellow-400 font-bold">
            Fazer login
          </NuxtLink>
        </div>
      </div>
      <form
        @submit.prevent="handleSignRecoveryPassword()"
        class="flex flex-col items-center gap-10 w-full"
      >
        <div class="flex flex-col gap-7 w-full">
          <div class="flex flex-col w-full">
            <div
              class="flex flex-1 items-center gap-4 border border-opacity-50 rounded-lg pl-[15px]"
              :class="{
                'border-yellow-primary border-opacity-100': focusedEmailInput,
              }"
            >
              <NuxtIcon name="envelope" />
              <input
                @focusin="focusedEmailInput = true"
                @focusout="focusedEmailInput = false"
                type="text"
                class="py-3 w-full pr-[15px] outline-none rounded-lg"
                placeholder="Email de recuperação"
              />
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="text-yellow-400 font-bold text-lg rounded-lg bg-yellow-primary w-full py-3 customShadow hover:brightness-95 duration-100"
        >
          Recuperar senha
        </button>
      </form>
    </div>
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
}
</style>
