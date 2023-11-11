<template>
  <div class="q-pa-md tw-bg-[#d9dee3]">
    <q-layout view="hHh Lpr lff">
      <q-header>
        <q-toolbar
          class="bg-white tw-border-b tw-border-[#f0f0f0] tw-shadow-xl tw-justify-center tw-px-8 tw-py-3"
        >
          <div
            class="tw-flex-shrink-0 tw-flex tw-items-center tw-max-w-8xl tw-w-full tw-justify-between 2xl:tw-px-10"
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
                class="tw-hidden sm:tw-block tw-w-38 tw-p-1"
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

      <q-drawer
        v-model="states.leftDrawer"
        :width="350"
        :breakpoint="700"
        bordered
      >
        <div>
          <div
            class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-py-5"
          >
            <p class="tw-text-2xl tw-font-medium tw-capitalize">
              <i class="fa-solid fa-shapes tw-mr-1"></i> blocks
            </p>
            <button class="tw-mr-1.5" @click="toggleDrawer('leftDrawer')">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>
          <slot name="drawerLeft" />
        </div>
      </q-drawer>

      <q-drawer
        side="right"
        v-model="states.rightDrawer"
        bordered
        :width="280"
        :breakpoint="500"
      >
        <div>
          <div
            class="tw-flex tw-justify-between tw-items-center tw-p-2 tw-py-5"
          >
            <p class="tw-text-2xl tw-font-medium tw-capitalize">
              <i class="fa-solid fa-pen-to-square tw-mr-1"></i> Edit blocks
            </p>
            <button class="tw-mr-3" @click="toggleDrawer('rightDrawer')">
              <i class="fa-solid fa-xmark"></i>
            </button>
          </div>

          <slot name="drawerRight" />
        </div>
      </q-drawer>

      <q-page-container>
        <q-page padding>
          <slot name="content" />

          <div class="tw-fixed tw-left-0 tw-w-full tw-bottom-10 tw-z-20">
            <common-docks />
          </div>
        </q-page>
      </q-page-container>
    </q-layout>
  </div>
</template>
<script setup lang="ts">
import { onMounted, watch } from 'vue';
import { useBuilder } from '@/use/builder';
import auth from '@/use/auth';
import { useRouter, useRoute } from 'vue-router';

const { states, toggleDrawer } = useBuilder();

const route = useRoute();

const router = useRouter();
const logout = () => {
  const res = auth.logout().then(() => {
    router.push({
      name: 'Login',
    });
  });
};
</script>
<style lang="scss">
.q-drawer-container {
  aside {
    position: fixed;
  }
}
</style>
