const coding = ['js','java','python','ruby','swift']

coding.forEach( function(item) {
    console.log(item);
})

coding.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item, index, arr);
})

const myCoding = [
    {
        lang_name: "javascript",
        lan_file_name : "js"
    },
    {
        lang_name: 'java',
        lan_file_name : "java"
    },
    {
        lang_name: 'python',
        lan_file_name : "py"
    }
]

myCoding.forEach( (item) =>{
    console.log(item.lang_name);
    console.log(item.lan_file_name);

})