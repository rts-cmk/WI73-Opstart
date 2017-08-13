console.log('while');
var i = 0;
while(i < 10){
   i++;
   console.log('  gentagelse: ' + i);
}


console.log('do - while');
var i = 0;
do{
   console.log('  gentagelse: ' + i);
   i++;
}while(i < 10);


console.log('for');
for(var i = 0; i < 10; i++){
   console.log('  gentagelse: ' + i);
}


console.log('for...in');
var colors = ['rød','grøn','blå'];
colors[9] = 'white';
for(var color in colors){
      console.log(color);
}
   
console.log('for...of');
var colors = ['rød','grøn','blå'];
colors[9] = 'white';
for(var color of colors){
      console.log(color);
}