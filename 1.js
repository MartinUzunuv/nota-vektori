arr = [];

for (let i = 0; i < 7; i++) {
  arr.push({ a: 0, l: 0 });
}

arr[0].inc = 0;

arr[1].inc = Math.PI * 0.01;
arr[1].l = 0.5;

arr[2].inc = -Math.PI * 0.01;
arr[2].l = 0.7;

arr[3].inc = Math.PI * 0.02;
arr[3].l = 0.4;

arr[4].inc = -Math.PI * 0.02;
arr[4].l = 0.8;

arr[5].inc = Math.PI * 0.03;
arr[5].l = 0.2;

arr[6].inc = -Math.PI * 0.03;
arr[6].l = 0.2;

function draw() {
  for (let j = 0; j < 300; j++) {
    let point = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    for (let i = 0; i < arr.length; i++) {
      arr[i].a += arr[i].inc;
      point.x += Math.cos(arr[i].a) * arr[i].l * 50;
      point.y += Math.sin(arr[i].a) * arr[i].l * 50;
    }

    context.fillRect(point.x, point.y, 1, 1);
  }
}

function update() {
  
}







arr[0].inc = 0

arr[1].inc = Math.PI*0.01
arr[1].l = 0.5
arr[1].a = (Math.PI/3)*2

arr[2].inc = -Math.PI*0.01
arr[2].l = 0.7
arr[2].a = arr[1].a+Math.PI*1.1

arr[3].inc = Math.PI*0.02
arr[3].l = 0.4
arr[3].a = arr[1].a+Math.PI*0.1

arr[4].inc = -Math.PI*0.02
arr[4].l = 0.8
arr[4].a = arr[1].a+Math.PI*0.5

arr[5].inc = Math.PI*0.03
arr[5].l = 0.2
arr[5].a = arr[1].a+Math.PI*0.1

arr[6].inc = -Math.PI*0.03
arr[6].l = 0.2
arr[6].a = arr[1].a+Math.PI*0.5