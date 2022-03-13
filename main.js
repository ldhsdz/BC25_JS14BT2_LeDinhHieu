//Bài 1
document.getElementById("btnTim").onclick = function () {
  var ngay = document.getElementById("txtNgay").value * 1;
  var thang = document.getElementById("txtThang").value * 1;
  var nam = document.getElementById("txtNam").value * 1;

  // Kiểm tra năm Nhuận
  var x;

  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      x = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      x = 30;
      break;
    case 2:
      if (nam % 400 == 0 || (nam % 4 == 0 && nam % 100 != 0)) x = 29;
      else x = 28;
      break;
    default:
      x = 0;
  }
  if (ngay < 0 || x == 0 || ngay > x) console.log("Ngày Nhập Sai");
  else {
    if (ngay == x) {
      if (thang == 12) {
        ngay = 1;
        thang = 1;
        nam++;
      } else {
        ngay = 1;
        thang++;
      }
    } else ngay++;
    kqTim = "Ngày tiếp theo là: " + ngay + "/" + thang + "/" + nam;
  }
  document.getElementById("txtTim").innerHTML = kqTim;
};

// Bài 2
document.getElementById("btnTimb2").onclick = function () {
  var thang = document.getElementById("txtThangb2").value * 1;
  var nam = document.getElementById("txtNamb2").value * 1;
  var y;
  switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      y = 31;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      y = 30;
      break;
    case 2:
      if (nam % 4 == 0) {
        y = 29;
      } else {
        y = 28;
      }
      break;
  }
  kqTimb2 = "Tháng " + thang + " Có " + y + " Ngày !";
  document.getElementById("txtTimb2").innerHTML = kqTimb2;
};

// Bài 3

document.getElementById("btnIn").onclick = function () {
  var soNguyen = document.getElementById("soNguyen").value;
  var tram = Math.floor(soNguyen/100);
  var chuc = Math.floor(soNguyen % 100/10);
  var dv = soNguyen % 10;
  switch (tram) {
    case 1:
      tram = "Mot Tram ";
      break;
    case 2:
        tram = "Hai Tram ";
      break;
    case 3:
        tram = "Ba Tram ";
      break;
    case 4:
        tram = "Bon Tram ";
      break;
    case 5:
        tram = "Nam Tram ";
      break;
    case 6:
        tram = "Sau Tram ";
      break;
    case 7:
        tram = "Bay Tram ";
      break;
    case 8:
        tram = "Tam Tram ";
      break;
    case 9:
        tram = "Chin Tram ";
      break;
  }
  switch (chuc) {
    case 0:
      if (dv == 0) {
        chuc = " ";
        break;
      } else {
        chuc = "Le ";
        break;
      }
    case 1:
        chuc = "Muoi ";
      break;
    case 2:
        chuc = "Hai Muoi ";
      break;
    case 3:
        chuc = "Ba Muoi ";
      break;
    case 4:
        chuc = "Bon Muoi ";
      break;
    case 5:
        chuc = "Nam Muoi ";
      break;
    case 6:
        chuc = "Sau Muoi ";
      break;
    case 7:
        chuc = "Bay Muoi ";
      break;
    case 8:
        chuc = "Tam Muoi ";
      break;
    case 9:
        chuc = "Chin Muoi ";
      break;
  }
  switch (dv) {
    case 5:
      if (chuc == 0) {
        chuc = "Lam ";
        break;
      } else {
        chuc = "Nam ";
        break;
      }
    case 1:
      (dv = "Mot") 
      break;
    case 2:
      (dv =  "Hai") 
      break;
    case 3:
      (dv = "Ba") 
      break;
    case 4:
      (dv = "Bon")
      break;
    case 6:
      (dv =  "Sau") 
      break;
    case 7:
      (dv = "Bay")
    case 8:
      (dv = "Tam") 
      break;
    case 9:
      (dv =  "Chin")
      break;
  }
  kqIn = "Cách Đọc Số Là : " + tram + chuc + dv;
  document.getElementById('txtIn').innerHTML = kqIn;
};


// Bài 4
document.getElementById("btnInSV").onclick = function () {
    var SV1 = document.getElementById('txtSV1').value*1;
    var SV2 = document.getElementById('txtSV2').value*1; 
    var SV3 = document.getElementById('txtSV3').value*1;
    var truong = document.getElementById('txtTruong').value*1;
    var xaNhat;
    if(truong-SV1 > truong - SV2 && truong-SV1 > truong - SV3){
        xaNhat = "SV1 Xa Trường Đại Học Nhất";
    }else if(truong - SV2 > truong -SV1 && truong - SV2 > truong - SV3){
        xaNhat = "SV2 Xa Trường Đại Học Nhất";
    }else if(truong - SV3 > truong - SV1 && truong - SV3 > truong - SV1){
        xaNhat = "SV3 Xa Trường Đại Học Nhất"
    }else{
        "Sai ở Đâu đó !!!"
    }
    document.getElementById('txtInSV').innerHTML = xaNhat;
};