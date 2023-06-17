// Yêu cầu:
// 1. nhập a
// 2. nhập b
// 3. nhập c
// 4. nhập d
// 5. tìm ước chung lớn nhất UCLN(a, b, c, d)

using System;

namespace MyApp
{
    class Program{
        // hàm tìm max(int, int, int, int) có 4 tham số
        public static int max(int bien1, int bien2, int bien3, int bien4){
            int max = bien1;

            // tạo mảng để tìm max
            int[] arr = {bien1, bien2, bien3, bien4};

            foreach(int item in arr){
                if (max < item)
                {
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

            for (int i = index_bat_dau; i >= index_ket_thuc; i--)
            {
                bool kiemTra1 = bien1 % i == 0 ? true : false;
                bool kiemTra2 = bien2 % i == 0 ? true : false;
                bool kiemTra3 = bien3 % i == 0 ? true : false;
                bool kiemTra4 = bien4 % i == 0 ? true : false;

                if (kiemTra1 && kiemTra2 && kiemTra3 && kiemTra4)
                {
                    UCLN = i;
                    break;
                }
            }

            return UCLN;
        }

        public static void Main(string[] agrs){
            Console.Write("Nhap a: ");
            int a = Convert.ToInt32(Console.ReadLine());

            Console.Write("Nhap b: ");
            int b = Convert.ToInt32(Console.ReadLine());

            Console.Write("Nhap c: ");
            int c = Convert.ToInt32(Console.ReadLine());

            Console.Write("Nhap d: ");
            int d = Convert.ToInt32(Console.ReadLine());

            // gọi hàm tìm ước chung lớn nhất
            int x = Ham_Tim_UCLN(a, b, c, d);

            Console.Write("\nUCLN(" + a + ", " + b + ", " + c + ", " + d + ") = ");
            Console.Write(x);
        }
    }
}