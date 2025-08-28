function getRandomColor() {
    const colors = ["pink","lightblue","lightgreen","lightyellow","lavender","orange"];
    return colors[Math.floor(Math.random()*colors.length)];
}

setInterval(() => {
    postMessage({ color: getRandomColor() });
}, 1000);
