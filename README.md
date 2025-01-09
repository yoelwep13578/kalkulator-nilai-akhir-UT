# Kalkulator Nilai Akhir UT

Website ini menyediakan kalkulator untuk menghitung perkiraan nilai akhir berdasarkan nilai di masa ujian dan nilai di masa tutorial. Tools ini dibuat dengan menggunakan HTML, CSS, dan Javascript secara sederhana untuk menghitung perkiraan nilai akhir yang akan diperoleh nantinya.

Nilai akhir yang dihasilkan oleh kalkulator ini bersifat perkiraan dan tidak bersifat final. Nilai akhir yang sebenarnya akan diumumkan oleh dosen pengampu mata kuliah. Berdoa saja agar nilai tinggi yang ditampilkan di kalkulator ini benar-benar menjadi kenyataan :)

## Predikat Nilai Minimum Setiap Kesulitan Mata Kuliah

| Nilai Minimum Mudah | Nilai Minimum Sedang | Nilai Minimum Sulit | Keterangan |
|---------------------|----------------------|---------------------|------------|
| 0                   | 0                    | 0                   | E          |
| 40                  | 35                   | 30                  | D          |
| 50                  | 45                   | 40                  | C-         |
| 55                  | 50                   | 45                  | C          |
| 60                  | 55                   | 50                  | B-         |
| 70                  | 65                   | 60                  | B          |
| 75                  | 70                   | 65                  | A-         |
| 80                  | 75                   | 70                  | A          |

Setelah melewati pengondisian ini, nilai ujian dan nilai akumulasi tutorial akan diolah berasarkan porsinya melalui rumus perhitungan ini.

![Rumus Nilai Ujian dengan Porsi Tutorial](./images/rumus/nilaiUjian-tutorial.svg)

![Rumus Nilai Tutorial dengan Porsi Tutorial](./images/rumus/nilaiTutorial-tutorial.svg)

Sebagai contoh, nilai ujiannya 60, nilai akumulasi tutorialnya 95, dengan jenis tutorial "Online/TUTON" (30% Tutorial & 70% Ujian), jadinya:

![Contoh Nilai Ujian dengan Porsi Tutorial](./images/rumus/nilaiUjian-tutorial-contoh.svg)

![Contoh Nilai Tutorial dengan Porsi Tutorial](./images/rumus/nilaiTutorial-tutorial-contoh.svg)

### Perkiraan Nilai Akhir

Setelah nilai ujian dan nilai tutorial diolah, maka akan dihasilkan nilai akhir yang bersifat perkiraan. Pada dasarnya, nilai akhir bisa diperoleh dengan menggunakan rumus perhitungan ini.

**Nilai/variabel yang diberi tanda "[ ]" adalah nilai yang terolah dengan porsi tutorial**

![Rumus Nilai Akhir](./images/rumus/nilaiAkhir.svg)

Tapi, ada pengecualian untuk kondisi tertentu. Pertama, ketika nilai ujian lebih/sama dengan nilai tutorial, nilai ujianlah yang diambil sebagai nilai akhirnya.

![Ketika Nilai Ujian >= Nilai Tutorial](./images/rumus/nilaiAkhir-gedeUjian.svg)

![Nilai Ujian >= Nilai Tutorial](./images/rumus/nilaiAkhir-gedeUjian1.svg)

Kedua, ketika nilai ujian kurang dari nilai tutorial, rumus sebelumnya akan dipakai.

![Ketika Nilai Ujian < Nilai Tutorial](./images/rumus/nilaiAkhir-kecilUjian.svg)

![Nilai Ujian < Nilai Tutorial](./images/rumus/nilaiAkhir-kecilUjian1.svg)

Ketiga, ketika nilai ujiannya kurang dari 30, nilai tutorial tidak bisa dipakai untuk menopang kekurangannya.

![Ketika Nilai Ujian < 30](./images/rumus/nilaiAkhir-kecil.svg)

![Nilai Ujian < 30](./images/rumus/nilaiAkhir-kecil1.svg)

Tahapan paling terakhir dari perhitungan ini adalah mencocokkan predikat nilai berdasarkan standar tingkat kesulitan mata kuliahnya, melalui tabel yang sudah ada di atas.


## End Note

&copy; 2025 - Kalkulator Nilai Akhir UT

[Traktir/Beliin Kopi](https://trakteer.id/yoeru-san/tip)  
[Lapor Masalah/Usul Update](https://github.com/yoelwep13578/kalkulator-nilai-akhir-UT/issues)

Developed by Yoeru - Last Update 8 Des 2025
