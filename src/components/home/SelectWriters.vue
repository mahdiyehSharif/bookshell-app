<template>
  <select :value="modelValue" @change="updateValue" class="writers" name="writers" id="writers">
    <option>All Writers</option>
    <option value="w1">احمد محمود</option>
    <option value="w2">صادق هدایت</option>
    <option value="w3">صادق چوبک</option>
    <option value="w4">رضا براهنی</option>
    <option value="w5">فئودور داستایوفسکی</option>
    <option value="w6">لئوتولستوی</option>
    <option value="w7">سیمین دانشور</option>
    <option value="w8">ساموئل بکت</option>
    <option value="w9">جین آستین</option>
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
