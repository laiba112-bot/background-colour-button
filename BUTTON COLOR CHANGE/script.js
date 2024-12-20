const colors = [
    '#FF5733', '#33FF57', '#5733FF', '#FF33A6', '#33A6FF',
    '#FFC300', '#DAF7A6', '#C70039', '#900C3F', '#581845',
    '#00BCD4', '#8BC34A', '#FFEB3B', '#FF9800', '#E91E63'
];

function changeBackgroundColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}