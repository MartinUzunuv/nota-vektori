arr = []

points = []

for(let i = 0; i < 7; i++){
  arr.push({a:0, l: 20})
}

arr[0].inc = 0

arr[1].inc = Math.PI*0.01

arr[2].inc = -Math.PI*0.01

arr[3].inc = Math.PI*0.02

arr[4].inc = -Math.PI*0.02

arr[5].inc = Math.PI*0.03

arr[6].inc = -Math.PI*0.003

function draw() {
  let point = {x:window.innerWidth/2, y:window.innerHeight/2}
  for(let i = 0; i < arr.length; i++) {
    point.x += Math.cos(arr[i].a)*arr[i].l
    point.y += Math.sin(arr[i].a)*arr[i].l
  }
  points.push(point)
  if(points.length > 1000){
    points.splice(0,1)
  }

  for(let i = 0; i < points.length; i++) {
    context.fillRect(points[i].x, points[i].y,1,1)
  }

  for(let i = 0; i < arr.length; i++) {
    drawLine(i*100,50, i*100+ Math.cos(arr[i].a)*arr[i].l,50 + Math.sin(arr[i].a)*arr[i].l)
  }
  
}

function update() {
  for(let i = 0; i < arr.length; i++) {
    arr[i].a += arr[i].inc
  }
}


arr[0].inc = 0;

arr[1].inc = Math.PI * 0.01;

arr[2].inc = Math.PI * 0.01;

arr[3].inc = Math.PI * 0.01;

arr[4].inc = Math.PI * 0.02;
arr[4].l = 60

arr[5].inc = Math.PI * 0.01;

arr[6].inc = Math.PI * 0.001;