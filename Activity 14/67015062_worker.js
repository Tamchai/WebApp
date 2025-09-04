function getRandomColor() {
const colors = ["#FF6EC7","#00F0FF","#39FF14","#FFD700","#FF4500","#8A2BE2","#FF1493","#00FF7F","#FF00FF","#7FFF00" ];
    return colors[Math.floor(Math.random()*colors.length)];
}

setInterval(() => {
    postMessage({ color: getRandomColor() });
}, 1000);
