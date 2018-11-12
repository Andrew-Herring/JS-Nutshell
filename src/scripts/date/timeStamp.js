
const timeStamp = () => {
    let n = new Date();
    let y = n.getFullYear();
    let m = n.getMonth() + 1;
    let d = n.getDate();

    return `${m}/${d}/${y}`
}



export { timeStamp }