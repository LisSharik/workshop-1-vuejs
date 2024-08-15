<script setup lang="ts">
import ConnectionsProfileCard from '@/components/profile-components/ConnectionsProfileCard.vue';
import ImagesComponent from '@/components/ImagesComponents.vue';

const props = defineProps<{
  imgUrl: string;
  title: string;
  clientName: string;
  budget: { amount: string; spent: string };
  startDate: string;
  deadline: string;
  description: string;
  allHours: string;
  daysLeft: { text: string; color: string };
  task: string;
  progress: number;
  membersCount: string;
  commentsCount: number;
}>();


</script>

<template>
  <div class="card-container w-30">
    <div class="card-header w-100">
      <ConnectionsProfileCard :image="imgUrl"
        :title="title" :subtitle="clientName" />
      <i class="bx bx-dots-horizontal-rounded bx-rotate-90"></i>
    </div>

    <div class="budget-info w-100">
      <div class="budget-amount">
        <p><strong>{{ props.budget.amount }}</strong> / {{ props.budget.spent }}</p>
        <p>Total Budget</p>
      </div>
      <div class="dates">
        <p><strong>Start Date:</strong> {{ props.startDate }}</p>
        <p><strong>Deadline:</strong> {{ props.deadline }}</p>
      </div>
    </div>

    <div class="description w-100">
      <p>{{ props.description }}</p>
    </div>

    <div class="footer w-100">
      <hr class="w-100" />
      <div class="hours-info w-100">
        <p><strong>All Hours:</strong> {{ props.allHours }}</p>
        <span :style="{ backgroundColor: props.daysLeft.color + '59', color: props.daysLeft.color }">{{ props.daysLeft.text }} Days left</span> 
      </div>

      <div class="tasks-progress w-100">
        <p>Task: {{ props.task }}</p>
        <p>{{ props.progress }}% Completed</p>
      </div>
      <progress class="w-100" :value="progress" max="100"></progress>
      
      <div class="memebers-content w-100">
        <div class="members w-67">
          <ImagesComponent :repetitions="3" />
          <p>{{ props.membersCount }} members</p>

        </div>
        <div class="messages w-30">
          <i class='bx bx-message-dots'></i>
          <p>{{ props.commentsCount }}</p>

        </div>

      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';

.card-container {
  gap: 20px;
  @include card;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
  p, span{
    opacity: .8;
  }
  hr{
    opacity: .3;
  }
  span{
    font-weight: 600;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .budget-info {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 10px;


    .budget-amount {
      padding: 10px;
      border-radius: 5px;
      @include bg(gray-dark);

    }

    .dates {
      display: flex;
      flex-direction: column;
      padding: 10px;

    }

  }

  .footer {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    gap: 10px;

    .hours-info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      span{
        padding: 2px 10px;
        border-radius: 6px;
      }
    }

    .tasks-progress {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
    }

    .memebers-content{
      display: flex;
      justify-content: space-between;
      align-items: center;
      
      .members{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
      
      }

      .messages{
        display: flex;
        justify-content: flex-end;
        gap: 10px;
        opacity: 0.5;
      }
    }
  }
}
</style>
