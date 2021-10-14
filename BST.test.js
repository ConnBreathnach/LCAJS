const BST = require('./BST');

test('Testing contains on empty tree', () => {
    let tree = new BST();
    expect(tree.contains(45)).toBe(false);
});

test('Testing contains for true', () => {
    let tree = new BST();
    tree.put(tree.root,2);
    expect(tree.contains(2)).toBe(true);
});

test('Testing contains for true', () => {
    let tree = new BST();
    tree.put(tree.root,2);
    expect(tree.contains(3)).toBe(false);
});

test('Testing put and get for large tree', () => {
   let tree = new BST();
   tree.put(tree.root, 2);
   tree.put(tree.root, 1);
   tree.put(tree.root, 3);
   tree.put(tree.root, 4);
   tree.put(tree.root, 0);
   expect(tree.get(tree.root,0)).toBe(0);
   expect(tree.get(tree.root,1)).toBe(1);
   expect(tree.get(tree.root,2)).toBe(2);
   expect(tree.get(tree.root,3)).toBe(3);
   expect(tree.get(tree.root,4)).toBe(4);

});
test('Testing LCA on null tree', () => {
    let tree = new BST();
    expect(tree.lowestCommonAncestor(this.root, 1, 2)).toBe(null);
});
let tree = new BST();
tree.put(tree.root, 2);
tree.put(tree.root, 1);
tree.put(tree.root, 3);
tree.put(tree.root, 4);
tree.put(tree.root, 0);
console.log(tree);
console.log(tree.root.left);
console.log(tree.root.right);
test('Testing Lowest Common Ancestor on large tree with root as base', ()=> {
    expect(tree.lowestCommonAncestor(tree.root, 1, 2).value).toBe(2);
    expect(tree.lowestCommonAncestor(tree.root, 0, 4).value).toBe(2);
    expect(tree.lowestCommonAncestor(tree.root, 3, 1).value).toBe(2);
});