<template>
  <the-header v-model="selectedTab"></the-header>
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
import ShelfPanel from '@/components/shelf/ShelfPanel.vue'

export default {
  data() {
    return {
      selectedTab: 'home-panel',
    }
  },
  components: {
    TheHeader,
    HomePanel,
    SearchPanel,
    ShelfPanel,
  },
  methods: {
    homeActivated() {
      this.selectedTab = 'home-panel'
    },
    searchActivated() {
      this.selectedTab = 'search-panel'
    },
    shellActivated() {
      this.selectedTab = 'shelf-panel'
    },
  },
}
</script>
