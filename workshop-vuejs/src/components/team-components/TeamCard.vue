<script lang="ts" setup>
import { defineProps } from 'vue';
import ImagesComponent from '@/components/ImagesComponents.vue';

const props = defineProps<{
  imageUrl: string;
  title: string;
  description: string;
  labels: Array<{ text: string, color: string }>;
}>();
</script>


<template>
    <div class="card w-32">
      <div class="header w-100">
        <img class="logo wpx-40 hpx-40" :src="props.imageUrl" alt="Logo" />
        <div class="title-content w-100">
          <h4>{{ props.title }}</h4>
          <div class="icons">
            <i class="bx bx-star"></i>
            <i class="bx bx-dots-horizontal-rounded bx-rotate-90"></i>
          </div>
        </div>
      </div>
      <p class="description">{{ props.description }}</p>
      <div class="footer-card w-100">
          <ImagesComponent :repetitions="4" />
          <div class="labels">
            <span
              v-for="(label, index) in props.labels"
              :key="index"
              class="label"
              :style="{ backgroundColor: label.color + '49', color: label.color }"
            >
              {{ label.text }}
            </span>
          </div>

      </div>
    </div>
  </template>

<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';


.card {
  flex-direction: column;
  gap: 20px;
  @include card;

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    
    .logo {
      
      border-radius: 50%;
    }
    
    .title-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
     
        
      h4 {
        font-weight: 500;
        margin: 0;
      }
      
      .icons {
        display: flex;
        gap: 10px;

        i {
          font-size: 20px;
          cursor: pointer;
          padding: 5px;
          border-radius: 50%;
          opacity: .4;
          &:hover{
            @include bg(gray-dark);
           
          }
        }
      }
    }
  }

  .description {
    opacity: 0.8;
  }
  .footer-card{
     display: flex;
     justify-content: space-between;
     align-items: center;
     gap: 10px;
  }


  .labels {
    display: flex;
    gap: 10px;

    .label {
      padding: 5px 10px;
      border-radius: 5px;
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>

