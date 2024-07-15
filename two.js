var twoSum = function(nums, target) {
  for (i in nums){
    let num = nums[i]
    let need = target - num;
    let right = nums.slice(Number(i) + 1, nums.length);
    let j = right.indexOf(need);
    console.log(j + Number(i) + 1);
    if (j != -1) {
      return [i, j + Number(i) + 1]
    }
  }
};


nums1 = [2,7,11,15]
target1 = 9

console.log(twoSum(nums1, target1))
