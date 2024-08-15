<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps<{
  repetitions: number;
}>();

</script>

<template>

    <div class="images-contents" >
        <img class="wpx-40 hpx-40" v-for="n in repetitions" :key = "n"
            src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
            alt="">
       
    </div>


</template>

<style lang="scss">
.images-contents{
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
        border-radius: 50%;
        margin-right: -15px;
        border: solid 3px #f7f7f7;
    }

}
</style>