// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

class Bullet
{
    constructor(startPosX, startPosY, dir)
    {
        this.Vector = new Vec2(startPosX, startPosY);
        this.velocity = new Vec2(0, 0);
        this.bulletImg = loadImage('assets/Player/Bullet.png');
        let speed = 10
        let direction = dir;
        this.velocity.setLength(speed);
        this.velocity.setAngle(direction);
    }

    update()
    {
        this.Vector.addTo(this.velocity);
    }

    draw()
    {
        image(this.bulletImg, this.Vector.x, this.Vector.y, 32, 32);
    }
}