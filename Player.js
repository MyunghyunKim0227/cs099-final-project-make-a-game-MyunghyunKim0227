// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

class Player
{
    constructor(startPosX, startPosY, images)
    {
        this.Vector = new Vec2(startPosX, startPosY);
        this.velocity = new Vec2(0, 0);
        this.playerHp = 3;
        this.playerHpImg = loadImage('assets/Player/Health.png');
        this.playerEmptyHpImg = loadImage('assets/Player/Health_Empty.png');
        this.playerImgArray = images;
        this.animDeltaTime = 0;
        this.bulletArray = [];
        this.bulletNumber = 0;
        this.bulletDelay = 0;
        this.isRestart = false;
        this.walkSfx = loadSound('assets/Sounds/Walk.wav');
        this.walkSfxDelay = 0
        this.shootSfx = loadSound('assets/Sounds/Shoot.wav');
        this.dieSfx = loadSound('assets/Sounds/Die.wav');
    }

    update(enemyArr1, enemyArr2, enemyArr3)
    {
        this.PlayerMove();
        this.PlayerShoot();
        this.PlayerHit(enemyArr1, enemyArr2, enemyArr3);
        this.PlayerHpUi();
        for(let Bullet of this.bulletArray){
            Bullet.update();
            Bullet.draw();
        }
    }

    PlayerMove()//WASD
    {
        this.walkSfxDelay += deltaTime / 1000;
        if(keyIsDown(68) || keyIsDown(65) || keyIsDown(83) || keyIsDown(87)){
            if(this.walkSfxDelay > 0.2){
                this.walkSfx.play();
                this.walkSfxDelay = 0;
            }
        }
        if(!keyIsDown(68) && !keyIsDown(65) && !keyIsDown(83) && !keyIsDown(87)){
            this.walkSfx.pause();
            image(this.playerImgArray[0], this.Vector.x, this.Vector.y, 50, 100);
        }
        if(keyIsDown(68)){
            this.Vector.x += 7;
            this.PlayerAnim();
            if(this.Vector.x > width - 25){
                this.Vector.x -= 7;
            }
        }
        if(keyIsDown(65)){
            this.Vector.x += -7;
            this.PlayerAnim();
            if(this.Vector.x < 25){
                this.Vector.x -= -7;
            }
        }
        if(keyIsDown(83)){
            this.Vector.y += 7;
            this.PlayerAnim();
            if(this.Vector.y > height - 50){
                this.Vector.y -= 7;
            }
        }
        if(keyIsDown(87)){
            this.Vector.y += -7;
            this.PlayerAnim();
            if(this.Vector.y < 50){
                this.Vector.y -= -7;
            }
        }
    }

    PlayerAnim()
    {
        this.animDeltaTime += deltaTime / 1000;
        if(this.animDeltaTime >= 0.4){
            image(this.playerImgArray[3], this.Vector.x, this.Vector.y, 50, 100);
            this.animDeltaTime = 0;
        }else if(this.animDeltaTime >= 0.3 && this.animDeltaTime < 0.4){
            image(this.playerImgArray[3], this.Vector.x, this.Vector.y, 50, 100);
        }else if(this.animDeltaTime >= 0.2 && this.animDeltaTime < 0.3){
            image(this.playerImgArray[2], this.Vector.x, this.Vector.y, 50, 100);
        }else if(this.animDeltaTime >= 0.1 && this.animDeltaTime < 0.2){            
            image(this.playerImgArray[1], this.Vector.x, this.Vector.y, 50, 100);
        }else{
            image(this.playerImgArray[0], this.Vector.x, this.Vector.y, 50, 100);
        }
    }

    PlayerShoot()//ARROWS
    {
        image(gunImgArray[gunImgNum], this.Vector.x + gunPos, this.Vector.y, 30, 30)
        if(keyIsDown(UP_ARROW)){
            gunPos = 0;
            gunImgNum = 0;
            if(this.bulletDelay >= 0.3){
                this.bulletArray.push(new Bullet(this.Vector.x, this.Vector.y - 10, radians(270)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
                this.bulletDelay = 0;
            }else if(this.bulletDelay == 0){
                this.bulletArray.push(new Bullet(this.Vector.x, this.Vector.y - 10, radians(270)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
            }
            this.bulletDelay += deltaTime / 1000;
        }else if(keyIsDown(LEFT_ARROW)){
            gunPos = -30;
            gunImgNum = 1;
            if(this.bulletDelay >= 0.3){
                this.bulletArray.push(new Bullet(this.Vector.x - 40, this.Vector.y - 10, radians(180)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
                this.bulletDelay = 0;
            }else if(this.bulletDelay == 0){
                this.bulletArray.push(new Bullet(this.Vector.x - 40, this.Vector.y - 10, radians(180)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
            }
            this.bulletDelay += deltaTime / 1000;
        }else if(keyIsDown(DOWN_ARROW)){
            gunPos = 0;
            gunImgNum = 2;
            if(this.bulletDelay >= 0.3){
                this.bulletArray.push(new Bullet(this.Vector.x, this.Vector.y + 10, radians(90)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
                this.bulletDelay = 0;
            }else if(this.bulletDelay == 0){
                this.bulletArray.push(new Bullet(this.Vector.x, this.Vector.y + 10, radians(90)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
            }
            this.bulletDelay += deltaTime / 1000;
        }else if(keyIsDown(RIGHT_ARROW)){
            gunPos = 30;
            gunImgNum = 3;
            if(this.bulletDelay >= 0.3){
                this.bulletArray.push(new Bullet(this.Vector.x + 40, this.Vector.y - 10, radians(0)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
                this.bulletDelay = 0;
            }else if(this.bulletDelay == 0){
                this.bulletArray.push(new Bullet(this.Vector.x + 40, this.Vector.y - 10, radians(0)));
                this.shootSfx.play(0, 1, volume);
                this.bulletNumber++;
            }
            this.bulletDelay += deltaTime / 1000;
        }else{
            this.bulletDelay = 0;
        }
    }

    PlayerHit(enemyArr1, enemyArr2, enemyArr3)
    {
        for(let enemyMob of enemyArr1){
            if(this.Vector.x + 25 >= enemyMob.Vector.x - 50 && this.Vector.x - 25 <= enemyMob.Vector.x + 25 
                && this.Vector.y + 50 >= enemyMob.Vector.y - 50 && this.Vector.y - 50 <= enemyMob.Vector.y + 50){
                //fill('Red');
                //rect(this.Vector.x, this.Vector.y, 50, 100);
                this.playerHp--;
                this.dieSfx.play(0, 1, volume);
                this.isRestart = true;
            }
        }

        for(let enemyMob of enemyArr2){
            if(this.Vector.x + 25 >= enemyMob.Vector.x - 50 && this.Vector.x - 25 <= enemyMob.Vector.x + 25 
                && this.Vector.y + 50 >= enemyMob.Vector.y - 50 && this.Vector.y - 50 <= enemyMob.Vector.y + 50){
                this.playerHp--;
                this.dieSfx.play(0, 1, volume);
                this.isRestart = true;
            }
        }

        for(let enemyMob of enemyArr3){
            if(this.Vector.x + 25 >= enemyMob.Vector.x - 50 && this.Vector.x - 25 <= enemyMob.Vector.x + 25 
                && this.Vector.y + 50 >= enemyMob.Vector.y - 50 && this.Vector.y - 50 <= enemyMob.Vector.y + 50){
                this.playerHp--;
                this.dieSfx.play(0, 1, volume);
                this.isRestart = true;
            }
        }
    }

    PlayerHpUi()
    {
        if(this.playerHp == 3){
            image(this.playerHpImg, 32, 32, 64, 64);
            image(this.playerHpImg, 106, 32, 64, 64);
            image(this.playerHpImg, 180, 32, 64, 64);
        }else if(this.playerHp == 2){
            image(this.playerHpImg, 32, 32, 64, 64);
            image(this.playerHpImg, 106, 32, 64, 64);
            image(this.playerEmptyHpImg, 180, 32, 64, 64);
        }else if(this.playerHp == 1){
            image(this.playerHpImg, 32, 32, 64, 64);
            image(this.playerEmptyHpImg, 106, 32, 64, 64);
            image(this.playerEmptyHpImg, 180, 32, 64, 64);
        }else if(this.playerHp == 0){
            image(this.playerEmptyHpImg, 32, 32, 64, 64);
            image(this.playerEmptyHpImg, 106, 32, 64, 64);
            image(this.playerEmptyHpImg, 180, 32, 64, 64);
        }
    }
}