new Vue({
    el: "#app",
    data: {
        // title: "AMir Hamja",  // string print
        // isItTrue : true,
        // robot :{
        //     name :"franky"
        // },

        src: "https://picsum.photos/200/300",
        alt: "This is boss",
        link: "https://www.google.com/",
        myText: "This is bol",
        myHtml: "<strong>Hello Warld</strong"
        // cars :[
        //     'ford', 'toyota'
        // ],

        // greeting :()=>{
        //     return "hello world";
        // }

    },

    methods: {
        
        greeting(){
            // return "hello world";

            return this.title;
        }

        // greeting : function(){
        //     return "hello world";
        // }

    }



})



// directive 2 types er hoyea thakea