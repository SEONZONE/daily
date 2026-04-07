function solution(numbers) {
    var answer = 0;
    let numArry = [];

    function dfs(current,numArry){
        let numSplit = numbers.split('');
        if(current.length > 0 ){
            numArry.push(numSplit[0]);
        }

    }

    dfs(numbers, numArry);
    return answer;

}


solution(17);