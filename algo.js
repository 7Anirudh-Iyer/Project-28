function hit(b1,b2){
    if(b1.x-b2.x<b1.width/2+b2.width/2||b2.x-b1.x<b1.width/2+b2.width/2||b1.y-b2.y<b1.height/2+b2.height/2||b2.y-b1.y<b1.height/2+b2.height/2){
        Matter.Body.setStatic(b2,false)
    }
}