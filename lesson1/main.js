// cách khai báo biến
/**comment 1 khoi */
// vô hiệu hóa code
// var fullName = "Tran Duc Hung";
// var age = "20";
// alert(fullName);
// alert(age);
/**
 * Giới thiệu 1 số hàm built-in
 * 1. Alert: mesange
 * 2. Console: 
 * 3. Confirm:
 
 * 4. Prompt: kêt họp alert + confirm + hop thoai input
 * 5. Set timeout
 * 6. Set interval
 * * 1 2 3: bật cửa sổ hộp thoại
 * console.log();
confirm('Xac nhan ban du tuoi!');
prompt('Xac nhan doi tuoi');
setTimeout(function() {
    alert('thong bao');
}, 1000)
setInterval(function() {
    console.log('day la thong bao' + Math.random());
}, 1000)
 */





/* Lam quen voi toan tu
 Gioi thieu toan tu trong JavaScript
1. Toan tu so hoc - Agrithmetic
    var a = 1 * 2;
    console.log(a);
2. Toan tu gan - Assignment
    var fullName = "Tran Duc Hung";
3. Toan tu so sanh - Comparison
    var a = 1;
    var b = 2;
    if (a>b){
        alert('dung');
    }
4. Toan tu logic - logical
    var a = 1
    var b = 2
    if(a > 0 || b>0){
        alert('a b lon hon 0')
    }
*/




/** Toan tu so hoc
 *  +  cộng
 *  -  trừ
 *  *  Nhân
 *  **  Lũy thừa
 *  /   chia
 *  %   chia lấy dư
 *  ++  tăng 1 giá trị số 
 *  --  giảm 1 giá trị số
 */

/** Toán tử gán
    =
    +=
    -=
    *=
    /=      x /= y  x = x/y
    **=   x **= y --> x = x ** y
 */


/** Toan tu ++ --
 * Prefix & Postfix
 * ++a việc 1: +1 cho a, a= a + 1
 * Việc 2: Trả về a sau khi được + 1
 * --a tương tự ++a
 * 
 * postfix:
 * 
 */

// Toán tử chuỗi - String operator

// var fName = "Hung";
// // var lName = "Tran";
// fName += " Dang"
// console.log(fName);

// Boolean
/**
 * 0
 * false
 * undefined
 * NaN
 * null
 * ---> true
 */ 

// chuỗi
// 1.length
// myString.length
/**Find index
 * indexOf('', number)
 * lastIndexOf('')
 * search('')
 */

// 3.Cut String
/**
 * myString.slide(numberfirst, numberlast)
 */

// 4.Replace
/**
 * myString.replace('Js', 'JavaScript')
 * trong chuỗi có nhiều chuỗi sẽ thay thế giống nhau dùng: myString.replace(/JS/g, "javascript")
 */

// 5.Trim
/**
 * Loại bỏ kí tự trắng ở đầu cuối
 * myString.trim()
 */

// 6.Split
/**
 * tách chuỗi thành array với 1 điểm chung nào đó
 * mySring.split("điểm chung")
 */

// 7.get character by index
/**
 * myString.charAt(index)
 */

// 8.làm việc với number
/**
 * toString()
 * toFixed():Làm tròn số
 */

