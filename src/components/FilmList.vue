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

  <h2>Film Romantici</h2>
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

  
<!--<h2>Film Romantici</h2>
  <div class="row">
    <div class="col-sm">
      <ul class="list-group">
        <li class="list-group-item"><img src="../../public/img/strawberry.jpg"></li>
        <li class="list-group-item"><img src="../../public/img/strawberry.jpg"></li>
      </ul>
    </div>
    <div class="col-sm">
      <ul class="list-group">
        <li class="list-group-item"><img src="../../public/img/trees.jpg"></li>
        <li class="list-group-item"><img src="../../public/img/trees.jpg"></li>
      </ul>
    </div>
    <div class="col-sm">
      <ul class="list-group">
        <li class="list-group-item"><img src="../../public/img/water.jpg"></li>
        <li class="list-group-item"><img src="../../public/img/water.jpg"></li>
      </ul>
    </div>
    <div class="col-sm">
      <ul class="list-group">
        <li class="list-group-item"><img src="../../public/img/flower.jpg"></li>
        <li class="list-group-item"><img src="../../public/img/flower.jpg"></li>
      </ul>
    </div>
  </div> -->
</div>
</template>

<script>
export default {
  name: "FilmList",
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

