<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const formValues = ref({
  email: "",
  password: "",
});

const sendingData = ref(false);
const errors = ref(false);

const enabledToSubmit = computed(() => {
  return (
    formValues.value.email.length > 0 &&
    formValues.value.password.length > 5 &&
    isEmailValid(formValues.value.email)
  );
});

const handleSignIn = () => {
  if (!enabledToSubmit.value) {
    return;
  }
  sendingData.value = true;
  errors.value = false;
  setTimeout(() => {
    if (
      formValues.value.email === "folkvali@terra.com.br" &&
      formValues.value.password === "123456"
    ) {
      navigateTo("/dashboard");
    } else {
      sendingData.value = false;
      errors.value = true;
    }
  }, 5000);
};
</script>

<template>
  <div class="flex flex-col gap-10 w-full items-start">
    <img src="~/assets/imgs/Logo.png" class="h-8 lg:h-9 xl:h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-xl sm:text-3xl xl:text-4xl">
          Entrar na Folk Web
        </h1>
        <div class="flex items-center gap-2 text-sm sm:text-[16px]">
          <span class="opacity-75">Novo por aqui?</span>
          <NuxtLink to="/auth/signup" class="text-yellow-400 font-bold">
            Criar conta
          </NuxtLink>
        </div>
      </div>
      <form
        @submit.prevent="handleSignIn()"
        class="flex flex-col items-center gap-10 w-full"
      >
        <div class="flex flex-col gap-7 w-full">
          <DefaultAlertBadge
            v-if="errors"
            :variant="'error'"
            :text="'Credenciais inválidas'"
            :dismissible="true"
            @dismiss="errors = false"
          />
          <div class="flex flex-col w-full">
            <DefaultInputForm
              :type="'email'"
              :icon="'envelope'"
              :placeholder="'Email'"
              :error="
                formValues.email.length > 0 && !isEmailValid(formValues.email)
              "
              :errorLabel="'Informe um email válido!'"
              :disabled="sendingData"
              v-model:inputValue="formValues.email"
            />
          </div>
          <div class="flex flex-col w-full gap-4">
            <DefaultInputForm
              :type="'password'"
              :icon="'lock'"
              :placeholder="'Senha'"
              v-model:inputValue="formValues.password"
              :disabled="sendingData"
            />
            <div class="flex items-center justify-end">
              <NuxtLink
                to="/auth/recovery-password"
                class="font-bold text-yellow-400 text-sm sm:text-[16px]"
              >
                Esqueci minha senha
              </NuxtLink>
            </div>
          </div>
        </div>
        <DefaultButtonFinish
          label="Entrar"
          :enabled="enabledToSubmit && !sendingData"
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
