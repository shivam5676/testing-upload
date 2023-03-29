// const promise1=Promise.resolve("hello");

// const promise2=Promise.resolve("shivam");

// const promise3=Promise.resolve("Are u coding the promise");

// const promise4=new Promise((resolve,reject)=>setTimeout(resolve,2000,"you are saying right i am doing coding"));

// Promise.all([promise1,promise2,promise3,promise4]).then((values)=>console.log(values))



function createpost(){
    return new promise((resolve,reject)=>{
       //update last activity time
    })
}
const user={
    username: 'yash',
    lastactivitytime:"26 march"
}

updatelastactivitytime=>{
    return new promise((resolve,reject)=>{
        setTimeout(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        }, 1000)
    })
}
function userupdateapost(){
    Promise.all([createpost,updatelastactivitytime])
    .then( ([activitytime([createPost({title: 'Post Five', body: 'This is Post Five'}),updatetimemsg]) =>{
        console.log(updatetimemsg)
    })
    .catch(err=>console.log(err))
}