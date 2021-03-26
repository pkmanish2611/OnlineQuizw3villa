//only for user information to take input and display output after quiz completed 
//geting elements from session storeage
let name = sessionStorage.getItem("name");
let points = sessionStorage.getItem("points");

let etime = sessionStorage.getItem("time");
 

//displaying performance on end page
document.querySelector(".name").innerHTML = name;
document.querySelector(".points").innerHTML = points;
//calling function here to display the result
dis(points);
//function to display the required level
function dis(count){
    if(count == 0){
        document.querySelector(".level").innerHTML = "- Very Poor(0)";
    }else if (count == 1){
        document.querySelector(".level").innerHTML = "- Poor(1)";
    }else if(count == 2){
        document.querySelector(".level").innerHTML = " - Bad(2)";
    } else if (count == 3) {
        document.querySelector(".level").innerHTML = "- Good(3)";
    } else if (count == 4) {
        document.querySelector(".level").innerHTML = " - Strong(4)";
    } else if (count == 5) {
        document.querySelector(".level").innerHTML = "- Very Strong(5)";
    }
}
document.querySelector(".e_time").innerHTML = etime;
