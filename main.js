var price_mascara = 80;
var price_lip = 65;
var price_foundation = 70;
var price_puff = 95;
var price_cream = 50;
var balance = 0;

function mascara_minus(paid){
  window.balance = window.balance + paid;
  document.getElementById("result_m").innerHTML = window.balance;
  OK_m();
}

function OK_m(){
  var pushB1 = document.getElementById("push_m");
  var cancel1 = document.getElementById("cancelButton");

  if(window.balance >= window.price_mascara){
    pushB1.style.visibility = "visible";
    cancel1.disabled = true;
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
  var cancel1 = document.getElementById("cancelButton");

  if(window.balance >= window.price_lip){
    pushB2.style.visibility = "visible";
    cancel1.disabled = true;
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
  var cancel1 = document.getElementById("cancelButton");

  if(window.balance >= window.price_cream){
    pushB3.style.visibility = "visible";
    cancel1.disabled = true;
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
  var cancel1 = document.getElementById("cancelButton");

  if(window.balance >= window.price_foundation){
    pushB4.style.visibility = "visible";
    cancel1.disabled = true;
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
  var cancel1 = document.getElementById("cancelButton");

  if(window.balance >= window.price_puff){
    pushB5.style.visibility = "visible";
    cancel1.disabled = true;
  } 
}

/*-------------------------------------------------------------------------------*/

function aler_t(){
  alert("่ท่านยังไม่ได้ทำการเลือกสินค้า กรุณาเลือกสินค้าก่อนค่ะ");
}

function aler_tCancel(){
  alert("กรุณาเลือกสินค้าก่อนทำการยกเลิกค่ะ ขอบคุณค่ะ");
}

/*-------------------------------------------------------------------------------*/

function alertCancel_m(){
  if(window.balance >= window.price_mascara){
    alert("ไม่สามารถทำการยกเลิกได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ "+ window.balance +" บาท");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_l(){
  if(window.balance >= window.price_lip){
    alert("ไม่สามารถทำการยกเลิกได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ "+ window.balance +" บาท");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_p(){
  if(window.balance >= window.price_puff){
    alert("ไม่สามารถทำการยกเลิกได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ "+ window.balance +" บาท");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_c(){
  if(window.balance >= window.price_cream){
    alert("ไม่สามารถทำการยกเลิกได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ "+ window.balance +" บาท");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}
function alertCancel_f(){
  if(window.balance >= window.price_foundation){
    alert("ไม่สามารถทำการยกเลิกได้ เนื่องจากชำระเงินครบแล้ว\nกรุณารับสินค้าที่ช่องรับของ "+ window.balance +" บาท");
  }else {
    alert("ทำการยกเลิกคำสั่งซื้อ ระบบจะคืนเงินให้ท่าน "+ window.balance +" บาท");
    window.location.assign("index.html");
  }
}

/*-------------------------------------------------------------------------------*/

function pushCon_m(){
  window.balance = window.balance - window.price_mascara;
  alert("รับสินค้าเรียบร้อยแล้ว เงินทอน "+ window.balance + " บาท \nขอบคุณที่ใช้บริการ");
  window.location.assign("index.html");
}

function pushCon_l(){
  window.balance = window.balance - window.price_lip;
  alert("รับสินค้าเรียบร้อยแล้ว เงินทอน "+ window.balance + " บาท \nขอบคุณที่ใช้บริการ");
  window.location.assign("index.html");
}

function pushCon_c(){
  window.balance = window.balance - window.price_cream;
  alert("รับสินค้าเรียบร้อยแล้ว เงินทอน "+ window.balance + " บาท \nขอบคุณที่ใช้บริการ");
  window.location.assign("index.html");
}

function pushCon_f(){
  window.balance = window.balance - window.price_foundation;
  alert("รับสินค้าเรียบร้อยแล้ว เงินทอน "+ window.balance + " บาท \nขอบคุณที่ใช้บริการ");
  window.location.assign("index.html");
}

function pushCon_p(){
  window.balance = window.balance - window.price_puff;
  alert("รับสินค้าเรียบร้อยแล้ว เงินทอน "+ window.balance + " บาท \nขอบคุณที่ใช้บริการ");
  window.location.assign("index.html");
}
