class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor() {
        this.root = null;
    }

    contains(node) {
        return this.get(this.root, node) != null;
    }

    put(currentNode, newNode) {
        if(this.root == null) {
            this.root = newNode;

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

    lowestCommonAncestor(currentNode, valOne, valTwo) {
        if(currentNode == null){
            return null;
        }
        if(currentNode.value == valOne || currentNode.value == valTwo){
            return currentNode;
        }
        let leftNode = this.lowestCommonAncestor(currentNode.left, valOne, valTwo)
        let rightNode = this.lowestCommonAncestor(currentNode.right, valOne, valTwo)

        if(leftNode != null && rightNode != null){
            return currentNode;
        }

        if(leftNode == null){
            return rightNode;
        } else {
            return leftNode;
        }

    }
}


module.exports = BST