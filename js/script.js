let{createApp} = Vue;
createApp({
    data(){
       return{
        todo:[
            {
                text:'Fare il prato',
                checked: false
            }
        ],
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
            this.todo.push({...this.newTodo});
            this.myInput ='';
        },
        isChecked(){
            if(this.todo.item.checked === false){
                this.todo.item.checked = true;
                console.log('Completato')
            }
        }
    }
}
).mount('#app')