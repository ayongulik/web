---
title: "Exercise Part 3 - Q1"
type: "exercise"
---

# Exercise Part 3 - Q1

Stanley adalah seorang manajer di sebuah toko retail. Dia ingin melakukan analisis terhadap produk yang dijual di tokonya. Kebetulan, tokonya sudah punya sistem dan Stanley bisa mengambil data dari sistemnya dengan bentuk `list`. Struk `item` pada `list`-nya adalah berbentuk `dictionary` dengan key `id`, `product_name`, `category`, `price`, `stock` dan `sold` seperti di bawah ini:

```python
data = [
    {
        'id': 1,
        'product_name': 'Soft overcoat coat',
        'category': 'coat',
        'price': 65.95,
        'stock': 120,
        'sold': 30
    },
    {
        'id': 2,
        'product_name': 'High neck knit sweater',
        'category': 'sweater',
        'price': 39.95,
        'stock': 49,
        'sold': 0
    },
    {
        'id': 3,
        'product_name': 'Wide-leg jumpsuit with golden buttons',
        'category': 'pants',
        'price': 55.95,
        'stock': 100,
        'sold': 50
    },
    {
        'id': 4,
        'product_name': 'Wide-leg trousers with drawstring waistband',
        'category': 'pants',
        'price': 39.95,
        'stock': 83,
        'sold': 125
    },
    {
        'id': 5,
        'product_name': 'Mom Jeans',
        'category': 'pants',
        'price': 29.95,
        'stock': 5,
        'sold': 234
    },
    {
        'id': 6,
        'product_name': 'Soft oversize coat',
        'category': 'coat',
        'price': 69.95,
        'stock': 124,
        'sold': 12
    },
    {
        'id': 7,
        'product_name': 'ZW collection trench coat with belt',
        'category': 'coat',
        'price': 89.95,
        'stock': 95,
        'sold': 97
    },
    {
        'id': 8,
        'product_name': 'Contrast knit sweater',
        'category': 'sweater',
        'price': 39.95,
        'stock': 2,
        'sold': 55
    },
    {
        'id': 9,
        'product_name': 'Sweatshirt with rhinestone slogan',
        'category': 'sweater',
        'price': 39.95,
        'stock': 24,
        'sold': 135
    },
    {
        'id': 10,
        'product_name': 'High waist boot-cut jeans',
        'category':  'pants',
        'price': 39.95,
        'stock': 2,
        'sold' 143
    }
]


```

### Q1.1

Buatlah fungsi `get_product_by_category` untuk memfilter data berdasarkan nilai `category`. Fungsi ini menerima dua parameter: `data_source` (list dictionary) dan `category_name` (`string`), dan mengembalikan data dengan format yang sama dengan data-nya:

Buat file baru bernama `exercise_part3_Q11.py` dan gunakan template ini untuk mengerjakan soal.

```python
def get_product_by_category(data, category_name):
    # tulis kode kamu disini
    return


if __name__ == '__main__':
    # copy data dari deskripsi di Q1
    print(get_product_by_category(data, 'sweater'))
```
