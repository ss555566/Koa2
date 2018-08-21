function getSomething(){
    return 'something';
}
 
async function testAsync(){
    return 'async Hello async';
}
 
async function test(){
    const v1=await getSomething();
    const v2=await testAsync();
    console.log(v1);
    console.log(v2);
}
 
test();