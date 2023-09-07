const trovaIndice = (nums, target) => {
    const dicitionary = {}
    for(let i = 0; i < nums.length; i++ ){
        let val = nums[i]
        dicitionary[val] = i ;
    }

    for(let i = 0; i < nums.length; i++ ){
        let potentialKey = target-nums[i];
        if(dicitionary[potentialKey] && dicitionary [potentialKey] !== i){
            return [i,dicitionary[potentialKey]]
        }
    }
}
const nums = [2, 11, 7,15];
const target = 9;
/* 
diff = {
    9-2= 7
    9-11=2
    9-7= 2
}
hashmap{
2:0
11:1

}  
[0,2]
*/
console.log(trovaIndice(nums,target));

const nums2 = [2, 11, 7,15];
const target2 = 26;
console.log(trovaIndice(nums2,target2));

const nums3 = [2,1,5,7,3];
const target3 = 4 ; 
console.log(trovaIndice(nums3,target3));