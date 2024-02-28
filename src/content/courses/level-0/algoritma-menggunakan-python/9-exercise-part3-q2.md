---
title: "Exercise Part 3 - Q2"
type: "exercise"
---

# Exercise Part 3 - Q2

Buatlah fungsi `sort_product` untuk melakukan sorting data. Fungsi ini menerima tiga parameter: `data_source` (list dictionary), `key` (`string`, kemungkinan nilainya adalah 'id', 'product_name', 'category', 'price', 'stock', dan 'sold'), dan `direction` (`string`, 'asc' untuk mengurutkan nilai dari kecil ke besar, 'desc' untuk sebaliknya), dan mengembalikan data dengan format yang sama dengan data-nya. Contoh penggunaannya adalah sebagai berikut:

```python
output = sort_product(data, 'id', 'asc')
output = sort_product(data, 'category', 'desc')
output = sort_product(data, 'sold', 'desc')
```

Buat file baru bernama `exercise_part3_Q12.py` dan gunakan template ini untuk mengerjakan soal.

```python
def sort_product(data, key, direction):
    # tulis kode kamu disini
    return


if __name__ == '__main__':
    # copy data dari deskripsi di Q1
    print(sort_product(data, 'price', 'asc'))
```

> [!TIP]
> Kamu tidak perlu membuat pengecekan terhadap tipe data `number` dan `string` saat sorting.
> Untuk melakukan perbandingan dengan `string`, kamu bisa menggunakan cara yang sama dengan perbandingan dengan `number`.
>
> ```python
> # Penggunaan operator >, >=, <, dan <= pada dua buah string akan menghasilkan nilai boolean.
> # Python akan otomatis membandingkan string berdasarkan urutan alphabet.
> print('coat' < 'sweater') # Output: True
> print('pants' > 'coat') # Output: True
> ```
