const promise1=Promise.resolve("hello");

const promise2=Promise.resolve("shivam");

const promise3=Promise.resolve("Are u coding the promise");

const promise4=new Promise(()=>SetTimeout(resolve,2000,"you are right i am doing coding"));

Promise.all([promise1,promise2,promise 3,promise4]).then(values)=>console.log(values);

)