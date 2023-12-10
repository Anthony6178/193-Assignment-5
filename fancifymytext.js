function displayAlert() {
    alert("Hello, world!");
}

function biggerText(){
    document.getElementById("textBox").style.fontSize = "24pt";
}

function fancifyText(){
    if(document.getElementById("fancyShmancy").checked){
        alert("Fancified!");
        document.getElementById("textBox").style.fontWeight = "bold";
        document.getElementById("textBox").style.color = "blue";
        document.getElementById("textBox").style.textDecoration = "underline";
    }
    else{
        document.getElementById("textBox").style.fontWeight = "normal";
        document.getElementById("textBox").style.color = "black";
        document.getElementById("textBox").style.textDecoration = "";
    }

}

function moodify(){

    var stringArray = document.getElementById("textBox").value.split('.');
    //for each sentance, add Moo to the end
    for(var i = 0; i < stringArray.length - 1; i++){
        stringArray[i] = stringArray[i] + "Moo";
    }
    document.getElementById("textBox").value = stringArray.join('.');

    document.getElementById("textBox").value = document.getElementById("textBox").value.toUpperCase();
}

