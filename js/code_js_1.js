// tạo hàm tìm ước chung lớn nhất
function Ham_Tim_UCLN(bien1, bien2, bien3, bien4){
    let UCLN = 0;   // ước chung lớn nhất

    // tạo index bắt đầu
    let index_bat_dau = Math.max(bien1, bien2, bien3, bien4);

    // tạo index kết thúc
    let index_ket_thuc = 1;

    for (let i = index_bat_dau; i >= index_ket_thuc; i--) {
        let kiemTra1 = bien1 % i == 0 ? true : false;
        let kiemTra2 = bien2 % i == 0 ? true : false;
        let kiemTra3 = bien3 % i == 0 ? true : false;
        let kiemTra4 = bien4 % i == 0 ? true : false;

        if (kiemTra1 && kiemTra2 && kiemTra3 && kiemTra4) {
            UCLN = i;
            break;
        }
    }

    return UCLN;
}

// lấy phần tử input 1
var dt1 = document.querySelector("#input_1");

// lấy phần tử input 2
var dt2 = document.querySelector("#input_2");

// lấy phần tử input 3
var dt3 = document.querySelector("#input_3");

// lấy phần tử input 4
var dt4 = document.querySelector("#input_4");

// lấy phần tử button
var dt_button = document.querySelector("button");

// lấy phần tử output
var dt_output = document.querySelector("#output");

// tạo biến để hứng dữ liệu
var a = 0;
var b = 0;
var c = 0;
var d = 0;

dt1.addEventListener("input", function() {
    a = dt1.value;
    console.log("Nhap a: ",dt1.value);
});

dt2.addEventListener("input", function() {
    b = dt2.value;
    console.log("Nhap b: ",dt2.value);
});

dt3.addEventListener("input", function() {
    c = dt3.value;
    console.log("Nhap c: ",dt3.value);
});

dt4.addEventListener("input", function() {
    d = dt4.value;
    console.log("Nhap d: ",dt4.value);
});

// lắng nghe sự kiện click chuột xuống cái button
dt_button.addEventListener("mousedown", function() {
    // gọi hàm tìm ước chung lớn nhất
    let x = Ham_Tim_UCLN(a, b, c, d);

    let str = `UCLN(${a}, ${b}, ${c}, ${d}) = ${x}`;

    dt_output.value = str;
});