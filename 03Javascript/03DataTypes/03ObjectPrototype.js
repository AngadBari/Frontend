
//Understand the Javascript Prototypale Behavior

    function multipleBy5(num){
        return num*5
    }
 
    multipleBy5.power=2
    
    // console.log(multipleBy5(5))
    // console.log(multipleBy5.power)
    // console.log(multipleBy5.prototype)//It give empty object

//Funtion can work as funtion also and Object also,genrally all in javscript are the Object.


//This keyword also a prototype

     //This:-Current context

     function CreateUser(username,Score){
        this.username=username
        this.Score=Score
     }

    //  CreateUser.prototype.increment=function(){
    //     console.log(this.Score++)
    //  }

     CreateUser.prototype.PrintMe=function(){
        console.log(`SCORE IS:${this.Score}`)
     }

     const user1=new CreateUser("user1",50)
     const user2= new CreateUser("User2",100)

    //  console.log(user1.PrintMe())
    //  console.log(user2.increment());

  //new keyword is most IMP





  //Prototype

        // let myName="Ayush"
        // let Name="Ayush     "

        // console.log(myName.length)//5
        // console.log(Name.length)//10

        //task is create a propertites that give proper length of string,that also d0ne usiong trim()

        // console.log(Name.trim().length);

//Best Example to UnderStand Prototype

            let myHero=["IronMan","SpiderMan"]

            const HeroPower={
                IronMan:"Shock",
                Spider:"Sling",

                getSpiderPower:function(){
                    console.log(`SpiderMan power is ${this.Spider}`)
                }
            }

            Object.prototype.Spidey=function(){
                console.log(`Hey I am Spiderman..`)
            }

            // HeroPower.Spidey();

//that right because we define Spidey prop in object ,What happen when we call this prpo using  array then..

            // myHero.Spidey()

//that also work mens all String ,Funtion pass throw object..

//What happan when we assgin prop only Array then try it..

            Array.prototype.myArray=function(){
                console.log("Hello form Array..")
            }

             // myHero.myArray()

             // HeroPower.myArray()//It give Error becaue we define only prop to array only..