# Knight Travails

Make board - 8x8
    0, 0 is bottom left
    x, y

make legal move function, 
    takes current position 
    returns array of legal moves

enqueue/discover each legal move

dequeue next move
visit move
    check if move is target position
    enqueue next legal moves

repeat until route found

