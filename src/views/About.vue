<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- <p v-for="user in users" :key="user.id">{{ user.name }}</p> -->
    <p>{{ user.email ? user.email : 'Pas de mail' }}</p>
    <p v-for="repo in user.repositories.nodes" :key="repo.id">{{ repo.name }}</p>
  </div>
</template>

<script>
  import gql from 'graphql-tag'

  export default {
    name:"about",
    apollo: {
      // Simple query that will update the 'hello' vue property
      user: gql`query {
        user: viewer {
          id
          email
          repositories(first: 50, privacy: PUBLIC, orderBy: {field: CREATED_AT, direction: DESC}) {
            nodes {
              id
              name
              description
              createdAt
              languages(orderBy: {field: SIZE, direction: ASC}, first: 10) {
                edges {
                  node {
                    id
                    name
                    color
                  }
                }
              }
            }
          }
        }
      }`,
    },
  }
</script>