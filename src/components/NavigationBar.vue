<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" style="font-size: 1.15rem;">
      <b-navbar-brand router-link to="/" class="title" style="font-weight: 700; font-size: 1.45rem;">Vue Movies</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" style="font-weight: 400;"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/film">Movie List</b-nav-item>
          <b-nav-item router-link to="/film/favourites">Favourites (stellina)</b-nav-item>
          <!-- <b-nav-item router-link to="/filmDetails" disabled>Film Details</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input v-model="title" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="search()">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "NavigationBar",

  props: {},
  data() {
    return {
      title: null
    };
  },

  methods: {
    search(title) {
      this.$router.push("/film/" + this.title);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.nav-link.active{
  border-bottom: 1px solid red;
}

.title{
  padding-bottom: 2px;
  border-bottom: 3px solid red;
}

.nav-link{
  border-bottom: 1px solid #544a4a;
}
</style>
