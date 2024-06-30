# API x Supabase

API x Supabase adalah API untuk mengelola data user menggunakan Express.js, ORM Prisma dan Supabase sebagai database.

* [Persyaratan](#persyaratan)
* [Instalasi](#instalasi)
* [Daftar Endpoint](#daftar-endpoint)

> ## Persyaratan

- **Node.js**: Versi terbaru LTS direkomendasikan.
- **NPM**: Terinstall bersama Node.js.
- **MariaDB**: Versi 10.9.8.
- **Prisma ORM**: Untuk manajemen database.
- **Express.js**: Framework untuk membangun API.


> ## Instalasi

1. Clone repositori ini
   ```bash
   git clone https://github.com/syarifyahyash/travelin-api.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Setup database dengan Prisma
   ```bash
   npx prisma migrate dev --name init
   ```
4. Jalankan server
   ```bash
   npm run start
   ```


> ## Daftar Endpoint

### API URL
```
https://api1.simantappamekasan.com/
```

### Budaya (Cultures)

#### 1. Menambahkan Budaya
- **Endpoint:** `POST /cultures`
- **Deskripsi:** Menambahkan budaya baru.
- **Body Request:**
  ```json
  {
    "name": "Barong Dance",
    "description": "Barong Dance is a traditional Balinese dance depicting the battle between good (Barong) and evil (Rangda).",
    "province": "Bali",
    "address": "Batubulan Village, Gianyar, Bali"
  }
  ```
- **Response:**
  ```json
  {
    "status": 201,
    "message": "Budaya berhasil ditambahkan!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 2. Mendapatkan Semua Budaya
- **Endpoint:** `GET /cultures`
- **Deskripsi:** Mendapatkan daftar semua budaya.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Semua budaya berhasil ditampilkan!",
    "data": [ 
      { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
     ]
  }
  ```

#### 3. Mendapatkan Budaya Berdasarkan ID
- **Endpoint:** `GET /cultures/:id`
- **Deskripsi:** Mendapatkan detail budaya berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Budaya berhasil ditampilkan!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string"
    }
  }
  ```

#### 4. Memperbarui Budaya
- **Endpoint:** `PUT /cultures/:id`
- **Deskripsi:** Memperbarui data budaya berdasarkan ID.
- **Body Request:**
  ```json
  {
    "name": "Updated Barong Dance",
    "description": "Updated description",
    "province": "Updated Province",
    "address": "Updated address",
  }
  ```
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Budaya berhasil diperbarui!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 5. Memperbarui Gambar Budaya
- **Endpoint:** `PUT /cultures/image/:id`
- **Deskripsi:** Memperbarui gambar budaya berdasarkan ID.
- **Body Request:**
  - **Form Data:** `image` (file)
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Gambar budaya berhasil diupdate!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 6. Menghapus Budaya
- **Endpoint:** `DELETE /cultures/:id`
- **Deskripsi:** Menghapus budaya berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Budaya berhasil dihapus!"
  }
  ```

### Pariwisata (Tours)

#### 1. Menambahkan Pariwisata
- **Endpoint:** `POST /tours`
- **Deskripsi:** Menambahkan pariwisata baru.
- **Body Request:**
  ```json
  {
    "name": "Labuan Bajo",
    "description": "Labuan Bajo is a fishing town located at the western end of the large island of Flores in the Nusa Tenggara region of east Indonesia.",
    "province": "East Nusa Tenggara",
    "address": "Labuan Bajo, Flores, East Nusa Tenggara"
  }
  ```
- **Response:**
  ```json
  {
    "status": 201,
    "message": "Pariwisata berhasil ditambahkan!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 2. Mendapatkan Semua Pariwisata
- **Endpoint:** `GET /tours`
- **Deskripsi:** Mendapatkan daftar semua pariwisata.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Semua pariwisata berhasil ditampilkan!",
    "data": [ 
      { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
      }
    ]
  }
  ```

#### 3. Mendapatkan Pariwisata Berdasarkan ID
- **Endpoint:** `GET /tours/:id`
- **Deskripsi:** Mendapatkan detail pariwisata berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Pariwisata berhasil ditampilkan!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 4. Memperbarui Pariwisata
- **Endpoint:** `PUT /tours/:id`
- **Deskripsi:** Memperbarui data pariwisata berdasarkan ID.
- **Body Request:**
  ```json
  {
    "name": "Updated Labuan Bajo",
    "description": "Updated description",
    "province": "Updated province",
    "address": "Updated address"
  }
  ```
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Pariwisata berhasil diperbarui!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 5. Memperbarui Gambar Pariwisata
- **Endpoint:** `PUT /tours/image/:id`
- **Deskripsi:** Memperbarui gambar pariwisata berdasarkan ID.
- **Body Request:**
  - **Form Data:** `image` (file)
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Gambar pariwisata berhasil diupdate!",
    "data": { 
        "id": "number",
        "name": "string",
        "description": "string",
        "province": "string",
        "address": "string",
        "image": "string"
    }
  }
  ```

#### 6. Menghapus Pariwisata
- **Endpoint:** `DELETE /tours/:id`
- **Deskripsi:** Menghapus pariwisata berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "Pariwisata berhasil dihapus!"
  }
  ```

## Penggunaan

Gunakan tools seperti Postman untuk menguji endpoint yang telah disediakan.

## Kontribusi

Kontribusi sangat terbuka! Silakan buat pull request atau buka issue untuk diskusi.

## Lisensi

MIT License

Dokumentasi ini memberikan informasi yang jelas mengenai setiap endpoint yang tersedia dalam API, cara instalasi, penggunaan, serta cara berkontribusi.
