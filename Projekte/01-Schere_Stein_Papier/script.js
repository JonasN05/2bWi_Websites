
let chooseOfPlayer;
let chooseOfComputer;
let solution;

document.getElementById("play").addEventListener("click", function () {
    play();
});


function play(){

    chooseOfPlayer = document.getElementById("StoneScissorsPaper").value;

    let random = Math.random() * 2
    let randomround = Math.round(random);


    let three = ["Schere", "Stein", "Papier"];
    let ausgabe = document.getElementById("ausgabe");

    chooseOfComputer = three[randomround];
    console.log(chooseOfComputer);

    solution = chooseOfComputer;
    chooseOfComputer = randomround;

    startCountdown();
}


function checkWinner(){

    if(chooseOfComputer==chooseOfPlayer){
    console.log("Unentschieden");
    WinLoseTie.innerHTML = "Unentschieden";

    }else if(chooseOfComputer!=chooseOfPlayer){

        if(chooseOfPlayer==0 && chooseOfComputer==1){
        console.log("Du hast verloren");
        WinLoseTie.innerHTML = "Du hast verloren";

    }else if(chooseOfPlayer==0 && chooseOfComputer==2){
        console.log("Du hast Gewonnen");
        WinLoseTie.innerHTML = "Du hast gewonnen";

    }else if(chooseOfPlayer==1 && chooseOfComputer==2){
        console.log("Du hast verloren");
        WinLoseTie.innerHTML = "Du hast verloren";

    }else if(chooseOfPlayer==1 && chooseOfComputer==0){
        console.log("Du hast Gewonnen");
        WinLoseTie.innerHTML = "Du hast gewonnen";

    }else if(chooseOfPlayer==2 && chooseOfComputer==0){
        console.log("Du hast verloren");
        WinLoseTie.innerHTML = "Du hast verloren";

    }else if (chooseOfPlayer==2 && chooseOfComputer==1){
        console.log("Du hast gewonnen");
        WinLoseTie.innerHTML = "Du hast gewonnen";
    }
}}


function startCountdown(){
    let counter = 3;
    let interval = setInterval(function () {
        console.log(counter);
        
        Counter.innerHTML = counter;

        counter--;

        if (counter<0){
            clearInterval(interval)
            checkWinner();
            ausgabe.innerHTML = solution;
        }
    }, 1000);
}
