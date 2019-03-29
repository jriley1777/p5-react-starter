export default function(p) {
    let w, h;
    let text1, text2, text3;

    let theta = 0.0; // Start angle at 0
    let amplitude = 50.0; // Height of wave
    let period = 500.0; // How many pixels before the wave repeats
    let dx = (p.TWO_PI / period);

    const canvas = document.getElementById("app-p5_container");
    p.setup = function() {
        w = p.max(canvas.offsetWidth);
        h = p.max(canvas.offsetHeight);
        p.createCanvas(w, h);
        p.frameRate(60);
        text1 = new TextArray("p5 + REACT", 0.25, 200);
        text2 = new TextArray("HelloWorld!", 0.5);
        text3 = new TextArray("get groooooovin", 0.25, h-200);
    };

    p.draw = function() {
        p.background(255);
        p.fill(0);
        text2.draw();
        p.fill(255,0,0);
        text1.draw();
        text3.draw();
    };

    let TextArray = function(string, magic, yOffset=h/2) {
        this.letterArray = string.split("");
        this.letterObjs = this.letterArray.map((x, i) => {
            let letterXPos = (i - this.letterArray.length/2 ) * 50;
            return {
                letter: x,
                location: p.createVector(w/2 + letterXPos, yOffset)
            }
        });

        this.draw = function(){
            this.letterObjs.map(x => {
                p.textFont('Avenir Next', 56);
                p.text(x.letter, x.location.x, x.location.y);
                return null;
            });
            this.update();
        };
        this.update = function(){
            // Increment theta (try different values for
            // 'angular velocity' here)
            theta += 0.0075;

            // For every x value, calculate a y value with sine function
            let x = theta;
            this.letterObjs.map(letter => {
                letter.location.y = yOffset  + (p.sin(x) * amplitude);
                x += (dx + magic);
                return null;
            });
        };
    }
}
