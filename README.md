# Glassmorphism Todo List - Symfony 5.4

Aplikasi Todo List sederhana dengan gaya **Glassmorphism** menggunakan **Symfony 5.4**, **Twig**, dan **CSS3** dengan efek blur dan transparansi.

## ?? Fitur

- **Desain Glassmorphism** - Efek kaca transparan dengan backdrop-filter blur
- **Animasi Blob** - Background animasi dengan gradient dan floating blobs
- **Data Dummy** - 5 tugas contoh dengan berbagai status dan prioritas
- **Statistik** - Menampilkan total, selesai, dan belum selesai
- **Responsive** - Dapat diakses di desktop maupun mobile
- **Prioritas** - Indikator tinggi (??), sedang (?), rendah (??)
- **Status** - Menampilkan tugas selesai/belum selesai

## ??? Teknologi

- [PHP 7.2.5+](https://php.net/)
- [Symfony 5.4](https://symfony.com/)
- [Twig](https://twig.symfony.com/)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS) - backdrop-filter, animations
- [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)

## ?? Struktur Project

```
belajar-symfony/
+-- config/
¦   +-- routes.yaml      # Konfigurasi routing
¦   +-- ...
+-- public/
¦   +-- css/
¦   ¦   +-- style.css    # Styling glassmorphism
¦   +-- index.php
+-- src/
¦   +-- Controller/
¦   ¦   +-- TodoController.php  # Controller dengan data dummy
¦   +-- Kernel.php
+-- templates/
¦   +-- todo/
¦       +-- index.html.twig    # Template dengan data dummy
+-- README.md
```

## ?? Cara Menjalankan

1. **Install dependencies**
```bash
composer install
```

2. **Jalankan server Symfony**
```bash
symfony server:start
```
atau
```bash
php -S localhost:8000 -t public/
```

3. **Buka di browser**
```
http://localhost:8000
```

## ?? Preview

Aplikasi menampilkan daftar todo dengan card berdesain glassmorphism, statistik tugas, dan background animasi blobs.

## ?? Catatan

- Data menggunakan dummy data yang didefinisikan langsung di Controller
- Checkbox bersifat disabled (hanya untuk tampilan)
- Menggunakan `asset()` function untuk load CSS

## ????? Author

Dibuat untuk belajar Symfony Framework dengan konsep UI modern.
