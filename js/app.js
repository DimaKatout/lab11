'use strict'
var shapes=[];
var randomNumm=[];
var names=['bag','banana','bathroom','boots','breakfast','bubblegum','chair','cthulhu','dog-duck','dragon','pen','pet-sweep','scissors','shark','sweep','tauntaun','unicom','usb','water-can','wine-glass'];
var leftImage=document.querySelector('#leftImage');
var midlleImage=document.querySelector('#middleImage');
var rightImage=document.querySelector('#rightImage');
var imageSection=document.querySelector('#imageSection');

//first way to do this
leftImage.src=`images/${names[0]}.jpg `;
leftImage.alt=names[0];
leftImage.title=names[0];
//second way
midlleImage.setAttribute('src',`images/${names[1]}.jpg`);
midlleImage.setAttribute('alt',names[1]);
midlleImage.setAttribute('title',names[1]);

rightImage.src=`images/${names[2]}.jpg`;
rightImage.alt=names[2];
rightImage.title=names[2];

function Shape(name)
{this.name=name;
this.clicks=0;
this.views=0;
this.imagePath=`images/${this.name}.jpg`;
shapes.push(this);
}
 
for(var i=0;i<names.length;i++){
    new Shape(names[i]);

}

var leftShape,middleShape,rightShape;

function render(){

     randomNumm=threeRandomNum(0,shapes.length-1);

    console.log('randomNumm',randomNumm)
    leftShape=shapes[randomNumm[0]];
    //leftShape=shapes[random];

    console.log ('leftShape',leftShape);
   // while(middleShape===leftShape||middleShape===rightShape){}
    middleShape=shapes[randomNumm[1]];
    console.log ('middleShape',middleShape);

    rightShape=shapes[randomNumm[2]];
    console.log ('rightShape',rightShape);


    leftImage.setAttribute('src',leftShape.imagePath);
    leftImage.setAttribute('alt',leftShape.name);
    leftImage.setAttribute('title',leftShape.name);

    middleImage.setAttribute('src',middleShape.imagePath);
    middleImage.setAttribute('alt',middleShape.name);
    middleImage.setAttribute('title',middleShape.name);


    rightImage.setAttribute('src',rightShape.imagePath);
    rightImage.setAttribute('alt',rightShape.name);
    rightImage.setAttribute('title',rightShape.name);

}
render();





imageSection.addEventListener('click',handleClickOnShape);

var totalClicks=0;

function handleClickOnShape(event){
    if(totalClicks<25){
        if(event.target.id!=='imageSection'){
            if(event.target.id==='leftImage'){
                leftShape.clicks++;
            }
            else if(event.target.id==='middleImage')

            {
               middleShape.clicks++;
            }
            else if(event.target.id=='rightImage')
            {
                rightShape.clicks++;
            }
            totalClicks++;
            leftShape.views++;
            middleShape.views++;
            rightShape.views++;
            render();
        }
    }
    else{
        console.log('more than 25 clicks');
        imageSection.removeEventListener('click',handleClickOnShape);
        render2();

    }

}

  function render2(){
      var ulEl=document.getElementById('summary');
      for(var i=0;i<shapes.length;i++){
          var liEl=document.createElement('li');
          liEl.textContent=`${shapes[i].name} has ${shapes[i].clicks} clicks and ${shapes[i].views} views `;
          ulEl.appendChild(liEl);
          console.log('my list ',ulEl)


      }
      

  }

  function randomNumber(min, max) {
     
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function threeRandomNum(min, max) {
    
    var n = [];
   
    for(var i=0;i<3;i++){
    n.push(randomNumber(min,max));}
    
    while(n[0]===n[1]||n[0]===n[2]||n[1]===n[2]){
        n=[];
        for(var i=0;i<3;i++){
            n.push(randomNumber(min,max));}


    }
    
    
    

    return n;
    }