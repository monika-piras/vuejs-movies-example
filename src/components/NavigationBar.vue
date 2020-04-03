<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand router-link to="/">Home</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item router-link to="/film">Film</b-nav-item>
        <!-- <b-nav-item router-link to="/filmDetails" disabled>Film Details</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input v-model="title" size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit" 
          v-on:click="search()">Search</b-button>
        </b-nav-form>

        <!-- <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown> -->

        <!-- <b-nav-item-dropdown right>
          <template v-slot:button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown> -->
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
/* .add-button {
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 1px solid  #4d4d4d;
  background: #999;
  color: #fff;
  padding: 10px;
  font-size: 25px;
  border-radius: 4px;
  z-index: 2;
  outline: none;
}
.add-button:hover {
  background: #808080;
  color: black;
  border: 1px solid #737373;
} */

</style>
