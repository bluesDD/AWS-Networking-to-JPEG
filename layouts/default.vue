<template>
  <v-app light>
    <v-container mt-10 pt-40>

    <v-toolbar
      :clipped-left="clipped"
      fixed
      app
      dark
      color="#ec7211"    >
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-toolbar>
    <br>
    <br>
    <v-switch
      v-model="switch1"
      :label="`Load Balanceの有無 : ${StringtrueOrfalse}`"
      :value="trueOrfalse"
    ></v-switch>
    <br>

    <v-flex xs12 sm6 d-flex>
        <v-select
          :items="ec2"
          label="EC2の数"
        ></v-select>
      </v-flex>

        <v-flex xs12 sm6 d-flex>
        <v-select
          :items="db"
          label="データベースの種類"
        ></v-select>
      </v-flex>
    <v-switch
      v-model="switch2"
      :label="`S3の有無 : ${StringtrueOrfalse}`"
      :value="trueOrfalse2"

    ></v-switch>
    <br>
      <p>store: {{ this.$store.state.hogeFromStore }}</p>
      <button v-on:click="$store.dispatch('writeHoge', '直接、値を書き換えます')">Test</button>
      <button v-on:click="$store.dispatch('writeHoge', 'Hello, Vuex')">Test2</button>
      <button v-on:click="testMethod()">Test3</button>
    <dir>
    <p>{{ this.$store.commit('getImage') }}</p>
    <p>{{ this.$store.state.targetImageUrl }}</p>
  　<img class="img" :src="this.$store.state.testImage2" />

    <img class="img" :src="this.$store.state.testImage" />
    <br>
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
    testMethod() {
      console.log(this.$store.state.hogeFromStore)
      this.$store.dispatch('writeHoge', 'メソッドからの書き換え')
      console.log(this.$store.state.hogeFromStore)
    },
  },
  computed:{
    StringtrueOrfalse: function () {
      return this.switch1 ? 'あり' : 'なし';
    },
    StringtrueOrfalse2: function () {
      return this.switch2 ? 'あり' : 'なし';
    },
    trueOrfalse: function() {
       this.switch1 ? this.$store.dispatch('writeTestImage','/Elastic-Load-Balancing-ELB.png') : this.$store.dispatch('writeTestImage','')
    },
    trueOrfalse2: function() {
       this.switch2 ? this.$store.dispatch('writeTestImage2','/Amazon-Simple-Storage-Service-S3.png') : this.$store.dispatch('writeTestImage2','')
    },
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
      switch2: true,
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false,
      ec2: [1,2,3],
      db:['RDS', 'EC2', 'なし']
    }
  },
  watch: {
    loader() {
       const l = this.loader
        this[l] = !this[l]
        setTimeout(() => (this[l] = false), 3000)
        this.loader = null
    },
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
