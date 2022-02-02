document.getElementById("button").addEventListener("click", function () {
    giveResult();
});

function giveResult() {
    let number = document.getElementById("textfield").value;

    let rounded = Math.round(number);
    console.log(rounded);

    if (rounded > 0) {
        let output = "";
        for (index = 0; index <= rounded; index++) {
            
            if (index < rounded){
                output += index + ", ";
            } else{
                output += index;
            }

            document.getElementById("result").innerHTML = output;
        }

    } else if (rounded < 0) {
        let output = "";
        for (index = rounded; index <= 0; index++) {

            if(0 > index){
                output += index + ", ";
            } else{
                output += index;
            }
            
            document.getElementById("result").innerHTML = output;
        }
        
    }else{
        document.getElementById("result").innerHTML = 0;
    }
}