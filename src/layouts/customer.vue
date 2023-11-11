<template>
  <q-layout view="lHh Lpr lFf" class="tw-bg-white">
    <q-header class="bg-white tw-border-b-2 tw-border-[#f0f0f0]">
      <q-toolbar
        class="tw-py-3 md:tw-px-8 tw-px-4 tw-items-center tw-space-x-2"
      >
        <div class="tw-flex-shrink-0 tw-flex tw-items-center">
          <router-link :to="{ name: 'CustomerDashboard' }">
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
        </div>

        <div
          class="lg:tw-hidden md:tw-hidden flex tw-justify-center tw-items-center"
          @click="showDrawer"
        >
          <div
            class="tw-shadow-lg tw-rounded-full tw-border-solid tw-border-2 tw-border-sky-300"
          >
            <q-icon
              name="logout"
              size="xs"
              class="bg-white tw-rounded-full tw-p-2 tw-transition-all tw-text-gray-350"
            />
          </div>
        </div>
        <q-space />
        <portal-header />
      </q-toolbar>

      <!-- subnavbar ends -->
    </q-header>
    <q-drawer v-model="sidebarOpen" :width="250" :breakpoint="700">
      <!-- Mobile navigation -->
      <div class="tw-inset-0 tw-flex tw-flex-col">
        <!-- <div
          class="tw-absolute tw-top-3 -tw-right-4 tw-z-30 tw-justify-center tw-items-center"
          @click="sidebarOpen = false"
        >
          <div class="tw-shadow-lg tw-rounded-full">
            <q-icon
              name="logout"
              size="xs"
              class="bg-white tw-rounded-full tw-bg-red-600 tw-p-2 tw-transform tw-rotate-180 tw-transition-all"
            />
          </div>
        </div> -->
        <div
          class="tw-bg-white tw-py-2 tw-px-4 md:tw-px-7 tw-relative md:tw-hidden"
        >
          <router-link
            :to="{ name: 'Dashboard' }"
            class="focus:tw-outline-none"
          >
            <img
              src="/logo/favicon.png"
              alt="Logo"
              class="tw-w-14 tw-h-14"
            />
          </router-link>
        </div>
        <nav class="tw-py-4 tw-mr-4">
          <template v-for="item in navigation" :key="item.name">
            <q-item
              class="tw-cursor-pointer tw-transition-all tw-flex tw-items-center tw-text-gray-350 tw-px-4 tw-w-full tw-min-h-0 tw-h-8 tw-rounded-r-3xl hover:!tw-bg-gray-10"
              active-class="tw-bg-[#AAD8FA] hover:!tw-bg-[#AAD8FA] tw-font-semibold tw-text-gray-300"
              :to="{ name: item.to }"
              v-if="item.name !== 'Staff Management'"
            >
              <div
                class="tw-h-8 tw-w-8 -tw-ml-1.5 tw-rounded-full tw-flex tw-items-center tw-justify-center tw-flex-shrink-0"
              >
                <q-icon
                  size="18px"
                  :name="route.name === item.name ? item.activeIcon : item.icon"
                  class="tw-flex-shrink-0 tw-w-4.5"
                />
              </div>
              <span class="tw-text-md tw-pl-3 tw-whitespace-nowrap">{{
                item.name
              }}</span>
            </q-item>

            <q-expansion-item
              dense
              dense-toggle
              v-if="item.name === 'Staff Management'"
              :icon="item.icon"
              :label="item.name"
              class="sidebar-expand tw-overflow-hidden"
            >
              <template v-for="link in item.innerLink" :key="link.name">
                <q-item
                  class="tw-cursor-pointer tw-transition-all md:tw-flex tw-items-center tw-text-gray-350 tw-w-full tw-min-h-0 tw-h-8 tw-pl-10 tw-overflow-hidden tw-rounded-r-3xl hover:!tw-bg-gray-10 hover:!tw-bg-[#AAD8FA] tw-font-semibold"
                  :to="{ name: link.to }"
                  active-class="tw-bg-[#AAD8FA]"
                >
                  <span
                    class="tw-text-sm md:tw-text-md tw-pl-3 tw-whitespace-nowrap"
                    >{{ link.name }}</span
                  >
                </q-item>
              </template>
            </q-expansion-item>
          </template>
        </nav>
        <div class="tw-w-14 tw-flex-shrink-0" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </div>
    </q-drawer>

    <q-page-container class="tw-min-h-screen tw-flex tw-flex-row">
      <main-customer-sidebar />
      <div class="tw-w-full tw-p-6 tw-mb-8">
        <main class="tw-flex-1">
          <router-view />
        </main>
      </div>
    </q-page-container>
    <q-footer class="tw-border-t tw-border-[#f0f0f0]">
      <div class="tw-grid-cols-6">
        <nav
          class="tw-grid-cols-5 tw-px-5 tw-flex-2 tw-bg-white tw-text-gray-350 tw-drop-shadow-sm tw-grid tw-gap-10 tw-items-center tw-justify-between sm:tw-justify-center sm:tw-space-x-6 tw-w-full tw-z-20 sm:tw-hidden"
        >
          <q-item
            dense
            class="tw-transition-all tw-py-2 tw-max-w-fit tw-px-2 tw-text-xs tw-text-center tw-font-medium tw-flex tw-flex-col tw-items-center tw-justify-center tw-whitespace-nowrap"
            active-class="tw-font-semibold tw-text-primary bg-transparent "
            exact
            v-for="item in mobileNavigation"
            :key="item.name"
            :to="{ name: item.to }"
          >
            <div class="flex tw-items-center tw-justify-center tw-w-7">
              <q-icon
                size="20px"
                :name="route.name === item.name ? item.activeIcon : item.icon"
                class="tw-flex-shrink-0 tw-w-4.5"
              />
            </div>
            <p class="tw-w-16 tw-pt-1">{{ item.name }}</p>
          </q-item>
        </nav>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue';
import { ref, reactive, onMounted, watch } from 'vue';
import auth from '@/use/auth';
import { useShop } from '../use/shop';
import { useRouter, useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();
const isEmailVerified = ref(false);

const { shops, getShops, miniState } = useShop();
onMounted(() => {
  getShops();
  console.log(shops.value);
});
const navigation = reactive([
  {
    name: 'Dashboard',
    to: 'Dashboard',
    icon: 'o_dashboard',
    activeIcon: 'dashboard',
  },
  {
    name: 'Manage My Account',
    icon: 'o_outbox',
    activeIcon: 'outbox',
    innerLink: [
      {
        name: 'Staff',
        to: 'Staff',
      },
      {
        name: 'Roles',
        to: 'Roles',
      },
      {
        name: 'Permission',
        to: 'Permission',
      },
    ],
  },
  {
    name: 'Products',
    to: 'Products',
    icon: 'o_inventory_2',
    activeIcon: 'inventory_2',
  },
  {
    name: 'Delivery Men',
    to: 'DeliveryMen',
    icon: 'o_local_shipping',
    activeIcon: 'local_shipping',
  },
  {
    name: 'Customers',
    to: 'Customers',
    icon: 'o_people',
    activeIcon: 'people',
  },
  {
    name: 'Reports',
    to: 'Reports',
    icon: 'bar_chart',
    activeIcon: 'o_bar_chart',
  },
  {
    name: 'Warehouses',
    to: 'Singular WarehouseList',
    icon: 'o_warehouse',
    activeIcon: 'warehouse',
  },
]);
const mobileNavigation = reactive([
  {
    name: 'Dashboard',
    to: 'Dashboard',
    icon: 'o_dashboard',
    activeIcon: 'dashboard',
  },
  {
    name: 'Orders',
    to: 'Orders',
    icon: 'o_outbox',
    activeIcon: 'outbox',
  },
  {
    name: 'Products',
    to: 'Products',
    icon: 'o_inventory_2',
    activeIcon: 'inventory_2',
  },
  {
    name: 'Delivery',
    to: 'DeliveryMen',
    icon: 'o_local_shipping',
    activeIcon: 'local_shipping',
  },
  {
    name: 'Reports',
    to: 'Reports',
    icon: 'bar_chart',
    activeIcon: 'o_bar_chart',
  },
  // {
  //   name: 'Warehouses',
  //   to: 'Singular WarehouseList',
  //   icon: 'o_warehouse',
  //   activeIcon: 'warehouse',
  // },
]);
const sidebarOpen = ref(false);
const showDrawer = () => {
  sidebarOpen.value = !sidebarOpen.value;
  console.log(sidebarOpen.value, 'showDrawer');
};
const resendEmailVerifLink = () => {
  auth.verifyEmail();
};

const getEmailVerifiedStatus = () => {
  const emailVerif = auth.getUserData();
  return !!emailVerif.email_verified_at;
};
onMounted(() => {
  // isEmailVerified.value = getEmailVerifiedStatus();
});
watch(
  () => isEmailVerified,
  () => {
    if (isEmailVerified.value) {
      isEmailVerified.value = getEmailVerifiedStatus();
    }
  }
);
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
    .shopnameintoolbar p{
      margin-left: 0px !important;
    }
}
</style>
