export default {  
    data() {  
        return {  
            animal : "Dogs"  
        }  
    },  
    methods : {  
          changeAnimal()
          {
            if (this.animal === "Dogs")
            {
                this.animal = "Cats";
            }
            else if (this.animal === "Cats")
            {
                this.animal = "Dogs";
            }
          }
    }  
}