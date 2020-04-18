var price_mascara = 80;
var price_lip = 65;
var price_foundation = 70;
var price_puff = 95;
var price_cream = 50;
var balance = 0;
var sum = 0;

/*---------------------------------------------------------------------------*/


function pushCon_c(){
  const modal1 = document.querySelector('#my-modal-c');
  window.balance = window.balance - window.price_cream;
  modal1.style.display = 'block';
  document.getElementById("showMeModal_c").innerHTML = "เงินทอน "+ window.balance + " บาท";
}

function pushCon_m(){
  const modal2 = document.querySelector('#my-modal-m');
  window.balance = window.balance - window.price_mascara;
  modal2.style.display = 'block';
  document.getElementById("showMeModal_m").innerHTML = "เงินทอน "+ window.balance + " บาท";
}

function pushCon_l(){
  const modal3 = document.querySelector('#my-modal-l');
  window.balance = window.balance - window.price_lip;
  modal3.style.display = 'block';
  document.getElementById("showMeModal_l").innerHTML = "เงินทอน "+ window.balance + " บาท";
}

function pushCon_f(){
  const modal4 = document.querySelector('#my-modal-f');
  window.balance = window.balance - window.price_foundation;
  modal4.style.display = 'block';
  document.getElementById("showMeModal_f").innerHTML = "เงินทอน "+ window.balance + " บาท";
}

function pushCon_p(){
  const modal5 = document.querySelector('#my-modal-p');
  window.balance = window.balance - window.price_puff;
  modal5.style.display = 'block';
  document.getElementById("showMeModal_p").innerHTML = "เงินทอน "+ window.balance + " บาท";
}

/*---------------------------------------------------------------------------*/

function comeBackHome(){
  window.location.assign("index.html");
}

/*---------------------------------------------------------------------------*/

function mascara_minus(paid){
  window.balance = window.balance + paid;
  document.getElementById("result_m").innerHTML = window.balance;
  OK_m();
}

function OK_m(){
  var pushB1 = document.getElementById("push_m");
  if(window.balance >= window.price_mascara){
    pushB1.style.visibility = "visible";
  }
}

/*-------------------------------------------------------------------------------*/

function lip_minus(paid){
  window.balance = window.balance + paid;
  document.getElementById("result_l").innerHTML = window.balance;
  OK_l();
}

function OK_l(){
  var pushB2 = document.getElementById("push_l");
  if(window.balance >= window.price_lip){
    pushB2.style.visibility = "visible";
  }
}



/*-------------------------------------------------------------------------------*/

function cream_minus(paid){

  window.balance = window.balance + paid;
  document.getElementById("result_s").innerHTML = window.balance;
  OK_c();
}

function OK_c(){
  var pushB3 = document.getElementById("push_c");
  if(window.balance >= window.price_cream){
    pushB3.style.visibility = "visible";
  }
}
/*-------------------------------------------------------------------------------*/

function foundation_minus(paid){
  window.balance = window.balance + paid;
  document.getElementById("result_f").innerHTML = window.balance;
  OK_f();
}

function OK_f(){
  var pushB4 = document.getElementById("push_f");
  if(window.balance >= window.price_foundation){
    pushB4.style.visibility = "visible";
  }
}

/*-------------------------------------------------------------------------------*/

function puff_minus(paid){
  window.balance = window.balance + paid;
  document.getElementById("result_p").innerHTML = window.balance;
  OK();
}

function OK(){
  var pushB5 = document.getElementById("push_p");
  if(window.balance >= window.price_puff){
    pushB5.style.visibility = "visible";
  }
}

/*-------------------------------------------------------------------------------*/

function aler_t(){
  alert("่ท่านยังไม่ได้ทำการเลือกสินค้า กรุณาเลือกสินค้าก่อนค่ะ");
}

function aler_tCancel(){
  alert("กรุณาเลือกสินค้าก่อนทำการยกเลิกค่ะ ขอบคุณค่ะ");
}

function blankk(){
  alert("***ว่างเปล่า***");
}
/*-------------------------------------------------------------------------------*/

function alertCancel_m(){
  if(window.balance >= window.price_mascara){
    alert("ไม่สามารถทำการยกเลิกคำสั่งซื้อได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ");
  }else {
    sum = 0;
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_l(){
  if(window.balance >= window.price_lip){
    alert("ไม่สามารถทำการยกเลิกคำสั่งซื้อได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_p(){
  if(window.balance >= window.price_puff){
    alert("ไม่สามารถทำการยกเลิกคำสั่งซื้อได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_c(){
  if(window.balance >= window.price_cream){
    alert("ไม่สามารถทำการยกเลิกคำสั่งซื้อได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_f(){
  if(window.balance >= window.price_foundation){
    alert("ไม่สามารถทำการยกเลิกคำสั่งซื้อได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}

/*-------------------------------------------------------------------------------*/


/*-----------------------------------------------------------------------------------*/

var p_pos = 59;
function puff_dfa(paid){
  var img = document.getElementById('cir_puff');
  if (paid == 99 && sum < 95) {
    img.style.left = "59px";
  }
  else if(sum < 95){
      if(paid === 5){
        sum = sum + paid;
        p_pos = p_pos + 61;
        img.style.left = p_pos + "px";

      }
      else if(paid === 10){
        sum = sum + paid;
        if(sum==100){
          p_pos = p_pos + 61;
        }
        else {
          p_pos = p_pos + 122;
        }

        img.style.left = p_pos + "px";
    	}
    }else{
      img.style.left = p_pos;
    }

}

/*-----------------------------------------------------------------------------------*/

var f_pos = 73.5;
function foun_dfa(paid){
  var img = document.getElementById('cir_foun');
  if (paid == 99 && sum < 70) {
    img.style.left = "73.5px";
  }
  else if(sum < 70){
      if(paid === 5){
        sum = sum + paid;
        f_pos = f_pos + 79.5;
        img.style.left = f_pos + "px";

      }
      else if(paid === 10){
        sum = sum + paid;
        if(sum == 75){
          f_pos = f_pos + 79.5;
        }
        else{
          f_pos = f_pos + 159;
        }
        
        img.style.left = f_pos + "px";
    	}
    }
    
    else{
      img.style.left = f_pos;
    }

}

/*-----------------------------------------------------------------------------------*/

var c_pos = 88;
function cream_dfa(paid){
  var img = document.getElementById('cir_cream');
  if (paid == 99 && sum < 50) {
    img.style.left = "88px";
  }
  else if(sum < 50){
      if(paid === 5){
        sum = sum + paid;
        c_pos = c_pos + 106.32;
        img.style.left = c_pos + "px";

      }
      else if(paid === 10){
        sum = sum + paid;
        if(sum == 55){
          c_pos = c_pos + 106.32;
        }
        else{
          c_pos = c_pos + 212.64;
        }
        img.style.left = c_pos + "px";
    	}
    }else{
      img.style.left = c_pos;
    }

}

/*-----------------------------------------------------------------------------------*/

var m_pos = 69.5;
var i = 0.05;
function mascara_dfa(paid){
  var img = document.getElementById('cir_mas');
  if (paid == 99 && sum < 80) {
    img.style.left = "68.5px";
  }
  else if(sum < 80){
      if(paid === 5){
        sum = sum + paid;
        m_pos = m_pos + 70 + i;
        i = i +0.05;
        img.style.left = m_pos + "px";

      }
      else if(paid === 10){
        sum = sum + paid;
        if(sum == 85){
          m_pos = m_pos + 70 + i;
        }
        else {
          i = i +0.05;
          m_pos = m_pos + 140 + i;
         }
        img.style.left = m_pos + "px";
        i = i +0.05;
    	}
    }else{
      img.style.left = m_pos;
      i = 0.05;
    }

}

/*-----------------------------------------------------------------------------------*/

var l_pos = 83;
var j = 0.04;
function lip_dfa(paid){
  var img = document.getElementById('cir_lip');

  if (paid == 99 && sum < 65) {
    img.style.left = "83px";
  }
  else if(sum < 65){
      if(paid === 5){
        sum = sum + paid;
        l_pos = l_pos + 84 + j;
        j = j +0.04;
        img.style.left = l_pos + "px";

      }
      else if(paid === 10){
        sum = sum + paid;
        if(sum == 70) {
          l_pos = l_pos + 84 + j;
        }
        else
        {
        j = j +0.04;
        l_pos = l_pos + 168 + j;
        }
        j = j +0.04;
        img.style.left = l_pos + "px";
    	}
    }

    
    else{
      img.style.left = l_pos;
      j = 0.04;
    }

}