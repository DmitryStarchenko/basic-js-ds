const { NotImplementedError } = require("../lib");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor(value) {
    this.rootNode = value !== undefined ? new Node(value) : null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.rootNode === null) {
      this.rootNode = newNode;
      return;
    }
    const searchTree = (node) => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newNode;
        } else {
          searchTree(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newNode;
        } else {
          searchTree(node.right);
        }
      }
    };
    searchTree(this.rootNode);
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (data === current.data) {
        return current;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }
      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }
      if (!node.left && !node.right) {
        return null;
      }
      if (!node.left) {
        return node.right;
      }
      if (!node.right) {
        return node.left;
      }
      let successor = node.right;
      while (successor.left) {
        successor = successor.left;
      }
      node.data = successor.data;
      node.right = removeNode(node.right, successor.data);
      return node;
    };
    this.rootNode = removeNode(this.rootNode, data);
  }

  min() {
    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree,
};
