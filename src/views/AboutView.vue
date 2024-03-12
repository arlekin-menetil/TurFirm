<script setup>
import HeaderView from '../components/header/HeaderView.vue'
</script>
<template>
<div class="About">
<HeaderView />

</div>
</template>

<style>
.card{
  position: relative;
  width: 256px;
  height: 280px;
  overflow: hidden;
}
.card .imBx,
.card .contentBx
{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.card .imBx img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card .contentBx::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transform: scaleY(0);
  transition: transform 0.5s ease-in-out;
  transform-origin: bottom;
}
.card:hover .contentBx::before{
  transform: scaleY(1);
  transition: transform 0.5s ease-in-out;
  transform-origin: top;
}
.card .contentBx{
display: flex;
justify-content: center;
align-items: center;
text-align: center;
}
.card .contentBx .content{
  position: relative;
  padding: 30px;
  z-index: 1;
  transition: 0.5s;
  transform: translateY(-300px);
  transition-delay: 0s;
}
.card:hover .contentBx .content{
transform: translateY(0px);
transition-delay: 0.5s;
}
@import url('../assets/main.css');
</style>
