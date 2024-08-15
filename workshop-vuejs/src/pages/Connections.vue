<script setup lang="ts">
import ConnectionProfileCard from '@/components/connections-components/ConnectionCard.vue';
const profiles = [
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Mark Gilbert',
    occupation: 'UI Designer',
    skills: [
      { text: 'Figma', color: '#80838b' },
      { text: 'Sketch', color: '#e8aa6f' },
    ],
    projects: 112,
    tasks: 2310,
    connections: 1280,
    isConnected: false,
  },
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Eugenia Parsons',
    occupation: 'Developer',
    skills: [
      { text: 'Angular', color: '#fc5e68' },
      { text: 'React', color: '#00cee9' },
    ],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: true,
  },
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Francis Byrd',
    occupation: 'UI Designer',
    skills: [
      { text: 'HTML', color: '#a259ff' },
      { text: 'React', color: '#00cee9' },
    ],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: true,
  },
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Leon Lucas',
    occupation: 'UI/UX Designer',
    skills: [
      { text: 'Figma', color: '#a259ff' },
      { text: 'Sketch', color: '#ffb74d' },
      { text: 'Photoshop', color: '#ffb74d' },
    ],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: false,
  },
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Jayden Rogers',
    occupation: 'Full Stack Developer',
    skills: [
      { text: 'React', color: '#00cee9' },
      { text: 'HTML', color: '#ffb74d' },
      { text: 'Node.js', color: '#07bf31' },
    ],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: false,
  },
  {
    profileImage: 'https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg',
    name: 'Jeanette Powell',
    occupation: 'SEO',
    skills: [
      { text: 'Analysis', color: '#02bcd4' },
      { text: 'Writing', color: '#ffb74d' },
    ],
    projects: 18,
    tasks: 834,
    connections: 129,
    isConnected: false  ,
  },
];
</script>
<template>
    <section class="profile-cards w-100">
      <ConnectionProfileCard
        v-for="(profile, index) in profiles"
        :key="index"
        :profileImage="profile.profileImage"
        :name="profile.name"
        :occupation="profile.occupation"
        :skills="profile.skills"
        :projects="profile.projects"
        :tasks="profile.tasks"
        :connections="profile.connections"
        :isConnected="profile.isConnected"
      />
    </section>
  </template>
  
  <style scoped>
  .profile-cards {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 20px;
  }
  </style>