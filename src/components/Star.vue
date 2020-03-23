<template>
 <div @click="change()" style="cursor:pointer;"> 
      <i v-if="value" class="material-icons">star</i>
      <i v-if="!value" class="material-icons">star_border</i>
 </div>
 
</template>
<script>
export default {
  name: "Star",
  props: {},
  data() {
    return {
      value: false,
      prefer: false
    };
  },
  methods: {
    change() {
      this.value = !this.value;
      this.$emit('input', this.value);
    }
  }
};
</script>

