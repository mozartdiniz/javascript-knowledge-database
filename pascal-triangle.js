const pascalTriangle = (numRows) => {
    const triangle = [];

    for (let i = 0; i < numRows; i++) {
        const rowSize = i + 1;

        triangle[i] = new Array(rowSize);

        for(let j = 0; j < rowSize; j++) {
            if (j === 0 || j === i) {
                triangle[i][j] = 1;
            } else {
                triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
            }
        }
    }

    return triangle;
};

console.table(pascalTriangle(6));
