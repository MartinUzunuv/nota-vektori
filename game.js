

points = []

function create(){
arr = [];

for (let i = 0; i < 7; i++) {
  arr.push({ a: 0, l: 20 });
}

arr[0].inc = 0;

arr[1].inc = Math.PI * 0.01;
arr[1].l = 30

arr[2].inc = -Math.PI * 0.01;
arr[2].a = Math.PI * 1.7
arr[2].l = 15

arr[3].inc = Math.PI * 0.02;
arr[3].a = Math.PI * 0.8
arr[3].l = arr[1].l*1.3

arr[4].inc = -Math.PI * 0.02;
arr[4].a = Math.PI * 0.30
arr[4].l = 30

arr[5].inc = Math.PI * 0.03;
arr[5].a = Math.PI * 1.90
arr[5].l = arr[1].l*0.4

arr[6].inc = -Math.PI * 0.03;
arr[6].a = Math.PI * 1.25
arr[6].l = arr[1].l*0.3

}

create()

function draw() {
  if(go){
    points=[]
  let prev = {x: window.innerWidth / 2, y: window.innerHeight / 2}
  for (let i = 0; i < arr.length; i++) {
    arr[i].a += arr[i].inc;
    prev.x += Math.cos(arr[i].a) * arr[i].l;
    prev.y += Math.sin(arr[i].a) * arr[i].l;
  }
  for (let j = 0; j < 3000; j++) {
    let point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    for (let i = 0; i < arr.length; i++) {
      arr[i].a += arr[i].inc;
      point.x += Math.cos(arr[i].a) * arr[i].l;
      point.y += Math.sin(arr[i].a) * arr[i].l;
    }

    points.push(point);

    //context.fillRect(point.x, point.y, 1, 1);
    drawLine(point.x, point.y,prev.x, prev.y)
    prev = point
  }
}else{
  for(let i = 1; i < points.length; i++){
    drawLine(points[i].x, points[i].y,points[i-1].x, points[i-1].y)
  }
}
}

go = true

cool = 100

function update() {
  //arr[4].l -= 0.5
  if(isKeyPressed[32]){
    if(cool > 20){
      go = !go
      cool=0
    }
    
    //arr[4].inc += 0.000001
  }
  cool+=1

  if(go){
    // arr[4].inc += 0.000001
   
    
      // arr[1].inc += 0.00000001
      // arr[2].inc -= 0.00000001
      // // arr[3].inc += 0.00000001
      // arr[4].inc += 0.00000001
      // // arr[4].l += 0.01
      // // arr[5].inc -= 0.00000001
      // arr[6].inc -= 0.00000001
      
    
  }

  // if(arr[1].a > Math.PI*15500*3){
  //   console.log(111)
  //   create()
  // }
  
}