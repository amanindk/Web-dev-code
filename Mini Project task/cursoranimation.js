// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let stars = [];

// class Star {
//   constructor(x, y, size, speed) {
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.speed = speed;
//     this.opacity = 1;
//   }
//   update() {
//     this.x += this.speed;
//     this.opacity -= 0.01;
//   }
//   draw() {
//     ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y);
//     ctx.lineTo(this.x + this.size, this.y);
//     ctx.lineTo(this.x + this.size / 2, this.y + this.size * 1.5);
//     ctx.closePath();
//     ctx.fill();
//   }
// }

// function init() {
//   stars = [];
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   for (let i = 0; i < stars.length; i++) {
//     stars[i].update();
//     stars[i].draw();
//     if (stars[i].opacity <= 0) {
//       stars.splice(i, 1);
//       i--;
//     }
//   }
//   requestAnimationFrame(animate);
// }

// canvas.addEventListener("mousemove", (event) => {
//   const x = event.clientX;
//   const y = event.clientY;
//   const size = Math.random() * 5 + 1;
//   const speed = (Math.random() - 0.5) * 4;
//   stars.push(new Star(x, y, size, speed));
// });

// animate();

//--------------------------------------------------------------------------------------------------------------------------

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

class Star {
  constructor(x, y, size, speed) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.opacity = 1;
  }
  update() {
    this.x += this.speed;
    this.opacity -= 0.01;
  }
  draw() {
    ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.size, this.y);
    ctx.lineTo(this.x + this.size / 2, this.y + this.size * 1.5);
    ctx.closePath();
    ctx.fill();
  }
}

function init() {
  stars = [];
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].draw();
    if (stars[i].opacity <= 0) {
      stars.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  const size = Math.random() * 5 + 1;
  const speed = (Math.random() - 0.5) * 4;
  stars.push(new Star(x, y, size, speed));
});

animate();
