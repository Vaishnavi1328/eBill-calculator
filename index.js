document.getElementById("find").addEventListener("click",calculate);

function calculate(){
let val=Number(document.getElementById("bill").value);
let total_amount=0;

//for first 50 units
if(val && val<50)
{
    total_amount+=val*0.75;
    val=0;
}
else if(val)
{
    total_amount+=50*0.75;
    val-=50;
}

//for next 100 units
if(val && val<100)
{
    total_amount+=val*1.00;
    val=0;
}
else if(val)
{
    total_amount+=100*1;
    val-=100;
}

//for next 100units
if(val && val<100)
{
    total_amount+=val*1.30;
    val=0;
}
else if(val)
{
    total_amount+=100*1.30;
    val-=100;
}

//for above 250 units
if(val)
    total_amount+=val*1.5;

total_amount=total_amount.toFixed(2);

//console.log(`Rs.${total_amount}`);
document.getElementById("result").innerHTML=`Rs.${total_amount}`;

}

document.getElementById("empty").addEventListener("click",()=>
{
    document.getElementById("bill").value="";
    document.getElementById("result").innerHTML="";
})
