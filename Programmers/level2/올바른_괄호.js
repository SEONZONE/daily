function solution(s){
    let count =0;
    for(let i=0; i<s.length; i++){
        if(s[i] === '('){
            count+=1;
        }else{
            count-=1;
            if(count < 0){
                return false
            }
        }

    }
    return count === 0;
}

console.log(solution("()()" ));
console.log(solution("(())()" ));
console.log(solution(")()(" ));
console.log(solution("(()(" ));
