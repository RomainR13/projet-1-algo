const prompt = require("prompt-sync")()

let name = prompt("Entrez votre prenom : ")
let choice = prompt("Bienvenue " + name + ", êtes vous prét a sauver votre peau ? ");
while (choice != "oui" && choice != "non") {
    choice = prompt("Vous vous etes trompé ! ");
}
if (choice == "oui") {
    console.log("Vous vous trouvez devant l'entrée de l'école Ri7, voulez vous entrer ? ");
    choice = prompt("oui ou non ? ")
    while (choice != "oui" && choice != "non") {
        prompt("oui ou non ? ")
    }
    if (choice == "oui") {
        console.log("Un Thomas enragé apparait, voulez vous l'attaquer ? ");
        choice = prompt("oui ou non ? ")
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non ? ")
        }
        if (choice == "oui") {
            console.log("Vous etes mort, le Thomas enragé vous a battu a mort avec sa cigarette electronique... ");
            console.log("Vous avez perdu !");
        }
        else {
            console.log("Vous vous cachez dans les toilettes et attendez que le Thomas parte. ");
            console.log("Félicitation, vous etes admis a l'école Ri7 ! ");
        }
    }
    else if (choice == "non") {
        console.log("Vous faites demi tour et tombez nez a nez avec un Pascal sauvage qui vous défi au ping pong, acceptez vous ? ");
        choice = prompt("oui ou non ? ")
        while (choice != "oui" && choice != "non") {
            choice = prompt("oui ou non ? ")
        }
        if (choice == "oui") {
            console.log("Super vous lui avez mis Fanny ! Il passe donc sous la table.");
        }
        else {
            console.log("Vous vous reveillez, tout ca n'etait qu'un reve... ");
        }
    }
}else {
    console.log("Vous etes pris d'une chiasse fulgurante et mourrez !");
}





