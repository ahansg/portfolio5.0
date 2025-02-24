const plane = document.querySelector(".paperplane");
const path = document.querySelector(".track path");
const pathLength = path.getTotalLength();

function animatePlane(timestamp) {
  const progress = (timestamp / 5000) % 1; // 5 seconds per loop
  const point = path.getPointAtLength(progress * pathLength);
  const rotation = Math.atan2(point.y - 200, point.x - 200) * (180 / Math.PI);

  plane.style.transform = `translate(${point.x}px, ${point.y}px) rotate(${rotation}deg)`;
  requestAnimationFrame(animatePlane);
}

requestAnimationFrame(animatePlane);
