let veri = prompt('Lütfen Adınızı Girin')

let text = document.querySelector("#main_text")
text.innerHTML =veri


function showTime(){

let myClock= document.querySelector(".clock")
let tarih = new Date()

  let hour = tarih.getHours();
  let min = tarih.getMinutes();
  let saniye = tarih.getSeconds();
  let day = tarih.getDay();

     if(day==0){
         day="PAZAR"
     } else if (day==1){
         day="PAZARTESİ"
     }  else if (day==2){
        day="SALI"
    }   else if (day==3){
        day="ÇARŞAMBA"
    }  else if (day==4){
        day="PERŞEMBE"
    }  else if (day==5){
        day="CUMA"
    }  else if (day==6){
        day="CUMARTESİ"
    }

    myClock.innerHTML = `${hour}: ${min} : ${saniye} ${day} 
       tarihinde  <br> <strong>KODLUYORUZ  Frontend Web Development Patikasının </strong> <br>javascript 1. bölüm ödevini yaptım`
}

showTime();
setInterval(showTime,1000);
