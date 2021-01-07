class Game {
constructor(){

}

getState(){
var gameStateRef = database.ref("gameState");
gameStateRef.on("value",function(data){
    gameState = data.val();
})

}

 update(state){
     database.ref("/").update({
         gameState: state
     })
}

async start(){
if (gameState === 0){
    player = new Player();
    var playerCountRef = await database.ref("playerCount").once("value");
    if (playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
    }
    form = new Form();
    form.display();
}
car1 = createSprite(100, 500);
car2 = createSprite(300,500);
car3 = createSprite(500,500);
car4 = createSprite(700,500);

car1.addImage(silverCar);
car2.addImage(redCar);
car3.addImage(blueCar);
car4.addImage(blackCar);

cars = [car1, car2 ,car3 ,car4];
}

play(){
    form.hide();
    textSize(29);
    text("Game Start",250,55)
    Player.getPlayerInfo();
    if(allPlayers !== undefined){
        background("purple");
        image(Track,0,-displayHeight*5,displayWidth , displayHeight*6);
        var index = 0;
        var x = 200;
        var y;
        for(var plr in allPlayers){
           index = index + 1;
           x = x + 200;
           y = displayHeight - allPlayers[plr].distance;
           cars[index - 1].x = x;
           cars[index - 1].y = y;
           if(index === player.index){
               strokeWeight(3.5);
                fill("aquamarine");
                ellipse(x,y,71,71);
               cars[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = cars[index - 1].y;
           }
        }
    }
    if(keyDown("UP_ARROW")&& player.index !== null){
        player.distance += 50;
        player.update(); 
    }
    if(player.distance >= 3700){
        gameState = 2;
    }


    drawSprites();
}

end(){
    console.log("Game over");

}

}