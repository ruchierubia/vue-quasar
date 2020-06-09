<template>
  <q-page padding>
    <!-- content -->
    <h3>{{character.name}}</h3>
  </q-page>
</template>

<script>
import axios from '../boot/axios'
export default {
  async created() {
    let url = `https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`;
    if (this.$route.params.id === 'random') {
      url = `https://www.breakingbadapi.com/api/character/${this.$route.params.id}`;
    }
    const character = await this.$axios.get(url);
    this.character = character.data[0];
  },
  data() {
    return {
      character: ''
    }
  }
}
</script>
