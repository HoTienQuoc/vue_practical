const { createApp } = Vue
createApp({
    data() {
        return {
            courseGoals: "",
            enteredValue: ''
        };
    },
    methods:{
        addGoal(){
            this.goals.push(this.enteredValue)
        }
    }
}).mount('#user-goal')
