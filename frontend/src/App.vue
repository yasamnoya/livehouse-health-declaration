<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="">
        <v-app-bar-title>入場實名表單</v-app-bar-title>
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  })
}
</script>
