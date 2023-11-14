<!-- eslint-disable no-unused-vars -->
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
  <div class="wrapper">
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
  <div class="content_up">
    <div class="left_block">
      <div class="small_picture">
        <div class="first">
          <a href="#"><img src="../../public/packages/olen.png" alt=""></a>
        </div>
        <div class="second">
          <a href="#"><img src="../../public/packages/gori.png" alt=""></a>
        </div>
      </div>
      <div class="long_picture">
        <a href="#"><img src="../../public/button/food.jpg" alt=""></a>
      </div>
    </div>
    <div class="right_block">
      <div class="long_picture">
        <a href="#"><img src="../../public/packages/hijina.png" alt=""></a>
      </div>
      <div class="small_picture">
        <div class="third">
          <a href="#"><img src="../../public/packages/flag.png" alt=""></a>
        </div>
      </div>
    </div>
  </div>
  <div class="middle_content">
    <div class="water">
      <a href="#"><img src="../../public/packages/ulitka.png" alt=""></a>
    </div>
    <div class="jump">
      <a href="#"><img src="../../public/packages/prijok_veri.png" alt=""></a>
    </div>
    <div class="middle_category">
      <div class="left_category">
        <div class="first_category">
          <a href="#"><img src="../../public/packages/korabl.png" alt=""></a>
        </div>
        <div class="second_category">
          <a href="#"><img src="../../public/packages/kanoye.png" alt=""></a>
        </div>
        <div class="third_category">
          <a href="#"><img src="../../public/packages/turtle.png" alt=""></a>
        </div>
      </div>
      <div class="right_category">
        <div class="first_category">
          <a href="#"><img src="../../public/packages/koreec.png" alt=""></a>
        </div>
        <div class="second_category">
          <a href="#"><img src="../../public/packages/kit.png" alt=""></a>
        </div>
        <div class="third_category">
          <a href="#"><img src="../../public/packages/hijina.png" alt=""></a>
        </div>
      </div>
    </div>
    <div class="water">
      <a href="#"><img src="../../public/packages/shadow.png" alt=""></a>
    </div>
  </div>
  </div>
</template>

<style>
@import url("../assets/main.css");
</style>