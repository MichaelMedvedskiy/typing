

//todo: NOT NEEDED IN THIS VERSION OF CODE
//this is the method that will influence the array
const getActualLetterArray = (previousLetterArray, newLetter)=>
{
    if(previousLetterArray.length>4){
        return [...previousLetterArray.slice(1,4),newLetter];
    }
    return [...previousLetterArray,newLetter];
}

const getTwoTyped = (letterArray)=>(letterArray.slice(0,1));

const getInType = (letterArray)=>(letterArray[2]);

const getTwoTobeTyped = (letterArray)=>(letterArray.slice(3,4));

export {getInType,getTwoTobeTyped,getTwoTyped};