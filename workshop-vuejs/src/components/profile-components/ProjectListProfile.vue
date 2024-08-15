<script lang="ts" setup>
import ConnectionsProfileCard from '@/components/profile-components/ConnectionsProfileCard.vue';
import ImagesComponent from '@/components/ImagesComponents.vue';

</script>


<template>
    <div class="project-list-container w-100">
        <div class="title w-100">
            <h3>Project List</h3>
            <input type="text" placeholder="Search Projects" />
        </div>
        <table class="w-100">
            <thead>
                <th><input type="checkbox" /></th>
                <th>Project</th>
                <th>Leader</th>
                <th>Team</th>
                <th>Progress</th>
                <th>Actions</th>
            </thead>
            <tbody>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <ConnectionsProfileCard
                            image="https://i.pinimg.com/736x/e3/68/6a/e3686af5908e06e5278158b626207d5f.jpg"
                            title="BGC eCommerce App" subtitle="React Project" />
                    </td>
                    <td>Eileen</td>
                    <td class="teams">
                        <ImagesComponent :repetitions="3" />
                    </td>
                    <td class="progress-bar"> <progress id="file" max="100" value="78">78%</progress><label
                            for="file">78%</label></td>
                    <td> <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i></td>

                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <ConnectionsProfileCard
                            image="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/3000/figma-logo-512.png"
                            title="Falcon Logo Design" subtitle="Figma Project" />
                    </td>
                    <td>Owen</td>
                    <td class="teams">
                        <ImagesComponent :repetitions="2" />

                    </td>
                    <td class="progress-bar"> <progress id="file" max="100" value="25">25%</progress><label
                            for="file">25%</label></td>
                    <td> <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i></td>

                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <ConnectionsProfileCard
                            image="https://static-00.iconduck.com/assets.00/vue-icon-2048x2048-eci1ikst.png"
                            title="Dashboard Design" subtitle="Vuejs Project" />
                    </td>
                    <td>Keith</td>
                    <td class="teams">
                        <ImagesComponent :repetitions="3" />
                    </td>
                    <td class="progress-bar"> <progress id="file" max="100" value="62">62%</progress><label
                            for="file">62%</label></td>
                    <td> <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i></td>

                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <ConnectionsProfileCard
                            image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/xamarin-BKkvq9Jr.png"
                            title="Foodista mobile app" subtitle="Xamarin Project" />
                    </td>
                    <td>Merline</td>
                    <td class="teams">
                        <ImagesComponent :repetitions="3" />
                    </td>
                    <td class="progress-bar"> <progress id="file" max="100" value="8">8%</progress><label
                            for="file">8%</label></td>
                    <td> <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i></td>

                </tr>
                <tr>
                    <td><input type="checkbox" /></td>
                    <td>
                        <ConnectionsProfileCard
                            image="https://demos.pixinvent.com/vuexy-vuejs-admin-template/demo-1/assets/python-c0sYxL-T.png"
                            title="Dojo Email App" subtitle="Python Project" />
                    </td>
                    <td>Harmonia</td>
                    <td class="teams">
                        <ImagesComponent :repetitions="3" />
                    </td>
                    <td class="progress-bar"> <progress id="file" max="100" value="51">51%</progress><label
                            for="file">51%</label></td>
                    <td> <i class='bx bx-dots-horizontal-rounded bx-rotate-90'></i></td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped lang="scss">
@import '../../assets/base/cardMixins';

.project-list-container {
    flex-direction: column;
    gap: 20px;
    @include card;

    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            all: unset;
            width: 40%;
            border: 1px solid #33333336;
            padding: 6px 10px;
            border-radius: 6px;
            @include color(black);

            &:focus {
                border: 2px solid #7367f0;
                box-shadow: 0px 0px 4px 3px #7267f021;
            }
        }
    }

    table {

        input[type="checkbox"] {
            width: 15px;
            height: 15px;
            border: 2px solid #33333336;
            border-radius: 5px;

            &:checked {
                background-color: #33333336;
            }

        }

        thead {
            text-align: left;
            height: 60px;
            border: 2px solid #33333336;

        }
        tr{
            .progress-bar {
                width: 100%;
                display: flex;
                justify-content: space-between;
                align-items: center;
            progress {
                width: 60px;

            }
            
        }
        }

    }

}
</style>
