class BST{
    constructor() {
        this.root = null;
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

    get(node, data) {
        if(node == null){
            return null;
        }
        if(data == node.value) {
            return node;
        }
        if(data < node.data){
            return this.get(node.left, data);
        } else {
            return this.get(node.right, data);
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