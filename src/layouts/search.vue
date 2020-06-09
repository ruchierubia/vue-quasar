<template>
  <q-layout view="hHh Lpr fFf"> <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header elevated class="row justify-center">
      <q-toolbar class="col">
        <q-toolbar-title>
          US Hit Series
        </q-toolbar-title>
      </q-toolbar>

      <q-tabs>
        <q-route-tab :to="{name: 'profile', params: {id:1}}" replace label="Main Character" />
        <q-route-tab :to="{name: 'profile', params: {id:2}}" replace label="Second Character" />
        <q-route-tab :to="{name: 'profile', params: {id:'random'}}" replace label="Cast" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view :key="$route.params.id"/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data () {
    return {
      leftDrawer: true
    }
  }
}
</script>
