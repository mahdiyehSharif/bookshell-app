<template>
  <button class="button" :class="{ dark: darkMode, light: !darkMode }"><slot></slot></button>
</template>

<script>
export default {
  props: ['darkMode'],
}
</script>

<style>
.button {
  border: 1px solid #d7c4b5;
  border-radius: 1rem;
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  margin: 0 1.5rem;
}

.button:hover {
  /* background-color: #88766d; */
  /* color: #fdf3ea; */
  font-size: medium;
}

.light {
  border: none;
  background-color: #f8ede0;
  color: #78472a;
}

.dark {
  border: none;
  background-color: #78472a;
  color: #d4ac8b;
}
</style>
