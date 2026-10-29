---
name: Kost Ramzah
description: Hunian Mahasiswa Bersih, Nyaman & Tenang
colors:
  bg: "#F7F8FA"
  surface: "#FFFFFF"
  surface-subtle: "#EDF0F3"
  ink: "#181C20"
  muted: "#57606A"
  accent: "#2C353F"
  accent-hover: "#192028"
  accent-subtle: "#E6EAEF"
  border: "#DFE3E8"
  wa-green: "#25D366"
typography:
  display:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 1.3rem + 3.2vw, 3.25rem)"
    fontWeight: 800
    lineHeight: 1.15
  lead:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "40px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "14px 26px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "14px 26px"
---

# Design System: Kost Ramzah

## Overview
Design system untuk website portofolio Kost Ramzah. Dirancang untuk menghadirkan kesan hunian mahasiswa yang tenang, asri, bersih, dan terpercaya. Memprioritaskan kecepatan akses (tanpa framework, font sistem bawaan OS, nol pustaka berat) dan kenyamanan interaksi di smartphone Android maupun iPhone.

## Colors
- **Ground (`--bg`):** `#F7F8FA` — Latar utama bernuansa abu lembut arsitektural (*clean off-white grey*). Menghilangkan silau dan memberikan kenyamanan mata dengan kesan bersih dan modern.
- **Surface (`--surface`):** `#FFFFFF` — Latar panel dan kartu murni putih solid, menciptakan kontras yang tegas dan bersih terhadap latar abu.
- **Subtle Surface (`--surface-subtle`):** `#EDF0F3` — Latar abu terang untuk pembeda area sekunder.
- **Ink (`--ink`):** `#181C20` — Teks utama deep charcoal obsidian, sangat tajam dan mudah dibaca dengan rasio kontras > 13:1 (lolos WCAG AAA).
- **Muted Text (`--muted`):** `#57606A` — Teks keterangan slate grey terukur, rasio kontras > 5:1 (lolos WCAG AA).
- **Primary Accent (`--accent`):** `#2C353F` — Titanium slate / abu arang elegan yang memberikan kesan hunian modern, berkelas, dan rapi.
- **Accent Hover (`--accent-hover`):** `#192028` — Status interaksi aktif tombol aksi.
- **Accent Subtle (`--accent-subtle`):** `#E6EAEF` — Latar badge status kamar tersedia.
- **Border (`--border`):** `#DFE3E8` — Garis pemisah halus penegas batas antar komponen.
- **WhatsApp Green (`--wa-green`):** `#25D366` — Warna resmi untuk aksi cepat menuju kontak Bapak Kost.

## Typography
- **Font Family:** Modern Native System Font Stack (`-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif`). Bebas beban unduh jaringan, 0ms latensi, dan otomatis beradaptasi dengan tipografi resmi OS (San Francisco di iPhone, Roboto di Android, Segoe UI di Windows).
- **Scale:**
  - `Display / Hero Title`: `clamp(2rem, 1.3rem + 3.2vw, 3.25rem)` dengan bobot `800` dan jarak baris ketat `1.15`.
  - `Lead`: `clamp(1.125rem, 1.05rem + 0.35vw, 1.25rem)` untuk paragraf pembuka.
  - `Body Text`: `clamp(1rem, 0.95rem + 0.25vw, 1.0625rem)` (16px–17px) menjaga kenyamanan membaca dan mencegah auto-zoom di Safari iPhone.
  - `Small / Badge`: `0.875rem` (14px) untuk status kamar dan keterangan.

## Layout
- **Mobile-First Responsive Grid:**
  - Breakpoint Tablet: `768px`
  - Breakpoint Desktop: `1024px`
- **Container Width:** Maksimal `1200px` dengan padding adaptif `clamp(1rem, 4vw, 2rem)`.
- **Hero Asimetris:** Teks dan informasi di sisi kiri (7 kolom), visual fasad bangunan di sisi kanan (5 kolom) pada layar desktop; bertumpuk vertikal pada layar mobile.
- **Safe Area Inset:** Mendukung `env(safe-area-inset-bottom)` untuk area bawah iPhone.

## Elevation & Depth
- **Depth Philosophy:** Bertingkat secara tonal (*tonal layering*), bukan bayangan hitam tebal atau efek glow.
- **Shadow Small (`--shadow-sm`):** `0 1px 3px rgba(25, 35, 30, 0.05)` untuk elevasi ringan.
- **Shadow Medium (`--shadow-md`):** `0 4px 16px rgba(25, 35, 30, 0.08)` untuk bingkai foto fasad dan dropdown menu mobile.
- **Sticky Navbar:** `backdrop-filter: blur(8px)` dengan latar `rgba(250, 251, 249, 0.95)`.

## Shapes
- **Radius Small (`6px`):** Untuk badge kecil, tombol navigasi, dan elemen kompak.
- **Radius Medium (`10px`):** Untuk tombol utama aksi CTA dan kartu konten.
- **Radius Large (`16px`):** Untuk wadah foto utama hero.
- **Radius Full (`9999px`):** Untuk badge status kamar dan floating tombol aksi.

## Components
- **Navbar:** Sticky header setinggi `68px` (`4.25rem`), teks brand tebal dengan titik aksen hijau, navigasi link horizontal di desktop, dan hamburger menu di HP dengan transisi rotasi silang 45 derajat.
- **Button Primary (WhatsApp):** Tombol hijau solid `--accent` dengan teks putih, ikon WhatsApp resmi, dan efek angkat mikro (`translateY(-2px)`) saat disentuh/hover. Area sentuh minimal `48px`.
- **Button Secondary:** Tombol outline dengan latar `--surface`, border halus, dan teks `--ink`.
- **Hero Visual Card:** Bingkai rasio 4:3 dengan pembungkus sudut melengkung `16px`, bayangan lembut, dan keterangan caption melayang di bagian bawah foto.

## Do's and Don'ts
- **DO:**
  - Selalu sertakan nomor WhatsApp resmi dengan teks pesan otomatis ramah yang langsung menyapa Bapak Kost.
  - Gunakan satuan fleksibel (`rem`, `clamp()`, `%`) untuk semua ukuran.
  - Cantumkan atribut `alt` deskriptif dan dimensi `width`/`height` pada semua tag gambar.
  - Jaga area sentuh tombol minimal `44px x 44px`.
- **DON'T:**
  - JANGAN gunakan gradien ungu/indigo atau tombol bersinar neon (*neon glow*).
  - JANGAN gunakan huruf di bawah `16px` untuk teks form/konten isi di mobile.
  - JANGAN memuat pustaka eksternal (jQuery, Bootstrap, font web berat) yang memperlambat waktu muat.
  - JANGAN gunakan animasi bergulir berlebihan yang menguras baterai ponsel.
