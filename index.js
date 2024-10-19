const fs = require('fs');

// Baca file generich.txt
const filePath = 'generich.txt';

// Template records
let recordsTemplate = [
  '{ip1} growtopia1.com',
  '{ip2} growtopia2.com',
  '{ip1} www.growtopia1.com',
  '{ip2} www.growtopia2.com',
  '{ip1} RvLnd.here'
];

// IP yang akan digunakan
let ip1 = '152.42.218.138';
let ip2 = '152.42.193.129';

// Fungsi untuk merotasi IP
function rotateIP() {
  setInterval(() => {
    // Simpan versi sebelumnya dari records
    const currentRecords = recordsTemplate.map(record => record.replace(/{ip1}/g, ip1).replace(/{ip2}/g, ip2));

    // Ganti IP
    const temp = ip1; // Simpan ip1 sementara
    ip1 = ip2;       // Ganti ip1 dengan ip2
    ip2 = temp;      // Ganti ip2 dengan ip1 yang disimpan sementara

    // Update records dengan IP yang sesuai
    const updatedRecords = currentRecords.map(record => record.replace(/{ip1}/g, ip1).replace(/{ip2}/g, ip2));

    // Tulis kembali ke file generich.txt
    fs.writeFileSync(filePath, updatedRecords.join('\n'), 'utf-8');
    console.log(Updated IPs: ip1 is ${ip1}, ip2 is ${ip2});
  }, 5000); // Tunggu 5 detik
}

// Jalankan rotasi IP
rotateIP();
