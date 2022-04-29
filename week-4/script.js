// Arrays, Functions, Objects, & Events

let string = ['Justin', 'Jodi', 'Jordon', 'John', 'Jesus'];

let num = [5, 10, 15, 20, 25];

let trueFalse = [true, true, false, false, true];

function add(p1) {
  if (typeof p1[0] === 'string'){
   p1.push('Jessie');
   console.log(p1)

  } else if(typeof p1[0] === 'number'){
    p1.push(30);
    console.log(p1);
  
  } else if (typeof p1[0] === 'boolean') {
    p1.push(true);
    console.log(p1)
  }
}

add(num);
add(string);
add(trueFalse);