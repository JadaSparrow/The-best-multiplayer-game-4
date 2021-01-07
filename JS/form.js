class Form{
    constructor(){
       this.title = createElement("h1");
        this.input = createInput("name");
        this.button = createButton("play");
        this.greeting = createElement("h3");
        this.reset = createButton("Reset");
    }
hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
}
display(){
   
    this.title.html("The best multiplayer game !");
   this.title.position(width/2 - 75 ,40);
    this.input.position(width/2 - 75 ,120);
    this.button.position(width/2 - 75 ,200);
    this.reset.position(width/4,30);
    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playerCount++;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello !"+ player.name)
        this.greeting.position(width/2 - 75 ,250);
    });
    this.reset.mousePressed(()=>{
        player.updateCount(0);
        game.update(0);
    });
}



}