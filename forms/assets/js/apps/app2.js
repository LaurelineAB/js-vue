export default {
    data() {
        return {
            tasks : []
        }
    },
    methods : {
        addTask (event) {
            let newTask = event.target.elements.task.value;
            this.tasks.push(newTask);
        }
    }
}