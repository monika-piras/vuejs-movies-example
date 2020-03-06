<template>
  <div class="about">
    <h1> ALL FILMS</h1>
  <film-list/>
  </div>
</template>

<script>
import FilmList from '@/components/FilmList.vue'

export default {
  name: 'Film',
  props:{
  },
  data() {
    return {
    };
  },
  components: {
    FilmList
  }
}

</script>

