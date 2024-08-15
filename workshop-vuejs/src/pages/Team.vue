<script setup lang="ts">
import TeamCard from '@/components/team-components/TeamCard.vue';


const teamCards = [
  {
    imageUrl: 'https://i.pinimg.com/736x/e3/68/6a/e3686af5908e06e5278158b626207d5f.jpg',
    title: 'React Developers',
    description: "We don't make assumptions about the rest of your technology stack, so you can develop new features in React.",
    labels: [
      { text: 'React', color: '#817bc8' },
      { text: 'MUI', color: '#51daec' }
    ]
  },
  {
    imageUrl: 'https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-eci1ikst.png',
    title: 'Vue.js Dev Team',
    description: 'The development of Vue and its ecosystem is guided by an international team, some of whom have chosen to be featured below.',
    labels: [
      { text: 'Vuejs', color: '#55b781' },
      { text: 'Developer', color: '#cf7274' }
    ]
  },
  {
    imageUrl: 'https://static-00.iconduck.com/assets.00/adobe-xd-icon-2048x2048-n4c7t4w4.png',
    title: 'Creative Designer...',
    description: 'A design or product team is more than just the people on it. A team includes the people, the roles they play, and the collaboration they foster.',
    labels: [
      { text: 'Sketch', color: '#f6a458' },
      { text: 'XD', color: '#d77073' }
    ]
  },
  {
    imageUrl: 'https://cdn-icons-png.freepik.com/256/9493/9493253.png',
    title: 'Support Team',
    description: 'Support your team. Your customer support team is fielding the good, the bad, and the ugly day in and day out.',
    labels: [
      { text: 'Zendesk', color: '#42bdcc' }
    ]
  },
  {
    imageUrl: 'https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg',
    title: 'Digital Marketing',
    description: 'Digital marketing refers to advertising delivered through digital channels such as search engines, websites, and mobile apps.',
    labels: [
      { text: 'Twitter', color: '#8179cb' },
      { text: 'Email', color: '#7fe0aa' },

    ]
  },
  {
    imageUrl: 'https://static-00.iconduck.com/assets.00/google-calendar-icon-2048x2048-2mlvsa6u.png',
    title: 'Event',
    description: 'Event is defined as a particular contest which is part of a program of contests. An example of an event is the long jump competition.',
    labels: [
      { text: 'Hubilo', color: '#57b486' }

    ]
  }

];
</script>

<template>
  <section class="cards-content w-100">
    <TeamCard
      v-for="(card, index) in teamCards"
      :key="index"
      :imageUrl="card.imageUrl"
      :title="card.title"
      :description="card.description"
      :labels="card.labels"
    />
  </section>
</template>

<style scoped lang="scss">

.cards-content{
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-wrap: wrap ;
  gap: 20px;
}
</style>
