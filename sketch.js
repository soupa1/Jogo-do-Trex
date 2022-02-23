var player, playerAnim;
var borda;
var chao, chaoSpr;
var chaoInv;
var nuvem, nuvemSpr;

function preload(){
    playerAnim = loadAnimation("./Imagens/trex1.png","./Imagens/trex3.png", "./Imagens/trex4.png");
    chaoSpr = loadImage("./Imagens/ground2.png");
    nuvemSpr = loadImage("./Imagens/cloud.png");
}

function setup(){
    createCanvas(600,200)
    player = createSprite(50, 160, 20, 50);
    player.addAnimation("correndo",playerAnim);
    player.frameDelay = 4;
    player.scale = 0.5;
    borda = createEdgeSprites();
    chao = createSprite(200,180,400,20);
    chao.addImage("chao",chaoSpr);
    chao.x = chao.width/2;
    chaoInv = createSprite(200,190,400,10);
    chaoInv.visible = false;
    //var numero = Math.round(random(1,100));
    //console.log(numero);
}

function draw(){
    background("white");
    //console.log(frameCount);
    //console.log(player.y);
    chao.velocityX = -2;
    if(chao.x < 0){
        chao.x = chao.width/2;
    }
    if(keyDown("space")&&player.y >= 150){
    player.velocityY = -10;
    }
    player.velocityY += 1;
    player.collide(chaoInv);
    nuvens();
    drawSprites();
}

function nuvens(){
    if(frameCount % 60 === 0){
        nuvem = createSprite(600,100,40,10);
        nuvem.addImage(nuvemSpr);
        nuvem.velocityX = -3;
        nuvem.y = Math.round(random(1,150));
        nuvem.depth = player.depth;
        player.depth += 1;    
    }
}