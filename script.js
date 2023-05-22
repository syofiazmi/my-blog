articles = [
    {
        id: 1,
        judul: "Belajar HTML Dasar",
        gambar: "html.jpeg",
        alt: 'html',
        deskripsi: "Untuk membuat situs web, Anda harus mengetahui tentang HTML — teknologi fundamental yang digunakan untuk menentukan struktur halaman web. HTML digunakan untuk menentukan apakah konten web Anda harus dikenali sebagai paragraf, daftar, tajuk, tautan, gambar, pemutar multimedia, formulir, atau salah satu dari banyak elemen lain yang tersedia atau bahkan elemen baru yang Anda tetapkan."
    },
    {
        id: 2,
        judul: "Belajar CSS Dasar",
        gambar: "css.png",
        alt: 'css',
        deskripsi: "Cascading Style Sheets — atau CSS — adalah teknologi pertama yang harus Anda mulai pelajari setelah HTML.Sementara HTML digunakan untuk menentukan struktur dan semantik konten Anda, CSS digunakan untuk mengatur gaya dan tata letaknya. Misalnya, Anda dapat menggunakan CSS untuk mengubah font, warna, ukuran, dan spasi konten Anda membaginya menjadi beberapa kolom, atau menambahkan animasi dan fitur dekoratif lainnya."
    },
    {
        id: 3,
        judul: "Belajar Javascript Dasar",
        gambar: "js.jpg",
        alt: 'js',
        deskripsi: "JavaScript adalah bahasa pemrograman yang memungkinkan Anda mengimplementasikan fungsionalitas kompleks pada halaman web.Setiap kali halaman web melakukan lebih dari sekadar duduk di sana dan menampilkan informasi statis untuk Anda lihat—menampilkan pembaruan konten tepat waktu, peta interaktif, grafik 2D / 3D animasi, jukebox video bergulir, atau lainnya—Anda dapat bertaruh bahwa JavaScript mungkin terlibat ."
    },
    {
        id: 4,
        judul: "Belajar Bootstrap",
        gambar: "bootstrap.jpg",
        alt: 'bootstrap',
        deskripsi: "Bootstrap adalah toolkit frontend yang kuat dan penuh fitur. Buat apa pun—mulai dari prototipe hingga produksi—dalam hitungan menit."
    },
    {
        id: 5,
        judul: "Belajar Frontend Library: React js",
        gambar: "react-js.jpg",
        alt: 'react-js',
        deskripsi: " Pada artikel ini kami akan menyapa React. Kita akan menemukan sedikit detail tentang latar belakang dan kasus penggunaannya, menyiapkan toolchain React dasar di komputer lokal kita, dan membuat serta bermain dengan aplikasi pemula yang sederhana — mempelajari sedikit tentang cara kerja React dalam prosesnya."
    },
    {
        id: 6,
        judul: "Belajar Backend Framework: Express Js",
        gambar: "express.jpg",
        alt: 'express-js',
        deskripsi: "Express adalah kerangka web unopinionated populer, ditulis dalam JavaScript dan dihosting dalam lingkungan runtime Node.js.Modul ini menjelaskan beberapa manfaat utama kerangka kerja, cara menyiapkan lingkungan pengembangan Anda, dan cara melakukan tugas pengembangan dan penyebaran web umum."
    },
]

const articleMap = articles.map((article) => {
    // select element
    const articleList = document.querySelector('.article-list')

    // create article element and class
    const newArticle = document.createElement('article')
    newArticle.classList.add('card')

    // create img element, attribute & class
    const newImage = document.createElement('img')
    newImage.setAttribute('src', '/assets/img/articles/' + article.gambar)
    newImage.setAttribute('alt', article.alt)

    // create h2 element and class
    const newTitle = document.createElement('h2')
    newTitle.classList.add('article-judul')
    const title = document.createTextNode(article.judul)
    newTitle.appendChild(title)

    // create p element and class
    const newDescription = document.createElement('p')
    newDescription.classList.add('article-deskripsi')
    const deskripsi = document.createTextNode(article.deskripsi)
    newDescription.append(deskripsi)

    newArticle.append(newImage, newTitle, newDescription)
    articleList.appendChild(newArticle)
})

