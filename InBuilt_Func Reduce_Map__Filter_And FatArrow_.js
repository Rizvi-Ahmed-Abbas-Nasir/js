const array = [1,2,3,4,5];
//double the array value


//-------------Map Funcion------->
// const output = array.map((x) => x*5);// Higher order function
// function isOdd(x)
// {

//     return x%2;

// }

//------------Filter funcion---------->
// const output = array.filter((x)  => x%2 === 0);
// const output = array.filter((x)  => x>3);
//reduce sum of all element of array -> single value


//-------------------- Base Funcion loop--------------->
function isSum(array)
{
    let element =0;
    for (let index = 0; index < array.length; index++) {
        element += array[index];

        
    }
    return element;
}


console.log(isSum(array));

//Accumlator, currentValue, InitialValue


//-------------Reduce Function Loop-------->
// const output = array.reduce(function isSum(element,curr){
//     element = element + curr;
//     return element;
// },
    
// 0);

// console.log(output);

// ------------------FatArrow Function Loop--------->

// const output = array.reduce((element,curr) =>
// {
//     element = element + curr;
//     return element;
// },
// 0);

// console.log(output);


// ------------------FatArrow In Single line Loop---------------------> 
const output = array.reduce((element,curr) => element = element + curr,0);
console.log(output);