function solution(numbers, target) {
    var answer = 0;

    function dfs(index, sum) {
        if (index === numbers.length) {
            // 탈출조건
            if (sum === target) {
                answer++;
            }
            return;
        }

        dfs(index + 1, sum + numbers[index]);
        dfs(index + 1, sum - numbers[index]);

    }
    dfs(0 , 0);
    return answer;
}

console.log(solution([4, 1, 2, 1], 4))