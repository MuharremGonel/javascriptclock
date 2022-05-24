let name = prompt("Lütfen Adınızı Giriniz");
let myname = document.querySelector('#myName');

let m = name.length
console.log(m)


if(m>0){
   myname.innerHTML = name;
}else{
   alert("İsim Girilmedi!!! İsminizi Giriniz!!");
   location.reload(1);
}

function showTime() {
    let myclock = document.querySelector('#myClock');
    let dte = new Date();
    let saat = dte.getHours();
    let dakika = dte.getMinutes();
    let saniye = dte.getSeconds();
    let gun = dte.getDay();
    setTimeout(showTime, 1000);

    if(gun==0){
        gun = "PAZAR";
    }else if(gun==1){
        gun = "PAZARTESİ";
    }else if(gun==2){
        gun = "SALI";
    }else if(gun==3){
        gun = "ÇARŞAMBA";
    }else if(gun==4){
        gun = "PERŞEMBE";
    }else if(gun==5){
        gun = "CUMA";
    }else if(gun==6){
        gun = "CUMARTESİ";
    }
    myclock.innerHTML = `${saat}.${dakika}.${saniye} ${gun}`

}
showTime();