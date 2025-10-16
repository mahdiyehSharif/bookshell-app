<template>
  <select class="writers" name="writers" id="writers">
    <option>All Writers</option>
    <option value="mahmoud" @click="$emit('sel-mahmoud')">احمد محمود</option>
    <option value="hedayat" @click="$emit('sel-hedayat')">صادق هدایت</option>
    <option value="choobak" @click="$emit('sel-choobak')">صادق چوبک</option>
    <option value="barahani" @click="$emit('sel-barahani')">رضا براهنی</option>
    <option value="dostoevsky" @click="$emit('sel-dostoevsky')">فئودور داستایوفسکی</option>
    <option value="tolstoy" @click="$emit('sel-tolstoy')">لئوتولستوی</option>
    <option value="daneshvar" @click="$emit('sel-daneshvar')">سیمین دانشور</option>
    <option value="backet" @click="$emit('sel-backet')">ساموئل بکت</option>
    <option value="austen" @click="$emit('sel-austen')">جین آستین</option>
  </select>
</template>

<script>
export default {
  emits: [
    'sel-mahmoud',
    'sel-hedayat',
    'sel-choobak',
    'sel-barahani',
    'sel-dostoevsky',
    'sel-tolstoy',
    'sel-daneshvar',
    'sel-backet',
    'sel-austen',
  ],
}
</script>

<style>
.writers {
  width: 70%;
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
