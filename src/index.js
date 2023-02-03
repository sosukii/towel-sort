// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.map((e, i) => (i % 2 === 0 ? e : e.reverse())).flat(1);
};
