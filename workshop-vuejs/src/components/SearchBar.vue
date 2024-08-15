<script lang="ts" setup>
</script>

<template>
    <section class="search-bar box-shadow w-100 bg-white color-black ppx-10 ppx-left-20 ppx-right-20 mpx-top-30">
        <div class="search-bar-container f-medium gappx-10 w-30 ">
            <i class='bx bx-search'></i>
            <input class="w-100 f-normal" type="text" placeholder="Search">

        </div>

        <div class="tools f-medium gappx-10">
            <i class='bx bx-lira' ></i>
            <i class='bx bx-sun'></i>
            <i class='bx bx-category'></i>
            <i class='bx bx-bell'></i>
            <img class="wpx-40"
                src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                alt="img avatar">
        </div>

    </section>
</template>

<style lang="scss" scoped>
@import '../assets/base/colorsMixins';
@import '../assets/base/hoverMixins';

.search-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 6px;
    

    .search-bar-container {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        

        input {
            all: unset;
        }
    }

    .tools{
        display: flex;
        justify-content: center;
        align-items: center;

        i{
            cursor: pointer;
            padding: 7px;
            transition: all 0.2s ease;
            border-radius: 50%;
            @include hover(purple, white);
        }

        img{
            border-radius: 50%;
            cursor: pointer;
        }
    }

}
</style>