function count(id,end){

let current=0;

const timer=setInterval(()=>{

current++;

document.getElementById(id).innerText=current;

if(current>=end){
clearInterval(timer);
}

},10);

}

count("students",500);
count("cars",25);
count("success",98);

const reviews=[
"Best driving school in Rwanda.",
"The instructors are very professional.",
"I passed my exam on the first attempt.",
"Excellent training and support."
];

let index=0;

setInterval(()=>{

index++;

if(index>=reviews.length){
index=0;
}

document.getElementById("reviewText").innerText=
reviews[index];

},3000);