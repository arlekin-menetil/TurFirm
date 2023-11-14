<script setup>
function menuToggle(){
    let nav = document.getElementById('nav');
    let toggle = document.getElementById('toggle');
    nav.classList.toggle("active")
    toggle.classList.toggle("active")
  };
  function search(){
    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');
    search.classList.toggle('active');
    icon.classList.toggle('active');
     } 
</script>
<template>
<div class="About">
  <header>
    <div class="fullPageMenu" id="nav">
      <nav class="nav">
        <ul>
          <li><a href="/" data-text="Главная">Главная</a></li>
          <li><a href="about" data-text="Туры">Туры</a></li>
          <li><a href="#" data-text="Памятники">Памятники</a></li>
          <li><a href="#" data-text="Еда">Еда</a></li>
          <li><a href="#" data-text="Контакты">Контакты</a></li>
        </ul>
      </nav>
      <div class="banner">
        <img src="../../public/imgnav/Turne.jpg" alt="">
      </div>
    </div>
    <span class="menuicon" id="toggle" @click="menuToggle()"></span>
    <div class="search" @click="search()">
      <div class="icon"></div>
      <div class="input">
        <input type="text" placeholder="Type text..." id="mysearch">
      </div>
    </div>
      </header>
</div>
</template>

<style>
@import url('../assets/main.css');
</style>
