<template>
  <div class="about">
    <h1 style="margin-bottom:40px;"> ALL FILMS</h1>
  <film-list-all/>

  </div>
</template>

<script>
import FilmListAll from '@/components/FilmListAll.vue'

export default {
  name: 'Film',
   components: {
    FilmListAll
  },
  props:{
  },
  data() {
    return {
    };
  },
}
</script>