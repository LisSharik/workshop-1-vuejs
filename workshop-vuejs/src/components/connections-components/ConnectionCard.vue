<script setup lang="ts">
import { ref, defineProps } from 'vue';


defineProps({
    profileImage: String,
    name: String,
    occupation: String,
    skills: Array as () => { text: string; color: string }[],
    projects: Number,
    tasks: Number,
    connections: Number,
    isConnected: Boolean
});


</script>

<template>
    <div class="profile-card w-32">

        <div class="card-header w-100">
            <i class="bx bx-dots-horizontal-rounded bx-rotate-90"></i>
        </div>
        <div class="perfil w-100">
            <img class="wpx-100 hpx-100" :src="profileImage" alt="Profile Image" />

            <h3>{{ name }}</h3>
            <p>{{ occupation }}</p>

        </div>


        <div class="skills w-100">
            <span v-for="(skill, index) in skills" :key="index"
                :style="{ backgroundColor: skill.color + '49', color: skill.color }">
                {{ skill.text }}
            </span>
        </div>

        <div class="statistics w-100">
            <div class="stat">
                <h3>{{ projects }}</h3>
                <h4>h4rojects</h4>
            </div>
            <div class="stat">
                <h3>{{ tasks }}</h3>
                <h4>Tasks</h4>
            </div>
            <div class="stat">
                <h3>{{ connections }}</h3>
                <h4>Connections</h4>
            </div>
        </div>

        <div class="footer-card w-100">
            <button :class="['connect-btn', { 'connected': isConnected }]">
                <i :class="isConnected ? 'bx bx-user-check' : 'bx bx-user-plus'"></i>
                {{ isConnected ? 'Connected' : 'Connect' }}
            </button>
            <i class="bx bx-envelope email"></i>

        </div>





    </div>
</template>



<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';
@import '../../assets/base/fontMixins.scss';
@import '../../assets/base/btnMixins.scss';
@import '../../assets/base/hoverMixins.scss';

.profile-card {
    @include card;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 25px;

    .card-header {
        display: flex;
        justify-content: flex-end;
    }

    .perfil {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2px;

        img {
            border-radius: 50%;
            margin-bottom: 30px;
        }

        p {
            @include font-size(small);
            opacity: .6;
        }
    }


    .skills {
        display: flex;
        justify-content: center;
        gap: 20px;

        span {
            padding: 5px 10px;
            border-radius: 6px;
            @include font-size(small);
        }
    }


    .statistics {
        display: flex;
        justify-content: space-around;
        gap: 20px;

        .stat {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            gap: 10px;

            h4 {
                opacity: .5;
                font-weight: 400;
            }

            h3 {
                font-weight: 400;
            }
        }
    }


    .footer-card {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;



        .connect-btn {
            @include btn(gray-dark, purple);
            background-color: #d0cdf3;
            font-weight: 600;
        }

        .connected {
            @include btn(purple, white);
            font-weight: 600;
        }

        i {
            font-weight: 100;
        }

        .email {
            @include btn(purple, black);
            opacity: .5;
            padding: 10px;
            font-weight: 100;
            background-color: #d0cdf3;
            @include hover(purple, white);
        }

    }


}
</style>
