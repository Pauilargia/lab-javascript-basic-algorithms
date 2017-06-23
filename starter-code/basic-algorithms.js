// Names and Input
var hacker1 = "Paula";
console.log("The driver's name is " + hacker1);
var hacker2 = prompt("What is the navigator's name?");
console.log("The navigator's name is " + hacker2);


//Conditionals
if (hacker1.length > hacker2.length){
  console.log("The Driver has the longest name, it has " + hacker1.length + " characters");
} else if (hacker1.length < hacker2.length){
  console.log("Yo, navigator got the longest name, it has " + hacker2.length + " characters");
} else {
  console.log("Wow, you both got equally long names, " + hacker1.length + " characters!!!");
}


//Loops
var upperHacker1 = "";
for(var i=0; i<hacker1.length; i++){
  if(i===hacker1.length-1){
    upperHacker1 += hacker1[i];
  } else {
    upperHacker1 += hacker1[i];
    upperHacker1 += " ";
  }
}
upperHacker1 = upperHacker1.toUpperCase();
console.log(upperHacker1);

var reverseHacker2="";
for(var j=0; j<hacker2.length; j++){
  reverseHacker2 += hacker2[hacker2.length-(j+1)];
}
console.log(reverseHacker2);

var longest = "";
if(hacker1.length>hacker2.length) {
  longest = hacker1;
} else {
  longest = hacker2;
}

var k = 0, exit = 0;
while(k<longest.length && exit === 0){
  if(hacker1[k]<hacker2[k] || hacker1[k]===undefined){
    console.log("The driver's name goes first");
    exit = 1;
  } else if(hacker1[k]>hacker2[k] || hacker2[k] === undefined){
    console.log("Yo, the navigator goes first definitely");
    exit = 1;
  } else if(k===hacker1.length-1 && k===hacker2.length-1){
    console.log("What?! You both got the same name");
    exit = 1;
  } else {
    k++;
  }
}


// Bonus Time
var palindrome = prompt("Write a sentence or a word and let's check if it's a palindrome");
//Convertimos la cadena a minusculas para hacer   la comparacion
var lowerPalindrome = palindrome.toLowerCase();
//Eliminamos los caracteres que no sean letras o numeros
var newString = "";
for(var i=0; i<lowerPalindrome.length; i++){
  if((lowerPalindrome.charCodeAt(i)>=97 && lowerPalindrome.charCodeAt(i)<=122) || (lowerPalindrome.charCodeAt(i)>=48 && lowerPalindrome.charCodeAt(i)<=57)){
    newString += lowerPalindrome[i];
  }
}
//Comparamos que la cadena leida por ambos lados sea igual
var ultimo = newString.length - 1;
var j = 0, finish = 0;
while(j<newString.length && finish === 0){
  if(newString[j]!==newString[ultimo-j]){
    console.log(palindrome + " is not a palindrome!");
    finish = 1;
  } else {
    if(j === newString.length-1){
      console.log("'" + palindrome + "' is a palindrome!");
    }
    j++;
  }
}

//Lorem Ipsum
var text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ligula ante, consequat eget fermentum vitae, cursus suscipit elit. Nam iaculis, risus nec ultrices ultricies, libero leo cursus mauris, facilisis mollis nisl purus at dolor. Nulla varius augue dolor, nec condimentum erat sollicitudin vitae. Maecenas sit amet sapien ligula. Phasellus rhoncus dui id arcu accumsan, vel ornare felis viverra. Integer ultrices sem eu pellentesque facilisis. Sed condimentum consequat vestibulum. Mauris mauris enim, elementum id lobortis non, iaculis id nulla. Suspendisse nec porttitor elit. \n\nProin vel sem tellus. Fusce a hendrerit nisi. Etiam ullamcorper quam vel iaculis rutrum. Aenean consectetur congue sem in imperdiet. Fusce pretium elementum risus, non sollicitudin eros egestas eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed volutpat orci sit amet sem finibus, ut venenatis nulla bibendum. In eget purus placerat, tincidunt felis sed, congue nibh. Cras malesuada faucibus risus, vel tristique est bibendum quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. \n\nPhasellus porttitor sem eget sollicitudin ultrices. Fusce metus magna, dignissim vitae purus et, molestie vehicula nibh. Praesent a sollicitudin ipsum. Nam vitae fermentum velit. Integer id odio ex. Sed cursus mauris ut auctor finibus. In non massa euismod, eleifend mi vel, mattis justo. Vestibulum nec nunc nec metus luctus volutpat. Morbi tincidunt quam nisi, eu dapibus enim imperdiet eu. In at tincidunt velit. Curabitur sollicitudin porta iaculis."

var words = text.split(" ");
console.log("The text has " + words.length + " words");

var searchFrom = 0;
var count = 0;
while(searchFrom >= 0){
  searchFrom = text.indexOf(" et ", searchFrom+1);
  if(searchFrom >= 0){
   count++;
  }
}
console.log("The latin word 'et' appears " + count + " times");
