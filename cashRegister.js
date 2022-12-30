// DIBANTU OLEH PAK SANDHIKA GALIH
// contoh,
// total harga = 10.5
// kembalian: 0.5
// hasil output: [['QUARTER', '0.5']]

function checkCashRegister(price, cash, cid) {
  // cari total kembalian
  let kembalian = cash * 100 - price * 100;

  // hitung jumlah uang di dalam mesin kasir (x100)
  let uangMesinCasir = cid.map((el) => el[1]).reduce((acc, curr) => acc + curr * 100, 0);

  // panduan satuan & pecahan (udh x100)
  const slotGuide = {
    PENNY: 1,
    NICKEL: 5,
    DIME: 10,
    QUARTER: 25,
    ONE: 100,
    FIVE: 500,
    TEN: 1000,
    TWENTY: 2000,
    "ONE HUNDRED": 10000,
  };

  // CONDITION,
  // 1. JIKA KEMBALIAN LEBIH BESAR DARIPADA uangMesinCasir (TIDAK CUKUP)
  // 2. TOTAL UANG KEMBALIAN SAMA DENGAN UANG MESIN KASIR
  // 3. JIKA KEMBALIAN LEBIH KECIL DARIPADA uangMesinCasir
  // Maka, kembalikan uang sesuai dengan pecahannya mengurutdari paling besar dulu

  if (kembalian > uangMesinCasir) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (kembalian === uangMesinCasir) {
    return { status: "CLOSED", change: cid };
  } else {
    // urutkan yg paling besar
    cid = cid.reverse();

    // siapkan uang kembalian
    let jumlahDikembalikan = [];

    // telusuri setiap guide di mesin casir
    cid.forEach((slot) => {
      // set kondisi awal dari slot baru
      let slotBaru = [slot[0], 0];

      // nama pecahan
      const satuan = slot[0];

      // jumlah uang dalam slot
      let pecahan = slot[1] * 100;

      // cek uang berdasarkan satuan, kurangi jika kembalian masih memenuhi
      while (kembalian >= slotGuide[satuan] && pecahan > 0) {
        kembalian -= slotGuide[satuan];
        pecahan -= slotGuide[satuan];
        slotBaru[1] += slotGuide[satuan] / 100;
      }

      if (slotBaru[1] > 0) {
        jumlahDikembalikan.push(slotBaru);
      }
    });

    // cek jika uang ada, tapi pecahan-nya tidak ada
    if (kembalian > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    }
    return { status: "OPEN", change: jumlahDikembalikan };
  }
}

console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// console.log(
//   checkCashRegister(30, 2000, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
