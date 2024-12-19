class Hero {
    constructor(heroName, heroHealth, heroPoints, heroGun){
        this.name = heroName;
        this.health = heroHealth;
        this.points = heroPoints;
        this.gun = heroGun
    }
    showHeroInfo(){
        return `Герой ${this.name} має ${this.points} здоров'я ${this.health} та вид зброї ${this.gun}`
    }
};

class Ork extends Hero{
    constructor({orkSkin, orkIq, orkSize, heroName, heroHealth, heroPoints, heroGun}){
        super(heroName, heroHealth, heroPoints, heroGun)
        this.skin = orkSkin;
        this.iq = orkIq;
        this.size = orkSize;
    }
};

const dataVilli = {
    orkSkin: "green", 
    orkIq: 0, 
    orkSize: 1.50, 
    heroName: "Villi", 
    heroHealth: 50, 
    heroPoints: 45, 
    heroGun: "Palka" 
}

const orkVilli = new Ork(dataVilli)

const dataFrank = {
    orkSkin: "green", 
    orkIq: 0, 
    orkSize: 1.70, 
    heroName: "Frank", 
    heroHealth: 60, 
    heroPoints: 55, 
    heroGun: "Kamin" 
}

const orkFrank = new Ork(dataFrank)

const dataOri = {
    orkSkin: "green", 
    orkIq: 20, 
    orkSize: 1.60, 
    heroName: "Ori", 
    heroHealth: 67, 
    heroPoints: 70, 
    heroGun: "Puluka" 
}

const orkOri = new Ork(dataOri)

class Elf extends Hero{
    constructor({elfEar, elfAge, elfEyes, heroName, heroHealth, heroPoints, heroGun}){
        super(heroName, heroHealth, heroPoints, heroGun)
        this.ear = elfEar;
        this.age = elfAge;
        this.eyes = elfEyes;
    }
};

const dataSally = {
    elfEar: "big",
    elfAge: 68, 
    elfEyes: "blue",
    heroName: "Sally", 
    heroHealth: 100, 
    heroPoints: 77, 
    heroGun: "Magick" 
}

const elfSally = new Elf(dataSally)

const dataArtur = {
    elfEar: "small",
    elfAge: 80, 
    elfEyes: "black",
    heroName: "Artur", 
    heroHealth: 99, 
    heroPoints: 82, 
    heroGun: "Magick-water" 
}

const elfrtur = new Elf(dataArtur)

const dataTom = {
    elfEar: "small-big",
    elfAge: 90, 
    elfEyes: "red",
    heroName: "Tom", 
    heroHealth: 88, 
    heroPoints: 60, 
    heroGun: "Magick-water" 
}

const elfTom = new Elf(dataTom)

// Запускаємо гру 
console.log(orkVilli.showHeroInfo())
console.log(orkFrank.showHeroInfo())
console.log(orkOri.showHeroInfo())

