/* 1. method function.call()
yaitu fungsi / method milik dari salah satu objek untuk ditugaskan dan dipanggil untuk objek yang berbeda.
call() memberikan "value" baru dari "this" ke fungsi/method
*/
// contoh method function.apply()
function product (name, price) {
    this.name = name
    this.price = price
}

function game (name, price) {
    product.call(this, name, price)
    this.category = 'game'
}

console.log(new game('assassin creed valhalla', 5000).name)


/* 2. method function.apply()
fungsi/method ini hampir identik dengan fungsi call(), perbedaan nya yaitu kalau fungsi call() "menerima list argument", sedangkan apply() hanya menerima satu argument dari array.
dengan function.apply() kita bisa menulis method satu kali, lalu mewarisinya pada objek lain, tanpa harus menulis ulang method untuk objek baru.
*/
// contoh method function.apply()
const num = [6, 3, 6, 9, 2, 1]

const result = Math.max.apply(null, num)
console.log(result)


/* 3. method object.values()
mengembalikan array yang elemennya adalah nilai property dapat dihitung dan ditemukan pada objek
*/
// contoh method object.values()
const personalId = {
    nama: 'Muhamad Fiqry Arahmansyah',
    umur: 21,
    statusMenikah: false
  };
  
  console.log(Object.values(personalId))

  /* 4. method object.defineProperty()
method ini memungkinkan penambahan atau memodifikasi properti yang tepat pada suatu objek.
*/
// contoh method object.defineProperty()
const data = {}

Object.defineProperty(data, 'property1', {
  value: 99,
  writable: false
})

console.log(data.property1)

  /* 5. method Date.getDate()
method ini memungkinkan penambahan atau memodifikasi properti yang tepat pada suatu objek.
*/
// contoh method Date.getDate()
const myBirthday = new Date('april 03, 2000 23:15:30');
const tanggal1 = myBirthday.getDate();

console.log(tanggal1)

/* 6. method Date.getDay()
method ini memberikan/menghasilkan Bilangan bulat, antara 0 dan 6, sesuai dengan hari dalam seminggu untuk tanggal tertentu, 
0 untuk Minggu, 1 untuk Senin, 2 untuk Selasa, dan seterusnya.
*/
// contoh method Date.getDay()
const myBirthday2 = new Date('april 03, 2000 23:15:30');
const hari1 = myBirthday2.getDay();
if(hari1 == 0){
    console.log("minggu")
}else if(hari1 == 1){
    console.log("senin")
}else if(hari1 == 1){
    console.log("selasa")
}else if(hari1 == 1){
    console.log("rabu")
}else if(hari1 == 1){
    console.log("kamis")
}else if(hari1 == 1){
    console.log("jum'at")
}else if(hari1 == 1){
    console.log("sabtu")
}else{
    console.log("Masukan Tanggal Dengan benar")
}
console.log(hari1)


/* 7. method Boolean.valueOf()
method valueOf mengembalikan "value" primitive dari boolean object atau literal boolean sebagai typedata boolean.
method ini biasa disebut internally di javascript dan bukan explicitly di code
*/
// contoh method Boolean.valueOf()
const data1 = new Boolean()

console.log(data1.valueOf())
// output: false

const data2 = new Boolean('Saya')

console.log(data2.valueOf())
// output: true


/* 8. method TypedArray.find()
method find() mengeksekusi fungsi callback sekali untuk setiap element yang ada dalam array yang diinput hingga menemukan satu di mana sampai callback mereturn "value" true
*/
// contoh method TypedArray.find()
function isNegative(element, index, array) {
    return element < 0;
  }
  
  const baru = new Int8Array([10, 0, -10, 20, -30, 40, -50])
  
  console.log(baru.find(isNegative))


  /* 9. method TypedArray.sort()
method sort() mengurutkan elemen dari array yang diinput secara numerik di tempat dan mengembalikan array yang diketik. Metode ini memiliki algoritma yang sama dengan
Array.prototype.sort() kecuali mengurutkan nilai secara numerik, bukan sebagai string.
*/
// contoh method TypedArray.sort()
const Abaru = new Uint8Array([40, 10, 50, 20, 30])
Abaru.sort()

console.log(Abaru)


 /* 10. method Map.clear()
method clear() menghapus semua element dari object map
*/
// contoh method Map.clear()
const testmap = new Map();

testmap.set('satu', 'dua');
testmap.set(1, 'tiga');

console.log(testmap.size);
//output: 2

testmap.clear();

console.log(testmap.size);
//output: 0