new Vue({
    el: "#app",
    data: {
        // title: "AMir Hamja",  // string print
        // isItTrue : true,
        // robot :{
        //     name :"franky"
        // },

        // src: "https://picsum.photos/200/300",
        // alt: "This is boss",
        // link: "https://www.google.com/",
        // myText: "This is bol",
        // myHtml: "<strong>Hello Warld</strong"
        // cars :[
        //     'ford', 'toyota'
        // ],

        // greeting :()=>{
        //     return "hello world";
        // }


        // ## Conditional Rendering part 07

        user: 'Amir',
        x : 0,
        y : 0,

        formData: {
            fname: '',
            // lname: 12,
        }
        // userAge: 27,
        // allowedAge: 28,

        // cars : ['one', 'two', 'three'],
// obj crete
        // users: {
        //     name: 'amir',
        //     age:27,
        //     profession: 'web develop'
        // },

    },

   
        // methods: {
        //  update(){
        //     setTimeout(() =>{
        //     this.user ='test'
        //     },2000)
        //  },
        //  getCord(event){
        //     this.x = event.clientX;
        //     this.y = event.clientY;
    
        //     }
        // },

        // methods: {
        //     update(){
        //        setTimeout(() =>{
        //        this.user ='test'
        //        })
        //     }
        //    },

    

        // methods: {
        //     update(newame,event){
        //        this.user =newame;
        //        console.log(event);
            
        //     }
        //    },

           
        methods: {
           handleForm(){
            //event.preventDefault();
            console.log(this.formData);

           }
        }

    // ## Conditional Rendering part 07
 
    // methods: {   
    //     changeUser(){

    //         return this.user==='Amir Hamja'? true : false;
    //     }
    // }
     

   // ## method use in vue js

    // methods: {

        // ## 1st process
        
        // greeting(){
        //     // return "hello world";

        //     return this.title;
        // }

         // ## 2nd process


        // greeting : function(){
        //     return "hello world";
        // }

    // }



});



// directive 2 types er hoyea thakea