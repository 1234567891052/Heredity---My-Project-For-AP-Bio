let p1 = []; 
let p2 = []; 
let gametes = []; 
let offsprings = []; 
let amountOfOffsprings = 0; 

function giveParentsGenes(parent, a1, a2) {
    parent.push(a1, a2); 
}

function getGametes(parent) {
    for (let i = 0; i < parent.length; i++) {
        gametes.push(parent[i]); 
    }
}

function showInConsole() {
    console.log(p1); 
    console.log(p2); 
    console.log(gametes); 
    console.log('Number of offsprings: ' + amountOfOffsprings); 
    getGenesOfOffspring(); 
}

function getNumberOfOffsprings() {
    amountOfOffsprings = p1.length * p2.length; 
}

function getGenesOfOffspring() {
    let offspring1 = []; 
    let offspring2 = []; 
    let offspring3 = []; 
    let offspring4 = []; 

    offspring1.push(gametes[0], gametes[2]); 
    offspring2.push(gametes[1], gametes[2]); 
    offspring3.push(gametes[0], gametes[3]); 
    offspring4.push(gametes[1], gametes[3]); 

    offsprings.push(offspring1, offspring2, offspring3, offspring4); 
    console.log(offsprings); 
}

function update() {
    giveParentsGenes(p1, 'B', 'B'); 
    giveParentsGenes(p2, 'b', 'b'); 
    getGametes(p1); 
    getGametes(p2); 
    getNumberOfOffsprings(); 
    showInConsole(); 
}

update(); 