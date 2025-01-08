document.getElementById('nilai-benar').addEventListener('input', calculateFinalScore);
document.getElementById('jumlah-soal').addEventListener('input', calculateFinalScore);
document.getElementById('nilai-akumulasi').addEventListener('input', calculateFinalScore);
document.getElementById('jenis-tutorial').addEventListener('change', calculateFinalScore);
document.getElementById('tingkat-kesulitan').addEventListener('change', calculateFinalScore);

function calculateFinalScore() {
    const nilaiBenar = parseInt(document.getElementById('nilai-benar').value) || 0;
    const jumlahSoal = parseInt(document.getElementById('jumlah-soal').value) || 0;
    const nilaiAkumulasi = parseInt(document.getElementById('nilai-akumulasi').value) || 0;
    const jenisTutorial = document.getElementById('jenis-tutorial').value;
    const tingkatKesulitan = document.getElementById('tingkat-kesulitan').value;

    let nilaiUjian = 0;
    if (jumlahSoal > 0) {
        nilaiUjian = Math.round((nilaiBenar / jumlahSoal) * 100);
        document.getElementById('nilai-ujian-sementara').innerText = 'Nilainya ' + nilaiUjian;
    } else {
        document.getElementById('nilai-ujian-sementara').innerText = '';
    }

    let persentaseNilaiUjian = 0;
    let persentaseNilaiTutorial = 0;
    let infoTunjanganNilai = '';

    switch (jenisTutorial) {
        case 'online':
            persentaseNilaiUjian = 70;
            persentaseNilaiTutorial = 30;
            infoTunjanganNilai = '30% Tutorial & 70% Ujian';
            break;
        case 'webinar':
        case 'tatap-muka':
            persentaseNilaiUjian = 50;
            persentaseNilaiTutorial = 50;
            infoTunjanganNilai = '50% Tutorial & 50% Ujian';
            break;
        case 'penugasan':
            persentaseNilaiUjian = 80;
            persentaseNilaiTutorial = 20;
            infoTunjanganNilai = '20% Tutorial & 80% Ujian';
            break;
    }

    document.getElementById('info-tunjangan-nilai').innerText = infoTunjanganNilai;

    let nilaiAkhir = 0;
    if (nilaiUjian < 30) {
        nilaiAkhir = nilaiUjian;
    } else if (nilaiUjian > nilaiAkumulasi) {
        nilaiAkhir = nilaiUjian;
    } else {
        nilaiAkhir = Math.round((nilaiUjian * persentaseNilaiUjian / 100) + (nilaiAkumulasi * persentaseNilaiTutorial / 100));
    }

    document.getElementById('nilai-akhir').innerText = nilaiAkhir;

    let keterangan = '';
    switch (tingkatKesulitan) {
        case 'mudah':
            keterangan = getKeterangan(nilaiAkhir, [80, 75, 70, 60, 55, 50, 40, 0]);
            break;
        case 'sedang':
            keterangan = getKeterangan(nilaiAkhir, [75, 70, 65, 55, 50, 45, 35, 0]);
            break;
        case 'sulit':
            keterangan = getKeterangan(nilaiAkhir, [70, 65, 60, 50, 45, 40, 30, 0]);
            break;
    }

    document.getElementById('keterangan').innerText = keterangan;

    let textPenyemangat = '';
    switch (keterangan) {
        case 'A':
        case 'A-':
            textPenyemangat = 'Well Played!!';
            break;
        case 'B':
        case 'B-':
            textPenyemangat = 'Good Job!';
            break;
        case 'C':
        case 'C-':
            textPenyemangat = 'Keep Improving!';
            break;
        case 'D':
            textPenyemangat = 'You can do better!';
            break;
        case 'E':
            textPenyemangat = 'Don\'t give up!';
            break;
    }

    document.getElementById('text-penyemangat').innerText = textPenyemangat;
}

function getKeterangan(nilai, thresholds) {
    if (nilai >= thresholds[0]) return 'A';
    if (nilai >= thresholds[1]) return 'A-';
    if (nilai >= thresholds[2]) return 'B';
    if (nilai >= thresholds[3]) return 'B-';
    if (nilai >= thresholds[4]) return 'C';
    if (nilai >= thresholds[5]) return 'C-';
    if (nilai >= thresholds[6]) return 'D';
    return 'E';
}