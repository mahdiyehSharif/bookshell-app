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
<style>
header {
  background-color: #fdf3ea;
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
  border: 1px solid #776254;
  border-radius: 1rem;
  padding: 8px 1rem;
  cursor: pointer;
}

.panel-holder {
  border: 1px solid #776254;
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
</style>
