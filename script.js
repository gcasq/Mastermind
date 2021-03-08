//cor1: azul rgb(0,0,255)
//cor2: amarelo rgb(255,255,0)
//cor3: verde rgb(0,128,0)
//cor4: rosa rgb(255,0,127)
//cor5: roxo rgb(128,0,128)
//cor6: azul-claro rgb(0,191,255)
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
    ocu1.appendChild(intToGot(oc1));
    console.log(intToGot(oc1));
  //  document.getElementById("oc1").style.backgroundColor = intToRgb(oc1);
 //   document.getElementById("oc1").style.backgroundImage = "img";

    const oc2=Math.floor(Math.random() * 6) + 1;
    ocu2.appendChild(intToGot(oc2));
    console.log(intToGot(oc2));

   // document.getElementById("oc2").style.backgroundColor = intToRgb(oc2);
    const oc3=Math.floor(Math.random() * 6) + 1;
    ocu3.appendChild(intToGot(oc3));
    console.log(intToGot(oc3));

 //  document.getElementById("oc3").style.backgroundColor = intToRgb(oc3);
    const oc4=Math.floor(Math.random() * 6) + 1; 
    ocu4.appendChild(intToGot(oc4));
    console.log(intToGot(oc4));

  //  document.getElementById("oc4").style.backgroundColor = intToRgb(oc4);
    gridResp=[oc1,oc2,oc3,oc4];
    console.log(gridResp);
    var o;
    for(o in gridResp){
        console.log(gridResp[o]);
        qtdecorResp[gridResp[o]-1]++;
    }
    document.getElementById("j11").innerHTML="x";
    entraloop(i,j);

}


function entraloop(i,j){
    
    document.getElementById("j"+i+j).innerHTML="x";
    
}
function next(){

    cor = document.getElementById("seletor").value;
    if(cor==-1){return;}
    document.getElementById("j"+i+j).innerHTML="";

 //   document.getElementById("j"+i+j).style.backgroundColor = intToRgb(cor);
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
        alert("Vitória!!!!");
    }
}


function intToRgb(x) {
    if(x==1){return "rgb(0,0,255)";}
    if(x==2){return "rgb(255,255,0)";}
    if(x==3){return "rgb(0,128,0)";}
    if(x==4){return "rgb(255,0,127)";}
    if(x==5){return "rgb(128,0,128)";}
    if(x==6){return "rgb(0,191,255)";}
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