const { NotImplementedError } = require("../lib");
// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    const newNode = new Node(data);

    if (!this.rootNode) {
      this.rootNode = newNode;
      return;
    }

    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return;
      }

      if (data < current.data) {
        if (!current.left) {
          current.left = newNode;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }
        current = current.right;
      }
    }
  }

  find(data) {
    let current = this.rootNode;

    while (current) {
      if (data === current.data) {
        return current;
      }

      current = data < current.data ? current.left : current.right;
    }

    return null;
  }

  has(data) {
    return this.find(data) !== null;
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (!node) {
      return null;
    }

    if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    }

    if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    }

    if (!node.left) {
      return node.right;
    }

    if (!node.right) {
      return node.left;
    }

    let minFromRight = node.right;

    while (minFromRight.left) {
      minFromRight = minFromRight.left;
    }

    node.data = minFromRight.data;
    node.right = this.removeNode(node.right, minFromRight.data);

    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;

    while (current.left) {
      current = current.left;
    }

    return current.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

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
