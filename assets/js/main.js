var app = new Vue({
    el: "#root",
    data: {

        inputTxt: "",
        arrayTodos: [{
                title: "fare la spesa",
                status: "done"
            },
            {
                title: "fare la pasta",
                status: "todo"
            },
            {
                title: "fare la verticale",
                status: "todo"
            },
            {
                title: "saltare la corda",
                status: "done"
            },
            {
                title: "nuotare",
                status: "todo"
            },
        ]
    },
    methods: {
        add: function() {
            if (this.inputTxt != "") {
                let obj = {
                    title: this.inputTxt,
                    status: "todo"
                }
                this.arrayTodos.push(obj)
            }
            this.inputTxt = ""
        },
        check: function(todo) {
            var index = this.arrayTodos.indexOf(todo)
            this.arrayTodos[index].status = "done"
        },
        remove: function(todo) {
            var index = this.arrayTodos.indexOf(todo)
            this.arrayTodos.splice(index, 1)
        },
        edit: function(todo) {
            var index = this.arrayTodos.indexOf(todo)
            this.inputTxt = this.arrayTodos[index].title
            this.arrayTodos.splice(index, 1)
        }
    },
    computed: {
        todosComputed: function() {
            let todosDone = this.arrayTodos.filter((todo) => todo.status == "done")
            let todosTodo = this.arrayTodos.filter((todo) => todo.status == "todo")

            return [...todosTodo, ...todosDone]
        }
    }
})