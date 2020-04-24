<template>
    <div class="converter">
        <ion-item>
            <ion-label position="stacked">Montant :</ion-label>
            <ion-input id="amount" placeholder="Montant en EUR" type="number" @ionInput="$v.form.$model.amount= $event.target.value"></ion-input>
        </ion-item>
        <ion-item>
            <ion-label>To</ion-label>
            <ion-select placeholder="Select One" @ionChange="$v.form.$model.to= JSON.parse($event.target.value)">
                <ion-select-option v-for="(value, devise) in GetSymbols"  :key="devise" :value="JSON.stringify({name: devise, value: value})"> {{devise}}</ion-select-option>
            </ion-select>
        </ion-item>
        <ion-button @click="convert">Convert</ion-button>
    </div>
</template>

<script>
    import {mapGetters,mapMutations} from "vuex";
    import { required, decimal} from 'vuelidate/lib/validators'
    export default {
        name: "Converter",
        data(){
            return {
                form: {
                    amount: '',
                    to: ''
                }
            }
        },
        computed: {
            ...mapGetters(['GetSymbols']),

        },
        methods: {
            ...mapMutations(['getDeviseChosen','getResult']),
            presentAlert() {
                return this.$ionic.alertController
                    .create({
                        header: 'Oops 😵',
                        subHeader: '',
                        message: 'Every champs should be completed ! 💂‍',
                        buttons: ['OK'],
                    })
                    .then(a => a.present())
            },
            convert() {
                this.$v.$touch()
                if (this.$v.$invalid) {
                    this.presentAlert()
                } else {
                    this.getResult(this.form)
                     let amount = document.querySelector('#amount')
                    amount.value= ''
                    this.form.amount = ''
                }
            }
        },
        validations: {
            form: {
                amount: {
                    required,
                    decimal
                },
                to: {
                    name :{
                        required
                    },
                    value: {
                        required,
                        decimal
                    }
                }
            },

        },
    }
</script>

<style scoped>

</style>