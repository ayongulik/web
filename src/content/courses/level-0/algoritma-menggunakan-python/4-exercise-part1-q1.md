---
title: "Exercise Part 1 - Q1"
type: "exercise"
tags: ["level-0", "python"]
enableTestCases: true
chapter: 1
---

# Exercise Part 1 - Q1

Seseorang akan lulus mata kuliah di Universitas Hasselt apabila:

- Nilai ujiannya lebih besar atau sama dengan 10
- Nilai ujiannya kurang dari 10 dan lebih besar sama dengan 9, tetapi mata kuliah tersebut dapat ditolerasi

Buatlah kode untuk menentukan apakah seseorang akan lulus mata kuliah di Universitas Hasselt berdasarkan nilai yang diperoleh. Print string 'Lulus!' apabila sesuai dengan kriteria lulus, dan print string 'Tidak lulus~' apabila sebaliknya.

Gunakan template ini untuk mengerjakan soal. Nilai ujian (`number`) dan toleransi (`boolean`) diambil dari parameter pada fungsi `main`.

```python
def main(score, tolerable):
    # tulis kode kamu disini


if __name__ == '__main__':
    # test input yang berbeda disini
    main(10, False)
```

<details>
<summary>Test Cases</summary>

```
Input:
10 False

Output:
'Lulus!'
```

```
Input:
9 False

Output:
'Tidak lulus~'
```

```
Input:
9 True

Output:
'Lulus!'
```

</details>
