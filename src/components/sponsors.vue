<template>
    <section class="content sponsors has-text-centered">
        <h1 class="title has-text-centered">SPONSORS</h1>
        <h3 class="title" style="margin-top: 50px">Event Sponsors</h3>
        <img v-for="(sponsor,index) in sponsors" :key="index" :src="sponsor.logo" alt="" style="width: 140px; ">
        <h3 class="title" style="margin-top: 50px">Event Partners</h3>
        <img v-for="(partner,index) in partners" :key='index' :src="partner.logo" alt="" style="width: 100px; max-height: 100px">
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
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner1.png')
                },
                {
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner2.png')
                },
                {
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner3.png')
                },
                {
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner4.png')
                },
                {
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner5.png')
                },
                {
                    "name": "Startup Kano",
                    "logo": require('../assets/partners/partner1.png')
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
