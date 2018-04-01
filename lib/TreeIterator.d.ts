declare class TreeIterator {
    constructor(tree: any, root: any, firstResult: any, iterateFunction: number);
    next(): {
        done: boolean;
        value: any;
    };
    [Symbol.iterator](): this;
}
declare namespace TreeIterator {
    const PREV = 1;
    const NEXT = 2;
    const PARENT = 3;
    const PRECEDING = 4;
    const FOLLOWING = 5;
}
export default TreeIterator;
