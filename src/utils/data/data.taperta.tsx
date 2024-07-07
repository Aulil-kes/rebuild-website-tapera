export const headerNavbarItems = [
  /*
  {
    route_name: "Beranda",
    route_path: "/",
  },
  */
  {
    route_name: "Info Tampera",
    route_path: null,
    route_items: [
      {
        subroute_name: "Dasar Hukum",
      },
      {
        subroute_name: "Visi & Misi",
      },
      {
        subroute_name: "Pengelolaan Tapera",
      },
      {
        subroute_name: "Pengawasan",
      },
      {
        subroute_name: "Komite Tapera",
      },
      {
        subroute_name: "Komisioner & Deputi Komisioner",
      },
      {
        subroute_name: "Struktur Organisasi",
      },
      {
        subroute_name: "Filosofi Lego",
      },
      {
        subroute_name: "Dasar Hukum",
      },
    ],
  },
  {
    route_name: "Produk",
    route_path: null,
    route_items: [
      {
        subroute_name: "KPR Tapera",
      },
      {
        subroute_name: "KRR Tapera",
      },
      {
        subroute_name: "KBR Tapera",
      },
      {
        subroute_name: "FLPP",
      },
      {
        subroute_name: "Bank Penyalur",
      },
      {
        subroute_name: "Realisasi",
      },
    ],
  },
  {
    route_name: "Layanan",
    route_path: null,
    route_items: [
      {
        subroute_name: "Pendaftaran",
      },
      {
        subroute_name: "Pembayaran Simpanan",
      },
      {
        subroute_name: "Pengembalian Tabungan",
      },
      {
        subroute_name: "Manfaat",
      },
    ],
  },
  {
    route_name: "Peraturan",
    route_path: null,
    route_items: [
      {
        subroute_name: "Undang-Undang",
      },
      {
        subroute_name: "Peraturan Pemerintah",
      },
      {
        subroute_name: "Peraturan Presiden",
      },
      {
        subroute_name: "Peraturan OJK",
      },
      {
        subroute_name: "Peraturan Menteri",
      },
      {
        subroute_name: "Keputusan Menteri",
      },
      {
        subroute_name: "Peraturan BP Tapera",
      },
    ],
  },
  {
    route_name: "Info",
    route_path: null,
    route_items: [
      {
        subroute_name: "Berita",
      },
      {
        subroute_name: "Publikasi",
      },
      {
        subroute_name: "Kebijakan Anti Penyuapan",
      },
      {
        subroute_name: "Survei Kepuasan Masyarakat",
      },
      {
        subroute_name: "Pengumuman",
      },
      {
        subroute_name: "Pengadaan Barang & Jasa",
      },
      {
        subroute_name: "Lowongan Pekerjaan",
      },
    ],
  },
];

export const produkTaperaItemsList = [
  {
    route_link: "https://www.tapera.go.id/produk/kpr-tapera/",
    route_name: "KPR TAPERA",
    route_desc: "Program Pembiayaan Kepemilikan Rumah Pertama",
  },
  {
    route_link: "https://www.tapera.go.id/produk/krr-tapera/",
    route_name: "KRR TAPERA",
    route_desc: "Program Pembiayaan Perbaikan Rumah Pertama",
  },
  {
    route_link: "https://www.tapera.go.id/produk/kbr-tapera/",
    route_name: "KBR TAPERA",
    route_desc: "Program Pembiayaan Rumah Pertama di Atas Tanah Pribadi",
  },
  {
    route_link: "https://www.tapera.go.id/produk/flpp/",
    route_name: "FLPP",
    route_desc: "Program Pembiayaan Kepemilikan Rumah Bagi Masyarakat Non ASN",
  },
];

export const footerTaperaListItems = [
  {
    route_title: "Docs & Help",
    route_items: [
      { route_name: "Features", route_path: "/features" },
      { route_name: "Customers", route_path: "/customers" },
      { route_name: "Why us?", route_path: "/why-us" },
      { route_name: "Pricing", route_path: "/pricing" },
    ],
  },
  {
    route_title: "Docs & Help",
    route_items: [
      { route_name: "Documentation", route_path: "/docs" },
      { route_name: "Training", route_path: "/training" },
      { route_name: "System status", route_path: "/status" },
      { route_name: "FAQs", route_path: "/faqs" },
      { route_name: "Help Center", route_path: "/help" },
    ],
  },
  {
    route_title: "About us",
    route_items: [
      { route_name: "Careers", route_path: "/careers" },
      { route_name: "Leadership", route_path: "/leadership" },
      { route_name: "Blog", route_path: "/blog" },
      { route_name: "Events", route_path: "/events" },
    ],
  },
  {
    route_title: "Get in touch",
    route_items: [
      { route_name: "Contact", route_path: "/contact" },
      { route_name: "Support", route_path: "/support" },
      { route_name: "Partners", route_path: "/partners" },
      { route_name: "Join research", route_path: "/join-research" },
    ],
  },
];

export const sponsorOne = Array(5)
  .fill([
    "https://www.bca.co.id/-/Media/Files/2024/brighspot/images/mybca-logo.png",
    "https://www.tapera.go.id/wp-content/uploads/2022/04/Bank-BRI.jpg",
    "https://www.tapera.go.id/wp-content/uploads/2022/04/Bank-BNI.jpg",
  ])
  .flat();
