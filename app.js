new Vue({
    el: "#app",
    data: {
        title: "AMir Hamja",  // string print
        isItTrue : true,
        robot :{
            name :"franky"
        },
        
        cars :[
            'ford', 'toyota'
        ],

        greeting :()=>{
            return "hello world";
        }

    }
})