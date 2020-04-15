var price_mascara = 80;
var price_lip = 65;
var price_foundation = 70;
var price_puff = 95;
var price_cream = 65;
var balance = 0;

function mascara_minus(paid){ 
  if(window.balance < window.price_mascara){
    window.balance = window.balance + paid;   
  }
  else if(window.balance > window.price_mascara){
    window.balance = window.balance - window.price_mascara;
    alert("ขอบคุณสำหรับการสั่งซื้อ กรุณารับเงินทอน: "+ window.balance)
  }
  else if(window.balance === window.price_mascara){
    alert("ชำระเงินเรียบร้อย ขอบคุณสำหรับการสั่งซื้อค่ะ")
  }
  document.getElementById("result_m").innerHTML = window.balance;
}

function lip_minus(paid){ 
  if(window.balance < window.price_lip){
    window.balance = window.balance + paid;   
  }
  else if(window.balance > window.price_lip){
    window.balance = window.balance - window.price_lip;
    alert("ขอบคุณสำหรับการสั่งซื้อ กรุณารับเงินทอน: "+ window.balance)
  }
  else if(window.balance === window.price_lip){
    alert("ชำระเงินเรียบร้อย ขอบคุณสำหรับการสั่งซื้อค่ะ")
  }
  document.getElementById("result_l").innerHTML = window.balance;
}

function cream_minus(paid){ 
  if(window.balance < window.price_cream){
    window.balance = window.balance + paid;   
  }
  else if(window.balance > window.price_cream){
    window.balance = window.balance - window.price_cream;
    alert("ขอบคุณสำหรับการสั่งซื้อ กรุณารับเงินทอน: "+ window.balance)
  }
  else if(window.balance === window.price_cream){
    alert("ชำระเงินเรียบร้อย ขอบคุณสำหรับการสั่งซื้อค่ะ")
  }
  document.getElementById("result_s").innerHTML = window.balance;
}

function foundation_minus(paid){ 
  if(window.balance < window.price_foundation){
    window.balance = window.balance + paid;   
  }
  else if(window.balance > window.price_foundation){
    window.balance = window.balance - window.price_foundation;
    alert("ขอบคุณสำหรับการสั่งซื้อ กรุณารับเงินทอน: "+ window.balance)
  }
  else if(window.balance === window.price_foundation){
    alert("ชำระเงินเรียบร้อย ขอบคุณสำหรับการสั่งซื้อค่ะ")
  }
  document.getElementById("result_f").innerHTML = window.balance;
}

function puff_minus(paid){ 
  if(window.balance < window.price_puff){
    window.balance = window.balance + paid;   
  }
  else if(window.balance > window.price_puff){
    window.balance = window.balance - window.price_puff;
    alert("ขอบคุณสำหรับการสั่งซื้อ กรุณารับเงินทอน: "+ window.balance + " บาท")
  }
  else if(window.balance === window.price_puff){
    alert("ชำระเงินเรียบร้อย ขอบคุณสำหรับการสั่งซื้อค่ะ")
  }
  document.getElementById("result_p").innerHTML = window.balance;
}

function aler_t(){
  alert("กรุณาเลือกสินค้าก่อนการชำระเงิน ขอบคุณค่ะ");
}

function aler_tCancel(){
  alert("กรุณาเลือกสินค้าก่อนทำการยกเลิกค่ะ ขอบคุณค่ะ");
}


function alertCancel(){
  alert("ทำการยกเลิกการสั่งซื้อ ระบบจะทำการคืนเงินให้ท่าน "+ window.balance + " บาทค่ะ");
}

