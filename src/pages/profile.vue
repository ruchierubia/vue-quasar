<template>
  <q-page padding>
    <!-- content -->
    <div class="column justify-center items-center">
      <h3>{{character.name}}</h3>
      <q-card class="my-card">
        <img :src="character.img" alt="">
        <q-card-section>
          <div class="text-h6">{{character.name}}</div>
          <div class="text-subtitle2">{{character.nickname}}</div>
        </q-card-section>
        <q-card-section>
          <q-chip v-for = "occupation in character.occupation"
            color="teal"
            :key="occupation"
            text-color="white"
            icon="bookmark">
            {{occupation}}
          </q-chip>
        </q-card-section>
      </q-card>
    </div>
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
<style lang="scss" scoped>
  .my-card {
    width: 20%;
  }
</style>
