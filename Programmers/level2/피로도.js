function solution(k, dungeons) {
    let answer = -1;
    let maxDungeons = 0;

    let visited = Array(dungeons.length).fill(false);
    function dfs(piro,count){
        maxDungeons = Math.max(maxDungeons, count);
        for(let i=0; i<dungeons.length; i++){
            // 갈수 있는지 판단 (갈 수 있고 + 아직 방문하지 않았고)
            if(piro >= dungeons[i][0] && !visited[i]){
                // 방문처리
                visited[i] = true
                // 재귀호출
                dfs(piro - dungeons[i][1],count + 1)
                // 원상복구
                visited[i] = false
            }
        }
    }
    console.log(visited)
    dfs(k,0)
    return maxDungeons;
}

console.log(solution(80	,[[80,20],[50,40],[30,10]]));