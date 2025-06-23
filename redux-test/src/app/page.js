import ArticleList from "../components/ArticleList";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Beranda</h1>
       {/* menampilkan daftar artikel */}
      <ArticleList />
    </div>
  );
}

// Rangkuman alur
// 1. Komponen Home merender ArticleList.
// 2. ArticleList menjalankan fetch() dari API dan menyimpan datanya ke Redux (state article.list).
// 3. Data ditampilkan dalam daftar, lengkap dengan tombol "Hapus".
// 4. Klik "Hapus" akan dispatch(deleteArticle(id)) yang memfilter daftar artikel di state.
// 5. Semua state (list, isLoading) dikelola terpusat melalui Redux Toolkit.