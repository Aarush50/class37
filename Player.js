class Player{
    constructor(){
this.name=null;
this.index=null;
this.distance=0;
    }
    getCount(){
        var pCount=database.ref('playerCount');
        pCount.on("value",(data)=>{
            playerCount=data.val();
             
        })
    }
    updateCount(count){
        database.ref('/').update({
            playerCount:count
        })
    }
    update(){
      var playerno="players/player"+this.index;
      database.ref(playerno).set({
          name:this.name,
          distance:this.distance
      })
    }
   static getPlayerInfo(){
      var playerInfo=database.ref('players');
      playerInfo.on("value",(data)=>{
          allPlayers=data.val();
      })
    }
}