<script lang="ts" setup>
</script>

<template>
    <section class="overview-card w-100">
        <div class="overview">
            <p class="title">OVERVIEW</p>
            <div class="info-item">
                <i class='bx bx-check'></i>
                <p><label>Task Compiled:</label> 13.5k</p>
            </div>
            <div class="info-item">
                <i class='bx bx-user-plus' ></i>
                <p><label>Connections:</label> 897</p>
            </div>
            <div class="info-item">
                <i class='bx bx-category' ></i>
                <p><label>Projects Compiled:</label> 146</p>
            </div>
        </div>

    </section>
</template>

<style lang="scss" scoped>
@import '../../assets/base/cardMixins.scss';

.overview-card{
    flex-direction: column;
    gap: 20px;
    @include card;

    .overview {
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