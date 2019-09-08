const fs = require('fs') 
/*
const truc = {test:2, teste:4};
console.log(truc)
const tac = JSON.stringify(truc);
tract = JSON.parse(tac);
console.log(tac);
console.log(tract);*/
/*
function (fight)*/

class fighter {
    constructor(ID) {
        this.ID = ID;
    }
    help() {
        console.log('HELP');
    }
}

/*const truc = new fighter(2)
console.log(truc);
const trac = (JSON.stringify(truc));
const sup = Object.assign(new fighter, JSON.parse(trac));
console.log(sup)

sup.help();*/


class Fighter {
    constructor(ID) {
        this.ID = ID;
        this.hp = 0;
        this.str = 0;
        this.dex = 0;
        this.int = 0;
        this.luc = 0;
        this.cha = 0;
        this.name = "";
        this.class = "";
        this.spell = [];
        this.state = "Creation";
        this.desc = "";
        this.inventory = [];
    }

    castSpell() {
        console.log('Fireball');
    }
}

function loadFighter(id) {
    if (fs.exists(id)) {
        const fighter = Object.assign(new Fighter, JSON.parse(fs.readFileSync(id) + ''));
    }
    else {
        const fighter = new Fighter(id);
    }
    return fighter;
}

function saveFighter(id, fighter) {
    fs.writeFile(id, JSON.stringify(fighter));
}