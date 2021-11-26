
function getmarks(){
    var maths = Number(document.getElementById("maths").value);
    var physics = Number(document.getElementById("physics").value);
    var chemistry = Number(document.getElementById("chemistry").value);
    var kinyarwanda = Number(document.getElementById("kinyarwanda").value);
    var totalmark=400;
    var marksobtained=maths + physics + chemistry + kinyarwanda;
    var percentage=(marksobtained/totalmark) * 100;
    var grade ="";
    document.getElementById("percentage").innerHTML = percentage + "%"
    if(percentage > 90){
        grade = "A+";
    } else if (percentage < 90 && percentage > 80){
        grade="A";
    }
    else if (percentage < 80 && percentage > 60){
        grade="B";
    }else if (percentage < 60 && percentage > 50){
        grade="c";
    }else if (percentage < 50){
        grade="F";
    }
    document.getElementById("grade").innerHTML = grade;
    if("percentage < 50"){
        document.getElementById("pass").innerHTML = " sorry you failed!";
    }
    else{
        document.getElementById("pass").innerHTML= "you have been passed "
    }
}
