<template>
    <div>
        <HeaderBlog/>
        <div class="container">
           <template>
                 <v-form @submit.prevent>
                    <v-container>
                    <v-row>
                        <v-text-field
                            v-model="form.title"
                            id="title"
                            :rules="nameRules"
                            :counter="10"
                            label="Title"
                            required
                            hide-details
                        ></v-text-field>
                    </v-row>
                    <v-row>
                        <v-textarea
                            v-model="form.body"
                            id="body"
                            name="input-7-1"
                            variant="filled"
                            label="Body"
                            auto-grow
                        ></v-textarea>
                    </v-row>
                    </v-container>
                    <v-btn class="me-4" color="success" @click="SavePost" type="submit">Save</v-btn>
                    <v-btn class="me-4" color="warning" @click="ExitPage">Exit</v-btn>
                </v-form>
            </template>
        </div>
    </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog.vue';
import axios from 'axios';

export default{
    name:"NewView",
    components: {
        HeaderBlog
    },
    data(){
        return{
          form:{
            "id": "",
            "title": "",
            "body": "",
            "userId": 1
          }
        }
    },
    methods: {
        SavePost() {
            if(this.form.title == ""){
                alert("You must enter a title for the post");
                return false;
            }else if(this.form.body == ""){
                alert("You must enter a body for the post");
                return false;
            }
            
            axios.post("https://jsonplaceholder.typicode.com/posts",this.form).then(data => {
                console.log(data);
                alert("The post has been created successfully");
            }).catch(error => {
                console.log(error);
                alert("Error saving");
            });
        },
        ExitPage(){
            this.$router.push('/')
        }
      }
}
</script>

<style scoped>

</style>
