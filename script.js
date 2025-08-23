const produk = [
  {
    nama: "Smartphone X1",
    harga: 3500000,
    deskripsi: "Smartphone canggih dengan kamera 48MP",
    gambar:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80",
    kategori: "elektronik",
  },
  {
    nama: "Jaket Kulit",
    harga: 500000,
    deskripsi: "Jaket kulit asli stylish untuk segala acara",
    gambar:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    kategori: "fashion",
  },
  {
    nama: "Keripik Kentang",
    harga: 15000,
    deskripsi: "Cemilan renyah untuk menemani santai",
    gambar:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
    kategori: "makanan",
  },
  {
    nama: "Laptop Pro 14",
    harga: 8500000,
    deskripsi: "Laptop performa tinggi untuk kerja & gaming",
    gambar:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=400&q=80",
    kategori: "elektronik",
  },
  {
    nama: "Kopi Arabika Premium",
    harga: 80000,
    deskripsi: "Kopi arabika pilihan dengan aroma khas.",
    gambar:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    kategori: "minuman",
  },
  {
    nama: "Sepatu Sneakers",
    harga: 350000,
    deskripsi: "Sneakers kekinian nyaman dipakai harian.",
    gambar:
      "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
    kategori: "fashion",
  },
  {
    nama: "Teh Hijau Botol",
    harga: 12000,
    deskripsi: "Minuman teh hijau segar dan sehat.",
    gambar:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    kategori: "minuman",
  },
  {
    nama: "Roti Tawar Gandum",
    harga: 25000,
    deskripsi: "Roti tawar sehat berbahan gandum utuh.",
    gambar:
      "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80",
    kategori: "makanan",
  },
  {
    nama: "Headphone Wireless",
    harga: 650000,
    deskripsi: "Headphone wireless dengan suara jernih.",
    gambar:
      "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80",
    kategori: "elektronik",
  },
  {
    nama: "Tas Ransel Kulit",
    harga: 420000,
    deskripsi: "Tas ransel kulit elegan dan awet.",
    gambar:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    kategori: "fashion",
  },
];

function tampilkanProduk(filterKategori = "all") {
  const container = document.getElementById("produk-list");
  container.innerHTML = "";
  let dataFilter = produk;
  if (filterKategori !== "all") {
    dataFilter = produk.filter((p) => p.kategori === filterKategori);
  }
  dataFilter.forEach((item) => {
    const card = `
      <div class="produk-card">
        <img src="${item.gambar}" alt="${item.nama}">
        <h3>${item.nama}</h3>
        <p>${item.deskripsi}</p>
        <p class="harga">Rp ${item.harga.toLocaleString("id-ID")}</p>
        <button class="btn-beli">Beli</button>
      </div>
    `;
    container.innerHTML += card;
  });
}

document.getElementById("kategori").addEventListener("change", (e) => {
  tampilkanProduk(e.target.value);
});

tampilkanProduk();
