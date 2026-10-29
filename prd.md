# Product Requirement Document (PRD)
## Personal Portfolio Website

---

## 1. Overview & Objectives

* **Project Name:** Personal Portfolio Website
* **Owner:** Web Development Beginner / Student
* **Primary Goal:** *Personal Branding* dan persiapan portofolio untuk seleksi pendaftaran universitas / magang di masa mendatang.
* **Target Audience:** Tim pendaftaran universitas, *recruiter*, dosen, dan rekan sesama *developer*.

---

## 2. User Persona & Use Cases

* **Persona:** Tim Seleksi Penerimaan / Recruiter
  * **Goal:** Ingin melihat latar belakang, motivasi, serta bukti keterlibatan kandidat dalam bidang *web development*.
  * **Pain Point:** Membutuhkan informasi yang jelas, dapat diakses dengan cepat, tanpa navigasi yang membingungkan.

---

## 3. Recommended Tech Stack (Beginner-Friendly)

Guna memfasilitasi proses belajar, disarankan menggunakan teknologi berikut yang bertahap dan mudah dipelajari:

* **Frontend:** HTML5, CSS3 (atau Tailwind CSS untuk kemudahan *styling*), dan JavaScript (Vanilla JS).
* **Theme Management:** JavaScript sederhana untuk fitur *Dark/Light Mode toggle* menggunakan `localStorage`.
* **Hosting & Deployment:** GitHub Pages atau Vercel (Gratis, mudah diintegrasikan, dan ramah untuk pemula).

---

## 4. Key Features & Structure

### Core Structure (Single Page or Multi-Page App)
Rekomendasi awal adalah membuat **Single Page Application (SPA)** sederhana dengan *smooth scrolling*.

1. **Header / Navigation Bar**
   * Logo / Nama Pribadi.
   * Menu Navigasi: *About*, *Skills*, *Projects*, *Contact*.
   * Tombol *Toggle Dark Mode/Light Mode*.

2. **Hero Section (Halaman Utama)**
   * Salam menyapa singkat (contoh: *"Hi, I'm [Nama kamu], an Aspiring Web Developer"*).
   * Deskripsi singkat 1-2 kalimat mengenai minat dan perjalanan belajar Anda.
   * Call to Action (CTA): Tombol *"See My Work"* dan *"Contact Me"*.

3. **About Me Section**
   * Penjelasan latar belakang, minat di bidang *web development*, serta fokus belajar saat ini.
   * Status pendidikan/universitas impian (opsional).

4. **Skills & Tech Stack Section**
   * Daftar teknologi yang sedang/sudah dipelajari (contoh: HTML, CSS, JavaScript, Git/GitHub).
   * Ikon-ikon visual pendukung (*devicon* atau FontAwesome).

5. **Projects Showcase Section**
   * *Card Layout* untuk menampilkan *project* hasil belajar.
   * Tempat untuk judul, deskripsi singkat, *tags* teknologi, serta link ke GitHub / Live Demo.
   * *Placeholder card* jika belum ada *project* utama: *"Exciting project coming soon!"*.

6. **Certificates & Achievements (Opsional / Masa Mendatang)**
   * Bagian untuk menampilkan sertifikat kursus online (dicontohkan dari Coursera, FreeCodeCamp, Dicoding, dll.).

7. **Contact & Social Links (Footer)**
   * Formulir kontak sederhana atau tautan langsung via Email.
   * Link ke media sosial/profesional: GitHub, LinkedIn, Instagram.

---

## 5. Design & UI/UX Guidelines

* **Style:** Clean, Modern, & Minimalist.
* **Color Palette:**
  * **Light Mode:** Background putih/abu-abu terang (`#F8F9FA`), teks gelap (`#212529`), aksen warna biru/indigo (`#3B82F6`).
  * **Dark Mode:** Background gelap/slate (`#0F172A`), teks terang (`#F8FAFC`), aksen warna cyan/neon blue (`#38BDF8`).
* **Responsiveness:** Tampilan harus responsif dan nyaman diakses melalui perangkat Mobile, Tablet, maupun Desktop.

---

## 6. Roadmap & Milestone Pengembangan

### Phase 1: MVP (Minimum Viable Product)
- [ ] Membuat struktur HTML dasar (Hero, About, Skills, Contact).
- [ ] Menambahkan *styling* CSS (Clean Theme).
- [ ] Menambahkan fungsionalitas Dark Mode via JavaScript.
- [ ] *Deploy* web awal ke GitHub Pages / Vercel.

### Phase 2: Content Enhancement
- [ ] Memasukkan 1-2 *project* latihan dasar ke bagian Showcase.
- [ ] Menambahkan animasi halus (*hover effect*, *fade-in* saat *scroll*).
- [ ] Menambahkan sertifikat atau pencapaian belajar.

### Phase 3: Advanced Upgrade (Masa Mendatang)
- [ ] Migrasi ke *framework* modern seperti React.js atau Next.js seiring bertambahnya kemampuan pemrograman.
- [ ] Menambahkan fitur Blog pribadi untuk menulis catatan belajar (*tech writing*).

---

## 7. Success Metrics

* Website dapat diakses secara publik tanpa *error*.
* Performa *loading* cepat (Skor Google Lighthouse > 80).
* Navigasi berjalan lancar di semua ukuran layar (Mobile & Desktop).