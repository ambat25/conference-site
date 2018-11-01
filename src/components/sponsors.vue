<template>
    <section class="content sponsors has-text-centered">
        <h1 class="title has-text-centered">SPONSORS</h1>
        <div>
            <h3 class="title" style="margin-top: 50px">Event Sponsors</h3>
            <img v-for="(sponsor,index) in sponsors" :key="index" :src="sponsor.logo" alt="" style="width: 140px; ">
        </div>
            <h3 class="title" style="margin-top: 50px">Event Partners</h3>
        <div class="columns is-multiline is-gapless">
            <div class="column is-one-fifth" v-for="(partner,index) in partners" :key='index'>
                <!-- <div class="columns is-mobile"> -->
                    <img :src="partner.logo" class=" is-half" alt="" style="width: 100px; max-height: 100px">
                <!-- </div> -->
            </div>
        </div>
        <br>
        <br>
        <br>
        <router-link to='/' class="button is-info">BECOME A PARTNER / SPONSOR</router-link>
    </section>
</template>
<script>
export default {
    data(){
        return {
            partners : [
                {
                    "logo": require('../assets/partners/partner1.jpg')
                },
                {
                    "logo": require('../assets/partners/partner2.png')
                },
                {
                    "logo": require('../assets/partners/partner3.png')
                },
                {
                    "logo": require('../assets/partners/partner4.png')
                },
                {
                    "logo": require('../assets/partners/partner5.png')
                },
                {
                    "logo": require('../assets/partners/partner8.jpg')
                },
                {
                    "logo": require('../assets/partners/partner7.png')
                },
                {
                    "logo": require('../assets/partners/partner9.png')
                },
                {
                    "logo": require('../assets/partners/partner10.jpg')
                },
                {
                    "logo": require('../assets/partners/partner11.jpg')
                },
                {
                    "logo": require('../assets/partners/partner12.jpg')
                }
            ],
            sponsors : [
                {
                    "name": "Google",
                    "logo": require('../assets/sponsors/google.svg')
                }
            ]
        }
    }
}
</script>
<style scoped>
.is-vertical-center {
  display: flex;
  align-items: center;
}
</style>
