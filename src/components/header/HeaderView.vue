<script setup>
import {menuToggle} from '../../assets/animation';
import {search} from '../../assets/animation';
</script>

<template>
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
            <img src="../../../public/imgnav/Turne.jpg" alt="">
          </div>
        </div>
        <span class="menuicon" id="toggle" @click="menuToggle()"></span>
        <div class="search">
          <div class="icon" @click="search()"></div>
          <div class="input">
            <input type="text" placeholder="Type text..." id="mysearch">
          </div>
        </div>
      </header>
</template>

<style>
header{
    background: #2C333F;
    height: 80px;
    margin-bottom: 80px;
    position: fixed;
    z-index: 100;
  }
  .fullPageMenu{
    position: fixed;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #111;
    transition: 1s;
    z-index: 100;
  }
  .fullPageMenu.active{
  top: 0;
  }
  .fullPageMenu .banner{
    position: relative;
    min-width: 600px;
    height: 100%;
  }
  .fullPageMenu .banner img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .fullPageMenu .nav{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .fullPageMenu .nav ul{
    position: relative;
  }
  .fullPageMenu .nav ul li{
    position: relative;
    list-style: none;
    padding: 0 20px;
    margin: 5px 0;
    overflow: hidden;
    display: table;
  }
  .fullPageMenu .nav ul li:before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #ff0047;
  transition: transform 0.5s ease-in-out;
  transform: scaleZ(0);
  transform-origin: bottom;
  }
  .fullPageMenu .nav ul li:hover:before{
  transition: transform 0.8s ease-in-out;
  transform: scaleY(1);
  transform-origin: top;
  }
  .fullPageMenu .nav ul li a{
    position: relative;
    color: white;
    text-decoration: none;
    font-size: 4em;
    font-weight: 700;
    line-height: 1em;
    padding-top: 12px;
    display: inline-block;
    text-transform: uppercase;
    transition: 0.5s ease-in-out;
  }
  .fullPageMenu .nav ul li a:before{
    content: attr(data-text);
    position: absolute;
    bottom: -100%;
    left: 0;
    color: #fff;
  }
  .fullPageMenu .nav ul li:hover a{
  transform: translateY(-100%);
  color: #fff;
  }
  .menuicon{
    position: fixed;
    top: 20px;
    left: 20px;
    width: 95px;
    height: 95px;
    background: url("../../public/button/button.png");
    background-size: 40px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
    z-index: 200;
  }
  .menuicon.active{
    background: url("../../public/button/close.png");
    background-size: 80px;
    cursor: pointer;
    background-repeat: no-repeat;
    background-position: center;
  }
  /*поисковая строка*/
.search{
  position: absolute;
  top: 30px;
  right: 0;
  width: 60px;
  height: 60px;
  background: #fff;
  margin-right: 95px;
  border: 1px solid #597AEF;
  border-radius: 60px;
  transition: 0.5s;
  display: flex;
  overflow: hidden;
}
.search.active{
width: 360px;
}
.search .icon{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  cursor: pointer;
background: white;
}
.search .icon.active{
  position: relative;
  width: 60px;
  height: 60px;
}
.search .icon::before{
  content: '';
  position: absolute;
  width: 15px;
  height: 15px;
  border: 3px solid #287dfc;
  border-radius: 50%;
  transform: translate(-4px, -4px);
}
.search .icon::after{
  content: '';
  position: absolute;
  width: 3px;
  height: 12px;
  background: #287dfc;
  border-radius: 50%;
  transform: translate(6px,6px) rotate(315deg);
}
.search .input{
  position: relative;
  width: 320px;
  height: 60px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.search .input input{
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 18px;
  padding: 10px 0;
}
</style>