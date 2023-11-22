// board is 8x8
// 0, 0 is bottom left
// x, y

function legalMoves(currentMove) {
    // 8 moves in total
    // +2 -2 y -> +1 -1 x
    // +2 -2 x -> +1 -1 y
    let x = currentMove.x;
    let y = currentMove.y;
    const path = currentMove.path;
    const moves = [];
    // total moves
    const potentialMoves = [
        {dx: 2, dy: 1}, 
        {dx: 2, dy: -1}, 
        {dx: -2, dy: 1}, 
        {dx: -2, dy: -1}, 
        {dx: 1, dy: 2}, 
        {dx: 1, dy: -2}, 
        {dx: -1, dy: 2}, 
        {dx: -1, dy: -2}, 
    ]
    for (const move of potentialMoves) {
        const newX = x + move.dx;
        const newY = y + move.dy;
        // check if move is legal 
        if (newX >= 0 && newX < 8 && newY >= 0 && newY < 8) {
            // keep track of path to reach this new space
            const newPath = [...path, {x: newX, y: newY}]
            // all legal moves to new spaces added to array
            moves.push({
                x: newX, 
                y: newY,    
                path: newPath           
            });
        }
    }

    return moves;
}

function knightMoves(start, target) {
    const queue = [];
    // add start space to the queue and make it an object
    queue.push({
        x: start[0], 
        y: start[1],
        path: [{x: start[0], y: start[1]}]
    });
    // loop runs until target is reached
    while (true) {
        // dequeue current space/node 
        let current = queue.shift();
        // enqueue legal moves from current space
        legalMoves(current).forEach((move) => queue.push(move));

        // check if current space is the target
        // first path to reach target is shorted due to queue
        if (current.x === target[0] && current.y === target[1]){
            const finalPath = [];
            current.path.forEach((move) => {
                finalPath.push([move.x, move.y])
            });

            printFinish(finalPath);
            return;
        }
            
    }
}

function printFinish(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((square) => console.log(`[${square[0]}, ${square[1]}]`));
}


knightMoves([0,0],[7,7]);