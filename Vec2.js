// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

class Vec2{
    constructor(x = 0, y = 0){
        this.x = x;
        this.y = y;
    }

    getAngle(){
        const angle = atan2(this.y, this.x);
        return angle;
    }

    setAngle(radAngle){
        const length = this.getLength();
        this.x = cos(radAngle) * length;
        this.y = sin(radAngle) * length;
    }

    getLength(){
        const length = sqrt(this.x * this.x + this.y * this.y);
        return length;
    }

    setLength(length){
        const radAngle = this.getAngle();
        this.x = cos(radAngle) * length;
        this.y = sin(radAngle) * length;
    }

    add(secondVec){
        const secondX = this.x + secondVec.x;
        const secondY = this.y + secondVec.y;
        return new Vec2(secondX, secondY);
    }

    addTo(secondVec){
        this.x += secondVec.x;
        this.y += secondVec.y;
    }

    addToTime(secondVec){
        this.x += secondVec.x * deltaTime / 1000;
        this.y += secondVec.y * deltaTime / 1000;
    }

    subtract(secondVec){
        const secondX = this.x - secondVec.x;
        const secondY = this.y - secondVec.y;
        return new Vec2(secondX, secondY);
    }

    subtractFrom(secondVec){
        this.x -= secondVec.x;
        this.y -= secondVec.y;
    }

    multiply(scalar){
        const secondX = scalar * this.x;
        const secondY = scalar * this.y;
        return new Vec2(secondX, secondY);
    }

    multiplyBy(scalar){
        this.x *= scalar;
        this.y *= scalar;
    }

    divide(scalar){
        const secondX = this.x / scalar;
        const secondY = this.y / scalar;
        return new Vec2(secondX, secondY);
    }

    divideBy(scalar){
        this.x /= scalar;
        this.y /= scalar;
    }
}