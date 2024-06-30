# API x Supabase

API ini memungkinkan Anda mengelola data user menggunakan Express.js, ORM Prisma, dan Supabase sebagai database dengan PostgreSQL.

* [Persyaratan](#persyaratan)
* [Instalasi](#instalasi)
* [Daftar Endpoint](#daftar-endpoint)

> ## Persyaratan

- **Node.js**: Versi terbaru LTS direkomendasikan.
- **NPM**: Terinstall bersama Node.js.
- **PostgreSQL**: Digunakan melalui Supabase.
- **Prisma ORM**: Untuk manajemen database.
- **Express.js**: Framework untuk membangun API.

> ## Instalasi

1. Clone repositori ini
   ```bash
   git clone https://github.com/syarifyahyash/api-supabase.git
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

### User

#### 1. Mendapatkan Semua User
- **Endpoint:** `GET /users`
- **Deskripsi:** Mendapatkan daftar semua user.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "All Users Successfully Retrieved!",
    "data": [
      {
        "id": "number",
        "name": "string",
        "gender": "string",
        "email": "string"
      }
    ]
  }
  ```

#### 2. Mendapatkan User Berdasarkan ID
- **Endpoint:** `GET /users/:id`
- **Deskripsi:** Mendapatkan detail user berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "User Successfully Retrieved!",
    "data": {
      "id": "number",
      "name": "string",
      "gender": "string",
      "email": "string"
    }
  }
  ```

#### 3. Menambahkan User
- **Endpoint:** `POST /users`
- **Deskripsi:** Menambahkan user baru.
- **Body Request:**
  ```json
  {
    "name": "John Doe",
    "gender": "male",
    "email": "johndoe@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "status": 201,
    "message": "User Successfully Added!",
    "data": {
      "id": "number",
      "name": "string",
      "gender": "string",
      "email": "string"
    }
  }
  ```

#### 4. Memperbarui User
- **Endpoint:** `PUT /users/:id`
- **Deskripsi:** Memperbarui data user berdasarkan ID.
- **Body Request:**
  ```json
  {
    "name": "Jane Doe",
    "gender": "female",
    "email": "janedoe@example.com"
  }
  ```
- **Response:**
  ```json
  {
    "status": 200,
    "message": "User Successfully Updated!",
    "data": {
      "id": "number",
      "name": "string",
      "gender": "string",
      "email": "string"
    }
  }
  ```

#### 5. Menghapus User
- **Endpoint:** `DELETE /users/:id`
- **Deskripsi:** Menghapus user berdasarkan ID.
- **Response:**
  ```json
  {
    "status": 200,
    "message": "User Successfully Deleted!"
  }
  ```

## Penggunaan

Gunakan tools seperti Postman untuk menguji endpoint yang telah disediakan.

## Kontribusi

Kontribusi sangat terbuka! Silakan buat pull request atau buka issue untuk diskusi.

## Lisensi

MIT License

---