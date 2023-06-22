export default {
    data() {
        return {
            users : [
                {
                    id: 1,
                    name: "Laureline",
                    isActive: false
                },
                {
                    id: 2,
                    name: "Marie",
                    isActive: true
                }
            ]
        }
    },

    methods: {
        addUser(event) {
            let newName = event.target.elements.name.value;
            let newId = this.users.length + 1;
            let newUser = 
            {
                id : newId,
                name: newName,
                isActive: true
            };
            this.users.push(newUser);
        }
    }
}