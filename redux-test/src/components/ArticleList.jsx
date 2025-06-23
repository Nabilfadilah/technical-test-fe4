"use client";

import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setArticles, setLoading} from "../features/articleSlice";
import {deleteArticle} from "../features/articleSlice";

export default function ArticleList() {
  const dispatch = useDispatch();

  // mengambil daftar artikel dari state Redux
  const articles = useSelector((state) => state.article.list);

  useEffect(() => {
    const fetchData = async () => {
      // 7. Tambahkan fitur loading menggunakan Redux.
      dispatch(setLoading(true)); // aktifkan loading state

      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();

      // menyimpan 5 artikel pertama ke dalam Redux state
      dispatch(setArticles(data.slice(0, 5)));
      dispatch(setLoading(false)); // matikan loading setelah data diambil

      // 5. Ubah kode agar hanya menampilkan artikel dengan id < 5.
      // dispatch(setArticles(data.filter((item) => item.id < 5)));
    };

    fetchData(); // jalankan saat komponen pertama kali dirender
  }, [dispatch]);

  return (
    <div>
      <h2>Artikel:</h2>
      {articles.map((a) => (
        <div key={a.id}>
          <div key={a.id}>{a.title}</div>

          {/* 6. Tambahkan tombol hapus untuk menghapus 1 artikel berdasarkan ID. */}
          <button onClick={() => dispatch(deleteArticle(a.id))}>Hapus</button>
        </div>
      ))}
    </div>
  );
}

// 3. Apa yang terjadi pada ArticleList.tsx saat dispatch(setArticles(...)) dijalankan?
// Jawaban: State list di Redux akan diperbarui dengan data artikel baru yang di-fetch, dan komponen akan re-render karena useSelector mendeteksi perubahan state.

// 4. Kenapa ArticleList.tsx perlu "use client"?
// Jawaban: Karena ia menggunakan hook React (useEffect, useSelector, useDispatch) yang hanya bisa digunakan di Client Component.
