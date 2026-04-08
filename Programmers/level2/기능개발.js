function solution(progresses, speeds) {
    let days = [];
    let answer = [];
    let count = 1;
    for(let i =0; i<progresses.length; i++){
        let result = Math.ceil((100 - progresses[i]) / speeds[i])
        days.push(result)
    }
    let maxDays = days[0]
    for(let i=1; i<days.length; i++){
        if(days[i] > maxDays){
            answer.push(count)
            maxDays = days[i]
            count = 1
            console.log("i : " + i + " days.length: " +  days.length)

        }else{
            count ++
        }

    }
    if(days[days.length-1] <= maxDays){
        answer.push(count)
    }
    return answer;
}
console.log(solution([93, 30, 55],	[1, 30, 5]))
console.log(solution([95, 90, 99, 99, 80, 99],	[1, 1, 1, 1, 1, 1]))