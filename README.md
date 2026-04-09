# Fintory 💰📊

## 📌 Deskripsi Proyek

Fintory adalah aplikasi manajemen keuangan berbasis web yang membantu pengguna dalam mencatat, memantau, dan menganalisis pengeluaran serta pemasukan secara sederhana dan intuitif.

Project ini menggunakan arsitektur **full-stack terpisah (separate repository)**:

- **Frontend**: React + Tailwind CSS + Vite
- **Backend API**: Node.js + Express + MySQL

---

## 🔗 Repository Terkait

- 🎨 Frontend (repo ini):
  https://github.com/M-Ari-ZM/Frontend_Fintory

- ⚙️ Backend API:
  https://github.com/FathirAja/Backend_Fintory

> Pastikan backend sudah berjalan sebelum menjalankan frontend.

---

## ✨ Fitur Utama

- Pencatatan pemasukan & pengeluaran
- Edit & hapus transaksi
- Dashboard visual (grafik)
- Filter berdasarkan waktu
- Data tersimpan di database (MySQL)

---

## ⚙️ Setup Frontend

### 1. Clone Repository

```bash
git clone https://github.com/M-Ari-ZM/Frontend_Fintory.git
cd frontend_fintory
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Konfigurasi Environment

Buat file `.env`:

```env
VITE_API_URL=http://localhost:5000/api
```

### 4. Jalankan Frontend

```bash
npm run dev
```

Frontend akan berjalan di:

```
http://localhost:5173
```

---

## ⚙️ Setup Backend (Singkat)

Backend berada di repository terpisah.
Silakan ikuti instruksi lengkap di repo backend:

👉 https://github.com/FathirAja/Backend_Fintory

### Ringkasan:

```bash
cd backend_fintory
npm install
npm run start
```

Backend berjalan di:

```
http://localhost:5000
```

---

## ▶️ Cara Menjalankan Aplikasi

1. Jalankan backend terlebih dahulu
2. Jalankan frontend
3. Buka di browser:

```
http://localhost:5173
```

---

## 📡 API Endpoint (Backend)

| Method | Endpoint          | Deskripsi   |
| ------ | ----------------- | ----------- |
| GET    | /transactions     | Ambil data  |
| POST   | /transactions     | Tambah data |
| PUT    | /transactions/:id | Update data |
| DELETE | /transactions/:id | Hapus data  |

---

## 📁 Struktur Folder (Frontend)

```
src/
│── components/
│── pages/
│── assets/
│── utils/
│── App.jsx
│── main.jsx
```

## 🛠️ Teknologi yang Digunakan

- React.js
- Tailwind CSS
- Vite
- REST API (Backend terpisah)

---

## 📄 Lisensi

Project ini bersifat open-source dan dapat digunakan untuk pembelajaran.

---
