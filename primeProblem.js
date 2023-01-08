let n = 5;
let count = 0;
for(let i = 1; i<=5; i++)
{
 if(n%10)
{
count++;
}
}

(count ==2)?console.log("Prime"): console.log("Not Prime");