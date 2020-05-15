// var header=document.querySelector("h1")
// var head1=document.querySelector("#pick")
// var head2=document.querySelector("#pick2")
// var head3=document.querySelector("#pick3")

var player=document.getElementById("crowd");
player.preload="auto";
player.currentTime=0.1;
player.volume=0.8;
var vic=document.querySelector("#victory");
var quiet=0;

var mu=2;
var mute=document.querySelector("#mute");

mute.addEventListener("click",function(){
player.pause();
player.currentTime=0;
vic.pause();
vic.currentTime=0;
mu++;
console.log(mu);
if(mu%2==0)
{

  mute.textContent="MUTE";

}
else {
  mute.textContent="UNMUTE";
}


})


var me=prompt("Your Initials");
var opo=prompt("Opponent initials");

var you=me.toUpperCase();
var opponent=opo.toUpperCase();


var s=[10];
s[0]=0;
 s[1]=document.querySelector("#im1");
 s[2]=document.querySelector("#im2");
 s[3]=document.querySelector("#im3");
 s[4]=document.querySelector("#im4");
 s[5]=document.querySelector("#im5");
  s[6]=document.querySelector("#im6");
 s[7]=document.querySelector("#im7");
 s[8]=document.querySelector("#im8");
 s[9]=document.querySelector("#im9");
 // s[10]=document.querySelector('#im11');
 var r1=document.querySelector("#Red");
 var b1=document.querySelector("#Blue");
var w=[10];
 for(var l=1;l<=9;l++)
 {
   w[l]=document.querySelector('#im1'+l);
 }
// s1.bgColor="orange";
var k=2;

  var pi=[10];
  for(var j=1;j<=9;j++)
  {
    pi[j]=document.querySelector("#f"+j);
  }
  var bool;
  var ht=0;
  var cs=0;
  var but1=document.querySelector("#button1");
  var html=document.querySelector(".html");
  var punk=document.querySelector("#punk");
  html.style.visibility="visible";

  if(opponent.length>=3)
  {
    html.style.wordSpacing="855px";

  }
  else {
      html.style.wordSpacing="900px";
      console.log("hiya");
  }
    html.textContent=you+":"+ht+" "+opponent+":"+cs;

var first_vic=0;
var victory=0;
function result(c)
{ for(var y=0;y<8;y++)
  {
    var flag=0;
    for(var z=0;z<3;z++)
    {
      if(mem[winner[y][z]]==c)
      {
        flag++;
      }
    }
        // console.log(flag);

    if(flag==3)
    {
      if(c==3){
        first_vic=1;
        victory=1;
        punk.pause();
        punk.currentTime=0;
        console.log("red wins");
      r1.style.color="red";
      if(you.length>=4)
        {r1.style.marginLeft="44.5%";}
        else {
          r1.style.marginLeft="46%";
        }
      // r1.style.marginRight=auto;

      r1.textContent=you+" "+ "WINS" //1 second

      var delayInMilliseconds = 3000;
setTimeout(function() {
  //your code to be executed after 1 second


// r1.style.marginRight="40%";
r1.style.marginLeft="40%";
  r1.textContent="FLAWLESS VICTORY";
}, delayInMilliseconds);
var seconds = 4000;
setTimeout(function() {
//your code to be executed after 1 second

if(mu%2==0&&quiet==0)
{vic.play();}
else {
  quiet=0;
}
// if(flag1==3&&quiet!=0)
// {quiet=0;}

},seconds);
quiet=0;
      ht++;
      if(mu%2==0)
      {player.play();}
    html.textContent=you+":"+ht+" "+opponent+":"+cs;
      r1.style.visibility="visible";
      but1.textContent="Play Again?";
      break;}

else if(c==4)
      {
        // first_vic=1;
        victory=1;
        punk.pause();
        punk.currentTime=0;
        console.log("blue wins");
r1.style.color="blue";
if(opponent.length>=4)
  {r1.style.marginLeft="44.5%";}
  else {
    r1.style.marginLeft="46%";
  }

  r1.style.marginRight="30%";
  // r1.style.fontSize="2vw"
      r1.textContent=opponent+" "+"WINS";


      var delayInMilliseconds = 3000;
      setTimeout(function() {
        //your code to be executed after 1 second
          r1.style.marginLeft="40%";
          r1.style.marginRight="30%";
          // r1.style.fontSize="2vw"

        r1.textContent="FLAWLESS VICTORY";

      }, delayInMilliseconds);
      var seconds = 4000;
      setTimeout(function() {
      //your code to be executed after 1 second

      if(mu%2==0&&quiet==0)
      {vic.play();}
      else {
        quiet=0;
      }
      // if(flag1==3&&quiet!=0)
      // {quiet=0;}

      },seconds);
      quiet=0;
      r1.style.visibility="visible";
      but1.textContent="Play Again?";
      if(mu%2==0)
      {player.play();}
      cs++;
      html.textContent=you+":"+ht+" "+opponent+":"+cs;

      break;
      }

    }
    else {

      flag=0;

    }
  }
}

   var audio=document.getElementById("a1");
   // audio.preload();
   audio.currentTime=1;
var mem=[2,2,2,2,2,2,2,2,2];
var job=[5,2,2,2,2,2,2,2,2,2];
const winner=[[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
const num=[1,2,3,4,5,6,7,8,9];
const legend=[2,3,4,5,6,7,8,9];
function nextmove()
{
  var ran=[];
  var count=0;
for(var i=0;i<=9;i++)
  {if(job[i]==2)
  {
    ran[count]=i;
     count++;

  }
}
var randomItem = ran[Math.floor(Math.random()*ran.length)];

  console.log(ran);
  console.log(randomItem);
if(randomItem!=0)
{return randomItem;}
else {
  nextmove();
}


}

function mov()
{
  var gamemove=nextmove();
  var audio=document.getElementById("a1");
 audio.currentTime=0;
if(mu%2==0)
 {audio.play();}
 var a=w[gamemove];
   // t.style.display="none";
   a.style.display="block";

   k++;
   mem[gamemove]=4;
   job[gamemove]=4;
   result(4);


}
var flag1=0;

function semi(){

    num.forEach(i=>{
        pi[i].addEventListener("click",function(){
          if(flag1==1&&victory==0){
            var t=s[i];
        if(k%2==0&&job[i]==2){

           t.style.display="block";

           audio.currentTime=0;
          if(mu%2==0)
            {audio.play();}
            k++;
            mem[i]=3;
            job[i]=3;
            result(3);
if(first_vic==0)
      {mov();}
      else {
        first_vic=0;
      }

       }
          }


      })

    })

  }


function multi(){


    num.forEach(i=>{
        pi[i].addEventListener("click",function(){
      if(flag1==2&&victory==0){
        var t=s[i];
        // console.log(k);
        if(k%2==0&&job[i]==2){
        var audio=document.getElementById("a1");
        audio.currentTime=0;
        if(mu%2==0)
         {audio.play();}
        t.style.display="block";

        k=3;
        mem[i]=3;
        job[i]=3;
        result(3);
        if(first_vic==1)
        {
          first_vic=0;
        }
        }

        else if(k%2!=0 &&job[i]==2) {
        // console.log("hi2");
        var audio=document.getElementById("a1");
        audio.currentTime=0;
         if(mu%2==0)
        {audio.play();}
        var a=w[i];
        // t.style.display="none";
        a.style.display="block";

        k=2;
        mem[i]=4;
        job[i]=4;
        result(4);
        if(first_vic==1)
        {
          first_vic=0;
        }
        }

      }

      })

    })



}


but1.addEventListener("click",function(){
// player.play();
vic.pause();
vic.currentTime=0;
player.pause();
player.currentTime=0;
quiet=1;
// punk.play();
victory=0;

num.forEach(i => {
  var cross=s[i];
  var dot=w[i];
  cross.style.display="none";
  dot.style.display="none";
  k=0;
  mem[i]=2;
  job[i]=2;
    r1.style.visibility="hidden";
});
if(flag1==3)
{
// quiet=0;
   world_class();

}
// player.pause();
})

var semipro=document.querySelector("#semipro");
var multiplayer=document.querySelector("#multiplayer");
var unbeatable=document.querySelector("#unbeatable");
semipro.addEventListener("click",function(){
flag1=1;
quiet=0;
ht=0;
cs=0;
  html.textContent=you+":"+ht+" "+opponent+":"+cs;
  semipro.style.borderColor="Red";
  semipro.style.borderWidth="5px";
  multiplayer.style.borderColor="Blue";
  multiplayer.style.borderWidth="thick";
  unbeatable.style.borderColor="Blue";
  unbeatable.style.borderWidth="thick";
victory=0;
player.pause();
player.currentTime=0;
// punk.play();
num.forEach(i => {
  var cross=s[i];
  var dot=w[i];
  cross.style.display="none";
  dot.style.display="none";
  k=2;
  mem[i]=2;
  job[i]=2;
    r1.style.visibility="hidden";
});

semi();

console.log("semipro");


})


multiplayer.addEventListener("click",function(){
// player.play();
flag1=2;
victory=0;
quiet=0;
ht=0;
cs=0;
html.textContent=you+":"+ht+" "+opponent+":"+cs;
multiplayer.style.borderColor="Red";
multiplayer.style.borderWidth="5px";
semipro.style.borderColor="Blue";
semipro.style.borderWidth="thick";
unbeatable.style.borderColor="Blue";
unbeatable.style.borderWidth="thick";
player.pause();
player.currentTime=0;
// punk.play();
num.forEach(i => {
  var cross=s[i];
  var dot=w[i];
  cross.style.display="none";
  dot.style.display="none";
  k=2;
  mem[i]=2;
  job[i]=2;
    r1.style.visibility="hidden";
});

multi();
console.log("multiplayer");
// player.pause();
})

 function moveleft()
{
  for(var u=1;u<=9;u++)
  {
    if(job[u]==2)
    {return 1;}
  }
  return -1;
}

const sub_array=[0,1,2];
 function evaluate(job)
{
var human=0;
var gamer=0;
for(var i=0;i<8;i++)
{
  human=0;
  gamer=0;
  for(var j=0;j<3;j++)
  {
    if(job[winner[i][j]]==4)
    {
      gamer++;
    }
    else if(job[winner[i][j]]==3)
    {
      human++;
    }
  }
  // if(taken==3)
  // {console.log(
  //   human+" "+job
  // );}
  if(gamer==3)
  {
    return 1;
  }
   if(human==3)
  {
    return -1;
  }
}
if(moveleft()==-1)
{
  return 0;
}
return -2;
}

// var theta=k;
var score=0;
var taken=0;
// var depth;
 function minimax(job,theta)
{


   score=evaluate(job);
   // if(taken==3)
   //  console.log(score+"hi"+job);
  if(score==1||score==-1||score==0)
  return score;
 if(theta==3)
  {
    let best1=-10000;
      for(var j=1;j<=9;j++)
      {
        if(job[j]==2)
        {
          job[j]=4;
          mem[j]=4;

          best1=Math.max(minimax(job,2),best1);
  // console.log(best1);
          job[j]=2;
          mem[j]=2;

        }

      }
       // console.log(best1);
return best1;
  }
  else {
    let best2=10000;
    // console.log("hi");
    for(var j=1;j<=9;j++)
    {
      if(job[j]==2)
      {
        job[j]=3;
        mem[j]=3;
        best2=Math.min(minimax(job,3),best2);
         // console.log(best);
         job[j]=2;
         mem[j]=2;
      }

    }
     // console.log(best2);
return best2;
  }
}

function beat_game()
{
  let bestval=-1000;
  let position=0;
  let possible_result=-1;
 num.forEach(j=> {
   if(job[j]==2)
    {
      job[j]=4;
      possible_result=minimax(job,2);
      // console.log(possible_result);
     job[j]=2;
     if(possible_result>bestval)
     {
       position=j;
       bestval=possible_result;
    }
   }
 });



  // console.log(position);

  // var audio=document.getElementById("a1");
  audio.currentTime=0;
  if(mu%2==0)
  {audio.play();}
  var a=w[position];
   // t.style.display="none";
   a.style.display="block";

   k=2;
   mem[position]=4;
   job[position]=4;
   result(4);
}

function world_class()
{

  var ar=w[1];
   // t.style.display="none";
   ar.style.display="block";

   k=2;
   mem[1]=4;
   job[1]=4;
  legend.forEach(i=>{
      k=2;
      pi[i].addEventListener("click",function(){

        if(flag1==3 && victory==0){
          var t=s[i];
      if(k%2==0&&job[i]==2){

         t.style.display="block";

         audio.currentTime=0;
         if(mu%2==0)
          {audio.play();}
          k++;
          taken++;
          mem[i]=3;
          job[i]=3;
          result(3);
          if(first_vic==0)
        {beat_game();}
        else {
          first_vic=0;
        }

     }
        }


    })

  })

}

unbeatable.addEventListener("click",function(){
  flag1=3;
  victory=0;
  ht=0;
  cs=0;
  quiet=0;
  multiplayer.style.borderColor="Blue";
  multiplayer.style.borderWidth="thick";
  semipro.style.borderColor="Blue";
  semipro.style.borderWidth="thick";
  unbeatable.style.borderColor="Red";
  unbeatable.style.borderWidth="5px";
  html.textContent=you+":"+ht+" "+opponent+":"+cs;
  k=3;
  player.pause();
  player.currentTime=0;
  vic.pause();
  vic.currentTime=0;
  // punk.play();


  num.forEach(i => {
    var cross=s[i];
    var dot=w[i];
    cross.style.display="none";
    dot.style.display="none";

    mem[i]=2;
    job[i]=2;
      r1.style.visibility="hidden";
  });
     if(flag1==3)
      {world_class();}
  // console.log("world_class");

})

var flag=0;
var j=0;
// for(var i=0;i<8;i++)
// {
//
//    if(mem[winner[i][j]]==mem[winner[i][j+1]]&&mem[winner[i][j]]==mem[winner[i][j+2]] && mem[i][j]!=2)
//    {
//    console.log("Game Over");
//    if(mem[winner[i][j]]=='3')
//    {
//      console.log("Html wins");
//    }
//    if(mem[winner[i][j]]=='4')
//    {
//      console.log("CSS wins");
//    }
//    mem=[];
//
//
//    }
//
// }
