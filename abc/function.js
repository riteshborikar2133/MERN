exports.MyCircle = class {

    constructor(r) {
        this.radius = r;
        console.log("Hello I am My Circle Constructor...");
    }

    area() {
        let area = Math.PI * this.radius * this.radius;
        console.log(`Area: ${area.toFixed(2)}`);
    }
}


exports.add = (x, y) => {
    console.log(x + y)
}