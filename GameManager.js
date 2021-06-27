// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

class GameManager
{
    constructor()
    {
        this.player = new Player(512, 512, playerAnim);
        this.enemy1 = [];
        this.enemy2 = [];
        this.enemy3 = [];
        this.enemySpawnDelay = 0;
        this.enemySpawnDelayLimit = 0.5;
        this.enemyRate = 0;
        this.spawnPos;
        this.playerDeadImg = loadImage('assets/Scenes/YouDied.png');
        this.retryImg = loadImage('assets/Scenes/Restart.png');
        this.scoreImg = loadImage('assets/Scenes/Score.png');
        this.score = 0;
    }

    update()
    {
        this.Map();
        this.PlayerSpawn();
        this.EnemySpawnLocate();
        this.EnemySpawn();
        this.ScoreUi(); 
        this.Restart();
    }

    PlayerSpawn()
    {
        this.player.update(this.enemy1, this.enemy2, this.enemy3);
    }

    EnemySpawnLocate()
    {
        if(this.enemySpawnDelay >= this.enemySpawnDelayLimit){
            if(this.enemyRate < 65){
                switch(this.spawnPos){
                    case 0:
                        this.enemy1.push(new Enemy1(random(416, 608), 32, greenGoblinAnim, random(140, 160)));
                        break;
                    case 1:
                        this.enemy1.push(new Enemy1(random(416, 608), 992, greenGoblinAnim, random(140, 160)));
                        break;
                    case 2:
                        this.enemy1.push(new Enemy1(32, random(416, 608), greenGoblinAnim, random(140, 160)));
                        break;
                    case 3:
                        this.enemy1.push(new Enemy1(992, random(416, 608), greenGoblinAnim, random(140, 160)));
                        break;
                }
            }else if(this.enemyRate >= 65 && this.enemyRate < 90){
                switch(this.spawnPos){
                    case 0:
                        this.enemy2.push(new Enemy2(random(416, 608), 32, orangeGoblinAnim, random(140, 160)));
                        break;
                    case 1:
                        this.enemy2.push(new Enemy2(random(416, 608), 992, orangeGoblinAnim, random(140, 160)));
                        break;
                    case 2:
                        this.enemy2.push(new Enemy2(32, random(416, 608), orangeGoblinAnim, random(140, 160)));
                        break;
                    case 3:
                        this.enemy2.push(new Enemy2(992, random(416, 608), orangeGoblinAnim, random(140, 160)));
                        break;
                }
            }else if(this.enemyRate >= 90){
                switch(this.spawnPos){
                    case 0:
                        this.enemy3.push(new Enemy3(random(416, 608), 32, purpleGoblinAnim, random(140, 160)));
                        break;
                    case 1:
                        this.enemy3.push(new Enemy3(random(416, 608), 992, purpleGoblinAnim, random(140, 160)));
                        break;
                    case 2:
                        this.enemy3.push(new Enemy3(32, random(416, 608), purpleGoblinAnim, random(140, 160)));
                        break;
                    case 3:
                        this.enemy3.push(new Enemy3(992, random(416, 608), purpleGoblinAnim, random(140, 160)));
                        break;
                }
            }
            this.enemyCount++;
            this.enemyRate = int(random(100));
            this.spawnPos = int(random(4));
            this.enemySpawnDelayLimit -= 0.002;
            this.enemySpawnDelay = 0;
            if(this.enemySpawnDelayLimit <= 0.1){
                this.enemySpawnDelayLimit = 0.1
            }
        }
        this.enemySpawnDelay += deltaTime / 1000;
    }

    EnemySpawn()
    {
        for(let mob = 0; mob < this.enemy1.length; mob++){
            this.enemy1[mob].update(this.player, this.player.bulletArray);
            if(this.enemy1[mob].enemyHp == 0){
                this.enemy1.splice(mob, 1);
                this.score += 100;
            }
        }

        for(let mob = 0; mob < this.enemy2.length; mob++){
            this.enemy2[mob].update(this.player, this.player.bulletArray);
            if(this.enemy2[mob].enemyHp == 0){
                this.enemy2.splice(mob, 1);
                this.score += 200;
            }
        }

        for(let mob = 0; mob < this.enemy3.length; mob++){
            this.enemy3[mob].update(this.player, this.player.bulletArray);
            if(this.enemy3[mob].enemyHp == 0){
                this.enemy3.splice(mob, 1);
                this.score += 300;
            }
        }
    }

    Restart()
    {
        if(this.player.isRestart == true && this.player.playerHp == 0){
            image(this.playerDeadImg, width / 2, height / 2, width, 128);
            image(this.retryImg, width / 2, height - 64, width, 128)
            noLoop();
        }else if(this.player.isRestart == true){
            this.enemy1.splice(0, this.enemy1.length);
            this.enemy2.splice(0, this.enemy2.length);
            this.enemy3.splice(0, this.enemy3.length);
            this.enemySpawnDelayLimit = 0.5
            this.score -= 500;
            this.player.isRestart = false;
            this.player.Vector.x = 512;
            this.player.Vector.y = 512;
        }
    }

    ScoreUi()
    {
        image(this.scoreImg, 700, 30, 210, 45)
        fill(0);
        textFont('Arial')
        textSize(60);
        text(this.score, 820, 50);
    }

    Map()
    {
        image(map[mapSelection], width / 2, height / 2, width, height);
    }
}