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
    const character = await this.$axios.get(`https://www.breakingbadapi.com/api/characters/${this.$route.params.id}`);
    this.character = character.data[0];
  },
  data() {
    return {
      character: ''
    }
  }
}
</script>
