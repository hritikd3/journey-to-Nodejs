// what is callback hell? 

// Nesting of callbacks can lead to an unreadable and not easy to manageable codebase commonly known as callback hell in Node. js or pyramid of doom. Node js callback hell can be avoided using Promises and async / await.

function pyramidOfDoom() {
    
// first setTimeout function
setTimeout(() => {
    console.log(1)
    // second nested setTimeout function
    setTimeout(() => {
        console.log(2)
        // third nested setTimeout function
        setTimeout(() => {
            console.log(3)
        }, 500)
    }, 2000)
}, 1000)
};  //1 2 3 