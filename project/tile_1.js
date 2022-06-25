//1번 타일

class tile_1 {
    constructor() {
        this.start_width = 0 + windowWidth/160;
        this.end_width = windowWidth/9 - windowWidth/160;
        this.height = -windowHeight/40;    
        this.velocity = windowHeight/150;  
        this.thickness = windowHeight/40;
        this.color = color(255, 255, 0);   
        this.remove_line = windowHeight * 2;
    }
    
    display() {
        push();
        stroke(this.color);
        strokeWeight(this.thickness);
        line(this.start_width, this.height, this.end_width, this.height);
        pop();
    }   
    
    move() {
        this.height += this.velocity;
    }

    remove(x) {
        if(this.height + this.thickness/2 > windowHeight/8 * 7 - windowHeight/30 && this.height - this.thickness/2 < windowHeight/8 * 7 + windowHeight/30) {
            this.height = this.remove_line;
            return x += 100;
        }
        else return x += 0;
    }
}