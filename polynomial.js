// polynomial.js
const fs = require('fs');

// Function to decode a value from a given base
function decodeValue(base, value) {
    return parseInt(value, base);
}

// Function to calculate the constant term c using Lagrange interpolation
function calculateConstantTerm(points) {
    const n = points.length;
    let c = 0;

    for (let i = 0; i < n; i++) {
        let xi = points[i][0];
        let yi = points[i][1];
        let li = 1;

        for (let j = 0; j < n; j++) {
            if (i !== j) {
                li *= (0 - points[j][0]) / (xi - points[j][0]);
            }
        }
        c += li * yi;
    }
    return Math.round(c);
}

// Main function to read JSON and compute the constant term
function main() {
    const data = JSON.parse(fs.readFileSync('input.json', 'utf8'));
    const n = data.keys.n;
    const k = data.keys.k;

    let points = [];

    for (let i = 1; i <= n; i++) {
        const base = parseInt(data[i].base);
        const value = data[i].value;
        const decodedValue = decodeValue(base, value);
        points.push([i, decodedValue]); // (x, y) pairs
    }

    const constantTerm = calculateConstantTerm(points);
    console.log("The constant term c is:", constantTerm);
}

main();