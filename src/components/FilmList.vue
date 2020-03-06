<template>
<div>
  <h2>Film Comici</h2>
    <div class="row space">
    <ul>
      <div class="col-sm">
      <li><img src="../../public/img/bee.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/bee.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/bee.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/bee.jpg"></li>
      </div>
    </ul>
    </div>

  <h2>{{title}}</h2>
    <div class="row space">
    <ul>
      <div class="col-sm">
      <li><img src="../../public/img/trees.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/trees.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/trees.jpg"></li>
      </div>
      <div class="col-sm">
      <li><img src="../../public/img/trees.jpg"></li>
      </div>
    </ul>
    </div>
</div>
</template>

<script>
export default {
  name: "FilmList",
  props: {
    title: String
  },
  data() {
    return {
    };
  },
  components: {}
};
</script>
<style>
.space {
  margin: 30px;
}
img {
  width: 25%;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

li img {
  display: block;
  float: left;
  padding: 8px;
  background-color: #dddddd;
}
</style>

