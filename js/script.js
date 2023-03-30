let{createApp} = Vue;
createApp({
    data(){
       return{
        todo:[],
        newTodo:{
            text:'',
            checked: false
        }
       }
    },
    methods:{
        addTodo(){
            this.newTodo.text = newTodo;
            this.todo.push(...this.newTodo);
        }
    }
}
).mount('#app')