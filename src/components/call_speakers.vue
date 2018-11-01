<template>
    <div class="container-fluid">
        <Navbar/>
        <notifications group="notification"  position='top right' />
        <div class="content main">
            <h3 class="title">Apply to become a speaker at North west devfest </h3>
            <form v-on:submit.prevent='submitForm' class="speaker-details">

                <!-- Name and phone -->
                <div class="columns is-multiline">

                    <div class="field column is-half">
                        <label class="label">Name</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="name" class="input" type="text" required placeholder="Your fullname" value="">
                            <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">Name is required</p> -->
                    </div>

                    <div class="field column is-half">
                        <label class="label">Phone</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="phone" class="input" type="text" required placeholder="+234 989 8888 8888">
                            <span class="icon is-small successis-left">
                            <i class="fas fa-phone"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">Phone is required</p> -->
                    </div>
                    <div class="field column is-half">
                        <label class="label">Company</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="company" class="input" type="text" required placeholder="eg. Google/Facebook/University">
                            <span class="icon is-small successis-left">
                            <i class="fas fa-company"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">Phone is required</p> -->
                    </div>
                    <div class="field column is-half">
                        <label class="label">Position</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="position" class="input" type="text" required placeholder="eg. Developer/Manager/Student">
                            <span class="icon is-small successis-left">
                            <i class="fas fa-company"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">Phone is required</p> -->
                    </div>
                    <div class="field column is-half">
                        <label class="label">Photo URL</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="photo_url" class="input" type="text" required placeholder="">
                            <span class="icon is-small successis-left">
                            <i class="fas fa-photo"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">Phone is required</p> -->
                    </div>
                    <div class="field column is-half">
                        <label class="label">Social Accouts Url <small class="is-small is-italic">(seperated by comma)</small></label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="social_accounts" class="input" type="text" required placeholder="">
                            <span class="icon is-small successis-left">
                            <i class="fas fa-photo"></i>
                            </span>
                        </div>
                    </div>

                    <div class="field column is-half">
                        <label class="label">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input v-model="email" class="input" type="email" required placeholder="Email input">
                            <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                            </span>
                            <span class="icon is-small is-right">
                            </span>
                        </div>
                        <!-- <p class="help is-danger">This email is invalid</p> -->
                    </div>

                    <div class="field column is-half">
                        <label class="label">Are you willing to sponsor yourself to Kano</label>
                        <div>
                            <div class="select is-fullwidth">
                            <select v-model="self_sponsorship" class="control is-fullwidth" required>
                                <option></option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>I live in Kano</option>
                            </select>
                            </div>
                        </div>
                    </div>

                    <div class="field column is-half">
                        <label class="label">Speach Category</label>
                        <div>
                            <div class="select is-fullwidth">
                            <select v-model="category" class="control is-fullwidth" required>
                                <option></option>
                                <option>Presentation</option>
                                <option>Codelab</option>
                            </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field">
                    <label class="label">Biography</label>
                    <div class="control">
                        <textarea v-model="biography" class="textarea" placeholder="Give your speech in simple words"></textarea>
                    </div>
                </div>
                <div class="field">
                    <label class="label">Speach brief description</label>
                    <div class="control">
                        <textarea v-model="description" class="textarea" placeholder="Give your speech in simple words"></textarea>
                    </div>
                </div>

                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link is-register">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
        <div :class="'modal '+load">
            <div class="modal-background"></div>
            <div class="modal-content center-text">
                <div class="lds-dual-ring"></div>
            </div>
            <button class="modal-close is-large" aria-label="close"></button>
        </div>
        <!-- <Pagefooter/> -->
    </div>
</template>

<script>
import Navbar from "./navbar";
import Pagefooter from "./footer"
import $ from "jquery";
import { db } from '../main'

export default {
    name: "homepage",
    components : {
        Navbar,
        Pagefooter
    },
    data(){
        return {
            name:'',
            email:'',
            phone:'',
            category:'',
            description:'',
            biography:'',
            social_accounts:'',
            photo_url:'',
            position:'',
            company:'',
            self_sponsorship:'',
            load: ''
        }
    },
    mounted(){
        // console.log(this)
        
    },
    // firestore () {
    //     return {
    //     call_for_speakers: db.collection('call_for_speakers')
    //     }
    // },
    methods:{
        async submitForm(){
            this.load ='is-active'
            const speaker = {
                "name": this.name,
                "email": this.email,
                "phone": this.phone,
                "category": this.category,
                "description": this.description,
                "biography": this.biography,
                "social_accounts": this.social_accounts,
                "photo_url": this.photo_url,
                "position": this.position,
                "company": this.company,
                "self_sponsorship": this.self_sponsorship                
            }
            const x = await db.collection('call_for_speakers').add(speaker)
            if(x){
                setTimeout(() => {
                    this.load =''
                }, 2000);
                this.name = ''
                this.email = ''
                this.phone = ''
                this.category = ''
                this.description = ''
                this.biography = ''
                this.social_accounts = ''
                this.photo_url = ''
                this.position = ''
                this.company = ''
                this.self_sponsorship = ''
                this.$notify({
                    group: 'notification',
                    type: 'success',
                    duration: 10000,
                    title: 'Thank you for your submission',
                    text: 'Your request has been recieved successfully, we will get back to you soon'
                });
                
            }
        }
    }
}
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
</script>
<style scoped>
.speaker-details{
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
}
.main{
    margin-top: 50px;
}
</style>


