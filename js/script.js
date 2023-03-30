let{createApp} = Vue;
createApp({
    data(){
       return{
        todo:[],
        myInput:'',
        newTodo:{
            text:'',
            checked: false
        }
       }
    },
    methods:{
        addTodo(){
            this.newTodo.text = this.myInput;
            this.todo.push(...this.newTodo);
        }
    }
}
).mount('#app')