# React - Shingeki no Kyojin

## Live Coding

### Implementation technique

Siswa akan melaksanakan sesi live code di 20 menit terakhir dari sesi mentoring dan di awasi secara langsung oleh Mentor. Dengan penjelasan sebagai berikut:

-   **Durasi**: 20 menit pengerjaan
-   **Submit**: Maximum 10 menit setelah sesi mentoring menggunakan `grader-cli submit`
-   **Obligation**: Wajib melakukan _share screen_ di breakout room yang akan dibuatkan oleh Mentor pada saat mengerjakan Live Coding.

### NOTES

-   Pada skeleton kode yang terdapat file `main.test.js` tidak boleh diubah sama sekali.
-   Dilarang mengganti nama _function_ yang diberikan.
-   Wajib menjalankan `npm install` atau `pnpm install` sebelum mengerjakan project.
-   Kerjakan pada file `App.js` dan `Card.jsx`.

### Description

Pada _Live Code_ ini kalian diminta untuk melanjutkan pembuatan sebuah halaman _web_ Shingeki no Kyojin menggunakan **React Component**. Terdapat beberapa file _component_ `Card.jsx` yang sudah di sediakan pada folder `./src/components` dengan fungsi untuk me-_render_ _component_ _Card_ setiap karakter.

Buatlah _component_ _Card_ tersebut lalu _import_ dan gunakan pada file `./src/App.js`. Berikut penjelasan dari setiap _component_.

#### `App.js`

Pada file ini sudah terdapat _code_ yang perlu kalian lengkapi dan disediakan sebuah variable _charList_ berupa _Array of Objects_

```js
const charList = [
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/10/216895.jpg",
            name: "Eren Jaeger",
            residence: "Wall Rose",
            rank: "-",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/9/215563.jpg",
            name: "Mikasa Ackermann",
            residence: "Wall Rose",
            rank: "-",
            affiliation: "Scout Regiment",
        },
        {
            imageUrl:
                "https://cdn.myanimelist.net/images/characters/8/220267.jpg",
            name: "Armin Arlelt",
            residence: "Wall Rose",
            rank: "Commander",
            affiliation: "Scout Regiment",
        },
        ...
    ];
```

Selain itu kalian juga diminta melakukan beberapa hal, antara lain:

1. Me-_render_ _component_ `Card` sebanyak jumlah data.
2. Melempar data _charList_ pada _component_ `Card` sebagai _props_.

#### `Card.jsx`

_Component_ ini di gunakan untuk me-_render_ sebuah _Character Card_. Pada _component_ ini terdapat sebuah function `Card` yang menerima props `data` dalam bentuk object dengan format setiap _key_-nya sebagai berikut:

| Name          | Data Type |
| ------------- | --------- |
| _imageUrl_    | string    |
| _name_        | string    |
| _residence_   | string    |
| _rank_        | string    |
| _affiliation_ | string    |

Pada bagian ini yang perlu kalian lakukan adalah membuat sebuah _Character Card_ dan menampilkan data `props` yang dilempar dari file `App.js` dengan **_minimum requirement_** sebagai berikut:

1. Memiliki _attribute_ `class` dengan _value_ `character-card`.
2. Memiliki _image_ dengan `src` dari `imageUrl` dan `alt` dari `name` (**tanpa ada prefix maupun suffix**).
3. Memiliki _residence_ dari `residence` dengan menggunakan tag `p`.
4. Memiliki _name_ dari `name` dengan menggunakan tag `p`.
5. Memiliki _affiliation_ dari `affiliation` dengan menggunakan tag `p`.
6. Memiliki _rank_ dari `rank` dengan menggunakan tag `p`.

Berikut ini format card yang **WAJIB** kalian ikuti:

```txt
<image>
<residence>
<name>
<affiliation>
<rank>
```

### Preview

Berikut contoh dari halaman _web_ yang perlu di buat.

![preview](./assets/preview.png)
