const {Node, BinaryTree} = require('./binaryTree.js')

// console.log(BinaryTree)

const tree = new BinaryTree()
tree.createTree(4)
// tree.add(tree.root, 2)
// tree.add(tree.root, 7)

// tree.add(tree.root, 1)
// tree.add(tree.root, 3);
// console.log('--------- LEFT ------------')
// console.log(tree.root.left)
// console.log('--------- RIGHT ------------')
// console.log(tree.root.right)
// tree.traverseBFS(tree.root)


const nodo7 = tree.root.left = new Node(7)
const nodo2 = tree.root.right = new Node(2)

const node3 = nodo7.left = new Node(3)
const node1 = nodo7.right = new Node(1)

tree.traverseDFS(tree.root)
tree.ValidateTraverseDFS(tree.root)