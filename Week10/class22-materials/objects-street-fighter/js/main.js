//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function CreateACharacter(punch,kick,duck,special){
    this.punch = charPunch
    this.kick = charKick
    this.duck = charDuck
    this.special = charSpecial
    this.shout = function(){
        console.log('shorruken')
    }
    this.super = function(){
        console.log(`${this.special}`)
    }
    
}







// function MakeSFCharacter(punch,kick,catchPhrase,specialMove){
//     this.punch = punch
//     this.kick = kick
//     this.catchPhrase = catchPhrase
//     this.specialMove = specialMove
//     this.taunt = function(){
//         console.log(`You can't handle my ${this.specialMove}`)
//     }
//     this.winning = function(){
//         console.log(`Haha! ${this.catchPhrase}`)
//     }
//     this.dash = function(){
//         console.log('Whoopp, missed me!')
//     }
// }
// let ryu = new MakeSFCharacter('high','high','Get OVER HERE','HADDDDUUUUKKKEEEEENNNNN')