// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

class Enemy1
{
    constructor(startPosX, startPosY, images, enemySpeed)
    {
        this.Vector = new Vec2(startPosX, startPosY);
        this.velocity = new Vec2(0, 0);
        this.dir;
        this.speed = enemySpeed;
        this.enemyHp = 1;
        this.goblinImgArray = images;
        this.animDeltaTime = 0;
    }

    update(player, bulletArr)
    {
        this.EnemyAnim();
        this.EnemyMove(player);
        this.EnemyHit(bulletArr);
    }

    EnemyMove(player)
    {
        this.dir = atan2(player.Vector.y - this.Vector.y, player.Vector.x - this.Vector.x);
        this.velocity.setAngle(this.dir);
        this.velocity.setLength(this.speed);
        this.Vector.addToTime(this.velocity);
    }

    EnemyAnim()
    {
        this.animDeltaTime += deltaTime / 1000;
        if(this.animDeltaTime >= 0.4){
            image(this.goblinImgArray[3], this.Vector.x, this.Vector.y, 50, 100);
            this.animDeltaTime = 0;
        }else if(this.animDeltaTime >= 0.3 && this.animDeltaTime < 0.4){
            image(this.goblinImgArray[3], this.Vector.x, this.Vector.y, 50, 100);
        }else if(this.animDeltaTime >= 0.2 && this.animDeltaTime < 0.3){
            image(this.goblinImgArray[2], this.Vector.x, this.Vector.y, 50, 100);
        }else if(this.animDeltaTime >= 0.1 && this.animDeltaTime < 0.2){            
            image(this.goblinImgArray[1], this.Vector.x, this.Vector.y, 50, 100);
        }else{
            image(this.goblinImgArray[0], this.Vector.x, this.Vector.y, 50, 100);
        }
    }

    EnemyHit(bulletArr)
    {
        for(let bulletObj = 0; bulletObj < bulletArr.length; bulletObj++){
            if(this.Vector.x + 32 >= bulletArr[bulletObj].Vector.x - 15 && this.Vector.x - 32 <= bulletArr[bulletObj].Vector.x + 15 
                && this.Vector.y + 64 >= bulletArr[bulletObj].Vector.y - 15 && this.Vector.y - 64 <= bulletArr[bulletObj].Vector.y + 15){
                //fill(255);
                //rect(this.Vector.x, this.Vector.y, 50, 100);
                hitSfxNum = int(random(2));
                hitSfxArray[hitSfxNum].play(0, 1, volume);
                bulletArr.splice(bulletObj, 1);
                this.enemyHp--;
            }
        }
    }
}