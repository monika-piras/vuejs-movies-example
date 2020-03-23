<template>
  <div>
    <form @submit="checkForm">
      
      <div class="form-row align-items-center">

          <div class="col-auto">
          <label class="left" for="inlineFormInput1">Title:</label>
          <input type="text" class="form-control mb-2" id="inlineFormInput1" v-model="title" placeholder="title">
          <div class= "testo" v-if="isErrorTitle">Title required.</div>
        </div>

         <!-- <div class="col-auto">
          <label class="left" for="inlineFormInput2">Description:</label>
           <textarea name="message" class="form-control mb-2" id="inlineFormInput2" 
              v-model="description" placeholder="description"></textarea>
          <div class= "testo" v-if="isErrorDescription"> Description required. </div>
        </div> -->
        
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-2" >Add Film</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "FormComponent",

  props: {},
  data: function() {
    return {
      title: null,
      isErrorTitle: false
      // description: null,
      // isErrorDescription: false
    };
  },

  methods: {
    checkForm: function(event) {
      this.compileHTMLErrors();

      var isFormInvalid = false;
      isFormInvalid = this.formHasErrors();

      //se il form ha errori
      if (isFormInvalid) {
        return; //ti fermi qui
      }

      //altrimenti
      this.save();
      this.resetForm();
    },

    resetForm() {
      this.title = "";
      // this.description = "";
    },

    resetErrors() {
      this.isErrorTitle = false;
      // this.isErrorDescription = false;
    },

    compileHTMLErrors() {
      this.resetErrors();

      if (!this.title || !this.hasMinLength(this.title, 5)) {
        this.isErrorTitle = true;
      }

      // if (!this.description || !this.hasMinLength(this.description, 5)) {
      //   this.isErrorDescription = true;
      // }
    },

    formHasErrors() {
      var risultato = false;
      if (this.isErrorTitle /*|| this.isErrorDescription*/) {
        risultato = true;
      }
      return risultato;
    },

    hasMinLength(paramToCompare, length) {
      return paramToCompare.length >= length;
    },

    save() {
      const film = {
        title: this.title
      };

      console.log("save qualcosa ..");

      if (this.title) {
        this.$store.dispatch("callActionAddFilm", film);
        this.$router.push("../film");
      } else {
        console.log("No update Film");
      }
    }
  }
};
</script>


<style>
.left {
  float: left;
}
.testo {
  color: red;
}
.rossoEmail,
.rossoName,
.rossoSurname,
.rossoContinent {
  border: 1px solid red;
}
.rossoContinent {
  margin-bottom: 5px;
}
</style>

