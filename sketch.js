// Name       : Myunghyun_Kim
// Assignment : CS099-final-project-make-a-game-Assignment
// Course     : CS099
// Spring 2021

let gameProgress = 0;
let enemyCount = 0;
let playerAnim = [];
let gunImgArray = [];
let gunImgNum = 3;
let gunPos = 30;
let greenGoblinAnim = [];
let orangeGoblinAnim = [];
let purpleGoblinAnim = [];
let hitSfxArray = [];
let hitSfxNum = 0;
let volume = 0.3;
let map = [];
let mapSelection = 0;

function preload()
{
    //bgm
    backgroundMusic = loadSound('assets/Sounds/BackgroundMusic.mp3');
    //sfx
    openingSfx = loadSound('assets/Sounds/Start.wav');
    hitSfxArray.push(loadSound('assets/Sounds/Hit_1.wav'));
    hitSfxArray.push(loadSound('assets/Sounds/Hit_2.wav'));
    //scene
    openingScene = loadImage('assets/Scenes/MainScreen.png');
    //map
    map.push(loadImage('assets/World/World 1.png'));
    map.push(loadImage('assets/World/World 2.png'));
    map.push(loadImage('assets/World/World 3.png'));
    //playerImage
    playerAnim.push(loadImage('assets/Player/Player_Walk_1.png'));
    playerAnim.push(loadImage('assets/Player/Player_Walk_2.png'));
    playerAnim.push(loadImage('assets/Player/Player_Walk_3.png'));
    playerAnim.push(loadImage('assets/Player/Player_Walk_4.png'));
    //gunImg
    gunImgArray.push(loadImage('assets/Player/Gun_Up.png'));
    gunImgArray.push(loadImage('assets/Player/Gun_Left.png'));
    gunImgArray.push(loadImage('assets/Player/Gun_Down.png'));
    gunImgArray.push(loadImage('assets/Player/Gun_Right.png'));
    //greengoblinImage
    greenGoblinAnim.push(loadImage('assets/Enemy/Enemy_Goblin_1.png'));
    greenGoblinAnim.push(loadImage('assets/Enemy/Enemy_Goblin_2.png'));
    greenGoblinAnim.push(loadImage('assets/Enemy/Enemy_Goblin_3.png'));
    greenGoblinAnim.push(loadImage('assets/Enemy/Enemy_Goblin_4.png'));
    //greengoblinImage
    orangeGoblinAnim.push(loadImage('assets/Enemy/Enemy_OrangeGoblin_1.png'));
    orangeGoblinAnim.push(loadImage('assets/Enemy/Enemy_OrangeGoblin_2.png'));
    orangeGoblinAnim.push(loadImage('assets/Enemy/Enemy_OrangeGoblin_3.png'));
    orangeGoblinAnim.push(loadImage('assets/Enemy/Enemy_OrangeGoblin_4.png'));
    //purplegoblinImage
    purpleGoblinAnim.push(loadImage('assets/Enemy/Enemy_PurpleGoblin_1.png'));
    purpleGoblinAnim.push(loadImage('assets/Enemy/Enemy_PurpleGoblin_2.png'));
    purpleGoblinAnim.push(loadImage('assets/Enemy/Enemy_PurpleGoblin_3.png'));
    purpleGoblinAnim.push(loadImage('assets/Enemy/Enemy_PurpleGoblin_4.png'));
}

function setup()
{
    createCanvas( 1024, 1024 );
    mapSelection = int(random(3));
    rectMode(CENTER);
    imageMode(CENTER);
    //frameRate(10);

    gameManager = new GameManager();
}

function draw()
{
    switch(gameProgress){
        case 0:
            image(openingScene, width / 2, height / 2, width, height);
            push();
            textAlign(CENTER);
            textSize(20)
            fill(255);
            text('Please press F11 before start', width / 2, 200);
            pop();
            if(keyIsDown(32)){
                backgroundMusic.loop(0, 1, volume);
                openingSfx.play(0, 1, volume);
                gameProgress++;
            }
            break;
        case 1:
            gameManager.update();
            break;
    }
}
