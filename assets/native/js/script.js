/* Script notification index.html */
$(document).ready(function () {
    $('.notif__close').click(function (e) {
        e.preventDefault();
        let parent = $(this).parent('.notif');
        parent.fadeOut("slow", function () {
            $(this).remove();
        });
    });
});
/* End Script notification index.html */

/* Daftar Artikel */
const article = [{
        title: "5 Manfaat Buah-buahan: Penting Dikonsumsi Tiap Hari",
        author: "Diar J R",
        publishedDate: "July, 26 2019",
        image: "./assets/img/1.webp",
        url: "post1",
        content: {
            p1: "Konsumsi buah-buahan sangat penting untuk dilakukan guna mendapatkan tubuh yang sehat. Berdasarkan temuan World Health Organization (WHO), terdapat 2,8% atau sebanyak 1,7 juta orang yang mengalami kematian akibat jarang mengonsumsi buah ataupun sayur.",
            p2: "1. Mencegah Penyakit Serius",
            p3: "Mengonsumsi buah setiap harinya dipercaya mampu mencegah kamu terjangkit dari berbagai penyakit serius, Toppers. WHO menyebutkan bahwa penyakit jantung koroner (ischaemic heart disease) menjadi salah satu penyebab tingginya kematian di Indonesia. Maka dari itu, untuk mencegah hal itu terjadi, cobalah untuk mengonsumsi buah secara rutin, Toppers. Sebab, ada penelitian yang menemukan bahwa dengan mengonsumsi buah secara rutin dapat mengurangi terkena risiko penyakit jantung, diabetes tipe 2, obesitas, stroke, kanker, dan sebagainya.",
            p4: "2. Memenuhi Asupan Vitamin, Nutrisi dan Mineral",
            p5: "Untuk menjaga tubuh tetap sehat, Toppers perlu memenuhi kebutuhan nutrisi, vitamin, dan mineral. Kebutuhan ini bisa kamu dapatkan dengan mengonsumsi berbagai jenis buah. Hampir seluruh alfabet vitamin dapat ditemukan di berbagai buah, lho, Toppers. Berbagai vitamin dan mineral yang ada di buah ini berfungsi untuk menjaga metabolisme tubuh dan memerangi senyawa-senyawa hasil oksidasi, seperti radikal bebas yang tidak baik untuk tubuh.",
            p6: "3. Memerangi Radikal Bebas",
            p7: "Mungkin sebagian dari Toppers masih belum mengerti dengan istilah radikal bebas. Nah, radikal bebas adalah sel-sel tubuh yang telah rusak sehingga berpotensi mengakibatkan berbagai akibat negatif. Jika tidak ditangani dengan baik, radikal bebas ini dapat menyebabkan stres oksidatif, stroke, alzheimer, hingga terburuknya adalah kanker. Untuk memerangi radikal bebas ini dibutuhkan zat antioksidan, Toppers. Perlu Toppers ketahui pula bahwa hampir semua buah memiliki zat antioksidan. Dengan mengonsumsi buah secara rutin diharapkan tubuh menerima zat antioksidan, sehingga mampu memerangi radikal bebas ini.",
            p8: "4. Menjaga Tubuh Tetap Bugar",
            p9: "Menurut Badan Kesehatan Dunia, seseorang memerlukan asupan serat sebesar 25-29 g setiap harinya untuk mendapatkan tubuh yang sehat dan bugar. Di samping itu, serat juga baik untuk kesehatan usus, mulai dari mencegah masalah sembelit, wasir, dan divertikulosis. Nah, asupan serat ini bisa kamu dapatkan di berbagai buah, Toppers!",
            p10: "5. Menjaga Kesehatan Tulang",
            p11: "Berbagai kandungan vitamin C dan vitamin D dalam buah dipercaya dapat mempertahankan massa otot sehingga mampu menjaga kesehatan tulangmu, Toppers. Ini juga dibuktikan dari studi oleh Florida State University pada 2011 yang menunjukkan bahwa dengan mengonsumsi buah plum kering dapat mencegah osteoporosis. Tak hanya itu, ada juga studi oleh University of East Anglia yang menemukan bahwa alpukat baik untuk membentuk tulang yang lebih kuat.",
            p12: "Mengonsumsi buah memberikan segudang manfaat bagi kesehatan. Terlebih lagi, dapat mengurangi risiko beberapa penyakit kronis seperti kanker. Oleh karena itu, mulai sekarang, diharapkan Toppers dapat lebih banyak mengonsumsi buah, ya! Dengan demikian, asupan nutrisi dan vitamin yang dibutuhkan oleh tubuh juga dapat terpenuhi dengan baik."
        }
    },
    {
        title: "5 Manfaat Olahraga yang Bisa Didapatkan Tubuh",
        author: "Diar J R",
        publishedDate: "July, 26 2021",
        image: "./assets/img/2.jpg",
        url: "post2",
        content: {
            p1: "Manfaat olahraga dapat diibaratkan sebagai \"keajaiban\" bagi kesehatan tubuh, apalagi jika rutin dilakukan. Tak hanya dapat membantu menurunkan berat badan, olahraga juga akan menghindarkan Anda dari berbagai penyakit berbahaya, membuat mental lebih sehat, dan bahkan meningkatkan gairah seksual.",
            p2: "1. Menjaga berat badan",
            p3: "Manfaat olahraga yang pertama adalah menjaga berat badan yang ideal. Ketahuilah, berat badan berlebih atau obesitas mampu mengundang berbagai macam penyakit datang. Dengan melakukan olahraga secara teratur, Anda bisa menjaga berat badan sehingga penyakit ogah datang. Manfaat olahraga yang satu ini dapat dirasakan karena saat otot bergerak, kalori akan terbakar. Apalagi kalau Anda melakukan olahraga yang memiliki intensitas tinggi, seperti lari. Tidak punya waktu untuk berolahraga di gym? Jangan khawatir, berlari atau joging di sekitar rumah saja sudah dianggap cukup, asal dilakukan secara konsisten.",
            p4: "2. Mencegah datangnya penyakit mematikan",
            p5: "Olahraga dapat dapat menurunkan risiko munculnya berbagai penyakit berbahaya, seperti: Penyakit jantung, Stroke, Tekanan darah tinggi, Diabetes tipe 2, Depresi, Gangguan kecemasan, Berbagai macam jenis kanker, Nyeri sendi. Tidak peduli berat badan Anda sekarang, olahraga secara rutin juga akan menurunkan kolesterol jahat (LDL) dan meningkatkan kadar kolesterol baik (HDL). Sebab, melakukan olahraga bisa menjaga lancarnya aliran darah, sehingga penyakit berbahaya seperti penyakit jantung dapat dihindari.",
            p6: "3. Memperkuat tulang dan otot",
            p7: "Manfaat olahraga selanjutnya adalah memperkuat tulang dan otot. Bagi Anda yang masih muda, mungkin masalah tulang dan otot bukanlah kondisi utama yang harus dikhawatirkan. Namun bagi orang lanjut usia, masalah tulang dan otot adalah mimpi buruk yang harus dihindari. Jangan sampai terlambat. Mulailah berolahraga walaupun usia Anda masih muda, untuk mencegah kelemahan tulang dan otot di usia tua. Ketahuilah, berolahraga juga bisa menjaga kepadatan tulang dan kekuatan otot, sehingga di usia tua, nyeri tulang dan otot dapat dihindari.",
            p8: "4. Meningkatkan suasana hati",
            p9: "Suasana hati yang “uring-uringan” bisa mengganggu aktivitas sehari-hari. Namun tenang saja, berolahragalah secara rutin, maka suasana hati Anda bisa diperbaiki. Jika tidak ada waktu untuk angkat beban di gym, berlatihlah di rumah dan lakukan joging bersama teman atau keluarga. Sambil menghirup udara segar, aktivitas fisik ini bisa merangsang berbagai hormon kebahagiaan (serotonin) di dalam otak, sehingga suasana hati pun terobati. Lebih dari itu, manfaat olahraga juga bisa meningkatkan rasa percaya diri, karena penampilan fisik tubuh menjadi lebih baik.",
            p10: "5. Meningkatkan energi",
            p11: "Manfaat olahraga ini pastinya dibutuhkan oleh mereka yang seringkali merasa lesu. Ya, meningkatkan energi adalah salah satu manfaat olahraga yang tentunya dibutuhkan tubuh. Sebab, oksigen akan “terdistribusi” dengan baik ke dalam jaringan tubuh, sehingga jantung akan bekerja lebih baik. Saat kesehatan jantung dan paru-paru terjaga, maka energi pun bertambah!",
            p12: "Manfaat olahraga tentu sangat menguntungkan bagi kesehatan tubuh. Jika Anda sulit untuk konsisten dalam berolahraga, cobalah mengajak teman atau keluarga, mulai dari olahraga yang ringan seperti naik-turun tangga yang bisa dilakukan minimal 3 kali dalam seminggu. Agar tidak bosan, Anda juga bisa mendengarkan musik sambil berolahraga. Ingat, tidak ada waktu terlambat bagi Anda untuk berolahraga. Jangan jadikan usia ataupun berat badan sebagai alasan untuk tidak olahraga."
        }
    },
    {
        title: "5 Manfaat Jalan Kaki Setiap Hari bagi Kesehatan",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/3.jpg",
        url: "post3",
        content: {
            p1: "Tahukah Anda? Jalan kaki selama 30-60 menit tiap hari bisa berdampak baik bagi tubuh dan pikiran. Nyatanya, manfaat jalan kaki benar-benar ada, lho! Mulai sekarang, kenakan alas kaki nyaman favorit Anda dan sering-seringlah jalan kaki! Ini dia beberapa manfaat sering olahraga jalan kaki yang bisa didapatkan:",
            p2: "1. Membantu Penurunan Berat Badan",
            p3: "Dengan berjalan kaki, Anda dapat menurunkan berat badan dan risiko obesitas. Berjalan kaki yang kurang dari 5.000 langkah setiap harinya menandakan gaya hidup sedenter. Sedangkan, dengan berjalan kaki lebih dari 10.000 langkah, dapat meningkatkan pembakaran lemak yang akhirnya bisa menurunkan berat badan. Diperkirakan, dengan berjalan kaki setidaknya 10.000 langkah, Anda bisa menurunkan berat badan hingga 2 kg!",
            p4: "2. Meningkatkan Kualitas Tidur",
            p5: "Rutin jalan kaki setiap hari bisa meningkatkan kualitas tidur Anda, lho. Penelitian menunjukan, bila konsisten berjalan kaki setiap hari setidaknya 10.000 langkah, jam tidur dan kualitas tidur akan lebih baik. Selain itu, peneliti dari Universitas South Australia mengemukakan adanya hubungan dua arah. Bila istirahatnya berkualitas, seseorang akan cenderung lebih aktif secara fisik. Kalau sudah aktif secara fisik, akan cenderung merasa capek dan tidur pun lebih nyenyak.",
            p6: "3. Menurunkan Tekanan Darah",
            p7: "Selain berat badan bisa turun, rutin jalan kaki juga sangat baik bagi orang yang tekanan darahnya tinggi. Kegiatan ini dapat mengurangi tekanan darah sistolik hingga sekitar 3,8 mmHg dan tekanan darah diastolik 0,3 mmHg. Bila diiringi gaya hidup sehat dan obat-obatan yang tepat, tekanan darah tinggi bisa semakin mudah diatasi.",
            p8: "4. Dapat Hidup Lebih Lama",
            p9: "Studi oleh Harvard dalam jurnal JAMA Internal Medicine pada Mei 2019, meneliti 16.000 partisipan wanita dengan usia lebih tua. Hasilnya, mereka yang berjalan kaki 4.400 langkah per hari memiliki angka kematian yang secara signifikan lebih rendah dibanding wanita yang secara fisik tidak aktif. Manfaat lebih terasa bila jalan kaki lebih dari 7.500 langkah. Studi dalam jurnal Medical Journal of Australia menemukan, orang yang jalan kaki hingga 8.800 langkah per hari, rata-rata menghabiskan waktu lebih sedikit di rumah sakit hingga 30 persen, dibanding orang dengan jumlah langkah kaki setengahnya.",
            p10: "5. Meningkatkan Kesehatan Jantung",
            p11: "Kesehatan jantung secara keseluruhan juga ikut terpengaruh bila konsisten jalan kaki. Berjalan kaki dapat mengurangi risiko penyakit kardiovaskular hingga 31 persen, bahkan mengurangi risiko kematian sebesar 32 persen. Manfaat ini sungguh baik, bahkan bila Anda sekadar berjalan santai dengan kecepatan sekitar 3,2 km per jam. Orang-orang yang berjalan lebih jauh, berjalan dengan kecepatan lebih cepat, atau keduanya, menikmati perlindungan terhadap sakit jantung yang lebih besar.",
            p12: "Jalan kaki adalah bentuk olahraga yang paling sederhana. Jadi, sebisa mungkin mulai dan perbanyaklah jalan kaki setiap hari. Lakukan dengan konsisten agar menjadi kebiasaan. Tenang, tak perlu sampai 10.000 langkah, kok! Sesuai dengan poin nomor lima, target yang dianjurkan adalah 7.500 langkah. Kalau bisa lebih dari itu, memang akan lebih bagus lagi. Tapi, jangan memaksakan bila sudah lelah. Baca selengkapnya di sini. Kalau kurang dari itu, Anda tetap bisa mendapatkan manfaat sehat dari jalan kaki setiap hari. Jangan lupa, pastikan sepatu atau sandal yang dikenakan nyaman dan mendukung aktivitas jalan kaki. Mari mulai terapkan hidup sehat dengan kebiasaan simple seperti jalan kaki. Selain sangat bermanfaat bagi kesehatan, jalan kaki ke tempat tujuan juga bisa bantu mengurangi volume kendaraan biar jalanan nggak macet!"
        }
    },
    {
        title: "6 Manfaat Gemar Makan Sayur Setiap Hari",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/4.jpg",
        url: "post4",
        content: {
            p1: "Mengkonsumsi sayuran setiap hari sangat dianjurkan untuk menunjang pola hidup sehat, karena sayur mengandung banyak nutrisi dan serat alami yang dibutuhkan tubuh untuk menunjang aktivitas sehari-hari agar tetap vit, dan terhindar berbagai macam penyakit berbahaya. Selain untuk kesehatan gemar makan sayuran juga bermanfaat bagi kecantikan  kulit dan membantu menurunkan berat badan agar tetap ideal. Untuk mendukung pola hidup sehat selain makan sayuran dianjurkan untuk olah raga secara rutin, tidak merokok dan menghindari makanan berlemak.",
            p2: "1. Menyehatkan pencernaan.",
            p3: "Sayuran dikenal memiliki kandungan yang kaya akan serat alami yang berfungsi untuk menyehatkan pencernaan, mempermudah proses pembuangan kotoran sehingga membantu metabolisme tubuh yang membantu penyerapan nutrisi lebih maksimal.",
            p4: "2. Membantu menangkal radikal bebas.",
            p5: "Kandungan berbagai nutrisi dan manfaat antioksidan yang tinggi dalam sayuran mampu menangkal bahaya  radikal bebas yang akan masuk kedalam tubuh, sehingga daya  tubuh menjadi lebih kuat dan tidak mudah terserang penyakit.",
            p6: "3. Mencegah penyakit kanker.",
            p7: "Penyakit kanker  merupakan penyakit yang ditakuti, karena banyak nya penderita kanker yang tidak terselamatkan, sel-sel kanker menggerogoti penderitanya dan mudah menyebar ke organ tubuh lain. Sebetulnya penyakit kanker dapat dicegah dengan menjaga pola hidup sehat,  terutama menjaga pola makan, dengan banyak mengkonsumsi sayuran yang mengandung banyak nutrisi seperti terong ungu, kemangi, kubis, bawang putih, kunyit, tomat, bayam, wortel, jahe, paprika, manfaat sayur-sayuran tersebut dapat mencegah sel-sel  kanker,  agar terhindar dari penyakit menakutkan tersebut.",
            p8: "4. Mencegah penyakit jantung.",
            p9: "Sayuran hijau sangat bermanfaat untuk kesehatan jantung anda, kandungan nutrisi  seperti magnesium,  vitamin B, folat yang akan menjaga jantung tetap sehat.",
            p10: "5. Menurunkan tekanan darah.",
            p11: "Tekanan darah tinggi bisa membahayakan kesehatan seperti stroke, dengan mengkonsumsi sayuran yang mengandung magnesium dapat membantu mengontrol tekanan darah agar tetap stabil, juga sayuran yang  mengandung kalsium yang dapat menurunkan tekanan darah.",
            p12: "6. Mencegah kolesterol jahat.",
            p13: "Kolesterol jahat (LDL) dapat menimbulkan resiko terkena penyakit kronis seperti jantung koroner, yang terjadi karena  tersumbat nya aliran darah karena plak-plak kolesterol jahat yang menempel pada dinding pembuluh darah. Sayuran merupakan makanan yang dapat menangkal kolesterol jahat karena  mempunyai  nutrisi yang lengkap seperti kandungan likopen yang dapat menurunkan kolesterol secara alami."
        }
    },
    {
        title: "5 Manfaat Tidur Siang bagi Kesehatan Tubuh",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/5.jpg",
        url: "post5",
        content: {
            p1: "Tidur siang yang cukup tidak hanya baik untuk kesehatan fisik, tetapi juga mental.  Untuk mendapatkan berbagai manfaat tidur siang ini, Anda disarankan untuk tidak tidur telalu lama dan memilih waktu yang tepat, misalnya saat sedang luang atau tidak ada jadwal penting di kantor.",
            p2: "1. Meningkatkan konsentrasi dan kewaspadaan",
            p3: "Suatu riset menyebutkan bahwa tidur siang yang cukup dapat meningkatkan energi dan kelancaran aliran darah, termasuk di otak.Sebuah riset menyebutkan bahwa orang yang tidur siang selama 15–30 menit, akan terlihat lebih segar, mudah fokus, dan produktif, daripada orang yang kelelahan saat bekerja. Selain itu, tidur siang yang cukup juga dapat meningkatkan kelancaran aliran darah, termasuk di otak.",
            p4: "2. Memperbaiki suasana hati",
            p5: "Tidur siang juga baik untuk memperbaiki suasana hati. Jika Anda sedang merasa stres, cemas, atau gelisah, cobalah untuk melakukan relaksasi dengan tidur siang sejenak.Saat stres telah terkendali, Anda pun akan merasa lebih santai dan suasana hati bisa membaik. Hal ini dapat mengurangi risiko Anda terkena gangguan mental, seperti depresi.",
            p6: "3. Meningkatkan daya ingat",
            p7: "Manfaat tidur siang diketahui baik untuk menambah energi dan kinerja otak. Suatu riset menyebutkan bahwa rutin tidur siang bisa bermanfaat untuk menambah daya ingat atau memori dan kemampuan untuk mengolah informasi atau mempelajari hal-hal baru.Oleh karena itu, jika Anda ingin mempelajari atau menghafal materi, sebaiknya dilakukan setelah tidur siang. Hal ini mampu membuat Anda lebih fokus dan mudah mengingatnya. Tidur siang pun dipercaya baik untuk mencegah pikun atau demensia.",
            p8: "4. Menurunkan tekanan darah",
            p9: "Selain kebiasaan merokok dan mengonsumsi makanan yang banyak mengandung garam, stres dan kelelahan juga bisa meningkatkan risiko terjadinya hipertensi atau tekanan darah tinggi. Tidur siang diketahui bisa menurunkan tekanan darah dan menjaganya tetap stabil. Riset menyebutkan bahwa orang yang rutin tidur siang dan tidur yang cukup setiap malamnya memiliki risiko lebih rendah terkena hipertensi. Hal ini diduga karena tidur siang dapat mengurangi hormon stres kortisol, yaitu salah satu hormon yang dapat menyebabkan tekanan darah meningkat.",
            p10: "5. Menambah jam tidur",
            p11: "Sebagian orang mungkin bekerja secara shift atau jadwal yang bergantian, sehingga kurang tidur di malam hari. Untuk mencukupi waktu tidur tersebut, tidur siang bisa menjadi pilihan. Untuk orang yang sulit tidur di malam hari karena kesibukan tertentu, pembagian waktu tidur menjadi 1–1,5 jam di siang hari dan sekitar 6 jam di malam hari, bisa menjadi pilihan. Pola tidur ini dinamakan tidur bifasik.",
            p12: "Waktu yang tepat untuk tidur siang adalah pukul 2–3 siang. Saat itu, kemungkinan Anda mulai merasa mengantuk setelah makan siang. Jika Anda ingin tidur siang, sebaiknya tunggu hingga 1 jam setelah makan siang. Bila kondisi memungkinkan, tidak ada salahnya bagi Anda untuk memanfaatkan waktu tidur siang. Namun, ingatlah untuk tidak tidur siang terlalu lama atau memaksakannya di saat sedang ada kesibukan tertentu. Jika Anda merasa sulit untuk tidur siang atau tidur di malam hari, terlebih apabila sudah membuat Anda merasa kelelahan dan mengganggu aktivitas sehari-hari, sebaiknya konsultasikan hal tersebut dengan dokter."
        }
    },
    {
        title: "5 Manfaat Minum Jamu Setiap Hari",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/6.webp",
        url: "post6",
        content: {
            p1: "Jamu merupakan salah satu minuman yang sudah lama menjadi acuan pengobatan herbal. Jamu terbuat dari berbagai bahan alami yang berasal dari alam kemudian di olah untuk siap di minum. Para orang tua lebih menganjurkan anaknya untuk minum jamu karena beragam manfaat jamu yang didapat jika rutin meminum jamu setiap harinya. Dan untungnya sampai saat ini para penjual jamu keliling masih begitu mudah untu ditemukan. Beberapa contohnya adalah manfaat jamu kunyit dan manfaat jamu kunyit asam. Dan untuk rasanya sendiri jamu memiliki rasa yang pahit dan asam tergantung dari jenis jamu yang Anda pilih. Jamu yang pahit biasanya di anjurkan untuk membuang racun dalam tubuh. Nah, berikut ini manfaat yang did apat jika rutin minum jamu setiap hari antara lain :",
            p2: "1. Melancarkan haid",
            p3: "Manfaat minum jamu setiap hari yang pertama adalah membantu untuk melancarkan haid. Haid merupakan siklus bulanan wanita yang sudan memasuki masa remaja. Namun karena beberapa hal haid bisa jadi tidak lancar. Untuk itu manfaat minum asam jawa saat haid sangat membantu sekali untuk melancarkan keluarnya darah haid.",
            p4: "2. Mengatasi pegal – pegal",
            p5: "Manfaat minum jamu setiap hari yang kedua adalah untuk mengatasi pegal – pegal. Mengatasi pegal – pegal ini cocok untuk Anda yang banyak melakukan aktifitas sehari – hari. Jenis jamu yang dipilih bisa manfaat beras kencur yang diolah menjadi jamu kemudian dapat di minum. Jika rutin minum jamu ini pegal – pegal di seluruh tubuh bisa hilang.",
            p6: "3. Mengobati asam lambung",
            p7: "Manfaat minum jamu setiap hari yang ketiga adalah mengobati asam lambung. Asam lambung yang dikenal juga dnegan magh terjadi akibat lukanya dinding lambung akibat lambung yang tidak terisi makanan. Asam lambung banyak menyerang orang yang sering telat makan dan waktu makan yang tidak teratur. Selain rutin mengonsumsi jamu obat herbal lainnya untuk mengobati asam lambung adalah manfaat air kelapa untuk asam lambung dan manfaat buah naga bagi asam lambung.",
            p8: "4. Mencegah sakit kepala",
            p9: "Sakit kepala bisa datang menyerang kapan saja, biasanya sakit kelapa lebih banyak disebabkan karena stres, kelelahan dan kurang tidur. Mencegah sakit kepala dapat dilakukan dengan minum jamu setiap hari. Jamu ternyata memiliki beragam manfaat yang salah satunya sebagai pencegah. Seperti pepatah berkata mencegah lebih baik daripada mengobati. Dan karena itu tidak ada salahnya bagi Anda untuk rutin minum jamu sebagai langkah pencegahan.",
            p10: "5. Baik untuk penderita diabetes",
            p11: "Diabetes merupakan salah satu penyakit yang disebabkan karena kadar gula yang tinggi di dalam darah. Diabetes lebih mudah menyerang orang yang suka untuk makan dan minuman manis dalam jumlah yang banyak. penderita diabetes umumnya harus diatur dalam pola makan dan minum agar kondisinya tetap baik. Jamu merupakan salah satu minuman yang dianjurkan untuk orang yang menderita diabetes. Selain jamu ada juga manfaat daun afrika untuk diabetes dan manfaat daun sambiloto untuk diabetes.",
            p12: "Minum jamu secara rutin juga dapat membantu untuk mengatasi kulit gatal. Kulit yang gatal bisa disebabkan karena alergi terhadap benda atau sesuatu yang membuat kulit gatal. Mengatasi kulit gatal tergolong susah – susah gampang, ini karena jika Anda sudah tahu tidak cocok dengan sesuatu tersebut artinya tidak boleh lagi menyentuhnya. Karena ditakutkan akan menimbulkan rasa gatal kembali. Selain jamu ada juga manfaat daun sambiloto untuk gatal."
        }
    },
    {
        title: "5 Manfaat Cengkeh Untuk Kesehatan dan Kecantikan",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/7.jpg",
        url: "post7",
        content: {
            p1: "Manfaat cengkeh sebagai tanaman apotik hidup untuk permasalahan berbagai penyakit, sudah tidak diragukan lagi kebenarannya, sudah menjadi rahasia umum cengkeh sangat ampuh untuk sakit gigi. Sebagai jenis tanaman yang melimpah ruah di Indonesia, cengkeh menjadi rempah wajib untuk berbagai masakan khas nusantara. Sifat cengkeh yang hangat kerap kali digunakan untuk pembuatan berbagai minuman, namun sebenarnya apakah manfaat mengkonsumsi cengkeh? Sebagai rempah alami cengkeh juga bermanfaat seperti halnya manfaat kunyit atau pun juga manfaat temulawak yang baik untuk kesehatan. Berikut ini di antaranya :",
            p2: "1. Membantu Mengobati Sakit Gigi",
            p3: "Minyak cengkeh telah digunakan berabad-abad lamanya untuk mengobati sakit gigi. Caranya cukup mudah yaitu dengan menempatkan/mengoleskan minyak cengkeh tersebut pada lubang tempat sakit gigi. Hasilnya sangat luar biasa, kandungan zat yang terdapat pada cengkeh diyakini memiliki sifat antibiotik yang sangat ampuh dalam membunuh bakteri.",
            p4: "2. Mencegah Peradangan",
            p5: "Berbagai zat aktif seperti flavanoid ditemui pada minyak asli cengkeh. Flavanoid bekerja dengan sifat anti inflamasinya sehingga akan mengurangi peradangan pada penyakit rematik misalnya. Rasanya yang hangat juga bisa menjadi ekspektoran untuk mengobati berbagai kondisi gangguan saluran pernapasan.",
            p6: "3. Mengatasi mual dan Muntah",
            p7: "Cengkeh memiliki berbagai kandungan yang sangat ampuh untuk mengatasi mual dan muntah, selain cengkeh, minyaknya juga ampuh untuk mengatasi keluhan mual dan muntah ini.",
            p8: "4. Mengatasi Jerawat",
            p9: "Minyak cengkeh merupakan salah satu herbal yang dari berbagai penelitian yang sangat ampuh untuk menghilangkan jerawat. Caranya sangat mudah yaitu dengan mengoleskannya pada daerah jerawat tersebut. Kemungkinan jerawat yang tersebar di wajah mungkin dapat dihilangkan dengan membunuh bakteri dengan bantuan sifat antimikroba dari minyak cengkeh.",
            p10: "5. Menghilangkan noda dan guratan di kulit",
            p11: "Minyak cengkeh adalah salah satu herbal yang penting untuk menghilangkan noda dan guratan di kulit yang disebabkan oleh luka atau penyebab lainnya. Minyak ini dapat membantu membuat kulit lebih lembut agar tidak tampak jelek jika terkena guratan.",
            p12: "Minyak cengkeh juga dapat membantu mencegah rambut dari kerontokan yang dapat menyebabkan kebotokan, caranya sangat mudah yaitu dengan mengoleskannya di kulit kepala 5-15 menit lalu di bilas bersih."
        }
    },
    {
        title: "5 Manfaat Oatmeal Bagi Kesehatan Tubuh",
        author: "Diar J R",
        publishedDate: "July, 26 2020",
        image: "./assets/img/8.jfif",
        url: "post8",
        content: {
            p1: "Oatmeal kerap kali dijadikan salah satu menu untuk sarapan pagi karena saat ini oatmeal dalam bentuk instan sudah banyak ditemui sehingga menu oatmeal ini lebih praktis dibuat. Di Indonesia sendiri hanya segelintir orang yang memanfaatkan oatmeal ini sebagai menu sarapan. Sebagian orang Indonesia hanya mengkonsumsi nasi sebagai sumber karbohidrat makanan, padahal oatmeal yang dikonsumsi saat sarapan memberikan efek yang lebih baik, seperti berikut ini :",
            p2: "1. Mencegah Penyakit Kardiovaskular",
            p3: "Oatmeal merupakan  biji-bijian gandum utuh yang dapat menurunkan risiko berbagai penyakit, termasuk tekanan darah tinggi dan diabetes tipe 2. Oatmeal juga mengandung lignan, yaitu senyawa kimia yang telah ditemukan dapat mencegah penyakit jantung. The Dietary Guidelines for Americans 2010 merekomendasikan makan biji-bijian untuk mengurangi risiko penyakit kardiovaskular. Selain itu, biji-bijian seperti gandum merupakan sumber zat besi, magnesium dan vitamin.",
            p4: "2. Menurunkan kolesterol",
            p5: "Mengkonsumsi oatmeal dapat menurunkan kolesterol, terutama kadar LDL atau kolesterol “buruk” dalam darah. Seseorang yang telah didiagnosa mengalami kolesterol tinggi, mulailah mempertimbangkan untuk menambahkan oatmeal pada menu harian misalnya, sebagai pilihan menu sarapan. Tidak heran ia memiliki kemampuan super untuk mencegah berbagai penyakit yang berhubungan dengan kardiovaskular.",
            p6: "3. DIET (sangat ampuh menurunkan berat badan)",
            p7: "Oatmeal merupakan sumber serat yang rendah kalori yang sangat populer untuk orang yang sedang menjalankan program diet. Ketika mengkonsumsi oatmeal untuk sarapan, perut akan merasa kenyang untuk waktu yang lama. Sarapan dengan jenis makanan yang tinggi gula dan lemak akan membuat perasaan kenyang dengan  jangka waktu yang lebih singkat, lalu akan lapar lagi. Sarapan pagi, yang terdiri dari oatmela dicampur dengan potongan buah pisang misalnya, dapat mengenyangkan  tanpa khawatir akan lapar sampai waktu makan siang. SUPER efektif untuk anda yang sedang menjalankan program diet.",
            p8: "4. Sangat baik untuk diabetes",
            p9: "Oatmeal merupakan jenis makanan olahan gandum yang sangat baik untuk penderita diabetes, malahan makanan ini sangat disarankan untuk penderita diabetes. Terlebih ia juga memiliki kandungan serat yang sangat tinggi sehingga dapat membantu memberikan tubuh metabolisme dan keseimbangan gula darah.",
            p10: "5. Penuh Dengan Antioksidan",
            p11: "Oatmeal sangat tinggi kandungan antioksidan yang sangat penting untuk menjaga tubuh dari tebaran radikal bebas hingga memberikan dampak pada kecantikan, kesehatan, dan menjadi penyebab penyakit mematikan seperti kanker.",
            p12: "Dengan konsumsi oatmeal secara rutin anda secara tidak langsung telah melakukan treatment terhadap kulit anda. Kandungan antioksidan yang tinggi akan membantu berbagai lapisan kulit mengeluarkan radikal bebas akibat paparan sinar matahari ataupun polusi. Mencoba oatmeal sebagai menu sarapan anda dapat dibuat dengan menggabungkan buah atau kacang dengan oats akan menambah lebih banyak nutrisi. Rempah-rempah seperti kayu manis dan pala bisa memberikan rasa yang lebih lezat untuk oatmeal. Batasipemakaian gula dan biarkan rasa alami dari buah-buahan dan juga rempah-rempah yang mengambil alih. Cobalah berbagai resep berbeda untuk menghidangkan oatmeal disetiap menu makanan anda. Selamat mencoba.."
        }
    }
]
/* End Daftar Artikel */

/* Script show post in index.html */
$(document).ready(function () {
    for (let i = 0; i < article.length; i++) {
        const postPreviewTemplate = `
        <div class="card mb-3">
        <div class="row g-0">
            <div class="col-xl-3 col-md-4 col-xs-12 col-sm-12">
                <a href="${article[i].url}" class="link"><img src="${article[i].image}" class="img-fluid rounded mx-auto d-block"
                        alt="..."></a>
            </div>
            <div class="col-xl-9 col-md-8 col-xs-12 col-sm-12">
                <div class="card-body">
                    <a href="${article[i].url}" class="link">
                        <h5 class="card-title">${article[i].title}</h5>
                    </a>
                    <div class="meta-wrap">
                        <p class="meta">
                        <span>
                            <i class="far fa-calendar-alt me-2"></i>${article[i].publishedDate}
                        </span>
                        <span>
                            <a href="./about.html"><i class="fas fa-user me-2"></i>${article[i].author}</a>
                        </span>
                        <span>
                            <i class="far fa-folder me-2"></i>Kesehatan
                        </span>
                        <span>
                            <i class="far fa-comment-alt me-2"></i>1 Comment
                        </span>
                        </p>
                    </div>
                    <p class="mb-1 preview-content">${article[i].content.p1}</p>
                    <p>
                        <a href="${article[i].url}" class="btn-warning text-decoration-none p-1 rounded link">
                        Read More <span class="fas fa-chevron-right"></span>
                        </a>
                    </p>
                    </div>
                </div>
            </div>
            </div>
        `;
        $('#preview-post').append(postPreviewTemplate);
    }
    /* Script show Sidebar Popular Article */
    for (let i = 0; i < 5; i++) {
        const sidebarPopular = `
            <div class="block-21 mb-4 d-flex">
                <a href="${article[i].url}" class="blog-img link" style="background-image:url(${article[i].image});"></a>
                <div class="text">
                    <h3 class="heading"><a href="${article[i].url}" class="link">${article[i].title}</a></h3>
                    <div class="meta">
                    <div>
                        <span class="far fa-calendar-alt"></span> ${article[i].publishedDate}
                    </div>
                    <div>
                        <a href="./about.html">
                        <span class="fas fa-user"></span> ${article[i].author}
                        </a>
                    </div>
                    <div>
                        <span class="far fa-comment-alt"></span> 1
                    </div>
                    </div>
                </div>
                </div>
        `;
        $('#sidebar-popular').append(sidebarPopular);
    }
    /* End Script show Sidebar Popular Article */
})
/* End Script show post in index.html */

/* Script send parameter in url if post clicked in index.html */
$(document).ready(function () {
    $('.link').click(function (e) {
        e.preventDefault();
        let link = $(this).attr('href');
        let url = "post.html?post=" + link;
        window.location.href = url;
    })
})
/* End Script send parameter in url if post clicked in index.html */

/* Script get parameter in url to post.html */
$(document).ready(function () {
    let queryString = new Array();
    $(function () {
        if (queryString.length == 0) {
            if (window.location.search.split('?').length > 1) {
                let params = window.location.search.split('?')[1];
                let key = params.split('=')[0];
                let value = decodeURIComponent(params.split('=')[1]);
                queryString[key] = value;
            }
        }
        /* Script Show konten post in post.html */
        if (queryString["post"] != null) {
            for (let i = 0; i < article.length; i++) {
                if (queryString["post"] === article[i].url) {
                    const postTemplate = `
                    <div class="card card-post mb-3">
                            <div class="card-body">
                                <article class="blog-post">
                                    <h2 class="blog-post-title">${article[i].title}</h2>
                                    <p class="blog-post-meta">
                                    ${article[i].publishedDate} by <a href="./about.html">${article[i].author}</a>
                                    </p>
                                    <hr>
                                    <div class="thumb">
                                        <img src="${article[i].image}" class="img-fluid rounded mx-auto d-block" alt="...">
                                    </div>
                                    <section class="caption mt-3" id="paragraf">
                                    </section>
                                </article>
                            </div>
                        </div>
                        <div class="card card-comment mb-3">
                        <div class="card-body">
                            <h3>Komentar</h3>
                            <div class="card-comment-list">
                                <div class="list-comment">
                                    <span class="nama">Diar J R</span>:
                                    <span class="komen">Mantul Sekali!!!</span>
                                </div>
                            </div>
                            <form id="form-comment">
                                <div class="my-3">
                                    <label for="nama_komentator" class="form-label">Nama Lengkap:</label>
                                    <input type="text" class="form-control nama-komentator" id="nama_komentator"
                                        placeholder="Masukan Nama" autocomplete="off">
                                </div>
                                <div class="mb-3">
                                    <label for="text_komentator" class="form-label text-komentator">Text
                                        Komentar:</label>
                                    <textarea class="form-control" id="text_komentator" rows="3"
                                        placeholder="Masukan Komentar" autocomplete="off"></textarea>
                                </div>
                                <input class="btn btn-primary" id="komen" type="submit" value="Submit">
                            </form>
                        </div>
                    </div>
                    `;
                    $('#post-view').prepend(postTemplate);
                    for (let post in article[i].content) {
                        let paragraf = `<p>${article[i].content[post]}</p>`;
                        $('#paragraf').append(paragraf);
                    }
                }
            }
            /* End Script Show konten post in post.html */
        } else {
            /* Script if nothing parameter send in url */
            const templateNotFound = `
                <div class="card card-post mb-3">
                    <div class="card-body">
                        <article class="blog-post">
                            <h1>Halaman tidak ditemukan</h1>
                            <a href="index.html" class="index">Back to Index</a>
                        </article>
                    </div>
                </div>
                `;
            $('#post-view').prepend(templateNotFound);
            /* End Script if nothing parameter send in url */
        }
        /* Script komen in post.html */
        $('input#komen').click(function (e) {
            e.preventDefault();
            let namaKomentator = $('input#nama_komentator').val();
            let textKomentator = $('textarea#text_komentator').val();
            /* Script check if komen not null */
            if (namaKomentator !== '' && textKomentator !== '') {
                $('.card-comment-list').append(`
                <div class="list-comment">
                    <span class="nama">${namaKomentator}</span>:
                    <span class="komen">${textKomentator}</span>
                </div>
                `);
                $('#form-comment')[0].reset();
            }
            /* End Script check if komen not null */
        });
        /* End Script komen in post.html */
    });
})
/* End Script get parameter in url to post.html */