<template>
  <div class="map-wrapper" id="map">
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import '@/assets/scss/main.scss';
  import UserInfo from '@/components/UserInfo.vue';
  import FirstDemo from '@/examples/first';
  import OlDemo from '@/examples/ol';
  @Component({
    components: {
      UserInfo,
    },
  })
  export default class Layout extends Vue {

    private mounted() {
      // new FirstDemo();
      const ol = new OlDemo();
    }
  }
</script>

<style lang="scss">
  .map-wrapper {
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
  }
</style>
