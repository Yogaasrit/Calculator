import { useEffect, useState } from "react";
import ChildButtonCalc from "../ChildCalculator/ChildCalculator";
import "./style.css";
const ButtonCalculator = () =>
{
    let flag = false;
    let num1 = "";
    let op ="";
    let num2 ="";
    let temp ="";
    const [getData, setData] = useState([]); 
    const [getData1,setData1] = useState(0);
    const [getData2,setData2] = useState(0);
    const [getData3,setData3] = useState(0);
        useEffect(() => {}, [getData]);
        const sample = (event) => 
        {
            event.preventDefault();
            const value = event.target.value;
            setData([...getData, value]);
        }
    function evalvation()
    {
        for(let i=0;i<getData.length;i++)
        {
            console.log(getData[i]);
            if(getData[i] >= "0" && getData[i] <="9" && flag===false)
                num1 = num1 + getData[i];
            else if(getData[i] === "+" || getData[i] === "-" ||getData[i] === "*" ||getData[i] === "/" ){
                op = getData[i];
                temp=i;
                flag = true}
        }
        for(let j=temp+1;j<getData.length;j++)
            num2 += getData[j];
        num1 = parseInt(num1)
        setData1(num1);
        num2 = parseInt(num2)
        setData2(num2);
        setData3(op);
    }
    return(
        <div class="calc-button-row">
            <center>
            <button value="1" onClick={sample} >1</button>
            <button value="2" onClick={sample}>2</button>
            <button value="3" onClick={sample}>3</button>
            <button value="4" onClick={sample}>4</button>
            <button value="5" onClick={sample}>5</button>
            <button value="6" onClick={sample}>6</button>
            <button value="7" onClick={sample}>7</button>
            <button value="8" onClick={sample}>8</button>
            <button value="9" onClick={sample}>9</button>
            <button value="0" onClick={sample}>0</button>
            <button value="+" onClick={sample}>+</button>
            <button value="-" onClick={sample}>-</button>
            <button value="*" onClick={sample}>*</button>
            <button value="/" onClick={sample}>/</button>
            <button value="%" onClick={sample}>%</button>
            <button value="=" onClick={evalvation}>=</button></center>
            {/* <h1>{getData1}</h1>
            <h1>{getData2}</h1>
            <h1>{getData3}</h1> */}
            <center><h1>{getData}</h1></center>
            <ChildButtonCalc num1={getData1} num2 = {getData2} op = {getData3} />
            <center><button onClick = {()=>window.location.reload()} >REFRESH</button></center>
        </div>
    )
}
export default ButtonCalculator;