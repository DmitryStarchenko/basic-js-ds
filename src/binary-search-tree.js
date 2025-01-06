const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootX = null;
  }

  root() {
    return this.rootX;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.rootX) {
      this.rootX = newNode;
      return;
    }

    let currentNode = this.rootX;
    while (currentNode) {
      if (newNode.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = newNode;
          return;
        }
        currentNode = currentNode.left;
      } else {
        if (!currentNode.right) {
          currentNode.right = newNode;
          return;
        }
        currentNode = currentNode.right;
      }
    }
  }

  has(data) {
    function hasNode(data, node) {
      if (!node) {
        return false;
      }
      if (data === node.data) {
        return true;
      } else {
        if (data < node.data) {
          return hasNode(data, node.left);
        }
          return hasNode(data, node.right);
      }
    }
    return hasNode(data, this.rootX);
  }

  find(data) {
    function findNode(data, node) {
      if (!node) {
        return null;
      }
      if ( data === node.data) {
        return node;
      } else {
        if (data < node.data) {
          return findNode(data, node.left);
        }
          return findNode(data, node.right);
      }
    }
    return findNode(data, this.rootX) ;
  }

  remove(data) {
    this.root = removeNode(data, this.rootX);
    function removeNode(data, node) {
      if (data < node.data) {
        node.left = removeNode(data, node.left);
        return node;
      }
      else if (data > node.data) {
        node.right = removeNode(data, node.right);
        return node;
      }
      else if (data === node.data) {
        if (!node.left && !node.right) {
          return null;
        }
        else if (!node.left) {
          node = node.right;
          return node;
        }
        else if (!node.right) {
          node = node.left;
          return node;
        }
        else {
          let minRight = node.right;
          while (minRight.left) {
            minRight = minRight.left;
          }
          node.data = minRight.data;
          node.right = removeNode(minRight.data, node.right);
          return node;
        }
      }
    }
  }

  min() {
    let isMin = this.rootX;
    while (isMin.left) {
      isMin = isMin.left;
    }
    return isMin.data;
  }

  max() {
    let isMax = this.rootX;
    while (isMax.right) {
      isMax = isMax.right;
    }
    return isMax.data;
  }
}

module.exports = {
  BinarySearchTree
};