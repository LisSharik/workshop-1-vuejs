<script lang="ts" setup>
</script>

<template>
    <section class="perfil w-100 bg-white color-black box-shadow">
        <div class="banner w-100 h-60"></div>
        <div class="perfil-info-container w-100 h-40 ">
            <div class="perfil-info w-80 h-100 ">
                <img class="wpx-130 "
                    src="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    alt="img avatar">

                <div class="info ">
                    <h2>John Doe</h2>
                    <div class="more-info f-normal">
                        <div class="item">
                            <i class='bx bx-palette'></i>
                            <p>Coder</p>
                        </div>
                        <div class="item">
                            <i class='bx bx-map'></i>
                            <p>Medellin</p>

                        </div>
                        <div class="item">
                            <i class='bx bx-calendar'></i>
                            <p>Joined April 2021</p>

                        </div>

                    </div>
                </div>
            </div>
            <button class="btn-white-purple hover-purple-white">
                <i class='bx bx-user-check f-normal'></i>
                Connected
            </button>
        </div>
    </section>

</template>

<style lang="scss" scoped>
@import '../assets/base/fontMixins.scss';

.perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;

    height: 40vh;

    
 

    .banner {
        background: rgb(255, 163, 244);
        background: linear-gradient(90deg, rgba(255, 163, 244, 1) 0%, rgba(221, 42, 255, 1) 39%, rgba(0, 143, 172, 1) 100%);
        border-radius: 5px 5px 0 0;
    }

    .perfil-info-container {
        border-radius: 0 0 5px 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;

        .perfil-info {

            display: flex;
            justify-content: flex-start;
            align-items: center;
            gap: 20px;

            img {
                margin-bottom: 50px;
                border: 4px solid #f7f7f7;
                border-radius: 5px;
            }
        }

        .info {

            display: flex;
            justify-self: center;
            flex-direction: column;
            gap: 20px;
           

            .more-info {
                display: flex;
                justify-content: center;
                align-self: center;
                gap: 15px;
                opacity: .7;

                .item {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 10px;

                }
            }
        }
    }

}
</style>