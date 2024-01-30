// const canvas = document.getElementById("canvas");
// const ctx = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// let stars = [];

// class Star {
//   constructor(x, y, size, color) {
//     this.x = x;
//     this.y = y;
//     this.size = size;
//     this.color = color;
//   }

//   draw() {
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
//     ctx.moveTo(this.x, this.y - this.size);
//     for (let i = 0; i < 5; i++) {
//       const angle = (Math.PI * 2 * i) / 5;
//       const x = this.x + Math.cos(angle) * this.size;
//       const y = this.y + Math.sin(angle) * this.size;
//       ctx.lineTo(x, y);
//     }
//     ctx.closePath();
//     ctx.fill();
//   }
// }

// function createStar(x, y) {
//   const size = Math.random() * 5 + 1;
//   const color = `hsl(${Math.random() * 360}, 100%, 75%)`;
//   const star = new Star(x, y, size, color);
//   stars.push(star);
// }

// function animate() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);

//   for (let i = 0; i < stars.length; i++) {
//     stars[i].y -= 1;

//     if (stars[i].y + stars[i].size < 0) {
//       stars.splice(i, 1);
//     }
//   }

//   stars.forEach((star) => {
//     star.draw();
//   });

//   requestAnimationFrame(animate);
// }

// canvas.addEventListener("mousemove", (event) => {
//   const x = event.clientX;
//   const y = event.clientY;
//   createStar(x, y);
// });

// animate();

// second ---------------------------------------------------------------------------------------------------------------------

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

// 3rd ---------------------------------------------------------------------------------------------------
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = Math.random() * 4 + 1;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.size > 0.2) this.size -= 0.05;
  }
  draw() {
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
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
    if (stars[i].size <= 0.2) {
      stars.splice(i, 1);
      i--;
    }
  }
  requestAnimationFrame(animate);
}

canvas.addEventListener("mousemove", (event) => {
  const x = event.clientX;
  const y = event.clientY;
  for (let i = 0; i < 5; i++) {
    stars.push(new Star(x, y));
  }
});

animate();
