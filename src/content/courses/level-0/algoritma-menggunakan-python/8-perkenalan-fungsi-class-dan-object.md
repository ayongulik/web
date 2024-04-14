---
title: "Perkenalan Fungsi, Class dan Object"
type: "material"
chapter: 6
---

# Perkenalan Fungsi, Class dan Object

Dua konsep yang akan dikenalkan pada chapter ini digunakan untuk meningkatkan _reusability_ dari kode Python. Salah satu manfaat dari implementasi konsep ini adalah kita tidak perlu melakukan duplikasi kode yang memiliki cara kerja yang identik.

## Fungsi

Fungsi atau function adalah salah satu konsep algoritma untuk membungkus kode menjadi sehingga bisa dipakai kembali di tempat lain. Apabila kalian sudah mengerjakan exercise pada course ini, kalian seharusnya sudah cukup familiar dengan pembuatan fungsi `main` dan cara pemanggilannya. Karakteristik dari sintaks Python adalah menggunakan kata kunci `def`. Berikut adalah sintaks dasar dari fungsi:

```python
def nama_fungsi(parameter_1, parameter_2, ...):
    # kode yang ingin dieksekusi
    return
```

Untuk lebih jelasnya, perhatikan contoh berikut:

```python
# Contoh 1.a
def add(a, b):
    return a + b

print(add(2, 3)) # output: 5
print(add(5, 10)) # output: 15
```

Pada Contoh 1.a, kita mendefinisikan fungsi `add` dengan dua buah parameter `a` dan `b`. Lalu baris selanjutnya kita mengembalikan hasil operasi penambahan dengan menggunakan kata kunci `return`. Setelah mendefinisikan fungsi `add`, kita dapat memanggil fungsi ini berkali-kali seperti pada contoh dengan nilai parameter yang berbeda-beda.

Mendefinisikan parameter pada fungsi dan mengembalikan nilai menggunakan `return` itu sifatnya opsional. Kita juga bisa membuat fungsi tanpa parameter dan return seperti pada contoh di bawah ini:

```python
# Contoh 1.b
def print_this_text(text):
    print(text)

def print_hello_world():
    print('Hello, World~')

print(print_this_text('Hello, World~')) # output: 'Hello, World~'
print(print_hello_world()) # output: 'Hello, World~'
```

Contoh-contoh yang diberikan sampai saat ini adalah contoh fungsi yang terlalu simpel dan mungkin kurang relevan dengan realita. Tentunya, tidak semua operasi-operasi kecil pada kode kita harus dibuat menjadi fungsi. Yang jelas, apabila kamu menemukan ada bagian dari kode kamu yang mungkin bisa digunakan kembali, kode itulah yang bisa kamu jadikan fungsi.

Sebagai gambaran, salah satu contoh fungsi yang mungkin lebih representatif dapat dilihat pada kode di bawah ini, dimana kode di dalamnya mengolah `list` yang cukup kompleks sehingga cukup patut untuk dijadikan fungsi:

```python
def generate_sentences(bucket_of_words):
    output = ''

    for words in bucket_of_words:
        sentence = ''
        for word in words:
            sentence = sentence + word + ' '

        output = output + sentence + '\n'

    return output

sentences = generate_sentences(
    [
        ['I', 'like', 'learning', 'new', 'stuffs'],
        ['However,', 'it', 'is', 'not', 'always', 'easy'],
        ['I', 'believe', 'if', 'I', 'consistently', 'practice,', 'I', 'can', 'get', 'a', 'valuable', 'skill', 'faster']
    ]
)

print(sentences)
```

### Scoping pada fungsi

Kode di dalam fungsi dapat mengakses variable yang di definisikan di luar fungsi. Perhatikan contoh di bawah ini:

```python
a = 100

def add(b):
    return a + b

print(a) # output: 100
print(add(5)) # output: 105
```

Operasi penambahan di dalam fungsi `add` dapat mengakses nilai pada variable `a` yang di definisikan sebelum fungsinya. Sehingga saat pemanggilan fungsi `add(5)`, operasi penambahannya dapat menghasilkan output pada contoh.

Apabila kita menulis parameter dengan nama yang sama dengan variable yang telah terdefiniskan, fungsi akan tetap mengambil nilai dari parameter.

```python
a = 100

def add(a, b):
    return a + b

print(a) # output: 100
print(add(2, 3)) # output: 5
```

## Class dan Object

Tanpa kalian sadari, sebenarnya kalian sudah sering berinteraksi dengan `object` di Python, karena sebenarnya semua entitas pada Python direpresentasikan sebagai `object`. Kalau tidak percaya, coba jalankan contoh di bawah ini:

```python
my_values = [5, 3.14, True, [1, 2, 3], {'key': 'value'}]

for value in my_values:
    print(type(value))

# output:
# <class 'int'>
# <class 'float'>
# <class 'bool'>
# <class 'list'>
# <class 'dict'>
```

Sebuah `object` adalah hasil inisiasi dari suatu `class` yang memiliki attribute dan method. Sedangkan `class` bisa diterjemahkan sebagai cetak biru dari `object`. Sehingga tidak heran bahwa hasil dari percobaan kita sebelumnya memunculkan output seperti itu.

Contoh sintaks dasar dari `class` dari cara menginisiasi `object` dapat dilihat pada kode berikut:

```python
class NamaClass:
    def __init__(self, parameter_1, parameter_2, ...):
        # kode dalam constructor
        self.attribute = parameter_1

    def nama_method(self, parameter_1, parameter_2, ...):
        # kode dalam method

obj = NamaClass(1, 2, ...)
```

Untuk mendefinisikan sebuah `class`, kita menggunakan keyword `class`. Di dalam blok kode `class`, kita dapat menuliskan fungsi atau dalam konteks ini biasa disebut method. Ciri utama dari method adalah parameter pertamanya merujuk kepada diri sendiri atau `self`.

Di bagian paling awal setelah penulisan nama `class`, kita menemukan satu fungsi yang memiliki nama unik, yaitu fungsi `__init__`. Fungsi ini adalah fungsi `constructor` pada `class` yang dipanggil saat pertama kali menginisiasi `object`. Cara menginisiasi `object` mirip dengan melakukan pemanggilan pada fungsi. Parameter yang dimasukkan pada inisiasi `object` adalah parameter yang digunakan pada fungsi `__init__`.

Kode berikut adalah contoh penggunaan `class` untuk merepresentasikan sebuah circle atau lingkaran:

```python
import math

class Circle:
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return round(math.pi * self.radius ** 2, 2)

circle_4 = Circle(4)
print(circle_4.radius) # output: 4
print(circle_4.calculate_area()) # output: 50.27

circle_5 = Circle(5)
print(circle.radius) # output: 5
print(circle.calculate_area()) # output: 78.54
```

Pada contoh, `class Circle` menerima parameter constructor berupa radius dan di set sebagai attribute. Class `Circle` juga memiliki method `calculate_area` untuk menghitung luas area lingkaran. Setelah object `circle_4` diinisiasi, attribute `radius` dan method `calculate_area` dapat diakses dari `object` `circle_4`.

Masih banyak lagi konsep yang berhubungan dengan class dan object. Untuk belajar lebih lanjut, silakan mengunjungi chapter 'extras' (tunggu update terbaru!).
