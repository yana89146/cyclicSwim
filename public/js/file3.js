
function search(){
    console.log("search")
};
function contact(){
    console.log("contact")
};

const btn=document.querySelector(".search")
btn.addEventListener("click",search);

const btn2=document.querySelector(".contact")
btn2.addEventListener("click",contact);

//----АД КОЛЛБЕКОВ---------------------------------------------
// const f=(s,call)=>{
//     console.log(`${s} начала готовить` );
//     call();
// };

// const y=(s,call)=>{
//     console.log(`${s} покушал` );
//     call();
// };
// const i=(s,call)=>{
//     console.log(`${s} помыл посуду` );
//     call();
// };
// const p=(s,call)=>{
//     console.log(`${s} лег спать` );
//     call();
// };
// const r=()=>{
//     console.log(`проснулся` );
 
// };


// f("yana",function(){
//     y("игорь",function(){
//         i("люда",function(){
//             p("рита",function(){
//                 console.log("проснулся")
//             })
//         });
//     });
// });
//___________________________________________
let b=new Promise((res,rej)=>{
    setTimeout(()=>{
        res("ok");
    },5000)
})
b.then((data)=>{console.log(data)})


function* f(){
    yield '1'
    yield '2'
    yield '3'
    return '4'
}
const fu=f();

// const n= new Promise ((res,rej)=>{
//     setTimeout(()=>{res("ГОТОВО")},1000)
//     })
    
//     const l= new Promise ((res,rej)=>{
//         setTimeout(()=>{res("свет вырубили")},3000)
//         })
//     const t=async function(){
//         const n1=await n;
//     alert(n1)
//         const l1=await l;
//         alert(l1)
//     }
//     t();