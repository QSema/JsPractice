// let city= "Sumqayit"
// console.log(city);

// let info= ["Sema", 1, false, null, 5,{
//     age: 17, year: 2006
// }]

// let c= 60
// let d= 40

// console.log(c + d);
// console.log(c - d);
// console.log(c * d);

// let Me= ["Sema", "Baku", 17, 5, false]

// console.log(Me[4]);

// let user= {
//     first: ["Kitap Hırsızı", "Arsen Lupen", "Şeker Portakalı"],
//     second: ["Tom Sawyer", "Dracula", "Anne"],
//     last: ["Shelock Holmes", "Qəbirsanlıq Kitabı", "Hökümdar"],
// }

// console.log(user.first[0]);
// console.log(user.first[2]);

// console.log(user.second[0]);
// console.log(user.second[2]);

// console.log(user.last[0]);
// console.log(user.last[2]);


// console.log(10>9 && 5<7 && 8==8);
// console.log(null || 5);
// console.log(null || "" || 0);
// console.log('3' + 2);


// console.log(1 || 0)
// console.log(null || 1)
// console.log(null || 0 || 1)
// console.log(undefined || null || 0)
// console.log(1 && 0)
// console.log(1 && 5)
// console.log(null && 5)
// console.log(null && "no matter what")
// console.log(null || 2 || undefined)
// console.log(1 && null && 2)


// alert( alert(1) && alert(2) )
// alert( null || 2 && 3 || 4 )


// let net1 = Number(prompt("Zehmet olmasa 1. imtahan neticesini daxil edin")) 
// let net2 = Number(prompt("Zehmet olmasa 2. imtahan neticesini daxil edin")) 
// let net3 = Number(prompt("Zehmet olmasa 3. imtahan neticesini daxil edin"))

// let answer= (((net1) + (net2) + (net3)) /3);

// if (answer > 80) {
//     console.log("Balınız keçid üçün uyğundur");
// }

// else{
//     console.log("Balınız keçid üçün uyğun deyil");
// }


// let User= {
//     name: "Emin",
//     age: 22,
//     city: "Quba",
// }

// let Name= prompt("Zəhmət olmasa adınızı daxil edin")
// let Age= prompt("Zəhmət olmasa yaşınızı daxil edin")

// if ( Name == User.name && Age == User.age) {
//     console.log("Siz uğurla daxil oldunuz");
// }

// else{
//     console.log("Məlumatlarda yanlışlıq var");
// }




// let question1 = prompt("zehmet olmasa 1. nomrenizi girin")
// let question2 = prompt("zehmet olmasa 2. nomrenizi girin")

// alert(`Sizin neticeniz ${Math.pow(question1,question2)}`);

// console.log(typeof question1);
// console.log(typeof question2);

// let pet = prompt("Heyvaninizi qetd edin")

// switch (pet) {
//     case "pisik":
//         alert("Sizin heyvaniniz pisikdir");
//         break;

//     case "it":
//         alert("Sizin heyvaniniz itdir");
//         break;

//     case "qus":
//         alert("Sizin heyvaniniz qusdur");
//         break;

//     default:
//         alert("Sizin heyvaniniz yoxdur")
//         break;
// }

// let theirName = prompt("Zehmat olmasa adinizi daxil edin")

// if (theirName !="") {
//     if (theirName.length >= 8) {
//         alert("Siz ugurla daxil oldunuz")
//     }
//     else{
//         alert("Adinizin uzunlugu 'n az 8 herf olmalidir")
//     }
// }
// else{
//     alert("zehmet olmasa adinizi daxil edin")
// }

// let person = {name:"Elnur",
//               password:255}

// let ask = prompt("Adinizi daxil edin")

// if (ask == person.name) {
//     let pass = prompt("Sifrenizi daxil edin")
//     if (pass == person.password) {
//         alert("Ugurla daxil oldunuz")
//     }
//     else{
//         alert("sifreniz xetalidir")
//     }
// }
// else{
//     alert("Adiniz sehfdir")
// }
// task 1

// let yourInfo = Number(prompt("Zehmet olmasa sira nomrenizi qeyd edin"))

// if (yourInfo %2 === 0) {
//     alert(`${yourInfo} cut ededdir`)
// }
// else if(yourInfo %2 === 1){
//     alert(`${yourInfo} tek reqemdir`)
// }
// else{
//     alert("Zehmet olmasa nomrenizi duzgun qeyd edin")
// }

// // task 2

// let yourMonth = prompt("Zehmet olmasa doguldugunuz ayi qeyd edin")
// switch (yourMonth) {
// case 'Dekabr':
// case 'Yanvar':
// case 'Fevral':
//     alert(`${yourMonth} qis ayidir`)
//     break;

// case 'Mart':
// case 'Aprel':
// case 'May':
//     alert(`${yourMonth} yaz ayidir`)
//     break;    

// case 'Iyun':
// case 'Iyul':
// case 'Avqust':
//     alert(`${yourMonth} yay ayidir`)
//     break;

// case 'Sentyabr':
// case 'Oktyabr':
// case 'Noyabr':
//     alert(`${yourMonth} payiz ayidir`)
//     break;

// default:
//     alert('Zehmet olmasa ayi duzgun qeyd edin')
//     break;
// }

// // task 3

// let week = prompt("Zehmet olmasa heftenin gununu qeyd edin")
// switch (week) {
//     case "Senbe":
//     case "Bazar":
//         console.log("Heftesonudur");
//         break;

//     case "Bazar ertesi":
//     case "Cume":
//     case "Cumeaxsami":
//         console.log("Hefteicidir");
//         break; 

//     default:
//         console.log("Gunu sehf qeyd etmisiniz");
//         break;
// }

// // task 4


// let hour = Number(prompt("Zehmet olmasa gunluk is saadinizi qeyd edin"))
// let price = Number(prompt("Zehmet olmasa saatliq maasinizi qeyd edin"))

// let money1 = hour * 30
// let money2 = money1 * price
// let forMonth = alert(`Ayliq maasiniz ${money2} manatdir`)


// 10 dan 0 qeder azalma

// for (let i = 10; i >= 0; i--) {
//     console.log(i);
// }

// let j = 10

// while (j >= 0) {
//     console.log(j);
//     j--
// }

// let index = 10

// do {
//     console.log(index);
//     index--
// } while (index >= 0);

// let i = [30, 40, 50, 60, 70]

// for (let index = 0; index < i.length; index++) {
//     console.log(i[index]) 
// }

// let j = [45, 67, 90, 23, 43, 21]
// let l = 0
// while (l < j.length) {
//     console.log(j[l]);
//     l++
// }

// let arr = [76, 54, 98, 35, 41]

// let index = 0
// do {
//     console.log(arr[index]);
//     index++
// } while (index < arr.length);


// let sum1 = 0
// let sum2 = 0

// for (let i = 0; i < 20; i++) {
//     if (i % 2 == 0) {
//         sum1 += i
//         console.log(i);
//     }
//     else{
//         sum2 += i
//         console.log(i);
//     }
// }

// console.log("Sum of number: " + sum1);
// console.log("Sum of number: " + sum2);


// let j = 20
// while (j <= 40) {
//     j++
//     if (j == 28) {
//         break
//     }
//     console.log(j);
// }

// for (let index = 1; index < 10 ; index++) {
//     if (index == 8) {
//         continue
//     }
//     console.log(index);
// }




// let arr = [13,23,12,45,22,48,66,100]

// for (let index = 0; index < arr.length ; index++) {
//     if (arr[index] % 2 == 0) {
//         console.log(arr[index]);
//     } 
// }


// for (let o = 1; o < 100; o += 2) {
//     console.log(o);
// }

// for (let t = 0; t < 10; t++) {
//     if (t % 2 == 0) {
//         continue
//     }
//     console.log(t);
// }

// for (let y = 1; y < 5; y++) {
//     console.log("hello");
// }

// for (let h = 0; h < 10; h++) {
//     console.log(h * h);
// }

// let o = 1
// do {
//     o += 2
//     console.log(o);
// } while (o <= 100);

 
// let sum3 = 0

// for (let h = 1; h <= 100 ; h++) {
//     sum3 += h
//     console.log(h);
// }

// console.log("Sum of number: " + sum3);


// let sum4 = 0

// for (let h = 50; h <= 60 ; h++) {
//     sum4 += h
//     console.log(h);
// }

// console.log("Sum of number: " + sum4);


// let e = 0 

// while (e <= 50) {
//     e+=2
//     if (e == 40) {
//         continue
//     }
//     console.log(e);
// }


// let p = 20 

// while (p >0) {
//     p--
//     if (p <= 10 && p >= 5 ) {
//         continue
//     }
//     console.log(p);
// }



// ****************************************************
// ****************************************************
// ****************************************************

// **1**


// for (let i = 1; i < 20; i += 2) {
//     if (i <= 16 && i >= 10) {
//         continue
//     }
//     console.log(i);
// }


// **2**



// function userName(name , surname) {
//     console.log(name + " " + surname);
// }

// userName("Esma" , "Qabulova")


// **3**


// let arr = ["Sadiq", "Elnur", "Xedice", "Natiqe"];

// for (let j in arr) {
//   console.log("Hello"+ " " + arr[j]);
// }


// **4**


// let sum = 0

// let arr2 = [42, 63, 99, 70, 12]

// for (let i of arr2) {
//     sum += i 
// }

// console.log(sum);


// **5**


// let arr3 = [40, 50, 660, 745, 3724]

// for (let index = 0; index < arr3.length; index++) {
//     console.log(`${arr3[index]} ededi`+ " " + arr3[index].toString().length + " reqemlidir" );
// }


// **6**

// const frontendLanguages = [ "HTML", "CSS", "JavaScript", "React"]

// for (let n in frontendLanguages) {
//     console.log(frontendLanguages[n]);
// }


// **7**


// let a = Number (prompt("Reqem daxil edin"))

// function sumNumber(params) {
//     if ( !params == "") {
//         console.log(params * params);
//     }
// }

// sumNumber(a)


// **8**


// for (let index = 0; index < 50; index++) {
//     if (index % 2 == 0) {
//         console.log(index + " Cut ededdir");
//     }
//     else{
//         console.log(index + " Tek ededdir");
//     }
// }

// **9**


// function duz(a , b) {
//     return (a + b) * 2
// }

// let netice = duz(4,8)
// console.log(netice);