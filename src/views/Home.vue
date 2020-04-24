<template>
  <div class="home ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title><div><img src="../assets/51padlxlmlL.png" /> <h1>Currency converter</h1></div></ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
    <Converter></Converter>
      <Result></Result>
    </ion-content>
  </div>
</template>

<script>
// @ is an alias to /src
import Result from '../components/Result.vue'
import Converter from "../components/Converter.vue";
import {mapActions} from 'vuex'
export default {
  name: 'Home',
  components: {
    Result,
    Converter
  },
  mounted() {
    this.getSymbols()
  },

  methods: {
    ...mapActions(["getSymbols"]),


  }
}
</script>
<style lang="scss" >
  ion-title {
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 20%;
        margin-right: 10px;
      }

    }

  }
</style>