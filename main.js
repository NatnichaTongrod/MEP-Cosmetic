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
    window.balance = 0;
  }
  document.getElementById("result_m").innerHTML = window.balance;
  OK_m();
}

function OK_m(){
  var btnOK1 = document.getElementById("confirm_m");
  if(window.balance >= window.price_mascara){
    btnOK1.disabled = false;
  } 
}

function okAlert_m(){
  var pushB1 = document.getElementById("push_m");
  pushB1.disabled = false;
  if(window.balance > window.price_mascara){
    window.balance = window.balance - window.price_mascara;
    alert("ชำระเงินเรียบร้อย รับเงินทอน "+ window.balance + " บาท \nกรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
    window.balance = 0;
  }else{
    alert("ชำระเงินเรียบร้อย กรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
  }
}

/*-------------------------------------------------------------------------------*/

function lip_minus(paid){
  if(window.balance < window.price_lip){
    window.balance = window.balance + paid;
  }
  document.getElementById("result_l").innerHTML = window.balance;
  OK_l();
}

function OK_l(){
  var btnOK2 = document.getElementById("confirm_l");
  if(window.balance >= window.price_lip){
    btnOK2.disabled = false;
  } 
}

function okAlert_l(){
  var pushB2 = document.getElementById("push_l");
  pushB2.disabled = false;
  if(window.balance > window.price_lip){
    window.balance = window.balance - window.price_lip;
    alert("ชำระเงินเรียบร้อย รับเงินทอน "+ window.balance + " บาท \nกรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
    window.balance = 0;
  }else{
    alert("ชำระเงินเรียบร้อย กรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
  }
}

/*-------------------------------------------------------------------------------*/

function cream_minus(paid){
  if(window.balance < window.price_cream){
    window.balance = window.balance + paid;
  }
  document.getElementById("result_s").innerHTML = window.balance;
  OK_c();
}

function OK_c(){
  var btnOK3 = document.getElementById("confirm_c");
  if(window.balance >= window.price_cream){
    btnOK3.disabled = false;
  } 
}

function okAlert_c(){
  var pushB3 = document.getElementById("push_c");
  pushB3.disabled = false;
  if(window.balance > window.price_cream){
    window.balance = window.balance - window.price_cream;
    alert("ชำระเงินเรียบร้อย รับเงินทอน "+ window.balance + " บาท \nกรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
    window.balance = 0;
  }else{
    alert("ชำระเงินเรียบร้อย กรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
  }
}

/*-------------------------------------------------------------------------------*/

function foundation_minus(paid){
  if(window.balance < window.price_foundation){
    window.balance = window.balance + paid;
  }
  document.getElementById("result_f").innerHTML = window.balance;
  OK_f();
}

function OK_f(){
  var btnOK4 = document.getElementById("confirm");
  if(window.balance >= window.price_foundation){
    btnOK4.disabled = false;
  } 
}

function okAlert_f(){
  var pushB4 = document.getElementById("push_f");
  pushB4.disabled = false;
  if(window.balance > window.price_foundation){
    window.balance = window.balance - window.price_foundation;
    alert("ชำระเงินเรียบร้อย รับเงินทอน "+ window.balance + " บาท \nกรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
    window.balance = 0;
  }else{
    alert("ชำระเงินเรียบร้อย กรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
  }
}

/*-------------------------------------------------------------------------------*/

function puff_minus(paid){
  if(window.balance < window.price_puff){
    window.balance = window.balance + paid;
  }
  document.getElementById("result_p").innerHTML = window.balance;
  OK();
}

function OK(){
  var btnOK5 = document.getElementById("confirm");
  if(window.balance >= window.price_puff){
    btnOK5.disabled = false;
  } 
}

function okAlert(){
  var pushB5 = document.getElementById("push");
  pushB5.disabled = false;
  document.getElementById("result_p").innerHTML = window.balance;
  if(window.balance > window.price_puff){
    window.balance = window.balance - window.price_puff;
    alert("ชำระเงินเรียบร้อย รับเงินทอน "+ window.balance + " บาท \nกรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
    window.balance = 0;
  }else{
    alert("ชำระเงินเรียบร้อย กรุณารับสินค้าที่ช่องด้านล่าง ขอบคุณค่ะ");
  }
}

/*-------------------------------------------------------------------------------*/

function aler_t(){
  alert("่ท่านยังไม่ได้ทำการเลือกสินค้า กรุณาเลือกสินค้าก่อนค่ะ");
}

function alert2(){
  alert("่**ว่างเปล่า**");
}

function aler_tCancel(){
  alert("กรุณาเลือกสินค้าก่อนทำการยกเลิกค่ะ ขอบคุณค่ะ");
}


function alertCancel(){
  var userconfirmation = confirm("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
  if(userconfirmation == true){
    window.location.assign("index.html");
  }
}

function pushCon(){
  var pushC = confirm("รับสินค้าเรียบร้อย ขอบคุณที่ใช้บริการ");
  if(pushC == true){
    window.location.assign("index.html");
  }
}
