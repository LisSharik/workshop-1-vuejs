<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  image: string;
  title: string;
  subtitle: string;
}>();
</script>

<template>
  <div class="card-content w-100">
    <img class="wpx-40 hpx-40" :src="props.image" alt="" />

    <div class="info-card">
      <h4>{{ props.title }}</h4>
      <p>{{ props.subtitle }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '../../assets/base/fontMixins.scss';

.card-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;

  img {
    border-radius: 50%;
  }

  .info-card {
    @include font-size(small);
    h4 {
      font-weight: 500;
      opacity: .95;
    }

    p {
      opacity: 0.7;
    }
  }
}
</style>
