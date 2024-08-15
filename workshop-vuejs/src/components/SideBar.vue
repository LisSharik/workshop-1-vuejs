<script setup lang="ts">


</script>

<template>
    <section
        class="sidebar w-4 flex-column h-90 flex-column-center-center gappx-20 ppx-5 ppx-top-30 ppx-bottom-40 bg-white box-shadow">
        <img src="https://cdn.prod.website-files.com/6257adef93867e50d84d30e2/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png"
            class="wpx-30" alt="logo">

        <div class="icons flex-column-center-center gappx-10  ">
            <i class="bx bx-home-smile"></i>
            <i class="bx bx-file-blank"></i>
            <div class="separeitor w-100 hpx-2 bg-gray mpx-top-15"></div>
            <i class="bx bx-cart"></i>
            <i class="bx bx-envelope"></i>
            <i class="bx bx-message-rounded"></i>
            <i class="bx bx-calendar-alt"></i>
            <i class="bx bx-user"></i>
            <i class="bx bx-lock"></i>
            <i class="bx bx-shield-minus"></i>
        </div>


    </section>



</template>


<style lang="scss" scoped>
@import '../assets/base/colorsMixins';
@import '../assets/base/hoverMixins';

.sidebar {
    border-radius: 6px;
   
    .icons i {
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        padding: 7px;
        border-radius: 50%;

        @include hover(purple, white);
    }
}
</style>
