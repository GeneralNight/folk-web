<script lang="ts" setup>
definePageMeta({ layout: "auth" });

const firstNameInputFocused = ref(false);
const lastNameInputFocused = ref(false);
const cpfInputFocused = ref(false);
const emailInputFocused = ref(false);
const whatsappInputFocused = ref(false);
const passwordInputFocused = ref(false);
const confirmPasswordInputFocused = ref(false);

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

const handleSignUp = () => {};
</script>

<template>
  <div
    class="flex flex-col justify-start items-start gap-10 px-[150px] py-20 overflow-y-scroll hide-scrollbar"
  >
    <img src="~/assets/imgs/Logo.png" class="h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col gap-1">
        <h1 class="font-bold text-[36px]">Crie sua conta</h1>
        <div class="flex items-center gap-2">
          <span class="opacity-75">Já possui uma conta?</span>
          <NuxtLink to="/signin" class="text-yellow-400 font-bold">
            Fazer login
          </NuxtLink>
        </div>
      </div>
      <form
        @submit.prevent="handleSignUp()"
        class="flex flex-col items-center gap-10 w-full"
      >
        <div class="flex flex-col w-full gap-7">
          <div class="inputBox" :class="{ focused: firstNameInputFocused }">
            <NuxtIcon name="user" />
            <input
              v-model="formValues.firstName"
              type="text"
              placeholder="Primeiro nome"
              @focusin="firstNameInputFocused = true"
              @focusout="firstNameInputFocused = false"
            />
          </div>
          <div class="inputBox" :class="{ focused: lastNameInputFocused }">
            <NuxtIcon name="user" />
            <input
              v-model="formValues.lastName"
              type="text"
              placeholder="Sobrenome"
              @focusin="lastNameInputFocused = true"
              @focusout="lastNameInputFocused = false"
            />
          </div>
          <div class="inputBox" :class="{ focused: cpfInputFocused }">
            <NuxtIcon name="postcard" />
            <input
              v-model="formValues.cpf"
              type="text"
              placeholder="CPF"
              @focusin="cpfInputFocused = true"
              @focusout="cpfInputFocused = false"
            />
          </div>
          <div class="inputBox" :class="{ focused: emailInputFocused }">
            <NuxtIcon name="envelope" />
            <input
              v-model="formValues.email"
              type="email"
              placeholder="Email"
              @focusin="emailInputFocused = true"
              @focusout="emailInputFocused = false"
            />
          </div>
          <div class="inputBox" :class="{ focused: whatsappInputFocused }">
            <NuxtIcon name="whatsapp" />
            <input
              v-model="formValues.whatsapp"
              type="tel"
              placeholder="Whatsapp"
              @focusin="whatsappInputFocused = true"
              @focusout="whatsappInputFocused = false"
            />
          </div>
          <div class="inputBox" :class="{ focused: passwordInputFocused }">
            <NuxtIcon name="lock" />
            <input
              v-model="formValues.password"
              type="password"
              placeholder="Senha"
              @focusin="passwordInputFocused = true"
              @focusout="passwordInputFocused = false"
            />
          </div>
          <div
            class="inputBox"
            :class="{ focused: confirmPasswordInputFocused }"
          >
            <NuxtIcon name="lock" />
            <input
              v-model="formValues.confirmPassword"
              type="password"
              placeholder="Confirmar senha"
              @focusin="confirmPasswordInputFocused = true"
              @focusout="confirmPasswordInputFocused = false"
            />
          </div>
          <div class="flex items-center gap-2">
            <div
              class="w-5 h-5 rounded border border-opacity-50 bg-white duration-100 cursor-pointer text-yellow-400 flex items-center justify-center text-2xl"
              :class="{ 'bg-yellow-primary': formValues.acceptedTerms }"
              @click="formValues.acceptedTerms = !formValues.acceptedTerms"
            >
              <NuxtIcon name="check" v-if="formValues.acceptedTerms" />
            </div>
            <div class="flex items-center gap-2">
              <span
                class="cursor-pointer"
                @click="formValues.acceptedTerms = !formValues.acceptedTerms"
                >Eu aceito os</span
              >
              <NuxtLink
                to="/terms"
                class="text-yellow-400 font-bold underline"
                target="_blank"
              >
                Termos e Condições
              </NuxtLink>
            </div>
          </div>
        </div>
        <button
          type="submit"
          class="text-yellow-400 font-bold text-lg rounded-lg bg-yellow-primary w-full py-3 customShadow hover:brightness-95 duration-100"
        >
          Criar conta
        </button>
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
