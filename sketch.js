var player, playerAnim;
var borda;
var chao, chaoSpr;
var chaoInv;
var nuvem, nuvemSpr;
var obs1, obs2, obs3, obs4, obs5, obs6;
var pontuacao;


function preload(){
    playerAnim = loadAnimation("./Imagens/trex1.png","./Imagens/trex3.png", "./Imagens/trex4.png");
    chaoSpr = loadImage("./Imagens/ground2.png");
    nuvemSpr = loadImage("./Imagens/cloud.png");
    obs1 = loadImage("./Imagens/obstacle1.png");
    obs2 = loadImage("./Imagens/obstacle2.png");
    obs3 = loadImage("./Imagens/obstacle3.png");
    obs4 = loadImage("./Imagens/obstacle4.png");
    obs5 = loadImage("./Imagens/obstacle5.png");
    obs6 = loadImage("./Imagens/obstacle6.png");
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
    pontuacao = 0;
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
    obstaculos();
    drawSprites()
    text(pontuacao,500,50);
    pontuacao += Math.round(frameCount/60);
}

function nuvens(){
    if(frameCount % 60 === 0){
        nuvem = createSprite(600,100,40,10);
        nuvem.addImage(nuvemSpr);
        nuvem.velocityX = -3;
        nuvem.y = Math.round(random(1,150));
        nuvem.lifetime = 250;
        nuvem.depth = player.depth;
        player.depth += 1;    
    }
}


function obstaculos(){
    if(frameCount % 60 === 0){
        var obs = createSprite(600,165,10,40);
        obs.velocityX = -6;
        var numeroAlt = Math.round(random(1,6));
        switch(numeroAlt){
            case 1: obs.addImage(obs1);
            break;
            case 2: obs.addImage(obs2);
            break;
            case 3: obs.addImage(obs3);
            break;
            case 4: obs.addImage(obs4);
            break;
            case 5: obs.addImage(obs5);
            break;
            case 6: obs.addImage(obs6);
            break;
            default:
            break;
        }

        obs.scale = 0.5;
        obs.lifetime = 250;
    }
}