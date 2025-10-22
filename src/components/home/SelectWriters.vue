<template>
  <select :value="modelValue" @change="updateValue" class="writers" name="writers" id="writers">
    <option>All Writers</option>
    <option value="mahmoud">احمد محمود</option>
    <option value="hedayat">صادق هدایت</option>
    <option value="choobak">صادق چوبک</option>
    <option value="barahani">رضا براهنی</option>
    <option value="dostoevsky">فئودور داستایوفسکی</option>
    <option value="tolstoy">لئوتولستوی</option>
    <option value="daneshvar">سیمین دانشور</option>
    <option value="backet">ساموئل بکت</option>
    <option value="austen">جین آستین</option>
  </select>
</template>

<script>
export default {
  props: ['modelValue'],
  methods: {
    updateValue(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>

<style>
.writers {
  width: 80%;
  border: none;
  border-radius: 1rem;
  background-color: #f1e6d9;
  padding: 8px;
}

.writers:focus {
  outline: none;
  box-shadow: none;
}

/* .writers option:hover {
  background-color: #d6a17d;
} */
</style>
