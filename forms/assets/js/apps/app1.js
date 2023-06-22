export default {  
    data() {  
        return {  
            grades : [  
  
            ]  
        }  
    },  
    methods : {  
        addGrade (event) {  
            let value = event.target.elements.grade.value;  
            this.grades.push(value);  
        }  
    }  
}