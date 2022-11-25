var nums1 = [1,2,3,4,5];

function runningSum(nums){
    var sum=nums;
    sum[0]=nums[0];
    for(let i=1;i<nums.length;i++){
        sum[i]=sum[i-1]+nums[i];
    }
    return sum
}


console.log(runningSum(nums1));