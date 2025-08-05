
// Check my JavaScrptChaiaurcode Repo

//Creation Object 2 Way

            //++++++++1.constructor+++++

                let user1 = new Object();

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
            