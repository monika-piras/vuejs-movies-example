<template>
  <div>
    <div class="d-flex flex-column">
      <footer id="sticky-footer" style="margin-top:30px;" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Your Website</small>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "FooterComponent"
};
</script>


<style scoped>
#sticky-footer {
  flex-shrink: none;
}
</style>

