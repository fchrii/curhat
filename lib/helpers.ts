// Topic detection based on keywords
export function detectTopic(text: string): string {
  const lowerText = text.toLowerCase()

  // Define keywords for each topic
  const topics = {
    cinta: [
      "pacar",
      "gebetan",
      "cinta",
      "sayang",
      "jatuh cinta",
      "putus",
      "selingkuh",
      "ldr",
      "pacaran",
      "pdkt",
      "ditolak",
    ],
    sekolah: [
      "sekolah",
      "kuliah",
      "tugas",
      "ujian",
      "dosen",
      "guru",
      "nilai",
      "skripsi",
      "thesis",
      "pr",
      "pelajaran",
      "kelas",
    ],
    keluarga: ["orang tua", "ibu", "ayah", "mama", "papa", "kakak", "adik", "keluarga", "rumah", "saudara"],
    teman: ["teman", "sahabat", "persahabatan", "temenan", "geng", "kelompok", "sosial"],
    karir: ["kerja", "kantor", "bos", "karir", "gaji", "pekerjaan", "resign", "karyawan", "interview", "promosi"],
    keuangan: ["uang", "hutang", "tabungan", "miskin", "kaya", "gaji", "finansial", "ekonomi", "biaya"],
    kesehatan: ["sakit", "sehat", "diet", "olahraga", "berat badan", "stress", "depresi", "anxiety", "mental"],
  }

  // Check which topic has the most keyword matches
  let bestMatch = "umum"
  let maxMatches = 0

  for (const [topic, keywords] of Object.entries(topics)) {
    const matches = keywords.filter((keyword) => lowerText.includes(keyword)).length
    if (matches > maxMatches) {
      maxMatches = matches
      bestMatch = topic
    }
  }

  return bestMatch
}

// Get motivational message based on topic
export function getMotivationalMessage(topic: string): string {
  const messages = {
    cinta: [
      "Cinta memang tidak selalu indah, tapi percayalah bahwa kamu layak mendapatkan cinta yang tulus dan menghargaimu apa adanya.",
      "Patah hati memang menyakitkan, tapi itu juga bukti bahwa kamu berani mencintai. Kamu kuat dan akan menemukan cinta yang lebih baik.",
      "Jangan biarkan satu pengalaman buruk menutup hatimu. Cinta yang tepat akan datang pada waktu yang tepat.",
      "Kadang kita perlu kehilangan untuk menemukan cinta yang sesungguhnya. Bertahanlah, kamu pantas bahagia.",
      "Cinta bukan tentang memiliki, tapi tentang memberi dan menerima. Kamu sudah melakukan yang terbaik.",
    ],
    sekolah: [
      "Belajar memang tidak selalu menyenangkan, tapi pengetahuan yang kamu dapatkan akan membawamu ke tempat-tempat luar biasa.",
      "Nilai bukan penentu kecerdasanmu. Kamu punya potensi luar biasa yang tidak bisa diukur hanya dengan angka.",
      "Setiap kesulitan dalam belajar adalah kesempatan untuk tumbuh lebih kuat. Kamu pasti bisa melewatinya!",
      "Jangan bandingkan prosesmu dengan orang lain. Setiap orang punya jalur dan kecepatannya masing-masing.",
      "Kegagalan dalam ujian bukan akhir dunia. Itu hanya pelajaran untuk persiapan yang lebih baik di masa depan.",
    ],
    keluarga: [
      "Keluarga memang tidak sempurna, tapi ikatan darah tidak akan pernah putus. Beri waktu untuk saling memahami.",
      "Konflik dalam keluarga adalah hal normal. Yang penting adalah bagaimana kita menyelesaikannya dengan cinta.",
      "Orang tua mungkin tidak selalu benar, tapi mereka selalu ingin yang terbaik untukmu dengan cara yang mereka tahu.",
      "Kadang kita perlu jarak untuk lebih menghargai keluarga. Tapi ingat, rumah akan selalu menerimamu kembali.",
      "Keluarga adalah tempat kita belajar mencintai dan dimaafkan. Beri mereka kesempatan untuk berubah.",
    ],
    teman: [
      "Persahabatan sejati mungkin langka, tapi ketika kamu menemukannya, itu akan menjadi salah satu harta terbesarmu.",
      "Lebih baik memiliki sedikit teman yang tulus daripada banyak teman yang hanya ada saat senang.",
      "Jika seseorang pergi dari hidupmu, mungkin mereka bukan bagian dari perjalananmu selanjutnya. Orang yang tepat akan tinggal.",
      "Konflik dengan teman adalah kesempatan untuk membangun persahabatan yang lebih kuat, jika keduanya mau berusaha.",
      "Kamu tidak perlu menyenangkan semua orang. Jadilah dirimu sendiri, dan kamu akan menarik orang-orang yang tepat.",
    ],
    karir: [
      "Karir bukan lomba lari. Setiap orang punya waktu dan jalurnya masing-masing untuk sukses.",
      "Kegagalan dalam pekerjaan bukan cerminan dari nilai dirimu. Itu hanya bagian dari proses menuju kesuksesan.",
      "Kadang kita perlu keluar dari zona nyaman untuk menemukan potensi terbesar kita. Beranilah mencoba hal baru.",
      "Pekerjaan ideal adalah perpaduan antara passion dan keahlianmu. Teruslah mencari jika belum menemukannya.",
      "Atasan yang sulit adalah guru terbaik dalam kesabaran dan profesionalisme. Kamu sedang dilatih menjadi lebih tangguh.",
    ],
    keuangan: [
      "Masalah keuangan adalah pelajaran berharga tentang prioritas dan pengelolaan. Kamu akan menjadi lebih bijak.",
      "Kekayaan sejati bukan tentang berapa banyak yang kamu miliki, tapi berapa banyak yang kamu syukuri.",
      "Kesulitan finansial adalah sementara jika kamu tetap berusaha dan belajar mengelola dengan lebih baik.",
      "Jangan bandingkan kekayaanmu dengan orang lain. Setiap orang punya perjalanan dan prioritas berbeda.",
      "Uang memang penting, tapi bukan segalanya. Kesehatan dan hubungan yang baik adalah kekayaan sejati.",
    ],
    kesehatan: [
      "Tubuhmu sudah berjuang keras untukmu setiap hari. Berikan istirahat dan perawatan yang layak ia dapatkan.",
      "Kesehatan mental sama pentingnya dengan kesehatan fisik. Tidak apa-apa untuk mencari bantuan saat kamu membutuhkannya.",
      "Setiap langkah kecil menuju gaya hidup sehat adalah kemenangan. Rayakan kemajuanmu, sekecil apapun itu.",
      "Penyembuhan butuh waktu dan proses. Bersabarlah dengan dirimu sendiri dan tubuhmu.",
      "Kamu lebih kuat dari yang kamu kira. Tubuh dan pikiranmu telah melewati banyak hal, dan masih bertahan hingga hari ini.",
    ],
    umum: [
      "Setiap masalah selalu punya jalan keluar. Mungkin kamu belum menemukannya, tapi itu tidak berarti jalan itu tidak ada.",
      "Kamu lebih kuat dari yang kamu kira. Buktinya, kamu masih bertahan sampai hari ini.",
      "Tidak apa-apa untuk merasa sedih atau lelah. Beri dirimu izin untuk merasakan, lalu bangkit lagi pelan-pelan.",
      "Hidup memang tidak selalu adil, tapi kamu punya kekuatan untuk mengubah respons terhadap ketidakadilan itu.",
      "Kadang kita perlu hujan untuk menghargai matahari. Masa sulit ini akan berlalu, dan kamu akan lebih menghargai kebahagiaan.",
    ],
  }

  const topicMessages = messages[topic as keyof typeof messages] || messages.umum
  const randomIndex = Math.floor(Math.random() * topicMessages.length)

  return topicMessages[randomIndex]
}

// Get random GIF URL
export function getRandomGif(): string {
  const gifs = [
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
    "/placeholder.svg?height=200&width=400",
  ]

  const randomIndex = Math.floor(Math.random() * gifs.length)
  return gifs[randomIndex]
}
