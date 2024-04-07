---
title: "Exercise Part 1 - Q1"
type: "exercise"
tags: ["level-1", "python"]
enableTestCases: true
---

# Exercise Part 1 - Q1

Almira adalah penggemar Taylor Swift. Dia ingin melakukan analisis terhadap lagu-lagu Taylor Swift yang diputar di Spotify. Untungnya, Almira dapat menggunakan data yang tersedia gratis di Kaggle ([link](https://www.kaggle.com/datasets/thespacefreak/taylor-swift-spotify-data)). Tabel berikut memperlihatkan deskripsi dari data tsb.

| Nama kolom       | Deskripsi                                                                  |
| ---------------- | -------------------------------------------------------------------------- |
| name             | Nama lagu                                                                  |
| album            | Nama album                                                                 |
| artist           | Nama artist yang terlibat                                                  |
| release_date     | Tanggal rilis album                                                        |
| length           | Panjang lagu dalam millisecond                                             |
| popularity       | Persentasi popularitas lagu berdasarkan algoritma Spotify                  |
| danceability     | Seberapa gampang lagunya dipakai untuk joget berdasarkan kombinasi elemen-elemen seperti tempo, ritme dan beat |
| acousticness    | Tingkat komponen keakustikan dalam lagu                                    |
| energy           | Ukuran intensitas dan aktivitas pada lagu                                  |
| instrumentalness | Tingkat komponen instrumen dalam lagu                                      |
| liveness         | Probabilitas lagu melibatkan penonton langsung                             |
| loudness         | Tendensi musik direkam pada volume yang tinggi                             |
| speechiness      | Tingkat komponen lirik dalam lagu vs musik                                 |
| valence          | Ukuran sentimen pada lagu (sedih-senang)                                   |
| tempo            | Beat per menit                                                             |

Berikut adalah cuplikan dari data yang akan digunakan:

```
   Unnamed: 0                                         name  ... valence    tempo
0           0                                   Tim McGraw  ...   0.425   76.009
1           1                              Picture To Burn  ...   0.821  105.586
2           2  Teardrops On My Guitar - Radio Single Remix  ...   0.289   99.953
3           3                        A Place in this World  ...   0.428  115.028
4           4                                  Cold As You  ...   0.261  175.558

[5 rows x 16 columns]
```

Almira ingin mengetahui statistik `mean`, `min`, `median` dan `max` dari tiap indicator berikut: popularity, danceability, acousticness, energy, instrumentalness, speechiness, valence dan tempo; dan di group berdasarkan album. Buatlah sebuah fungsi dengan nama `get_stat_by_album` yang menerima satu parameter berupa `DataFrame` dari data sumber, dan mengembalikan `DataFrame` baru dengan column `album`, `indicator`, `mean`, `min`, `median` dan `max`.

Kamu bisa menggunakan template kode di bawah ini untuk mengerjakan soal. Data csv telah tersedia pada online editor.

```python
import pandas as pd

def get_stat_by_album(data):
    # Tulis kodemu di sini
    return

if __name__ == '__main__':
    data = pd.read_csv('spotify_taylorswift.csv', delimiter = ',')

    print(get_stat_by_album(data))
```