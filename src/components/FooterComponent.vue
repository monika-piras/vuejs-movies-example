<template>
  <div>
      <footer id="sticky-footer" style="margin-top:30px;" class="py-4 bg-dark text-white-50">
        <div class="container text-center">
          <small>Copyright &copy; Vue Movies Website. All Rights Reserved.</small>
        </div>
      </footer>
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

