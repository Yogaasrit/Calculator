const ChildButtonCalc = ({num1,num2,op})=>{
  // num1 = Number(num1)
  // num2 = Number(num2)
  //const[getValue,setValue] = useState(0);
  let result = 0
  //setValue(result)
  if(op === "+"){
      result = num1+num2;
  }
  else if(op === "-"){
      result = num1-num2;
  }
  else if(op === "*"){
      result = num1*num2;
  }
  else if(op === "/"){
      result = num1/num2;
  }
  return(
      <div>
         <center><h1>ANS : {result} </h1></center> 
      </div>
  )
}
export default ChildButtonCalc;