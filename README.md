# Knight Travails

This program finds the shortest path that a knight on a chessboard can take to reach a target space using the breadth-first search (BFS) algorithm.

Given a starting position (x1, y1) and a target position (x2, y2) on an 8x8 chessboard, this program calculates the shortest path that a knight can take from the starting position to the target position.

The program uses a modified BFS algorithm to explore possible knight moves efficiently. It starts from the given starting position and systematically explores all reachable positions, recording the path taken to reach each position. When the target position is reached, the path is returned to reach the target, giving the shortest path possible.

Constraints

    The chessboard size is fixed at 8x8.
    The program assumes valid input coordinates within the range (0, 0) to (7, 7).

Acknowledgments

    The BFS algorithm used is adapted for finding the shortest path for a knight on a chessboard.
    Inspired by classic graph traversal techniques.
    Project a part of 'The Odin Project' course.