class Node {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }
  
  class BinarySearchTree {
    constructor(root = null) {
      this.root = root;
    }
  
    /** insert(val): insert a new node into the BST with value val.
     * Returns the tree. Uses iteration. */
  
    insert(val) {
      const newNode = new Node(val);
      if (this.root === null) {
        this.root = newNode;
        return this;
      }
      let node = this.root;
      while (true) {
        if (val < node.val) {
          if (!node.left) {
            node.left = newNode;
            break;
          }
          node = node.left;
        }
        else {
          if (!node.right) {
            node.right = newNode;
            break;
          }
          node = node.right;
        }
      }
      return this;
    }
  
    /** insertRecursively(val): insert a new node into the BST with value val.
     * Returns the tree. Uses recursion. */
  
    insertRecursively(val, parent=this.root) {
      if (!this.root) {
        this.root = new Node(val);
        return this;
      }
  
      if (val < parent.val) {
        if (!parent.left) {
          parent.left = new Node(val);
          return this;
        }
        return this.insertRecursively(val, parent.left);
      }
      else {
        if (!parent.right) {
          parent.right = new Node(val);
          return this;
        }
        return this.insertRecursively(val, parent.right);
      }
    }
  
    /** find(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses iteration. */
  
    find(val) {
      if (!this.root) return undefined;
      let node = this.root;
  
      while (node != null) {
        if (node.val === val) return node;
        if (val < node.val) {
          node = node.left;
        } else {
          node = node.right;
        }
      }
    }
  
    /** findRecursively(val): search the tree for a node with value val.
     * return the node, if found; else undefined. Uses recursion. */
  
    findRecursively(val, node=this.root) {
      if (!node) return undefined;
  
      if (node.val === val) return node;
      
      node = val < node.val ? node.left : node.right;
  
      return this.findRecursively(val, node);
    }
  
    /** dfsPreOrder(): Traverse the array using pre-order DFS.
     * Return an array of visited nodes. */
  
    dfsPreOrder(node=this.root, visited=[]) {
      if (!node) return visited;
      visited.push(node.val);
      
      if (node.left) visited.push(...this.dfsPreOrder(node.left));
      if (node.right) visited.push(...this.dfsPreOrder(node.right));
  
      return visited;
    }
  
    /** dfsInOrder(): Traverse the array using in-order DFS.
     * Return an array of visited nodes. */
  
    dfsInOrder(node=this.root, visited=[]) {
      if (!node) return visited;
      
      if (node.left) visited.push(...this.dfsInOrder(node.left));
      visited.push(node.val);
      if (node.right) visited.push(...this.dfsInOrder(node.right));
  
      return visited;
    }
  
    /** dfsPostOrder(): Traverse the array using post-order DFS.
     * Return an array of visited nodes. */
  
    dfsPostOrder(node=this.root, visited=[]) {
      if (!node) return visited;
      
      if (node.left) visited.push(...this.dfsPostOrder(node.left));
      if (node.right) visited.push(...this.dfsPostOrder(node.right));
      visited.push(node.val);
  
      return visited;
    }
  
    /** bfs(): Traverse the array using BFS.
     * Return an array of visited nodes. */
  
    bfs() {
      if (!this.root) return [];
  
      const visited = [];
      let node = this.root;
      const currentNodes = [this.root];
  
      while (currentNodes.length > 0) {
        node = currentNodes.shift();
        visited.push(node.val);
        if (node.left) currentNodes.push(node.left);
        if (node.right) currentNodes.push(node.right);
      }
      return visited;
    }
  
    /** Further Study!
     * remove(val): Removes a node in the BST with the value val.
     * Returns the removed node. */
  
    remove(val) {
  
    }
  
    /** Further Study!
     * isBalanced(): Returns true if the BST is balanced, false otherwise. */
  
    isBalanced(node, leftN=0, rightN=0) {
  
    }
  
    /** Further Study!
     * findSecondHighest(): Find the second highest value in the BST, if it exists.
     * Otherwise return undefined. */
  
    findSecondHighest() {
      
    }
  }
  
  module.exports = BinarySearchTree;