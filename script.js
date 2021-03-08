//personagem 1: arya
//personagem 2: sam
//personagem 3: ned
//personagem 4: daenerys
//personagem 5: jon
//personagem 6: tyrion
//preto: rgb(0,0,0)
//vermelho: rgb(255,0,0)
var i;var j;
var cor;
var gridTentativa=[-1,-1,-1,-1];
var qtdecorTentativa=[-1,-1,-1,-1,-1,-1];
var qtdecorResp=[0,0,0,0,0,0];
var gridResp=[0,0,0,0];

var ocu1 =  document.getElementById("oc1");
var ocu2 =  document.getElementById("oc2");
var ocu3 =  document.getElementById("oc3");
var ocu4 =  document.getElementById("oc4");

function iniciojogo(){
    i=1;j=1;
    const oc1=Math.floor(Math.random() * 6) + 1;
    const oc2=Math.floor(Math.random() * 6) + 1;
    const oc3=Math.floor(Math.random() * 6) + 1;
    const oc4=Math.floor(Math.random() * 6) + 1; 
    gridResp=[oc1,oc2,oc3,oc4];
    document.getElementById("containerright").style.backgroundColor="rgb(0,0,0)";
    document.getElementById("oc1").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc2").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc3").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc4").style.borderColor="rgb(0,0,0)";
    var o;
    for(o in gridResp){
        console.log(gridResp[o]);
        qtdecorResp[gridResp[o]-1]++;
    }
    document.getElementById("j11").innerHTML="x";
    entraloop(i,j);
    document.getElementById("iniciar").onclick = null;
}
function entraloop(i,j){
    document.getElementById("j"+i+j).innerHTML="x";
}
function next(){
    cor = document.getElementById("seletor").value;
    if(cor==-1){return;}
    document.getElementById("j"+i+j).innerHTML="";
    document.getElementById("j"+i+j).appendChild(intToGot(cor));
    gridTentativa[j-1]=cor;
    if(j<4){j=j+1;}
    else{
        j=1;
        dica();
        i=i+1;
    }
    entraloop(i,j);
}

function dica(){
    var pretas=0;
    var vermelhas=0;
    qtdecorTentativa=[0,0,0,0,0,0];
    for(z in gridTentativa){
        qtdecorTentativa[gridTentativa[z]-1]++;
    }
    var y;
    for(y=0;y<6;y++){
        var aux1=qtdecorResp[y];
        while(qtdecorTentativa[y]>0 && aux1>0 ){
            pretas++;
            qtdecorTentativa[y]--;
            aux1--;
        }
    }

    for(y=0;y<4;y++){
        if(gridTentativa[y]==gridResp[y]){
            pretas--;
            vermelhas++;
        }
    }

    var p=1;
    var aux2=pretas+vermelhas;
    var vitoria = vermelhas;
    for(p=1;p<=aux2;p++){
        if(vermelhas>0){
            document.getElementById("d"+i+p).style.backgroundColor = "rgb(255,0,0)";
            vermelhas--;
            continue;
        }
        document.getElementById("d"+i+p).style.backgroundColor = "rgb(0,0,0)";
        pretas--;
    }
    if(vitoria==4){
        ocu1.appendChild(intToGot(gridResp[0]));
        ocu2.appendChild(intToGot(gridResp[1]));
        ocu3.appendChild(intToGot(gridResp[2]));
        ocu4.appendChild(intToGot(gridResp[3]));
        document.getElementById("pause").onclick = null;
        document.getElementById("guia").innerHTML="Vitória! Você é um mestre de Game of Thrones! <br> Reinicie o jogo para jogar novamente.";
    }
}

function desistir(){
    ocu1.appendChild(intToGot(gridResp[0]));
    ocu2.appendChild(intToGot(gridResp[1]));
    ocu3.appendChild(intToGot(gridResp[2]));
    ocu4.appendChild(intToGot(gridResp[3]));
    document.getElementById("pause").onclick = null;
    document.getElementById("pause").innerHTML="Você deve reiniciar o jogo antes de escolher os personagens.";
    document.getElementById("guia").innerHTML="Você desistiu.<br>Que pena! Tente novamente, clicando em Reiniciar Jogo.";
}

function intToGot(x) {
    if(x==1){
        var arya = document.createElement("img");
        arya.src = "./arya_stark.jpeg";
        return arya;
    }
    if(x==2){
        var sam = document.createElement("img");
        sam.src = "./samwell_tarly.jpeg";
        return sam;
    }
    if(x==3){
        var ned = document.createElement("img");
        ned.src = "./ned_stark.jpeg";
        return ned;
    }
    if(x==4){
        var dany = document.createElement("img");
        dany.src = "./dany.jpeg";
        return dany;
    }
    if(x==5){
        var jon = document.createElement("img");
        jon.src = "./jon.jpeg";
        return jon;
    }
    if(x==6){
        var tyrion = document.createElement("img");
        tyrion.src = "./tyrion.jpeg";
        return tyrion;
    }
}