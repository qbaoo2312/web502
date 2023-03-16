// Generics
// Không sử dụng hàm Array.sort()
// Viết lại hàm sort bằng typescript + generic
const numArr = [3, 5, 15, 1, 10, 6];
function sort(array, callback) {
    const newArr = [...array];
    for (let i = 0; i < newArr.length - 1; i++) {
        for (let j = i + 1; j < newArr.length; j++) {
            const res = callback
                ? callback(newArr[i], newArr[j])
                : typeof newArr[i] === "string"
                    ? String(newArr[i]).localeCompare(String(newArr[j]))
                    : Number(newArr[i]) - Number(newArr[j]);
            if (res > 0) {
                const temp = newArr[i];
                newArr[i] = newArr[j];
                newArr[j] = temp;
            }
        }
    }
    return newArr;
}
const numArr2 = sort(numArr, (a, b) => b - a);
console.log(numArr2);
// const numArr2 = ['Bao', 'Quan', 'Quang', 'Cao']
// // Generic
// function showStringData(a: string) :string{
//     return a;
// }
// function showNumberData(a: number) :number{
//     return a;
// }
// function showData<T>(a: T) :T{
//     return a;
// }
// // showData<boolean>("string")
// function web17317_map<T>(arr: T[], callbacks: (item: T, index: number) => T) : T[]{
//     let temp = []
//     for (let i = 0; i < arr.length; i++){
//         const newItem = callbacks(arr[i], i);
//         temp.push(newItem);
//     }
//     return temp
// }
// const result2 = web17317_map(numArr2, (item, index) => {
//     return item + "-we17317" + " " + index
// })
// console.log(result2);
//# sourceMappingURL=generic.js.map