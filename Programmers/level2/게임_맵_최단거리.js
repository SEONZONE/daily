function solution(maps) {
    let n = maps.length;
    let m = maps[0].length;

    let directions = [

        {dx: -1, dy: 0},
        {dx: 1, dy: 0},
        {dx: 0, dy: 1},
        {dx: 0, dy: -1}

    ]

    let queue = [];
    queue.push({x: 0, y: 0, dist: 1});

    maps[0][0] = 0;

    while (queue.length > 0) {
        let current = queue.shift();
        let currentX = current.x;
        let currentY = current.y;
        let currentDist = current.dist;
        if (currentX === n - 1 && currentY === m - 1) {
            return currentDist;
        }

        for (let i = 0; i < directions.length; i++) {
            let nextX = currentX + directions[i].dx;
            let nextY = currentY + directions[i].dy;

            if (nextX >= 0 && nextX < n && nextY >= 0 && nextY < m) {
                if (maps[nextX][nextY] === 1) {
                    maps[nextX][nextY] = 0;
                    queue.push({x: nextX, y: nextY, dist: currentDist + 1});
                }
            }
        }
    }
    return -1

}

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));