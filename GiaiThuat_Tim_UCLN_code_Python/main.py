# Yêu cầu:
# 1. nhập a
# 2. nhập b
# 3. nhập c
# 4. nhập d
# 5. tìm ước chung lớn nhất UCLN(a, b, c, d)

# hàm tìm ước chung lớn nhất 
def Ham_Tim_UCLN(bien1, bien2, bien3, bien4):
    UCLN = 0

    # tạo index bắt đầu
    index_bat_dau = max(bien1, bien2, bien3, bien4)

    # tạo index kết thúc
    index_ket_thuc = 1

    for i in range(index_bat_dau, index_ket_thuc - 1, -1):
        kiemTra1 = True if bien1 % i == 0 else False
        kiemTra2 = True if bien2 % i == 0 else False
        kiemTra3 = True if bien3 % i == 0 else False
        kiemTra4 = True if bien4 % i == 0 else False

        if kiemTra1 and kiemTra2 and kiemTra3 and kiemTra4:
            UCLN = i
            break

    return UCLN

a = int(input("Nhap a: "))
b = int(input("Nhap b: "))
c = int(input("Nhap c: "))
d = int(input("Nhap d: "))

# gọi hàm tìm ước chung lớn nhất
x = Ham_Tim_UCLN(a, b, c, d)

print(f"UCLN({a}, {b}, {c}, {d}) = {x}")