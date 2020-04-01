<template>
<div>
    <ul class="scrollable">
        <li v-for="elementoCorrente in this.allFilms">
          <!-- titolo: {{elementoCorrente.title}} -->
          <div class="image" @click="directDetails(elementoCorrente.id)">
            <img v-bind:src="elementoCorrente.image"  
               alt="Image Film"/>
          </div>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  name: "FilmListAll",
  props: ['search'],
  data() {
    return {
    };
  },
  components: {},

  methods: {
    directDetails(id) {
      console.log("numero id: " + id);
      this.$router.push("/filmDetails/" + id);
    }
  },

  computed: {
    allFilms() {
      if(this.search){
          return this.$store.getters.getFilms.filter((item)=>item.title.toLowerCase().includes(this.search.toLowerCase()));
      }else{
        return this.$store.getters.getFilms;
      }
    }
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
li {
  margin: 6px 6px;
}
img {
  width: 190px;
  height: 300px;
}

li:hover .image{    
    background: rgba(179, 179, 204, 0.5);
    cursor: pointer;
}
img {
    position: relative;
    z-index: -1;
}
</style>