function calculate() {
    let radius = +prompt("Enter the radius of the circle:");
    if (isNaN(radius) || radius <= 0) {
        alert("Please enter a valid positive number for the radius!")
        return;
    }
    let pi = 3.142;
    let circumference = 2 * pi * radius;
    let area = pi * radius * radius;

    let result = `
    <p>Radius of the Circle: <strong>${radius}</strong></p>
    <p>The Circumference is: <strong>${circumference.toFixed(2)}</strong></p>
    <p>The Area is: <strong>${area.toFixed(2)}</strong></p>
    `;
    document.getElementById("result").innerHTML = result;
}
function reset(){
    document.getElementById("result").innerHTML = "";
}