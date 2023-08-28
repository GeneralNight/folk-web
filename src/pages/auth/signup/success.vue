<script lang="ts" setup>
definePageMeta({ layout: "auth" });
</script>

<template>
  <div class="flex flex-col gap-12 w-full items-center">
    <img src="~/assets/imgs/Logo.png" class="h-8 lg:h-9 xl:h-10" />
    <div class="flex flex-col gap-8 w-full">
      <div class="flex flex-col items-center gap-4">
        <h1 class="font-bold text-xl sm:text-3xl xl:text-4xl">
          Conta criada com sucesso!
        </h1>
        <span class="opacity-75 text-sm sm:text-lg">
          Um e-mail de confirmação foi enviado para <b>example@gmail.com</b>
        </span>
      </div>

      <DefaultButtonFinish
        label="Acessar plataforma"
        :enabled="true"
        :type="'button'"
        @clicked="navigateTo('/dashboard')"
      />
    </div>
  </div>
</template>
