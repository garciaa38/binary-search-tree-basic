// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null;
  }

  insert(val, currentNode=this.root) {
    let newNode = new TreeNode(val);
    if(!currentNode){
      this.root = newNode;
      return
    }
    if(currentNode.val > val){
      if(!currentNode.left){
        currentNode.left = newNode;
      }else {
        this.insert(val,currentNode.left)
      }
      
    }
    else{
      if(!currentNode.right){
      currentNode.right = newNode  
      }else{
        this.insert(val, currentNode.right)
      }
      
    }
  }

  search(val) {
    let cur = this.root;
    
    
    while (cur){
      if(cur.val === val) {return true};
      if(cur.val > val){
        cur = cur.left
      }else{
        cur = cur.right
      } 
    }
    return false
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here 
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here 
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here 
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here 
  }
}

module.exports = { BinarySearchTree, TreeNode };
