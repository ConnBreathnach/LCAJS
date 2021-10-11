class BST{
    constructor() {
        this.root = null;
    }
    
    constructor(root) {
        this.root = root;
    }

    put(currentNode, newNode) {
        if(this.root == null) {
            this.root = node;
            
        } else {
            if(currentNode.value < newNode.value) {
                if(currentNode.left == null) {
                    currentNode.left = newNode;
                } else {
                    this.put(currentNode.left, newNode);
                }
            } else {
                if(currentNode.right == null) {
                    currentNode.right = newNode;
                } else {
                    this.put(currentNode.right, newNode);
                }
            }
        }

    }

}

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}