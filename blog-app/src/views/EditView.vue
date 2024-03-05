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
                    <v-btn class="me-4" color="success" @click="ModifyPost" type="submit">Edit</v-btn>
                    <v-btn class="me-4" color="error" @click="deletePost">Delete</v-btn>
                    <v-btn class="me-4" color="warning" @click="ExitPage">Exit</v-btn>
                </v-form>
            </template>
        </div>
    </div>
    
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog.vue';
import axios from 'axios';

export default({
    name:"EditView",
    components: {
        HeaderBlog
    },
    data(){
        return{
          form:{
            "id": "",
            "title": "",
            "body": "",
            "userId": ""
          }
        }
    },
    mounted(){
        this.postId = this.$route.params.id;
        //console.log(this.postId);
        axios.get("https://jsonplaceholder.typicode.com/posts/"+this.postId).then(response => {
          this.form.id = this.postId
          this.form.title = response.data.title
          this.form.body = response.data.body
          this.form.userId = response.data.userId
        })
    },
    methods: {
      ModifyPost() {
        if(this.form.title == ""){
            alert("You must enter a title for the post");
            return false;
        }else if(this.form.body == ""){
            alert("You must enter a body for the post");
            return false;
        }
        
        axios.put("https://jsonplaceholder.typicode.com/posts/"+this.postId,this.form).then(data => {
            console.log(data);
            alert("The post has been edited correctly");
        }).catch(error => {
            console.log(error);
            alert("Error saving");
        });
      },
      deletePost() {
        axios.delete("https://jsonplaceholder.typicode.com/posts/"+this.postId).then(data => {
            console.log(data);
            alert("The post has been successfully deleted");
            this.$router.push('/')
        }).catch(error => {
            console.log(error);
            alert("Error deleting");
        });
      },
      ExitPage() {
        this.$router.push('/')
      },
    }
})
</script>

<style scoped>

</style>