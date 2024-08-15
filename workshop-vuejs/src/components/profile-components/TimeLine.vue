<script lang="ts" setup>
import ImagesComponent from '@/components/ImagesComponents.vue';
</script>

<template>
  <div class="timeline-card w-100">
    <div class="title-content">
      <i class='bx bx-bar-chart-alt-2'></i>
      <h3 class="title">Activity Timeline</h3>
    </div>

    <div class="container-1 w-100">

      <div class="info-content">
        <div class="decorator">
          <div class="circle circle-1"></div>
          <div class="bar"></div>
        </div>
        <div class="info">
          <h4>12 Invoices have been paid</h4>
          <span>Invoices have been paid to the company</span>
          <button class="more">
            <i class='bx bxs-file-pdf'></i>
            <p>invoice.pdf</p>
          </button>

        </div>
      </div>

      <p class="time"> 12 min ago</p>
    </div>
    <div class="container-2 w-100">

      <div class="info-content">
        <div class="decorator">
          <div class="circle circle-2"></div>
          <div class="bar"></div>
        </div>
        <div class="info">
          <h4>Client Meeting</h4>
          <span>Project meeting with john @10:15am</span>
          <div class="more">
            <img class="wpx-40 hpx-40"
              src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
              alt="">
            <div class="info-perfil">
              <p>Lester McCarthy (Client)</p>
              <p>CEO of Pixinvent</p>
            </div>
          </div>

        </div>
      </div>

      <p class="time"> 45 min ago</p>
    </div>
    <div class="container-3 w-100">

      <div class="info-content">
        <div class="decorator">
          <div class="circle circle-3"></div>
          <div class="bar"></div>
        </div>
        <div class="info">
          <h4>Create a new project for client</h4>
          <span>6 team members in a project</span>
          <div class="more">
            <ImagesComponent :repetitions="3" />
            <div class="circle-plus wpx-45 hpx-45">
              3+
            </div>

          </div>

        </div>
      </div>

      <p class="time"> 2 Day Ago</p>
    </div>
  </div>
</template>



<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';

.timeline-card {
  @include card;
  flex-direction: column;
  gap: 20px;

  .title-content {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

   

  }


  .decorator {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 10px;


    .circle {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #7266ee;


      &::before {
        content: '';
        width: 50px;
      }
    }

    .bar {
      width: 2px;
      height: 100px;
      @include bg(gray-dark);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;

    h4 {
      font-weight: 500;
    }

    span {
      opacity: .8;
    }
  }

  .time {
    opacity: .4;
  }

  .info-content {

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
  }

  .container-1,
  .container-2,
  .container-3 {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;

    button {
      border: none;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      padding: 5px 15px;
      border-radius: 6px;
      @include bg(gray);
      width: 40%;
      transition: all .3s;

      p {
        opacity: .6;
      }

      i {
        color: #eb0808;
      }

      &:hover {
        p {
          text-decoration: underline;
        }
      }
    }

    img {
      border-radius: 50%;
    }
  }

  .container-2 {
    .circle-2 {
      background-color: #28c66f;
    }

    .info {
      .more {
        display: flex;
        gap: 5px;
        @include font-size(small);

        p {
          opacity: .6;
        }


      }
    }
  }

  .container-3 {
    .circle-3 {
      background-color: #00bad1
    }

    .more{
      display: flex;
      .circle-plus{
        @include bg(gray-dark);
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 500;
      }

    }

  }

}
</style>