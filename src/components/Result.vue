<template>
    <div>
        <ion-card v-for="(value, index) in GetResult" :key="index">
            <ion-item >
                 <ion-label>{{value.amount}} EUR</ion-label>
            </ion-item>

                    <h1 style="color: black">{{value.change}} {{value.devise}}</h1>
        </ion-card>
    </div>
</template>

<script>
    import {mapGetters} from "vuex";
    export default {
        name: "Converted",
        computed: {
            ...mapGetters(['GetResult'])
        }
    }
</script>

<style scoped lang="scss">
ion-item {
   text-align: center;
}
</style>