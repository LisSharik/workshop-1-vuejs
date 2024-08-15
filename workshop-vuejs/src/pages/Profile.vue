<script setup lang="ts">
import TimeLine from '@/components/profile-components/TimeLine.vue';
import About from '@/components/profile-components/About.vue';
import Overview from '@/components/profile-components/Overview.vue';
import TeamsCard from '@/components/profile-components/TeamsCard.vue';
import ConnectionsProfile from '@/components/profile-components/ConnectionsProfile.vue';
import ProjectListProfile from '@/components/profile-components/ProjectListProfile.vue';


</script>

<template>
  <section class="profile w-100">
      
      <div class="column-1 w-30">
        <About />
        <Overview />
        
      </div>
      <div class="column-2 w-70">
        <TimeLine />
        <div class="conect-teams w-100">
          <ConnectionsProfile />
          <TeamsCard />
        </div>
        <ProjectListProfile />
      </div>

      
      
    </section>
  </template>
  
 
  
  <style scoped lang="scss">
   .profile {
     display: flex;
     justify-content: center;
     align-items: flex-start;
     gap: 20px;
   

     .column-1{
       display: flex;
       justify-content: flex-start;
       align-items: flex-start;
       flex-direction: column;
       gap: 20px;
     }

     .column-2{
      display: flex;
       justify-content: flex-start;
       align-items: flex-start;
       flex-direction: column;
       gap: 20px;
      .conect-teams{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
      }
     }
   }
  </style>
  