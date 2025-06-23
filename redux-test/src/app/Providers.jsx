// 1. Jelaskan fungsi file Providers.tsx dalam konteks App Router dan Redux.
// File ini adalah Client Component yang membungkus seluruh aplikasi dengan Redux Provider. Ini penting karena layout.tsx adalah Server Component, dan kita tidak bisa langsung menggunakan store di dalamnya.

"use client";

import {Provider} from "react-redux";
import {store} from "./store";

// membungkus aplikasi dengan Provider Redux
export default function Providers({children}) {
  return <Provider store={store}>{children}</Provider>;
}
