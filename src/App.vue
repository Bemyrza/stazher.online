<template>
  <component :is="currentHeader" v-if="!isLogin" />
  <div :class="is_bg ? 'main-router-2' : 'main-router'">
    <router-view />
  </div>
  <component :is="currentFooter" v-if="!isLogin" />
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import HeaderBar from '@/components/pages/HeaderBar.vue'
import AltHeaderBar from '@/components/pages/AltHeaderBar.vue'
import PageFooter from '@/components/pages/PageFooter.vue'
import AltPageFooter from '@/components/pages/AltPageFooter.vue'

const route = useRoute()
const isLogin = ref<boolean>(false)

const disabledHeader = ['/login', '/develop', '/ui-kit', '/registration', '/terms', '/policy']

const mainRoutes = ['/', '/partners', '/Students']

watch(
  () => route.params,
  () => {
    isLogin.value = disabledHeader.includes(route.path as string)
  }
)

const currentHeader = computed(() => (mainRoutes.includes(route.path) ? AltHeaderBar : HeaderBar))
const currentFooter = computed(() => (mainRoutes.includes(route.path) ? AltPageFooter : PageFooter))
const is_bg = computed(() => (mainRoutes.includes(route.path) ? true : false))

</script>

<style scoped lang="scss">
.main-router {
  display: flex;
  gap: 15px;
  background: $background-color;
  height: 100%;
  min-height: 100vh;
  padding: 20px;

  @media (max-width: 700px) {
    padding: 0;
  }
}

@media (max-width: $mobile-max-width) {
  .main-router {
    padding: 12px 0;
  }
}
</style>
