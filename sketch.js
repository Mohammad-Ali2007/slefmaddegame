var player;
var npc, npc1, npc2;
var rand;
var count = 0;

function setup(){
    createCanvas(displayWidth-30, displayHeight-20);

    player = new Player();
}

function draw(){
    background("black");
    // if(keyDown(LEFT_ARROW)){
    //     changePosition(-1,0);
    // }
    // else if(keyDown(RIGHT_ARROW)){
    //     changePosition(1,0);
    // }
   if(keyDown(UP_ARROW)){
        player.changePosition(-5);
    }
    player.display()
   // console.log(player.playerY)
    Npc()
   // console.log(frameCount)
}

function Npc(){
   // if(chatbox.visibility==false){
       if(count==0){
        if(frameCount%100===0){
            var x = random(200,displayWidth)
           // var y = random(player.y,-displayHeight*5)
            var y = random(100,displayHeight-200)
            rand = Math.round(random(1,3));
            count = 1;
        }
   // }   
    switch(rand){
        case 1 : npc = new NPC(x,y);
        npc.display()
        break;

        case 2 : npc = new NPC(x,y);
        npc1 = new NPC(x,y+70);
        npc.display();
        npc1.display();
        break;

        case 3 : npc = new NPC(x,y);
        npc1 = new NPC(x,y+70);
        npc2 = new NPC(x+40,y+35);
        npc.display();
        npc1.display();
        npc2.display();
        break;
    }
}
}
