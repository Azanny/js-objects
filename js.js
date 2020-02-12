//1
// let testObj={};
// testObj.prop="test property";
// console.log(testObj.prop,testObj["prop"]);

// testObj.pi=Math.PI;

// delete testObj.prop;


// testObj.sumOfTwo = (a,b) => a+b;
// let sum=testObj.sumOfTwo("40",150);
// console.log(sum,typeof(sum))

// let newObj=Object.assign({},testObj,{newProp:{x:10}})

// for (let key in testObj){
//     delete testObj[key];
// }

// copiedObj={...newObj}
// console.log(newObj,copiedObj);
// copiedObj.newProp.x=100;
// console.log(newObj.newProp,copiedObj.newProp);

// copiedArray=[...Object.keys(copiedObj), ...Object.values(copiedObj)]

//2
// function constructObject(objectName="noname", objectNumber=0, objectString=""){
//     return {
//         objectName,
//         objectNumber,
//         objectString,
//         greet:()=>"hello",
//     }
// }

// let constructedObj1=constructObject();
// let constructedObj2=constructObject('test',10,'i\'m a string');
// let values1=[],values2=[];

// for(let key of Object.keys(constructedObj1)){
//     values1.push(constructedObj1[key])
// }
// for(let key of Object.keys(constructedObj2)){
//     values2.push(constructedObj2[key])
// }
// console.log(values1,values2)


//3
const targetObj = {
    x: 1,
    y: {
        w: 'test',
        q: {
            a: true,
            b: () => console.log('useless'),
            c: {
                d: ['a', 'b', 'c']
            }
        }
    },
    z: [1,2,3,4,5]
}



function deepCopy(obj) {
  let copy={};
  for (let key in obj) {
    if (typeof obj[key] === 'object') {
        if(Array.isArray(obj[key])){
            copy[key]=[...obj[key]]
        }
        else{
            copy[key] = deepCopy(obj[key])
        }
    } else {
        copy[key] = obj[key]
    }
  }
  return copy;
}

const copiedObj = deepCopy(targetObj)
console.log(targetObj,copiedObj)

targetObj.y.q.c.d.splice(0,1,100);
const areElementsEqual = targetObj.y.q.c.d[0] === copiedObj.y.q.c.d[0]
console.log(areElementsEqual)