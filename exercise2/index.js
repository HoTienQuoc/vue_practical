const { createApp } = Vue
createApp({
    data() {
        return {
            courseGoal: "Finish the course and learn vue",
            vueLinks: "https://vuejs.org"
        };
    },
    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber>0.5) {
                return "Learn Vue!"
            } else {
                return "Master Vue"
            }
        }
    }
}).mount('#user-goal')
