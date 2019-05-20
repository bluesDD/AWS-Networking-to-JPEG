<template>
  <v-app light>
    <v-container mt-10 pt-40>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <br>
    <br>
    <v-switch
      v-model="switch1"
      :label="`Switch 1: ${switch1.toString()}`"
    ></v-switch>
      <p>store: {{ this.$store.state.hogeFromStore }}</p>
      <button v-on:click="$store.dispatch('writeHoge', '直接、値を書き換えます')">Test</button>
      <button v-on:click="$store.dispatch('writeHoge', 'Hello, Vuex')">Test2</button>
      <button v-on:click="testMethod()">Test3</button>
    <dir>

    <v-btn
      :loading="loading3"
      :disabled="loading3"
      color="blue-grey"
      class="white--text"
      @click="loader = 'loading3'"
    >
      Download
      <v-icon right dark>cloud_download</v-icon>
    </v-btn>

    </dir>

  </v-container >


    <v-footer
      :fixed="fixed"
      app
    >
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  methods: {
    testMethod: function() {
      console.log(this.$store.state.hogeFromStore)
      this.$store.dispatch('writeHoge', 'メソッドからの書き換え')
      console.log(this.$store.state.hogeFromStore)

    }
  },

  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'AWS Networking to JPEG',
      switch1: true,
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false
    }
  },
  watch: {
    loader() {
       const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
    }
  },
}
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
