// var hero={
//     name:"诸葛亮",
//     weapon:"诸葛连弩",
//     equipment:["道冠","道袍","羽扇"],
//     attack:function(){
//         console.log(this.name+": 夜观天象");
//     },
//     run:function(){
//         console.log(this.name+": 三十六计走为上计");
//     },
// }

function creatHearo(name, weapon, equipment){
    var hero=new Object();
    
    hero.name=name;
    hero.weapon=weapon;
    hero.equipment=equipment;

    hero.attack=function(){
        console.log(this.name+"：攻击");
    }
    hero.run=function(){
        console.log(this.name+"：逃跑");
    }

    return hero;
}

var hero01=creatHearo("诸葛亮","诸葛连弩",["道冠","道袍","羽扇"])

console.log(hero.name);
console.log(hero.weapon);
console.log(hero.equipment);

hero.attack();
hero.run();