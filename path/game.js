class Guard {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.xv = 0;
        this.yv = 0;
    }

    move(path) {
        this.x += this.xv; 
        this.y += this.yv; 
        path();
    }

    draw() {
        fill(255, 0, 0);
        circle(this.x, this.y, 32);
    }
}

let A = new Guard(320, 240);
let B = new Guard(320, 240);

function setup() {
    createCanvas(640, 480);
}

function draw() {
    background(0);
    A.move(() => {
        if (A.x == 320 && A.y == 240) {
            A.xv = 1;
            A.yv = 0;
        }
        else if (A.x == 480 && A.y == 240) {
            A.xv = 0;
            A.yv = -1;
        }
        else if (A.y == 120 && A.x == 480) {
            A.yv = 0;
            A.xv = -1;
        }  
        else if (A.y == 120 && A.x == 320) {
            A.xv = 0;
            A.yv = 1;
        }
    });
    B.move(() => {
        if (B.x == 320 && B.y == 240) {
            B.xv = -1;
            B.yv = 0;
        }
        else if (B.x == 160 && B.y == 240) {
            B.xv = 0;
            B.yv = 1;
        }
        else if (B.y == 360 && B.x == 160) {
            B.yv = 0;
            B.xv = 1;
        }  
        else if (B.y == 360 && B.x == 320) {
            B.xv = 0;
            B.yv = -1;
        }
    });
    A.draw();
    B.draw();
}

