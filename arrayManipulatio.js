function processArray(array){
    return array.map(num=>{
        if (num%2 ==0){
            return num*num
        }
        else{
            return num*3;
        }
    })
}





function formatArrayStrings(array_strings,processedArray){
    if (array_strings.length !== processedArray.length){
        
        throw new Error('Both arrays must have the same length')

    }

    return array_strings.map((str,index)=>{
        if (processedArray[index] % 2 ==0){
            return str.toUpperCase()
        }
        else{
            return str.toLowerCase()
        }
    });

}


module.exports ={processArray,formatArrayStrings}
