class Game{
    constructor(){
      
    }
    getState(){
        var gState=database.ref('gameState');
        gState.on("value",function(data){
            gameState=data.val();
             
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
   async start(){
       if (gameState===0){
           player=new Player();
           var pCount=await database.ref('playerCount').once("value");
           if(pCount.exists()){
               playerCount=pCount.val();
               player.getCount();
           }
           form=new Form();
           form.display();
       }
   }
   play(){
       form.hide();
       textSize(40);
       text("Game started",120,100);
       Player.getPlayerInfo();
       if(allPlayers!==undefined){
           var displayPosition=130;
           for(var plr in allPlayers){
               if(plr==="player"+player.index){
                   fill("red");
               }
               else{
                    fill("black");
               }
               displayPosition+=20;
               textSize(20);
               text(allPlayers[plr].name+"="+allPlayers[plr].distance,120,displayPosition);
           }
       }
       if(keyDown(UP_ARROW) && player.index!==null){
       player.distance+=50;
       player.update();
       }
   }
}