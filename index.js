let resultEl=document.getElementById('result-el')
let minResultEl=document.getElementById('min-result-el')
let acEl=document.getElementById('ac-el');
let oneEl=document.getElementById('one-el')
let twoEl=document.getElementById('two-el')
let demoel=document.getElementById('demo')
let demo2el=document.getElementById('demo2')

let result=0
let first=0
let second=0
let count=1
let total=0
let operation=0

function equalTo(){
    operationDecide()
    count=1
    first=total
    second=0
    result=total
    minResultEl.textContent=total
    resultEl.textContent=total
    total=0
    operation=0
}

function ac(){
    minResultEl.textContent=0
    resultEl.textContent=0
    result=0
    first=0
    second=0
    operation=0
    total=0    
    count=1
}

function setPreResult()
{
    minResultEl.textContent=total
}

function setResult(){
    minResultEl.textContent=result
    resultEl.textContent=result
}

function deciding(x)
{
    if(count>1)
    {
        second=(second)*(Math.pow(10,1))+x
    }
    else{
        first=(first)*(Math.pow(10,1))+x
    }
}


function operationDecide()
{
    if(operation==1)
    {
        total=first+second
        first=total
        second=0
    }
    else if(operation==2)
    {
        total=first-second
        first=total
        second=0
    }
    else if(operation==3)
    {
        total =first*second
        first=total
        second=0
    }
    else if(operation==4)
    {
        total=first/second
        first=total
        second=0
    }
}


function onePress()
{
    if(result===0)
    {
        result='1'
        setResult()    
    }
    else{
        result+='1'
        setResult()
    }
    deciding(1)
}

function twoPress(){
    if(result===0)
    {
        result="2"
        setResult()
    }
    else{
        result+="2"
        setResult()
    }
    deciding(2)
}

function threePress(){
    
    if(result===0)
    {
        result="3"
        setResult()
    }
    else{
        result+="3"
        setResult()
    }
    deciding(3)
}

function fourPress(){
    if(result===0)
    {
        result="4"
        setResult()
    }
    else{
        result+="4"
        setResult()
    }
    deciding(4)
}

function fivePress(){
    if(result===0)
    {
        result="5"
        setResult()
    }
    else{
        result+="5"
        setResult()
    }
    deciding(5)
}

function sixPress(){
    if(result===0)
    {
        result="6"
        setResult()
    }
    else{
        result+="6"
        setResult()
    }
    deciding(6)
}

function sevenPress(){
    
    if(result===0)
    {
        result="7"
        setResult()
    }
    else{
        result+="7"
        setResult()
    }
    deciding(7)
}

function eightPress(){
    if(result===0)
    {
        result="8"
        setResult()
    }
    else{
        result+="8"
        setResult()
    }
    deciding(8)
}

function ninePress(){
   
    if(result===0)
    {
        result="9"
        setResult()
    }
    else{
        result+="9"
        setResult()
    }
    deciding(9)
}

function zeroPress(){
    
    if(result===0)
    {
        result="0"
        setResult()
    }
    else{
        result+="0"
        setResult()
    }
    deciding(0)
}

function doublezeroPress(){
    
    if(result===00)
    {
        result="00"
        setResult()
    }
    else{
        result+="00"
        setResult()
    }
    deciding(0)
    deciding(0)
}

function additionPress(){
    operationDecide()
    setPreResult()
    if(result===0)
    {
        
    }
    else{
        result+="+";
        setResult();
    }
    operation=1
    count=count+1
    
}

function substractionPress(){
    operationDecide()
    setPreResult()
    if(result===0)
    {
    
    }
    else{
        result+="-"
        setResult()
    }
    operation=2
    count=count+1
    
    
}

function multiplyPress(){
    operationDecide()
    setPreResult()
    if(result===0)
    {
    
    }
    else{
        result+="*"
        setResult()
    }
    operation=3
    count=count+1
    
}

function dividePress(){
    operationDecide()
    setPreResult()
    if(result===0)
    {
    
    }
    else{
        result+="/"
        setResult()
    }
    operation=4
    count=count+1
    
}

function backspacePress(){
    if(result===0)
    {
    
    }
    else{
        result.slice(0,-1)
        setResult()
    }
}
