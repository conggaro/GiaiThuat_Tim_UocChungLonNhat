// Yêu cầu:
// 1. nhập a
// 2. nhập b
// 3. nhập c
// 4. nhập d
// 5. tìm ước chung lớn nhất UCLN(a, b, c, d)

package GiaiThuat_Tim_UCLN_code_Java;

import java.util.Scanner;

public class Program {
    // hàm tìm max
    public static int max(int bien1, int bien2, int bien3, int bien4){
        int max = bien1;

        // tạo mảng để tìm max
        int[] arr = {bien1, bien2, bien3, bien4};

        for (int item : arr) {
            if (max < item) {
                max = item;
            }
        }

        return max;
    }

    // hàm tìm ước chung lớn nhất
    public static int Ham_Tim_UCLN(int bien1, int bien2, int bien3, int bien4){
        int UCLN = 0;

        // tạo index bắt đầu
        int index_bat_dau = max(bien1, bien2, bien3, bien4);

        // tạo index kết thúc
        int index_ket_thuc = 1;

        for (int i = index_bat_dau; i >= index_ket_thuc; i--) {
            boolean kiemTra1 = bien1 % i == 0 ? true : false;
            boolean kiemTra2 = bien2 % i == 0 ? true : false;
            boolean kiemTra3 = bien3 % i == 0 ? true : false;
            boolean kiemTra4 = bien4 % i == 0 ? true : false;

            if (kiemTra1 && kiemTra2 && kiemTra3 && kiemTra4) {
                UCLN = i;
                break;
            }
        }

        return UCLN;
    }

    public static void main(String[] agrs){
        Scanner dt = new Scanner(System.in);

        System.out.print("Nhap a: ");
        int a = dt.nextInt();

        System.out.print("Nhap b: ");
        int b = dt.nextInt();

        System.out.print("Nhap c: ");
        int c = dt.nextInt();

        System.out.print("Nhap d: ");
        int d = dt.nextInt();

        // gọi hàm tìm ước chung lớn nhất
        int x = Ham_Tim_UCLN(a, b, c, d);

        System.out.print("\nUCLN(" + a + ", " + b + ", " + c + ", " + d + ") = ");
        System.out.print(x);
    }
}
