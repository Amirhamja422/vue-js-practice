// const ap11 = new Vue({
// el: "#app",
// data: {
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

// user: 'Amir',
// x : 0,
// y : 0,

//         value:"1st"
//     },

//     methods:{
//         changeValue(){
//          ap12.value ='changed';
//         }
//     }
// });

// const ap12 = new Vue({
//     el: "#app2",
//         data: {
//             value:"2nd"
//         },

// methods: {
//     addToA() {
//       return this.a + this.salary;
//     },
//     addToB() {
//         return this.b + this.salary;

//     }
//   }

// userAge: 27,
// allowedAge: 28,

// cars : ['one', 'two', 'three'],
// obj crete
// users: {
//     name: 'amir',
//     age:27,
//     profession: 'web develop'
// },

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

// methods: {
//    handleForm(){
//     //event.preventDefault();
//     console.log(this.formData);

//    }
// }

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

// });



// <!--  ## Part: 17   Mount & Template  (Part: 17)-->
// const temp = `<p>this is a value two {{ value }}</p>`;

// const ap13 = new Vue({
//   // el: "#app3",
//   data: {
//     value: "2nd",
//   },

//   // template:`<p>this is a value two {{ value }}</p>`
//   template: temp,
// });
// //$mount hlo built in method
// setTimeout(() => {
//   ap13.$mount("#app3");
// }, 2000);

// <!--  ## Part: 17   Mount & Template  (Part: 17)-->




// <!--  ## Part: 18  Use of Basic Component  (Part: 18)-->


// Vue.component('test', {
//     data() {
//       return {
//         name: 'amir',
//       };
//     },
  
//     template: `<p>{{name}}</p>`,
//   })
  
//   new Vue({
//     el: "#app"
//   });
  


// <!--  ## Part: 18   Use of Basic Component (Part: 18)-->


// <!--  ## Part: 19  Lifecycle of Vue JS(Part: 19)-->

  new Vue({
    el: "#app",
    data:{
      name: 'amir'
    },

    methods: {
      updateName() {
        this.name = 'khan';
        
      },
      killIt(){
        this.$destroy();
      }

    },

  mounted(){
   console.log('running mounted');
  },

  beforeCreate(){
    console.log('running before created');
   },

   created(){
    console.log('running created');
   },

   beforeMount(){
    console.log('running before mount');
   },

   mounted(){
    console.log('running mounted');
   },

   beforeUpdated(){
    console.log('before updated');
   },
   updated(){
    console.log('updated');
   },
   beforeDestroy() {
    console.log('before destroyed');
   },
  destroyed(){
    console.log('destroyed');
  }
   

});

// <!--  ## Part: 19  Lifecycle of Vue JS (Part: 19)-->




// directive 2 types er hoyea thakea
