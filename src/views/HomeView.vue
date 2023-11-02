<script setup>
function menuToggle(){
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
  }
</script>

<template>
  <div class="wrapper">
    <header>
  <div class="fullPageMenu" id="nav">
    <nav class="nav">
      <ul>
        <li><a href="#" data-text="Главная">Главная</a></li>
        <li><a href="#" data-text="Туры">Туры</a></li>
        <li><a href="#" data-text="Памятники">Памятники</a></li>
        <li><a href="#" data-text="Еда">Еда</a></li>
        <li><a href="#" data-text="Контакты">Контакты</a></li>
      </ul>
    </nav>
    <div class="banner">
      <img src="../../public/imgnav/Turne.jpg" alt="">
    </div>
  </div>
  <span class="menuicon" id="toggle" onclick="menuToggle()"></span>
    </header>
  </div>
</template>

<style>
@import url("../assets/main.css");
</style>