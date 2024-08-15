<script setup lang="ts">
import SideBar from '@/components/SideBar.vue';
import SearchBar from '@/components/SearchBar.vue';
import Banner from '@/components/Banner.vue';



</script>

<template>
  <SideBar />
  <section class="container w-90  gappx-20">
    <SearchBar />
    <Banner />
    <div class="buttons w-100">
      <router-link to="/" class="btn-navegation">
        <i class='bx bx-user-check'></i>
        <p>Profile</p>
      </router-link>
      <router-link to="/team" class="btn-navegation">
        <i class='bx bx-user' ></i>
        <p>Team</p>
      </router-link>
      <router-link to="/projects" class="btn-navegation">
        <i class='bx bx-category' ></i>
        <p>Projects</p>
      </router-link>
      <router-link to="/connections" class="btn-navegation">
        <i class='bx bx-paperclip' ></i>
        <p>Connections</p>
      </router-link>
    </div>
    
    
    <router-view></router-view>
  </section>




</template>



<style lang="scss">
@import './assets/base/btnMixins.scss';
@import './assets/base/fontMixins.scss';

  .container{
    margin-right: 40px;
    margin-bottom: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    
  }
  
  .buttons{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;

    .btn-navegation{
      @include btn(gray, black);
      @include hover(purple, white);
      display: flex;
      justify-content: center;
      align-items: center;

      i{
        @include font-size(medium);
      }
    }
  }

</style>
