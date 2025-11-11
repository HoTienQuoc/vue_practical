const { createApp } = Vue
createApp({
    data() {
        return {
            courseGoalA: "Finish the course and learn vue A",
            courseGoalB: "Finish the course and learn vue B",
            // courseGoalB: "<h2>Finish the course and learn vue B</h2>",
            vueLinks: "https://vuejs.org",
            counter:0,
            name:''
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber>0.5) {
                return this.courseGoalA
            } else {
                return this.courseGoalB
            }
        },
        add(num){
            this.counter=this.counter+num
        },
        reduce(num){
            this.counter=this.counter-num
        },
        setName(event){
            this.name = event.target.value
        }
    }
}).mount('#user-goal')
