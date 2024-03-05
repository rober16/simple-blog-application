# Vue 3 Blog Application with Vuetify

A simple blog application developed using Vue 3 (Composition API) and Vuetify. This application allows users to create, update, delete, and list blog posts. Posts are filterable by the user who wrote them, and there is a paginated list of posts.

## Features

- Create new posts
- Update existing posts
- Delete posts
- List all posts
- Filter posts by the user who wrote them
- JavaScript validation for post creation and update forms
- Pagination for the list of posts (backend provides 100 results)

## External Dependencies
Vue 3
Vuetify
JSONPlaceholder - Provides user data and CRUD endpoints for posts

## API Endpoints
The CRUD endpoints for posts can be found at:

- Create Post: POST /api/posts
- Update Post: PUT /api/posts/:id
- Delete Post: DELETE /api/posts/:id
- List Posts: GET /api/posts

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
