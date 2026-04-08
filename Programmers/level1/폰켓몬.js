function solution(nums) {
    let temp = new Set(nums)
    let numLength = nums.length/2;

    return temp.size >= numLength ? numLength : temp.size;
}

console.log(solution([3,1,2,3]))