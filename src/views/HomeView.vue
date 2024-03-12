<!-- eslint-disable no-unused-vars -->
<script setup>
import HeaderView from '../components/header/HeaderView.vue';
import Banner from '../components/homepage/BannerVue.vue';
import FLex from '../components/homepage/FlexBox.vue';
import Night from '../components/homepage/NightBox.vue';
import Fresh from '../components/homepage/FresAir.vue';
</script>

<template>
  <div class="wrapper">
    <HeaderView />  
<Banner />
<FLex />
<Night />
<Fresh />
  </div>
</template>

<style>
@import url("../assets/main.css");
</style>