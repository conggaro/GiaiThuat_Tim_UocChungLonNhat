# Giải thuật tìm ước chung lớn nhất
Theo định nghĩa, UCLN của 2 số a và b <br>
--> là số lớn nhất được cả 2 số a và b chia hết cho nó.

Nắm rõ tính chất này, ta có thể đi vào thuật toán tìm UCLN như sau:

1. Ta chỉ cần tiến hành lặp từ lớn tới nhỏ các số trong đoạn từ [max(a, b),1]
2. Số đầu tiên được cả a và b chia hết sẽ là UCLN của a và b.
3. Tìm được ước chung lớn nhất rồi thì break khỏi vòng lặp for.
