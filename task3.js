  
const seleksiNilai = (nilaiAwal, nilaiAkhir, dataarray) => {
    if (nilaiAkhir < nilaiAwal) {
        console.log('Harus lebih dari 5');
    } else if (dataarray.length < 5) {
        console.log('data harus lebih dari 5');
    } else {
        const arrayFilter = dataarray.filter(item => {
            return item > nilaiAwal && item < nilaiAkhir
        })
        const newArr = arrayFilter.sort((a, b) => {
            return a - b
        })
        console.log(newArr);
    }
}

seleksiNilai(5, 20, [2, 25, 4, 14, 17, 30, 8])
