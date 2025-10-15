<template>
  <header>
    <div class="container header">
      <div class="button">Library</div>
      <div class="button">Sign Out</div>
    </div>
    <section>
      <div class="container panel-holder">
        <button class="panel" @click="$emit('activate-home')">Home</button>
        <button class="panel" @click="$emit('activate-search')">Search</button>
        <button class="panel" @click="$emit('activate-shell')">My shell</button>
      </div>
    </section>
  </header>
</template>
<script>
export default {
  emits: ['activate-home', 'activate-search', 'activate-shell'],
}
</script>

<style scoped>
header {
  background-color: #fdf3ea;
  border-bottom: 1px solid #ccb9ac;
  padding-bottom: 1rem;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
}

.header {
  width: 80%;
  height: 10rem;
}

.button {
  border: 1px solid #d7c4b5;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
}

.button:hover {
  background-color: #88766d;
  color: #fdf3ea;
  font-size: large;
}

.panel-holder {
  border-radius: 1rem;
  background-color: #e7d5c5;
  width: 50%;
  height: 3rem;
  padding: 1.5rem;
}

.panel {
  border: none;
  background-color: #e7d5c5;
  width: 30%;
  border-radius: 12px;
  color: #645047;
  cursor: pointer;
}

.panel:hover {
  background-color: #fdf3ea;
  border-radius: 12px;
  width: 33%;
  height: 2.5rem;
}
</style>
