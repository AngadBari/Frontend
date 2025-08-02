const age = 100;


function go() {
    const age=200
  const hair = "blonde";
  console.log(hair);
  console.log(age);

}

console.log(age);//100
//console.log(hair);//ReferancesError
//Maybe that is because we did not run the go() function, we just defined it?

//After Calling
 go();