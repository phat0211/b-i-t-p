function kiemTraChanLe(num) {
    return new Promise((resolve, reject) => {
        if (num % 2 === 0) {
            resolve(`Số ${num} là số chẵn!`);
        } else {
            reject(`Lỗi: Số ${num} là số lẻ!`);
        }
    });
  }
  
  
  let soCanKiemTra = 5;
  
  kiemTraChanLe(soCanKiemTra)
    .then(thongBao => {
        console.log(thongBao);
    })
    .catch(loi => {
        console.error(loi);
    })
    .finally(() => {
        console.log("Hoàn tất kiểm tra số.");
    });
  