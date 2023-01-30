import { useState } from "react"
import { ButtonApp } from "./Button-app"
import { ButtonReset } from "./buttonReset"


export const Counter = ({initialValue} ) =>{
    console.log('Counter App')
    
    const[number, setnumber] = useState(initialValue)
    
  const  increaseCounter = ()=>{
    setnumber( number + 1 )
        
    }
    const  decreseCounter = ()=>{
        setnumber( number - 1 )
    }
    const  resetCounter = ()=>{
        setnumber( initialValue )
    }
    return (
        <>
            <h2>counter</h2>
            <h2>{number}</h2>
            
            <ButtonApp onClick={increaseCounter}>+</ButtonApp>
            <ButtonApp onClick={decreseCounter}>-</ButtonApp>
            <ButtonApp onClick={resetCounter}>RESET</ButtonApp>
            <ButtonReset onClick={setnumber} initialValue={50}>RESET at 50</ButtonReset>
            {/*<button onClick={decreseCounter} >-</button>
            <button onClick={increaseCounter} >+</button>
    <button onClick={resetCounter} >Reset</button>*/}
        </>

    )
}


