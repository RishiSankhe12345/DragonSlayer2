class Dragon{
    constructor(){

    }
    display(){
        background('white');
        EnemyDragon = createSprite(displayWidth,550,20,20);
        EnemyDragonImage = loadImage('sprites/dragon.png');
        EnemyDragon.addImage(EnemyDragonImage);
        EnemyDragon.x=mouseX;
        EnemyDragon.scale=0.2;
    }
}