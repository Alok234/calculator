import React ,{useState} from 'react';
import  './cal.css';

function Calculator() {
    const[result , setResult]=useState("");
     

    const allDigit =(e)=>{

        setResult( result.concat(e.target.name));
    }

    const handleClear=e=>{
//    console.log("alok");
   setResult("");
    }
    const handleBackspeace=e=>{
    //    console.log("alok");
       setResult(result.slice(0,-1))
    }

    const handleEqual=e=>{
    //    console.log("alok");

    try{
        setResult(eval(result).toString());
    } catch(err){
        setResult("Undefine")

    }
    

    }

  return (
    <div className='calculator'>

        

        <div className='container'>
            <form action="">
                <input type="text" value={result} />
            </form>

            <div className='allKey'>
                <button onClick={handleClear} id="clear" className='lastColor'>Clear</button>
                <button onClick={handleBackspeace} id="backspeace" className='lastColor'>C</button>
                <button onClick={allDigit} name="/" className='lastColor'>/</button>
                <button onClick={allDigit} name="9" >9</button>
                <button onClick={allDigit} name="8" >8</button>
                <button onClick={allDigit} name="7" >7</button>
                <button onClick={allDigit} name="*" className='lastColor'>*</button>
                <button onClick={allDigit} name="6" >6</button>
                <button onClick={allDigit} name="5" >5</button>
                <button onClick={allDigit} name="4" >4</button>
                <button onClick={allDigit} name="-" className='lastColor' >-</button>
                <button onClick={allDigit} name="3" >3</button>
                <button onClick={allDigit} name="2" >2</button>
                <button onClick={allDigit} name="1" >1</button>
                <button onClick={allDigit} name="+" className='lastColor' >+</button>
                <button onClick={allDigit} name="0" >0</button>
                <button onClick={allDigit} name="." >.</button>
                <button onClick={handleEqual} id="equal" className='lastColor'>=</button>
                

            </div>

        </div>
    </div>
  )
}

export default Calculator