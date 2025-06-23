// 2. Apa tujuan dari createSlice pada articleSlice.ts?
// createSlice digunakan untuk mendefinisikan state dan reducer Redux sekaligus. Ia mempermudah dalam penulisan reducer, menghindari switch-case, dan menghasilkan action otomatis.

import { createSlice } from "@reduxjs/toolkit";

// membuat slice Redux bernama 'article' untuk mengelola state artikel
const articleSlice = createSlice({
  name: "article", // nama slice
  initialState: {
    list: [], // menyimpan daftar artikel
    isLoading: false, // status loading (menampilkan loader saat data di-fetch)
  },
  reducers: {
    // mengatur (menyimpan) daftar artikel ke state
    setArticles(state, action) {
      state.list = action.payload;
    },

    // 6. Tambahkan tombol hapus untuk menghapus 1 artikel berdasarkan ID.
    // menghapus artikel berdasarkan ID
    deleteArticle(state, action) {
      state.list = state.list.filter(article => article.id !== action.payload);
    },

    // 7. Tambahkan fitur loading menggunakan Redux.
    // mengatur status loading saat mengambil data
    setLoading(state, action) {
      state.isLoading = action.payload;
    }
  },
});

// mengekspor actions dan reducer untuk digunakan di komponen dan store
export const { setArticles, deleteArticle, setLoading } = articleSlice.actions;
export default articleSlice.reducer;
