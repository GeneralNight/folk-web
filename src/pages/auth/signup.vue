<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const formValues = ref({
  firstName: "",
  lastName: "",
  cpf: "",
  email: "",
  whatsapp: "",
  password: "",
  confirmPassword: "",
  acceptedTerms: false,
});

const handleSignUp = () => {
  console.log(formValues.value);
};
</script>

<template>
  <div class="flex flex-col gap-10 w-full items-start">
    <img src="~/assets/imgs/Logo.png" class="h-8 lg:h-9 xl:h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-xl sm:text-3xl xl:text-4xl">
          Crie sua conta
        </h1>
        <div class="flex items-center gap-2 text-sm sm:text-[16px]">
          <span class="opacity-75"> Já possui uma conta? </span>
          <NuxtLink to="/auth/signin" class="text-yellow-400 font-bold">
            Fazer login
          </NuxtLink>
        </div>
      </div>
      <form
        @submit.prevent="handleSignUp()"
        class="flex flex-col items-center gap-10 w-full"
      >
        <div class="flex flex-col w-full gap-7">
          <DefaultInputForm
            :type="'text'"
            :icon="'user'"
            :placeholder="'Primeiro nome'"
            v-model:inputValue="formValues.firstName"
          />

          <DefaultInputForm
            :type="'text'"
            :icon="'user'"
            :placeholder="'Sobrenome'"
            v-model:inputValue="formValues.lastName"
          />

          <DefaultInputForm
            :type="'text'"
            :icon="'postcard'"
            :placeholder="'CPF'"
            v-model:inputValue="formValues.cpf"
          />

          <DefaultInputForm
            :type="'email'"
            :icon="'envelope'"
            :placeholder="'Email'"
            v-model:inputValue="formValues.email"
          />

          <DefaultInputForm
            :type="'tel'"
            :icon="'whatsapp'"
            :placeholder="'Whatsapp'"
            v-model:inputValue="formValues.whatsapp"
          />

          <DefaultInputForm
            :type="'password'"
            :icon="'lock'"
            :placeholder="'Senha'"
            v-model:inputValue="formValues.password"
          />

          <DefaultInputForm
            :type="'password'"
            :icon="'lock'"
            :placeholder="'Confirmar senha'"
            v-model:inputValue="formValues.confirmPassword"
          />
          <DefaultCheckBoxInput
            :label="'Eu aceito os'"
            v-model:inputValue="formValues.acceptedTerms"
            :routeRedirect="{
              label: 'Termos e Condições',
              path: '/terms',
              blank: true,
            }"
          />
        </div>
        <DefaultButtonFinish
          label="Criar conta"
          :enabled="true"
          :type="'submit'"
        />
      </form>
    </div>
  </div>
</template>

<style scoped>
.inputBox {
  @apply flex flex-1 items-center gap-4 border border-opacity-50 rounded-lg pl-[15px] w-full;
}

.focused {
  @apply border-yellow-primary border-opacity-100;
}

input {
  @apply py-3 w-full pr-[15px] outline-none rounded-lg;
}
</style>
