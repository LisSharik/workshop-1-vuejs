<script lang="ts" setup>
import ConnectionsProfileCard from '@/components/profile-components/ConnectionsProfileCard.vue';
</script>

<template>
    <div class="connection-card w-100">
        <div class="title w-100">
            <h3>Connection</h3>
            <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i>
        </div>

        <div class="connections-container w-100">
            <div class="connection w-100">
                <ConnectionsProfileCard
                    image="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    title="Cecilia Payne" subtitle="45 Connections" /> 
               
                    <i class='bx bx-user-check' ></i>
                   
            </div>

            <div class="connection w-100">
                <ConnectionsProfileCard
                    image="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    title="Cecilia Payne" subtitle="45 Connections" /> 
               
                    <i class='bx bx-user-x active' ></i>
                   
            </div>

            <div class="connection w-100">
                <ConnectionsProfileCard
                    image="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    title="Cecilia Payne" subtitle="45 Connections" /> 
               
                    <i class='bx bx-user-x active' ></i>
                   
            </div>

            <div class="connection w-100">
                <ConnectionsProfileCard
                    image="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    title="Cecilia Payne" subtitle="45 Connections" /> 
               
                    <i class='bx bx-user-check' ></i>
                   
            </div>

            <div class="connection w-100">
                <ConnectionsProfileCard
                    image="https://img.freepik.com/vector-premium/ilustracion-avatar-estudiante-icono-perfil-usuario-avatar-jovenes_118339-4402.jpg"
                    title="Cecilia Payne" subtitle="45 Connections" /> 
               
                    <i class='bx bx-user-check' ></i>
                   
            </div>
            
        </div>

        <div class="view color-purple w-100">
            <p>View All</p>
        </div>

    </div>
</template>

<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';
@import '../../assets//base/fontMixins.scss';

.connection-card {
    flex-direction: column;
    gap: 20px;
    @include card;

    .title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;

        i{
            cursor: pointer;
            padding: 4px;
            border-radius: 50%;
            transition: all .3s;
            opacity: .4;

            &:hover{
                @include bg(gray-dark);
            }
        }
    }

    .connections-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;
        .connection{
            display: flex;
            justify-content: space-between;
            align-items: center;
            
            i{
                cursor: pointer;
                background-color: #e8e6fc;
                padding: 8px;
                border-radius: 6px;
                @include color(purple);
                transition: all .3s;

                &:hover{
                    background-color: #cbc9e0;
                }
          
            }

            .active{
                @include bg(purple);
                @include color(white);

                &:hover{
                    background-color: #443d94;
                }
            }
        }
    }

    .view{
        display: flex;
        justify-content: center;
        p{
            cursor: pointer;
            &:hover{
                text-decoration: underline;
            }
        }
    }
}
</style>