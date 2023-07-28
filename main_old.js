/* METHODO donnée par Hadi :
    /Que veut-on coder exactement ?

    /On veut faire un jeu

    /Plan d'action :
    1- On veut générer on nbr entier aléatoire compris entre 0 et 500, à faire deviner par l'utilisateur
    2- Demander à l'utilisateur de deviner le nbr via un prompt puis convertir la valuer retournée par le prompt en nbr
    3- On va creer une boucle while qui va tester : Tant que la valeur entrée par l'user est differnete du nbr aléatoire généré à l'étape 1-
    4- SI la valeur fournie par l'user est nulle (ou undefined), ALORS on sort de la boucle
    5- SI le nbr fourni est trop grand, ALORS, on indique à l'user que le nbr est trop grand et on l'invite à rejouer
    6- SI le nbr fourni est trop petit, ALORS, on indique à l'user que le nbr est trop petit et on l'invite à rejouer
    7- SI l'user a trouvé le bon numéro ALORS on lui indique qu'il a gagné
    8- SI l'user abandonne, ALORS on lui affiche un message pour lui indiquer qu'il a abandonner
*/

// Plan d'action pour le bonus :
// Bonus-1- au debut du programme, on va initialiser un compteur de tentatives à 1
// Bonus-2- on va incrémenter ce compteur de 1 dans les cas où l'user a donner la mauvaise réponse
// Bonus-3- dans le message de victoire on affiche le compteur


// Bonus-1- au debut du programme, on va initialiser un compteur de tentatives à 1
let attempts = 1;

    // 1- On veut générer on nbr entier aléatoire compris entre 0 et 500, à faire deviner par l'utilisateur
        const searchedNumber = Math.round(Math.random() * 500);

    // 2- Demander à l'utilisateur de deviner le nbr via un prompt puis convertir la valuer retournée par le prompt en nbr
        let enteredNumber = parseInt(prompt("Quel est le nombre à trouver ?"));

    // 3- On va creer une boucle while qui va tester : Tant que la valeur entrée par l'user est differnete du nbr aléatoire généré à l'étape 1-
        while (enteredNumber !== searchedNumber) {
            // 4- SI la valeur fournie par l'user est nulle (ou undefined), ALORS on sort de la boucle
            if (!enteredNumber){
                break;
            }
            // 5- SI le nbr fourni est trop grand, ALORS, on indique à l'user que le nbr est trop grand et on l'invite à rejouer
            else if (enteredNumber > searchedNumber) {
                enteredNumber = parseInt(prompt("Le nombre à deviner est plus petit !"))
            }
        
            // 6- SI le nbr fourni est trop petit, ALORS, on indique à l'user que le nbr est trop petit et on l'invite à rejouer
            else {
                enteredNumber = parseInt(prompt("Le nombre à deviner est plus grand !"))
            }   
            //Bonus-2- on va incrémenter ce compteur de 1 dans les cas où l'user a donner la mauvaise réponse
            attempts++;
        }

        // 7- SI l'user a trouvé le bon numéro ALORS on lui indique qu'il a gagné
        if (enteredNumber) {
            // Bonus-3- dans le message de victoire on affiche le compteur
            alert(`Bravo, vous avez gagné en ${attempts} coups !`)
        }
        // 8- SI l'user abandonne, ALORS on lui affiche un message pour lui indiquer qu'il a abandonner
        else {
            alert("Vous abandonnez ? Dommage...")
        }