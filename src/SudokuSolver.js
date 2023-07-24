let mat;

function findZeroInSudoku(mat) {
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (mat[i][j] == 0)
                return [i, j];
        }
    }
    return [null, null];
}

function possible(mat, num, x, y) {
    for (let i = 0; i < 9; i++) {
        if (mat[x][i] == num)
            return false;
    }

    for (let i = 0; i < 9; i++) {
        if (mat[i][y] == num)
            return false;
    }

    let x0 = Math.floor(x / 3) * 3;
    let y0 = Math.floor(y / 3) * 3;

    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (mat[x0 + i][y0 + j] == num)
                return false;
        }
    }
    return true;
}

function solve() {
    let [x, y] = findZeroInSudoku(mat);

    if (x == null && y == null)
        return true;

    for (let i = 1; i < 10; i++) {
        if (possible(mat, i, x, y)) {
            mat[x][y] = i;
            if (solve())
                return true;
        }
        mat[x][y] = 0;
    }
    return false;
}

function solveSudoku(sudoku)
{
    mat = new Array(9);
    for(let i = 0; i < 9; i++)
    {
        mat[i] = new Array(9);
        for(let j = 0; j < 9; j++)
            mat[i][j] = sudoku.mat[i][j];
    }
            
    solve();
    return mat;
}

export { solveSudoku };
