    // function loadnewpage(){
    //         let request = new XMLHttpRequest();
    //         request.open("GET", "about.html");
    //         request.onreadystatechange= function(){
    //             if(this.readyState == 4 && this.status == 200){
    //                 console.log(this.responseText);
    //                 document.getElementById("container").innerHTML = this.responseText;
    //             }
    //         }
    //             request.send();
                
    //     }

        // function loadnewpage(){
        //     let nam = new XMLHttpRequest();
        //     nam.open("GET","about.html");
        //     nam.onreadystatechange = function(){
        //         if (this.readyState == 4 && this.status == 200) {
        //             console.log(this.responseText);
        //             document.getElementById("container").innerHTML = this.responseText;
        //         }
        //     }
        //     nam.send();
        // } 

//         function loadnewpage() {
//   const xhttp = new XMLHttpRequest();
//   xhttp.onload = function() {
//     document.getElementById("demo").innerHTML = this.responseText;
//   }
//   xhttp.open("GET", "about.html");
//   xhttp.send();
// }
function loadNewpage(){
    let x = new  XMLHttpRequest();
    x.onload = function(){
        document.getElementById("demo").innerHTML = this.responseText;
    }
    x.open("GET", "about.html");
    x.send();
}

// let person  = { 
//     name : "Chetan",
//     age : 21
//     both = function(){

//     }
// }

// console.log(person.age);