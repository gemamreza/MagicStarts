// // Duplikasi Filter

// var w = [0,1,2,3,4,5]

// var newArr = []
// for(var i = 0; i < w.length; i++){
//     if (w[i] !== 2){
//         newArr.push(w[i])
//     }
// }

// console.log(newArr)
// // hasil [ 0,1,3,4,5 ]

// var a = ['Andi','Seto','Seno']

// var filterNama = a.filter(function(a){
//     return a.includes('S')
// })
// console.log(filterNama)

// var y = w.filter((val) => val % 2 == 0)
// console.log(y)

// var mapAngka = w.map(function(val){
//     return val + 5
// })
// console.log(mapAngka)


var orang = [
{nama : "Andi", marga: "Hasibuan"},
{nama : "Budi", marga: "Sinaga"},
{nama : "Caca", marga: "Pasaribu"}
];
function namaLengkap(item, index) {
var fullname = [item.nama,item.marga].join(" ");
return fullname;

}

var a = orang.map(function(item) {
    var fullname = [item.nama,item.marga].join(' ')
    return fullname
})
console.log(a.join(', '))
