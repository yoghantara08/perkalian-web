# perkalian-web
Versi web dari game perkalian sampai mendekati bilangan tak-hingga!

### Panduan instalasi
Game ini akan dirilis secara online dan dapat dimainkan dengan sambungan internet, sehingga tidak diperlukan instalasi untuk memainkannya. 

Apabila ingin memainkannya secara offline, unduh projek ini dengan mengklik tombol **Code** kemudian pilih **Download ZIP**. Setelah download berhasil, ekstrak file ZIP dan buka folder yang dihasilkan. Untuk membuka permainan, akses **index.html** dengan browser favorit Anda.

### Panduan untuk instruktor/pengajar
Ini adalah proyek game edukatif untuk mengenalkan perkalian dengan konsep penjumlahan yang matang. Sebagai catatan, menghafalkan tabel perkalian untuk bermain game ini tidak akan menyelesaikan soal seperti 11x7 (apabila menghafal hingga tabel perkalian 10). Game ini cocok untuk segala usia, terutama bagi yang ingin mempelajari konsep perkalian yang matang.

Game ini memberikan *clue* berupa catatan perkalian sebelumnya. Pemain dapat memanfaatkan ini sehingga cukup melakukan operasi penjumlahan pada soal berikutnya. Setiap soal memiliki pola di mana dibandingkan soal sebelumnya, salah satu bilangan (acak, antara sebelah kiri atau kanan tanda kali) akan ditambahkan dengan 1.

Sebagai contoh:

Soal sebelumnya: **7x5=25**

Soal saat ini: **7x6=...**

...atau...

Soal sebelumnya: **4x3=12**

Soal saat ini: **5x3=...**

Untuk menyelesaikan soal saat ini, pemain cukup menambahkan hasil sebelumnya dengan bilangan di sebelah kiri atau kanan (yang tidak bertambah 1). Sebagai contoh, jika pemain mengetahui bahwa sebelumnya **7x5=35**, maka hasil dari 8x5 adalah **7x5+5=40**. Contoh lainnya, jika pemain mengetahui sebelumnya adalah **8x2=16** maka hasil dari 9x2 adalah **8x2+2=18**.

Hal ini disebabkan oleh sifat perkalian itu sendiri yaitu penjumlahan berulang.

Perhatikan bahwa:

**3x4** sama saja dengan 3+3+3+3 (3-nya 4 kali) atau 4+4+4 (4-nya 3 kali)

Soal selanjutnya, misalnya **3x5** sama saja dengan 3+3+3+3+**3** (3-nya jadi 5 kali). Karena kita sudah tahu bahwa 3x4=3+3+3+3=12 maka kita cukup jumlahkan 12 dengan 3 terakhir, sehingga **3+3+3+3+3=12+3=15**.

Apabila soal selanjutnya adalah **4x4** maka itu sama saja dengan 4+4+4+**4** (4-nya jadi 4 kali). Karena kita sudah tahu bahwa bahwa 3x4=4+4+4=12 maka kita cukup jumlahkan 12 dengan 4 terakhir, sehingga **4+4+4+4=12+4=16**.

Dengan demikian, untuk soal dengan bilangan yang lebih besar, soal perkalian dapat diselesaikan lebih cepat ketimbang melakukan operasi perkalian bersusun panjang atau pendek sekalipun.
