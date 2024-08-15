<script setup lang="ts">
import ProjectCard from '@/components/projects-components/ProjectCard.vue';

// Lista de objetos con las props que necesita cada card
const projects = [
  {
    imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/003/731/316/small/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg",
    title:"Social Banners",
    clientName: "Christian Jimenez", 
    budget: {
      amount: "$24.8k",
      spent: "$18.2k",
    },
    startDate: "14/2/21", 
    deadline: "28/2/22",  
    description: "We are Consulting, Software Development and Web Development...",
    allHours: "380/244", 
    daysLeft: { 
      text: "28", 
      color: "#07bf31"
    },
    task: "290/344", 
    progress: 95,
    commentsCount: 15, 
    membersCount: "280" 
  },
  {
    imgUrl: "https://i.pinimg.com/736x/e3/68/6a/e3686af5908e06e5278158b626207d5f.jpg",
    title:"Admin Template",
    clientName: "Jeffrey Phillips",
    budget: {
      amount: "$2.4k ",
      spent: "$1.8k",
    },
    startDate: "18/8/21",
    deadline: "21/6/22",
    description: "Time is our most valuable asset, that's why we want to help you save it by...",
    allHours: "98/135",
    daysLeft: { 
      text: "15", 
      color: "#ff8815" 
    },
    task: "150/300", 
    progress: 68,
    commentsCount: 236,  
    membersCount: "1.1k" 
  },
  {
    imgUrl: "https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-eci1ikst.png",
    title:"App Design",
    clientName: "Ricky McDonald",
    budget: {
      amount: "$980",
      spent: "$420",
    },
    startDate: "24/7/21",
    deadline: "8/10/21",
    description: "App design combines the user interface (UI) and user experience (UX).",
    allHours: "880/421",
    daysLeft: { 
      text: "15", 
      color: "#ff2e35" 
    },
    task: "22/140", 
    progress: 42,
    commentsCount: 98,  
    membersCount: "458" 
  },
  {
    imgUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/HTML5_Badge.svg/2048px-HTML5_Badge.svg.png",
    title:"Create Website",
    clientName: "Hulda Wright",
    budget: {
      amount: "$8.5k",
      spent: "$2.43k",
    },
    startDate: "10/2/19",
    deadline: "12/9/22",
    description: "Your domain name should reflect your products or services so that your...",
    allHours: "1.2k/820",
    daysLeft: { 
      text: "126", 
      color: "#ff8815" 
    },
    task: "237/420", 
    progress: 72,
    commentsCount: 120,  
    membersCount: "137" 
  },
  {
    imgUrl: "https://logowik.com/content/uploads/images/figma.jpg",
    title:"Figma Dashboard",
    clientName: "Jerry Greene",
    budget: {
      amount: "$52.7k",
      spent: "28.4k",
    },
    startDate: "12/12/20",
    deadline: "25/12/21",
    description: "Use this template to organize your design project. Some of the key features",
    allHours: "142/420",
    daysLeft: { 
      text: "5", 
      color: "#ff2e35" 
    },
    task: "29/285", 
    progress: 35,
    commentsCount: 20,  
    membersCount: "82" 
  },
  {
    imgUrl: "https://static-00.iconduck.com/assets.00/adobe-xd-icon-2048x2048-n4c7t4w4.png",
    title:"Logo Design",
    clientName: "Olive Strickland",
    budget: {
      amount: "$1.3k",
      spent: "$655",
    },
    startDate: "17/8/21",
    deadline: "02/11/21",
    description: "Premium logo designs created by top logo designers. Create the branding of...",
    allHours: "580/445",
    daysLeft: { 
      text: "4", 
      color: "#07bf31" 
    },
    task: " 29/290", 
    progress: 100,
    commentsCount: 16,  
    membersCount: "16" 
  },
];


</script>

<template>
  <section class="cards-content w-100">
    <ProjectCard
      v-for="(project, index) in projects"
      :key="index"
      :imgUrl="project.imgUrl"
      :title="project.title"
      :clientName="project.clientName"
      :budget="project.budget"
      :startDate="project.startDate"
      :deadline="project.deadline"
      :description="project.description"
      :allHours="project.allHours"
      :daysLeft="project.daysLeft" 
      :task="project.task"
      :progress="project.progress"
      :commentsCount="project.commentsCount"
      :membersCount="project.membersCount"
    />
  </section>
</template>




<style scoped lang="scss">
.cards-content {
  display: flex;
  justify-content: flex-start;
  align-self: flex-start;
  flex-wrap: wrap;
  gap: 25px;
}
</style>
