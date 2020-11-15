class Box{
   constructor(x,y,w,h){
       var options={
           isStatic : true
       }
       this.body= Bodies.rectangle(x,y,w,h,options);
       World.add(world,this.body);
       this.width=w;
       this.height=h;
   }
   display(){
       var pos = this.body.position;
       push();
       translate(pos.x,pos.y);
       rectMode(CENTER);
       fill("red");
       rect(0,0,this.width,this.height);
       pop();
   }


}
