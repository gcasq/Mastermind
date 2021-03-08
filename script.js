//personagem 1: arya
//personagem 2: sam
//personagem 3: ned
//personagem 4: daenerys
//personagem 5: jon
//personagem 6: tyrion
//preto: rgb(0,0,0)
//vermelho: rgb(255,0,0)
var i;var j;
var personagem;
var tentativaColuna=[-1,-1,-1,-1];
var qtdePersonagemColuna=[-1,-1,-1,-1,-1,-1];
var qtdePersonagemSenha=[0,0,0,0,0,0];
var senha=[0,0,0,0];

var ocu1 =  document.getElementById("oc1");
var ocu2 =  document.getElementById("oc2");
var ocu3 =  document.getElementById("oc3");
var ocu4 =  document.getElementById("oc4");

function iniciarJogo(){
    i=1;j=1;
    const oc1=Math.floor(Math.random() * 6) + 1;
    const oc2=Math.floor(Math.random() * 6) + 1;
    const oc3=Math.floor(Math.random() * 6) + 1;
    const oc4=Math.floor(Math.random() * 6) + 1; 
    senha=[oc1,oc2,oc3,oc4]; //parte responsável por gerar a senha
    document.getElementById("containerright").style.backgroundColor="rgb(0,0,0)";
    document.getElementById("oc1").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc2").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc3").style.borderColor="rgb(0,0,0)";
    document.getElementById("oc4").style.borderColor="rgb(0,0,0)";
    var o;
    for(o in senha){
        console.log(senha[o]);
        qtdePersonagemSenha[senha[o]-1]++;
    }
    document.getElementById("j11").innerHTML="x";
    entraloop(i,j);
    document.getElementById("iniciar").onclick = null;
}
function entraloop(i,j){
    document.getElementById("j"+i+j).innerHTML="x";
}
function next(){
    personagem = document.getElementById("seletor").value;
    if(personagem==-1){return;}
    document.getElementById("j"+i+j).innerHTML="";
    document.getElementById("j"+i+j).appendChild(intToGot(personagem));
    tentativaColuna[j-1]=personagem;
    if(j<4){j=j+1;}
    else{
        j=1;
        gerarDica();
        i=i+1;
    }
    entraloop(i,j);
}

function gerarDica(){
    var pretas=0;
    var vermelhas=0;
    qtdePersonagemColuna=[0,0,0,0,0,0];
    for(z in tentativaColuna){
        qtdePersonagemColuna[tentativaColuna[z]-1]++;
    }
    var y;
    for(y=0;y<6;y++){
        var aux1=qtdePersonagemSenha[y];
        while(qtdePersonagemColuna[y]>0 && aux1>0 ){
            pretas++;
            qtdePersonagemColuna[y]--;
            aux1--;
        }
    }

    for(y=0;y<4;y++){
        if(tentativaColuna[y]==senha[y]){
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
        ocu1.appendChild(intToGot(senha[0]));
        ocu2.appendChild(intToGot(senha[1]));
        ocu3.appendChild(intToGot(senha[2]));
        ocu4.appendChild(intToGot(senha[3]));
        document.getElementById("pause").onclick = null;
        document.getElementById("guia").innerHTML="Vitória! Você é um mestre de Game of Thrones! <br> Reinicie o jogo para jogar novamente.";
    }
    if(vitoria!=4&&i==8){
        document.getElementById("pause").onclick = null;
        document.getElementById("guia").innerHTML="Você perdeu. <br> Reinicie o jogo para tentar novamente.";
        ocu1.appendChild(intToGot(senha[0]));
        ocu2.appendChild(intToGot(senha[1]));
        ocu3.appendChild(intToGot(senha[2]));
        ocu4.appendChild(intToGot(senha[3]));
        document.getElementById("desistir").onclick = null;

    }
}

function desistir(){
    ocu1.appendChild(intToGot(senha[0]));
    ocu2.appendChild(intToGot(senha[1]));
    ocu3.appendChild(intToGot(senha[2]));
    ocu4.appendChild(intToGot(senha[3]));
    document.getElementById("pause").onclick = null;
    document.getElementById("pause").innerHTML="Você deve reiniciar o jogo antes de escolher os personagens.";
    document.getElementById("guia").innerHTML="Você desistiu.<br>Que pena! Tente novamente, clicando em Reiniciar Jogo.";
    document.getElementById("desistir").onclick = null;

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