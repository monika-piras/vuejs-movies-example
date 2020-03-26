<template>
  <div>
    <form @submit="checkForm">
      
      <div class="form-row align-items-center">

        <div class="col-auto">
          <label class="left" for="inlineFormInput1">Title:</label>
          <input type="text" class="form-control mb-2" id="inlineFormInput1"
            v-model="title" placeholder="title">
          <div class= "testo" v-if="isErrorTitle">Title required.</div>
        </div>

           <!-- <div class="col-auto">
          <label class="left" for="inlineFormInput4">Image:</label>
          <input type="image" src="../../public/img/bee.jpg" name="STOP" class="form-control mb-2"
          width="25" height="25" align="top" alt="Stop sign" id="inlineFormInput4" v-model="image">
        </div>  -->

        <div class="col-auto">
          <label class="left" for="inlineFormInput2">Description:</label>
           <textarea name="message" class="form-control mb-2" id="inlineFormInput2" 
              v-model="description" placeholder="description"></textarea>
          <!-- <div class= "testo" v-if="isErrorDescription"> Description required. </div> -->
        </div> 

        <div class="col-auto">
          <input type="checkbox" id="romantic" value="romantic" v-model="checkedCategories">
          <label for="romantic">Romantic</label>
          <input type="checkbox" id="comic" value="comic" v-model="checkedCategories">
          <label for="comic">Comic</label>
          <input type="checkbox" id="adventure" value="adventure" v-model="checkedCategories">
          <label for="adventure">Adventure</label>
          <input type="checkbox" id="top-rated" value="top-rated" v-model="checkedCategories">
          <label for="top-rated">Top-rated</label>
        <!-- <span>Checked categories: {{ checkedCategories }}</span> -->
        </div> 

        <div class="col-auto">
          <label class="left" for="inlineFormInput3">Cast:</label>
           <textarea name="message" class="form-control mb-2" id="inlineFormInput3" 
              v-model="cast" placeholder="cast"></textarea>
          <!-- <div class= "testo" v-if="isErrorDescription"> Cast required. </div> -->
        </div> 
        
        <div>
          <star v-model="prefer"></star>
        </div>

        <div class="col-auto">
          <label class="left" for="inlineFormInput4">Trailer:</label>
          <input type="text" class="form-control mb-2" id="inlineFormInput4"
            v-model="trailer" placeholder="trailer embeded code">
        </div>


        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-2" >Add Film</button>
        </div>

      </div>
    </form>
  </div>
</template>

<script>
import Star from "@/components/Star.vue";
export default {
  name: "FormComponent",
  components: {
    Star
  },
  props: {

  },
  data: function() {
    return {
      title: null,
      isErrorTitle: false,
      description: null,
      checkedCategories: [],
      cast: null,
      // isErrorDescription: false,
      prefer: false,
      trailer: null,
      id: Math.random()*10
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
      // || this.isErrorDescription
      if (this.isErrorTitle ) {
        risultato = true;
      }
      return risultato;
    },

    hasMinLength(paramToCompare, length) {
      return paramToCompare.length >= length;
    },

    save() {
      const film = {
        title: this.title,
        description: this.description,
        categories: this.checkedCategories,
        cast: this.cast,
        prefer: this.prefer,
        trailerPath: this.trailer,
        id: this.id
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

