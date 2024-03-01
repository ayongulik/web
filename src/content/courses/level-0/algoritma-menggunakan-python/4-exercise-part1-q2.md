---
title: "Exercise Part 1 - Q2"
type: "exercise"
tags: ["level-0", "python"]
enableTestCases: true
---

# Exercise Part 1 - Q2

Neilshan akan mengadakan pesta ulang tahun. Namun, tidak semua orang bisa menghadiri pesta ulang tahun Neilshan. Neilshan akan menerima tamu yang memenuhi semua kriteria di bawah ini:

1. Berpakaian formal (`boolean`)
2. Sudah mengisi RSVP (`boolean`)
3. Tidak mengajak teman lain lebih dari 2 (`number`)
4. Membawa hadiah yang bernilai minimal 200 euro (`number`)

Jika kriteria nomor 1 dan 2 terpenuhi namun ada salah satu dari kriteria 3 dan 4 yang tidak terpenuhi, maka Neilshan akan menanyakan almamater kuliahnya. Apabila tamunya ini beralmamater 'UHasselt' atau 'Unpar' (`string`), maka tamunya akan tetap diterima. Selain itu, tamunya akan ditolak.

Buatlah kode untuk menentukan apakah seseorang dapat menghadiri ulang tahun Neilshan atau tidak. Print string 'Diterima!' apabila Neilshan menerima tamunya, dan print string 'Ditolak~' apabila Neilshan menolak tamunya.

Gunakan template ini untuk mengerjakan soal. Semua nilai kriteria yang dibutuhkan diambil dari parameter pada fungsi `main`.

```python
def main(formal, rsvp, number_of_friends, gift_price, almamater):
    # tulis kode kamu disini


if __name__ == '__main__':
    # test input yang berbeda disini
    main(True, True, 2, 200, 'UHasselt')
```

<details>
<summary>Test Cases</summary>

```
Input:
True True 2 200 'UHasselt'

Output:
'Diterima!'
```

```
Input:
True True 2 200 'BSI'

Output:
'Diterima!'
```

```
Input:
True True 2 100 'Unpar'

Output:
'Diterima!'
```

```
Input:
True False 2 200 'Unpar'

Output:
'Ditolak~'
```

```
Input:
True True 5 200 'Unpar'

Output:
'Diterima!'
```

</details>
