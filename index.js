// code your solution here

function saturdayFun(string = "roller-skate"){
    return `This Saturday, I want to ${string}!`
}

function mondayWork(string = "go to the office"){
    return`This Monday, I will ${string}.`
}

function wrapAdjective(visualFlair = "*"){

    
    return function(string = "special"){
        return `You are ${visualFlair}${string}${visualFlair}!`
    }
    
}
const encouragingPromptFunction = wrapAdjective("!!!")
console.log(wrapAdjective("%")("a dedicated programmer"))