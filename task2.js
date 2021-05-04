const name = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirde', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
]

function callback(result){
    console.log(result);
}
function getFilter(x, limit, callback) {
    const newArr = name.filter(item => item.toLocaleLowerCase().includes(x))
    const arrBaru = newArr.splice(0,limit)
    return callback(arrBaru)
}
getFilter('an', 3, callback)