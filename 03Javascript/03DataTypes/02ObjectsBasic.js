
// Check my JavaScrptChaiaurcode Repo

//Creation Object 2 Way

            //++++++++1.constructor+++++

                let user1 = new Object();//Singletone Object also called.

         //++++++++2.object literal+++++
    
                let user2 = {};  


//Literals and properties
 
          let user = {
            name: "John", // by key "name" store value "John"
            age: 30,      // by key "age" store value 30
          };

        //   console.log(user.name)  //Accses using .
        //   console.log(user["age"]) //Accres uding []
     
        //[] Use because For example user define "full name":"Ayush" then . not work so that why...
       
        
        user.isMale="Yes"  //ADD Value
        //   console.log(user)

      
        delete user.isMale  //Delete Value
        // console.log(user)
          
//+++Object.freeze()++

    user.email="ayush@xyz"
    // console.log(user)
// Object.freeze(user)//after any change that not show
    user.email = "ayush@pqr";
    // console.log(user)

//Object with Fuction

    function myFuntion(){
    console.log("Hello from Funtion")
        }

    const storefunc=myFuntion()
    //  console.log(user.storefunc)
    // console.log(user)

    user.myFuntion=function() {
      console.log(`Hello from Funtion ${this.name}`  );
    }

   
    // console.log(user.myFuntion())


//Check Repo JavascriptChaiCode..at Gihub.com

//Object with Array

        const user=[
             {
             id:1,
             email:"xyz1@gmail",

            },
            {
             id:2,
            email:"xyz2@gmail",
        
            },
            {
             id:3,
             email:"xyz3@gmail",
        
             }
         ]

    //    console.log(user[0].email)//Access the Value
    //    console.log(user[1].id);

//How to Access All key of Object.

        const tinderUsre={
            name:"xyz",
            email:"xyz@123",
            isLogin:true,
        }

        // console.log(Object.keys(tinderUsre))//Most IMP check Data type [] so ...
        // console.log(Object.values(tinderUsre))
        // console.log(tinderUsre.hasOwnProperty('name'))//Check key and value, hai ya nahi


//Intview Question

  //How Access Symbol in Object?.

     const mySymbol=Symbol("Monkey")

            const me = {
              me: "Ayush",
              age: "19",
              Male: true,
           // mySymbol:"if you declare this type Data type is String..not object"
              [mySymbol]: "Monkey2", // [Symbol(Monkey)]: 'Monkey2'
            };

            // console.log(me)
            // console.log(me[mySymbol])
            // console.log(typeof mySymbol)
            