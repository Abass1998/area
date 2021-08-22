document.querySelector(".btn-submit").addEventListener("click", function(){
    let rec = document.querySelector("#Rectangle");
    let cir = document.querySelector("#Circle");
    let sqr = document.querySelector("#Sqaure");
    let tra =  document.querySelector("#Trapezium");
    if(rec.checked){
       document.querySelector(".rectangle").style.display = "flex";
       document.querySelector(".circle").style.display = "none";
       document.querySelector(".sqaure").style.display = "none";
       document.querySelector(".trapezium").style.display = "none";    
    }else if(cir.checked){
        document.querySelector(".circle").style.display = "flex";
        document.querySelector(".rectangle").style.display = "none";
        document.querySelector(".sqaure").style.display = "none";
        document.querySelector(".trapezium").style.display = "none";   
    }else if(sqr.checked){
        document.querySelector(".sqaure").style.display = "flex";   
        document.querySelector(".rectangle").style.display = "none";
        document.querySelector(".circle").style.display = "none";
        document.querySelector(".trapezium").style.display = "none";   
    }else if(tra.checked){
        document.querySelector(".trapezium").style.display = "flex";   
        document.querySelector(".rectangle").style.display = "none";
        document.querySelector(".circle").style.display = "none";
        document.querySelector(".sqaure").style.display = "none";   
    }
    else{
        alert("Please check in a shape");
    }
})

    


// For Rectangle
document.querySelector(".btn-rect").addEventListener("click" , function(){
    let length = document.querySelector(".length").value;
    let breadth = document.querySelector(".bredth").value;
    let area = length * breadth;
    if(length == ""){
        alert("Length can't be empty");
        return;
    }
    else if(breadth == ""){
        alert("Breadth can't be empty");
        return;
    }
   
    document.querySelector(".showworking").style.display = "block"
    document.querySelector(".recResult").innerHTML = "A = " + area +"cm²";
    // else if(Number.isNaN(length) === false){
    //     alert("Please, input a valid number");
    //     return;
    // }

})
document.querySelector(".showworking").addEventListener("click", function(){
    let length = document.querySelector(".length").value;
    let breadth = document.querySelector(".bredth").value;
    let area = length * breadth;
    document.querySelector(".lengthRec").innerHTML = "Length is: " +length;
    document.querySelector(".BreadthRec").innerHTML = "Breadth is: "+ breadth;
    document.querySelector(".workings").style.display = "block";
    document.querySelector(".recResultt").innerHTML = "Hence, Area of the Rectangle is therefore: " + area +"cm²";
})

document.querySelector(".hideWorkings").addEventListener("click", function(){
    document.querySelector(".workings").style.display = "none";
})
document.querySelector(".reset").addEventListener("click", function(){
    let length = document.querySelector(".length").value = "";
    let breadth = document.querySelector(".bredth").value = "";
    document.querySelector(".recResult").innerHTML = "";
    document.querySelector(".workings").style.display="none";
    document.querySelector(".showworking").style.display = "none";
})
// For Sqaure
document.querySelector(".SqrArea").addEventListener("click" , function(){
    let length = document.querySelector(".l").value;
    let area = length * length;
    if(length == ""){
        alert("Length can't be empty");
        return;
    }
    document.querySelector(".sqrshowworking").style.display="block";
    document.querySelector(".sqrResult").innerHTML = "A = " + area;
})

document.querySelector(".sqrshowworking").addEventListener("click", function(){
    let length = document.querySelector(".l").value;
    let area = length * length;
    document.querySelector(".lengthSqr").innerHTML = "Length is: " +length;
    document.querySelector(".workingSqr").style.display="block";
    document.querySelector(".SqrResultt").innerHTML = "The Area of the square is " + area +"cm²";
})

document.querySelector(".hideWorkingsSqr").addEventListener("click", function(){
    document.querySelector(".workingSqr").style.display = "none";
})

document.querySelector(".resetSqr").addEventListener("click", function(){
    let length = document.querySelector(".l").value = "";
    document.querySelector(".sqrResult").innerHTML = "";
    document.querySelector(".workingSqr").style.display="none";
    document.querySelector(".sqrshowworking").style.display = "none";
})

// For Circle
document.querySelector(".circleArea").addEventListener("click" , function(){
    let length = document.querySelector(".radiusValue").value;
    let area = 3.142 * (length * length );
    if(length == ""){
        alert("Radius can't be empty");
        return;
    }
    document.querySelector(".cirshowworking").style.display="block";
    document.querySelector(".CirResult").innerHTML = "A = " + area +"cm²";
})
document.querySelector(".cirshowworking").addEventListener("click", function(){
    let length = document.querySelector(".radiusValue").value;
    let area = 3.142 * (length * length );
    document.querySelector(".lengthCir").innerHTML = "Radius is: " + length;
    document.querySelector(".workingCir").style.display="block";
    document.querySelector(".CirResultt").innerHTML = "The Area of the circle is: " + area +"cm²";
})

document.querySelector(".hideWorkingsCir").addEventListener("click", function(){
    document.querySelector(".workingCir").style.display="none"; 
})

document.querySelector(".resetCirc").addEventListener("click", function(){
    document.querySelector(".radiusValue").value = "";
    document.querySelector(".cirshowworking").style.display="none";
    document.querySelector(".CirResult").innerHTML= "";

})
//For Trapezium
document.querySelector(".trapArea").addEventListener("click" , function(){
    let length = document.querySelector(".traplengthValue").value;
    let breadth = document.querySelector(".trapbreadthValue").value;
    let height = document.querySelector(".trapheightValue").value;
    let area = 0.5 * (length + breadth ) * height;
    if(length == ""){
        alert("Length can't be empty");
        return;
    }else if(breadth == ""){
        alert("Breadth can't be empty");
        return;
    }else if(height == ""){
        alert("height can't be empty");
        return;
    }
    document.querySelector(".trapshowworking").style.display="block";
    document.querySelector(".trapResult").innerHTML = "A = " + area +"cm²";
})

document.querySelector(".trapshowworking").addEventListener("click", function(){
    let length = document.querySelector(".traplengthValue").value;
    let breadth = document.querySelector(".trapbreadthValue").value;
    let height = document.querySelector(".trapheightValue").value;
    let area = 0.5 * (length + breadth ) * height;
    document.querySelector(".traplength").innerHTML = "Length is: " + length;
    document.querySelector(".trapbreadth").innerHTML = "Breadth is: " + breadth;
    document.querySelector(".trapheight").innerHTML = "Height is: " + height;
    document.querySelector(".workingtrap").style.display="block";
    document.querySelector(".trapResultt").innerHTML = "The Area of the Trapezium is: " + area +"cm²";
})

document.querySelector(".hideWorkingsTrap").addEventListener("click", function(){
    document.querySelector(".workingtrap").style.display="none";
})

document.querySelector(".resetTrap").addEventListener("click", function(){
    document.querySelector(".trapshowworking").style.display = "none";
    document.querySelector(".traplengthValue").value = "";
    document.querySelector(".trapbreadthValue").value = "";
     document.querySelector(".trapheightValue").value = "";
     document.querySelector(".trapResult").innerHTML = "";

})

document.querySelector(".open-the-box").addEventListener("click", function(){
    document.querySelector(".cont").style.display = "flex";
    document.querySelector(".close-box").style.display = "block";
    document.querySelector(".box-final").style.display = "none";
    let rec = document.querySelector("#Rectangle").checked = "";
    let cir = document.querySelector("#Circle").checked = "";
    let sqr = document.querySelector("#Sqaure").checked = "";
    let tra =  document.querySelector("#Trapezium").checked = "";
})
document.querySelector(".close-box").addEventListener("click", function(){
    document.querySelector(".cont").style.display = "none";
    document.querySelector(".box-final").style.display = "block";
    let x = [".close-box", ".sqaure", ".circle", ".rectangle", ".trapezium"];
    for(var i = 0; i<= x.length ;i++){
        document.querySelector(x[i]).style.display = "none";
    }
})