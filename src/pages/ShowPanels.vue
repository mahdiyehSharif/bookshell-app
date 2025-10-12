<template>
  <the-header
    @activate-home="homeActivated"
    @activate-search="searchActivated"
    @activate-shell="shellActivated"
  ></the-header>
  <section>
    <keep-alive>
      <component :is="selectedTab"></component>
    </keep-alive>
  </section>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import HomePanel from '@/components/home/HomePanel.vue'
import SearchPanel from '@/components/search/SearchPanel.vue'
import ShellPanel from '@/components/shell/ShellPanel.vue'

export default {
  data() {
    return {
      selectedTab: '',
    }
  },
  components: {
    TheHeader,
    HomePanel,
    SearchPanel,
    ShellPanel,
  },
  methods: {
    homeActivated() {
      this.selectedTab = 'home-panel'
    },
    searchActivated() {
      this.selectedTab = 'search-panel'
    },
    shellActivated() {
      this.selectedTab = 'shell-panel'
    },
  },
}
</script>
