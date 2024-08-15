<script lang="ts" setup>
</script>

<template>
    <section class="about-card w-100">
        <div class="about ">
            <p class="title">ABOUT</p>
            <div class="info-item">
                <i class='bx bx-user'></i>
                <p><span>Full Name:</span> John Doe</p>
            </div>
            <div class="info-item">
                <i class='bx bx-check'></i>
                <p><span>Status:</span> active</p>
            </div>
            <div class="info-item">
                <i class='bx bx-crown'></i>
                <p><span>Role:</span> Developer</p>
            </div>
            <div class="info-item">
                <i class='bx bx-flag'></i>
                <p><span>Country:</span> COL</p>
            </div>
            <div class="info-item">
                <i class='bx bx-lira'></i>
                <p><span>Language:</span> English</p>
            </div>



        </div>
        <div class="contacts">
            <p class="title">CONTACTS</p>
            <div class="info-item">
                <i class='bx bx-phone-call'></i>
                <p><span>Contact:</span> (123) 456-7890</p>
            </div>
            <div class="info-item">
                <i class='bx bx-chat'></i>
                <p><span>Skype:</span> John.doe</p>
            </div>
            <div class="info-item">
                <i class='bx bx-envelope'></i>
                <p><span>Email:</span> jhon.doe@example.com</p>
            </div>
        </div>
        <div class="teams">
            <p class="title">TEAMS</p>

            <p class="info-item">Backend Developer (126 Members)</p>
            <p class="info-item">VueJS Developer (98 Members)</p>

        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/base/cardMixins.scss';



.about-card {
    flex-direction: column;
    gap: 20px;
    @include card;

    .about,
    .contacts,
    .teams {
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: column;
        gap: 15px;

        .title {
            opacity: 0.6;
        }

        
    }
}
</style>