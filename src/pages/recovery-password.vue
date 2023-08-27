<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const formValues = ref({
  email: "",
});

const handleSignRecoveryPassword = () => {
  console.log(formValues.value);
};
</script>

<template>
  <div class="flex flex-col gap-10 w-full items-start">
    <img src="~/assets/imgs/Logo.png" class="h-8 lg:h-9 xl:h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-xl sm:text-3xl xl:text-4xl">
          Recupere sua senha
        </h1>
        <div class="flex items-center gap-2 text-sm sm:text-[16px]">
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
            <DefaultInputForm
              :type="'email'"
              :icon="'envelope'"
              :placeholder="'Email de recuperação'"
              v-model:inputValue="formValues.email"
            />
          </div>
        </div>
        <DefaultButtonFinish
          label="Recuperar senha"
          :enabled="true"
          :type="'submit'"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.customShadow {
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.25);
}
</style>
