<script lang="ts" setup>
import ConnectionsProfileCard from '@/components/profile-components/ConnectionsProfileCard.vue';
</script>

<template>
    <div class="connection-teams w-100">
        <div class="title w-100">
            <h3>Teams</h3>
            <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i>
        </div>

        <div class="teams-container w-100">
            <div class="team w-100">
                <ConnectionsProfileCard
                    image="https://i.pinimg.com/736x/e3/68/6a/e3686af5908e06e5278158b626207d5f.jpg"
                    title="React Developers" subtitle="45 72 Members" />

                <p class="developer">Developer</p>
            </div>

            <div class="team w-100">
                <ConnectionsProfileCard
                    image="https://icones.pro/wp-content/uploads/2021/08/logo-amazon-jaune.png"
                    title="Support Team" subtitle="122 Members" />

                <p class="support">Support</p>
            </div>

            <div class="team w-100">
                <ConnectionsProfileCard
                    image="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
                    title="UI Designer" subtitle="7 Members" />

                <p class="designer">Designer</p>
            </div>

            <div class="team w-100">
                <ConnectionsProfileCard
                    image="https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-eci1ikst.png"
                    title="Vue.js Developers" subtitle="289 Members" />

                <p class="developer">Developer</p>
            </div>

            <div class="team w-100">
                <ConnectionsProfileCard
                    image="https://dwglogo.com/wp-content/uploads/2019/02/Twitter_logo.png"
                    title="Digital Marketing" subtitle="24 Members" />

                <p class="marketing">Marketing</p>
            </div>
        </div>
        <div class="view color-purple w-100">
            <p>View All</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
@import '../../assets/base/cardMixins.scss';
@import '../../assets/base/fontMixins.scss';
.connection-teams{
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

    .teams-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 10px;

        .team{
            display: flex;
            justify-content: space-between;
            align-items: center;
            @include font-size(small);

            .developer{
                @include card-profile-teams(#ffe2e4, #fc5e68);
            }
            .support{
                @include card-profile-teams(#e8e6fc, #695cff);
            }
            .designer{
                @include card-profile-teams(#d5f2f6, #02bcd4);
            }
            .marketing{
                @include card-profile-teams(#dcdcdd, #7e7e7e);
            }
            i{
                background-color: #00cee979;
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