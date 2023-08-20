let sum:number=0;
let list:number[]=[]
for (let h = 1; h <= 100; h++) {
    if (h%2==0) {
        sum=sum + h
        console.log("h",h);
        list.push(h)    
    }
}
console.log("sum",sum,list);
