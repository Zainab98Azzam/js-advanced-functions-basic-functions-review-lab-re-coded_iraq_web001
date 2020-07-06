// Your code here
function saturdayFun (a="roller-skate"){
   console.log(`This Saturday, I want to ${a}`)
  }
  saturdayFun()
  saturdayFun("bathe my dog!")
  
function mondayWork(a = "go to the office"){
  
  console.log(`This Monday, I will ${a}`)
}

function wrapAdjective (b="*"){
  return function(a="special"){
    return console.log(`You are ${a}`)
  }
}
