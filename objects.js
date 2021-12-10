
 //creating a obj by using literal

    const person = {
      firstName: "John",
      lastName: "Doe",
      age:50,
      eyeColor: "blue"
    };

    const x=person;   //it will not create a another copy of person object in x
    x.age = 10;
    
    console.log(person.age);

    console.log(person.firstName);   //1.display obj using name//
    // craeting a obj using new keyword

    const y=new Object();
    y.firstName="priya";
    y.lastname="Boddeti";
    y.age=23;
    // document.getElementById("demo").innerHTML =
    // y.firstName + " is " + y.age + " years old.";
    // console.log(x,y);
    // console.log(x,"\n",y);
//for in loop
    var txt = "";
    for(let x in y)         //2.display obj using loop//
    {
        txt+=y[x]+" ";
        
    }
    console.log(txt);
    const myarray=Object.values(y);  //3.display obj using obj.values() //
    console.log(myarray);
    let myString = JSON.stringify(y);  //4.it converts obj to string//
    console.log(myString);


//js methods         //an Obj property containing an method
    const person1 = {
      firstName: "John",
      lastName: "Doe",
      id: 5566,
      language="",
      fullName: function() {
        return this.firstName + " " + this.lastName;
      }
    }
      console.log(person1.fullName());

      
//getter 

      //   get empid()
      // {
      //   return this.id;
      // }
      // };
      //console.log(person1.empid);

//setter
      // set lang(lang)
      // {
      //   return this.language=lang;
      // }
      // };
      // person1.lang="English";
      // console.log(person1.language);

