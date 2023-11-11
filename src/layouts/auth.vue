<template>
  <q-layout view="hHh lpR fff">
    <q-page-container
      class="tw-max-w-7xl 2xl:tw-max-w-8xl tw-w-full md:tw-px-10 q-mx-auto"
    >
      <q-header v-if="showHeader">
        <q-toolbar
          class="bg-white tw-border-b tw-border-[#f0f0f0] tw-shadow-xl tw-justify-center tw-px-8 tw-py-3"
        >
          <div
            class="tw-flex-shrink-0 tw-flex tw-items-center tw-max-w-8xl tw-w-full tw-justify-between 2xl:tw-px-10 " 
          >
            <router-link :to="{ name: 'Shop' }">
              <img
                src="/logo/favicon.png"
                alt="Logo"
                class="sm:tw-hidden tw-w-14 tw-h-14"
              />
              <img
                src="/logo/FINAL-02.png"
                alt="Logo"
                class="tw-hidden sm:tw-block tw-w-38  tw-p-1"
              />
            </router-link>
            <q-btn
              class="rounded-xs q-px-lg text-weight-semibold"
              no-caps
              outline
              color="info"
              label="Sign out"
              @click="logout"
            />
          </div>
        </q-toolbar>
      </q-header>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import { watch, ref, onMounted } from 'vue';
import auth from '@/use/auth';
import { useRouter } from 'vue-router';
import { showMessage } from '@/utils/notify';

const showHeader = ref(false);

onMounted(async () => {
  if (auth.getToken('token')) {
    auth.token = auth.getToken('token');
    showHeader.value = true;
  } else {
    showHeader.value = false;
  }
});

watch(
  () => auth.token,
  () => {
    if (auth.token != '') {
      showHeader.value = true;
    }
  }
);
const router = useRouter();
const logout = () => {
  const res = auth.logout().then(() => {
    showHeader.value = false;
    router.push({
      name: 'Login',
    });
  });
};
</script>
