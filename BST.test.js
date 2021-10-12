const BST = require('./BST');

test('Testing contains on empty tree', () => {
    let tree = new BST();
    expect(tree.contains(45)).toBe(false);
});

test('Testing contains for true', () => {
    let tree = new BST();
    tree.put(2);
    expect(tree.contains(2)).toBe(true);
});

test('Testing contains for true', () => {
    let tree = new BST();
    tree.put(2);
    expect(tree.contains(3)).toBe(false);
});