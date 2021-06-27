# Name / Assignment / Course/ Term
* Name       : Myunghyun_Kim
* Assignment : CS099-final-project-make-a-game-Assignment
* Course     : CS099
* Spring 2021

# Shapes
* My Explanation
- Shapes can make us to see something visually. It can tell us that something has happened by appearing in certain position. We can make shapes or lines by using 'rect()' and 'circle()' or other shape-related functions with position and size value parameters.

* Example
```js
//Enemy1.js line 54 ~ 62(line 57)
//White rectangle at Enemy's position appears if Enemy collides with Bullet. (Used before Enemy's image insertion, so its now commented out)
if(this.Vector.x + 32 >= bulletArr[bulletObj].Vector.x - 15 && this.Vector.x - 32 <= bulletArr[bulletObj].Vector.x + 15 
    && this.Vector.y + 64 >= bulletArr[bulletObj].Vector.y - 15 && this.Vector.y - 64 <= bulletArr[bulletObj].Vector.y + 15){
    //fill(255);
    //rect(this.Vector.x, this.Vector.y, 50, 100);
    hitSfxNum = int(random(2));
    hitSfxArray[hitSfxNum].play(0, 1, volume);
    bulletArr.splice(bulletObj, 1);
    this.enemyHp--;
}
```

# Colors
* My Explanation
- Colors can make us to see something visually. It can tell us that something has happened by changing its color(RGB value). We can color shapes or lines by using 'fill()' and 'color()' or other color-related functions with RGB value parameters.

* Example
```js
//Example 1
//Player.js line 166 ~ 173(line 168)
//Player's color changes to red if Player collides with Enemy. (Used before Player's image insertion, so its now commented out)
if(this.Vector.x + 25 >= enemyMob.Vector.x - 50 && this.Vector.x - 25 <= enemyMob.Vector.x + 25 
    && this.Vector.y + 50 >= enemyMob.Vector.y - 50 && this.Vector.y - 50 <= enemyMob.Vector.y + 50){
    //fill('Red');
    //rect(this.Vector.x, this.Vector.y, 50, 100);
    this.playerHp--;
    this.dieSfx.play(0, 1, volume);
    this.isRestart = true;
}
//Example 2
//GameManager.js line 145 ~ 152(line 148)
//Used 'fill()' function to color score text black.
ScoreUi()
    {
        image(this.scoreImg, 700, 30, 210, 45)
        fill(0);
        textFont('Arial')
        textSize(60);
        text(this.score, 820, 50);
    }
```

# Variables
* My Explanation
- Variable is a memory space that stores a specific value. To put it simply, a variable is like a room(named) into which you can easily insert or remove specific data. By using a variable, we can designate a specific value as a variable and use it as a parameter, or use it in a conditional statement, etc. And can easily maintain the code by adjusting the value of the variable. In p5.js, we can declare variables simply by adding 'let' in front of variable's name. Then, we can use the variable in the source code after initializing the declared variable with an initial value (usually 0).

* Example
```js
//sketch.js line 6 ~ 19
//Global variables that affects every source codes.
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
```

# Conditional Statements
* My Explanation
- Conditional Statements, such as 'If-else' statements or 'Switch-case' statements are the statements that can make codes to operate between certain conditions. For an example, 'If condition A is true, operate X. Or if condition A is false, operate Y'. Therefore, these conditional statements are essential for calculating the cases of various situations in the program. We can use conditional statements by using 'if-else' or 'switch-case' statements with various conditions(with logical operators sometimes) in it.

* Example
```js
//Example 1 (if-else)
//Player.js line 195 ~ 215
//Conditional statement that shows Player's health(heart) according to 'playerHp' variable's value.
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
//Example 2 (switch-case)
//GameManager.js line 43 ~ 56
//Conditional statement that decides Enemy's spawn point according to 'spawnPos' variable's value(random between 0 ~ 3).
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
```

# Loops
* My Explanation
- Loops, such as 'For' statements or 'While' statements are the statements that allows codes to be repeated under certain conditions. Of course, loop statements are used when code needs to be executed repeatedly. For example, when it is necessary to repeatedly call the position of another object or to manage each object in an array, the loop statement is essential for these situations. We can use loop statements by using 'for' or 'while' statements with various conditions(usually with Conditional statement indicating the number of loops) in it.

* Example
```js
//GameManager.js line 102 ~ 108
//Manage and detects each Enemy object's status(spawn, move, and die) in an Enemy1 array.
for(let mob = 0; mob < this.enemy1.length; mob++){
    this.enemy1[mob].update(this.player, this.player.bulletArray);
    if(this.enemy1[mob].enemyHp == 0){
        this.enemy1.splice(mob, 1);
        this.score += 100;
    }
}
```

# Functions
* My explanation
- Functions are the code that performs a certain operation on the program source code. They are very useful especially if we have the code that have to be used many times. We can use them by simply writing those codes into the function and by calling function inside of the main source code or classes. By calling a function, you don't have to write the same code over and over again. So using functions well is very important in programming.

* Example
```js
//Enemy1.js line 26 ~ 32
//Takes Player object as parameter and use current Player's position to set Enemy's direction and make Enemy to chase(move toward) Player.
EnemyMove(player)
    {
        this.dir = atan2(player.Vector.y - this.Vector.y, player.Vector.x - this.Vector.x);
        this.velocity.setAngle(this.dir);
        this.velocity.setLength(this.speed);
        this.Vector.addToTime(this.velocity);
    }
```

# Classes
* My explanation
- Classes are the templates that defines an object by tying variables and methods(functions) together when we divides the program into objects. By using classes, we can do object-oriented programming, which makes codes take their roles more clear and improves readability. So when an error occurs, we can quickly find out where it comes from and manage it easily. Variables can be created by declaring a class and declaring a constructor within the class as example shown below. Also, by using a 'function', we can create the functionality of a class, and we can use that class by assigning the class to a variable in another script.

* Example
```js
//Bullet.js line 6 ~ 28
//Takes start position and direction value as parameter and update function makes Bullet to keep moving in that direction per frame.
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
```

# Arrays
* My Explanation
- Arrays are the data structure in which multiple values ​​can be inserted consecutively according to numbered elements (memory spaces) in one variable. It is mainly used when it is necessary to use the same type of object or value in one array. Therefore, when there are many objects or values ​​of the same type, it is very useful because each object can be managed efficiently by grouping it into an array. We can declare an array by writing [] after the name of the variable we want to declare as an array. And you can put an object or value in an array by (usually)using a loop(repeat array.length times).

* Example
```js
//sketch.js line 8, 36 ~ 39
//Pushes player's animation image into 'playerAnim' array(global variable).
let playerAnim = [];
playerAnim.push(loadImage('assets/Player/Player_Walk_1.png'));
playerAnim.push(loadImage('assets/Player/Player_Walk_2.png'));
playerAnim.push(loadImage('assets/Player/Player_Walk_3.png'));
playerAnim.push(loadImage('assets/Player/Player_Walk_4.png'));

//Player.js line 82 ~ 97
//Takes 'playerAnim' array and display the images in the array over time.
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
```