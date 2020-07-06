<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" style="font-size: 1.15rem;">
      <b-navbar-brand router-link to="/" class="title" style="font-weight: 700; font-size: 1.45rem;">Vue Movies</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" style="font-weight: 400;"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item router-link to="/">Home</b-nav-item>
          <b-nav-item router-link to="/movie">Movie List</b-nav-item>

           <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template v-slot:button-content>
            <em>Categories</em>
          </template>
          <b-dropdown-item v-for="option in options" router-link v-bind:to="option.value">{{ option.text }}</b-dropdown-item>
        </b-nav-item-dropdown>

          <!-- <b-nav-item router-link to="/movieDetailsPage" disabled>Film Details</b-nav-item> -->
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input v-model="title" size="sm" class="mr-sm-2" placeholder="Search Movie">
            </b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" type="submit" v-on:click="search()">
              <b-icon-search></b-icon-search>&nbsp;Search</b-button>
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
      title: null,
      selected: "",
      options: [
        { text: "Comic", value: "/categories/comic" },
        { text: "Romantic", value: "/categories/romantic" },
        { text: "Adventure", value: "/categories/adventure" },
        { text: "Favourites", value: "/favourites" }
      ]
    };
  },

  methods: {
    search(title) {
      this.$router.push("/movie/" + this.title);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.nav-link.active {
  border-bottom: 1px solid red;
}

.title {
  padding-bottom: 2px;
  border-bottom: 3px solid red;
}
/deep/ .dropdown-menu  {
     border-radius: 0;
    background: #343a40;
    color: #fff;
    border: 0;
}
/deep/ .dropdown-item {
  color: #fff;
}
/deep/ .dropdown-item:hover{
  color: #212529;;
}
</style>