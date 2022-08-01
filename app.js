// Bài 1 Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức A = 0 + 1 + 2 + … + n
// let n = Number(prompt('nhập vào số n'));
// let b =0 ;
// if (Number.isInteger(n)){
//     console.log("n là số hợp lệ");
//     for(i=0;i<=n; i=i+1){
//         b= b+i;
//     }console.log(` kết quả là ${b}`);
// }else{
//     console.log(' mời bạn nhập lại');
// }





//  bài 2 Viết một đoạn mã cho phép người dùng nhập vào một số n.
//  Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không.
//   Nếu đó là số hợp lệ, tiến hành tính kết quả của biểu thức B = 1 x 2 x 3 x … x n

// let n =Number(prompt('nhập vào số n'));
// let b = 1 ;
// if (Number.isInteger(n) === true){
//     console.log("n hợp lệ");
//     for(let i=1 ;i<= n ; i=i+1){
//         b= b*i
//     }console.log(b);
// }else{
//     console.log("mời bạn nhập lại");
// }


//bài 3 Viết một đoạn mã cho phép người dùng nhập vào một số n.
//  Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ,
//  tiến hành tính tổng của biểu thức C = 1 + ½ + ⅓ + … + 1/n 

// let n = Number(prompt('nhập vào số n'));
// let b = 0;
// if(Number.isInteger(n)){
//     console.log('n là số hợp lệ');
//     for(i=1 ;i<=n ;i=i+1){
//         b = b + (1/i) ;
//     }console.log(` kết quả là ${b}`);
// }else{
//     console.log(" mời bạn nhập lại");
// }

//bài 4 Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên hợp lệ hay không. Nếu đó là số hợp lệ, 
// tiến hành tính tổng của biểu thức A = 1 x ½  + ½ x ⅓  + ⅓ x ¼  + … + 1/(n-1) x 1/n
// let n = Number(prompt('nhập vào số n'));
// let b = 1;
// if(Number.isInteger(n)){
//     console.log('n là số hợp lệ');
//     for(i=1 ;i<=n ;i=i+1){
//     b= b + (1/(i*(i+1)));

//     } console.log(b);
// }else{
//     console.log((' mời bạn nhập lại'));
// }




//5 Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành in ra bảng cửu chương của số đó từ 1 — 10
// let n =Number(prompt(' nhập vào số n'));
// if(Number.isInteger(n)){
//     alert('n hợp lệ')
//     for(i=1 ;i<=10 ; i=i+1){
//     let b = (n*i);
//     console.log(`${n}x${i}= ${b}`);}

// }else {
//     alert(' n không hợp lệ mời nhập lại')
// }

//bài 6 Viết một đoạn mã cho phép người dùng nhập vào một số n. 
// Tiến hành kiểm tra xem đó có phải là một số nguyên dương hợp lệ hay không. 
// Nếu đó là số hợp lệ, tiến hành in ra màn hình console dãy số fibonacci n phần tử

// let n = parseInt(prompt('nhập vào số n '));
// if (Number.isInteger(n)=== true){
//     if(n>=0){
// let a = 0;
//     let b = 1; 
//     let c;
// for (let i = 1; i <= n; i++) {
//     console.log(a);
//     c = a + b;
//     a = b;
//     b = c;
// }
// }else (console.log("so khong hop le"));
// }






