<template>
  <div>
    <HeaderBlog/>
    <div class="container">
      <v-card class="mx-auto mt-5" max-width="900">
        <div class="container">
          <template>
            <v-row justify="center" align="center">
              <v-col cols="6">
                <v-btn class="ma-6" color="success" @click="createNewPost" type="submit">Create new post</v-btn>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="selectedItem" 
                  :items="selectOptions"
                  label="Filter by user"
                  @change="handleOptionChange"
                ></v-select>
              </v-col>
            </v-row>
          </template>
        </div>
      <v-data-table
        :headers="cols"
        :items="posts"
        class="elevation-19"
      >
      <template v-slot:item="row">
          <tr>
            <td>{{row.item.id}}</td>
            <td>{{row.item.title}}</td>
            <td>
                <v-btn class="mx-2" color="primary" @click="onButtonClick(row.item.id)">
                    Edit
                </v-btn>
            </td>
          </tr>
      </template>
      </v-data-table>
      </v-card>
    </div>
  </div>
</template>

<script>
  import HeaderBlog from '@/components/HeaderBlog.vue';
  import axios from 'axios';

  let url = "https://jsonplaceholder.typicode.com/posts"
    export default {
      name: 'HomeComponent',
      components: {
        HeaderBlog
      },
      data(){
        return{
          cols:[
            {text:"Cod.", value:"id", class: 'orange darken-4 white--text'},
            {text:"Title", value:"title", class: 'orange darken-4 white--text'},
            {text:"Action", value:"action", class: 'orange darken-4 white--text'}
          ],
          posts:[],
          selectedItem: null,
          selectOptions: []
        }
      },
      created(){
        axios.get(url).then(response => {
          this.posts = response.data;
        })
        .catch(error => {
          alert('Error getting data', error);
        });

        axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
          this.selectOptions = response.data.map(item => ({
            text: item.name,
            value: item.id,
          }));
        })
        .catch((error) => {
          console.error('Error al obtener los datos:', error);
        });

      },
      methods: {
        onButtonClick(item) {
          this.$router.push('/edit/'+ item)
        },
        createNewPost(){
          this.$router.push('/new')
        },
        handleOptionChange() {
          const selectedValue = this.selectedItem;
          this.filterByUser(selectedValue);
        },
        filterByUser(selectedValue) {
          axios.get("https://jsonplaceholder.typicode.com/posts?userId="+selectedValue).then((response) => {
              console.log(response.data);
              this.posts = response.data;
            }).catch((error) => {
              console.error('Error en la solicitud Axios:', error);
            });
        }
      }
    }
</script>
