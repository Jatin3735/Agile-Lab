// // let h1 = document.createElement("h1");
// // // function getdata(dataid){
// // //     return new Promise((resolve,reject) => {
// // //         setTimeout(() => {
// // //             h1.innerText = `Data ${dataid}`;
// // //             resolve("success");
// // //         },2000);
// // //     });
// // // }

 
// // // // // getdata(1).then((res) => {
// // // // //     return getdata(2)
// // // // // }).then((res) => {
// // // // //     return getdata(3)
// // // // // }).then((res) => {
// // // // //     console.log(res);
// // // // // })


// // // // //async await

// // // function api(){
// // //     return new Promise((resolve,reject) => {
// // //         setTimeout(() => {
// // //             h1.innerText = 'Weather clean';
// // //             resolve(200);
// // //         },2000)
// // //     })
// // // }

// // let body = document.querySelector("body");


// // body.append(h1);
// // // // async function getweather(){
    
// // // // }

// // // (async function getalldata(){
// // //     h1.innerText = "Fetching data 1....";
// // //     await getdata(1)
// // //     h1.innerText = "Fetching data 2....";
// // //     await getdata(2)
// // //     h1.innerText = "Fetching data 3....";
// // //     await getdata(3)
// // //     h1.innerText = "Fetching data of Weather....";
// // //     await api();
// // //     h1.innerText = "Fetching data of Weather....";
// // //     await api();
// // //     setTimeout(() => {
// // //         h1.innerText = "Data fetch done ";
// // //         h1.style.color = "red";
// // //     },2000)
// // // })();

// // // // // getdata(1, () => {
// // // // //     console.log("getting data2......");
// // // // //     getdata(2, () => {
// // // // //         console.log("getting data3......");
// // // // //         getdata(3 ,() => {
// // // // //             console.log("getting data4......");
// // // // //             getdata(4)
// // // // //         })
// // // // //     })
// // // // // })


// // // // // const getpromise = () => {
// // // // //     return new Promise((resolve,reject) => {
// // // // //         setTimeout(() => {
// // // // //         console.log("I am a Promise");
// // // // //         resolve("success");
// // // // //         },5000)
// // // // //     })
// // // // // };  

// // // // // let promise = getpromise();
// // // // // promise.then((res) => {
// // // // //     console.log("promise fullfilled",res);
// // // // // });
// // // // // promise.catch((err) => {
// // // // //     console.log("Rejected ",err);
// // // // // });

// // // // // document.write("hello");

// // // // // function asyncfunc1(){
// // // // //     return new Promise((resolve,reject) => {
// // // // //         setTimeout(() => {
// // // // //             console.log("data1");
// // // // //             resolve("Success");
// // // // //         },2000);
// // // // //     })
// // // // // }

// // // // // function asyncfunc2(){
// // // // //     return new Promise((resolve,reject) => {
// // // // //         setTimeout(() => {
// // // // //             console.log("data2");
// // // // //             resolve("Success");
// // // // //         },2000);
// // // // //     })
// // // // // }

// // // // // console.log("Fetching data1...");
// // // // // asyncfunc1().then((res) => {
// // // // //     console.log("Fetching data2...");
// // // // //     asyncfunc2().then((res) => {});
// // // // // })



// // // // function resolveafter2minute(){
// // // //     return new Promise((resolve,reject) => {
// // // //         setTimeout(() => {
// // // //             resolve("Resolved");
// // // //         },2000);
// // // //     })
// // // // }

// // // // async function asynccall(){
// // // //     console.log("Calling....");
// // // //     const result = await resolveafter2minute();
// // // //     console.log(result);
// // // // }

// // // // async function getData() {
// // // //     try {
// // // //         const [userRes, postRes] = await Promise.all([
// // // //             fetch("https://jsonplaceholder.typicode.com/users/1"),
// // // //             fetch("https://jsonplaceholder.typicode.com/posts/2")
// // // //         ]);

// // // //         const user = await userRes.json();
// // // //         const post = await postRes.json();

// // // //         console.log("User:", user.name);
// // // //         console.log("Post:", post.title);

// // // //     } catch (error) {
// // // //         console.log("Error => ",error);
// // // //     }
// // // // }

// // // // getData();


// // function pause(time){
// //     return new Promise(resovle => setTimeout(resovle,time))
// // }
// // (async function(){
// //     for(let i =1 ; i<=3;i++){
// //         h1.innerText = `Fetching Data ${i}.....`;
// //         await pause(1000);
// //         h1.innerText = `Data ${i}`;
// //         await pause(1000);
// //     }
// //     h1.innerText = 'Done'
// // })();

// // Example 1:

// // Input: nums = [10,4,8,3]
// // Output: [15,1,11,22]
// // Explanation: The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].
// // The array answer is [|0 - 15|,|10 - 11|,|14 - 3|,|22 - 0|] = [15,1,11,22].

// let nums = [1]
// let left = [];
// let right = [];
// let leftcount = 0;
// let rightcount = 0;
// for(let i=0;i<nums.length;i++){
//     left[i] = leftcount;
//     leftcount += nums[i];
// }
// for(let i=nums.length-1;i>=0;i--){
//     right[i] = rightcount;
//     rightcount += nums[i];
// }
// let ans = left.map((item,i) => Math.abs(item-right[i]))
// console.log(ans);

// ****************** ==========16 september 2026 ========== *******************

// let arr = [10, 8, 2, 1, 1, 2];
// function pairs(arr){
//     let first = [];
//     let sec = [];
//     for(let i=0;i<arr.length;i++){
//         if(i<arr.length/2){
//             first.push(arr[i]);
//         }
//         else{
//             sec.push(arr[i])
//         }
//     }
//     let count = 0;
//     for(let i=0;i<first.length;i++){
//         for(let j=0;j<sec.length;j++){
//             if(first[i]>=5*sec[j]){
//                 count++;
//             }
//         }
//     }
//     console.log(first);
//     console.log(sec);
//     console.log(count);
// }
// pairs(arr)



// ****************** ==========19 september 2026 ========== *******************

let s1 = 'abcd' , s2 = 'acdb' ;
let costs1 = 10 , costs2 = 20;

for(let i = 0; i<s1.length;i++){
    if(s1[i] != s2[i]){
        console.log(s1[i] , s2[i], i);
    }
}