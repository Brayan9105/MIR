class BinaryTree{
    constructor(){
        this.root = null
    }

    createTree(value){
        if(!this.root) this.root = new Node(value)
        else return 'The tree already exist'
    }


    add(node, value){
       if(!this.root) return 'The tree does not exist'
       else if(node.value > value){
            if(node.left === null){
                node.left = new Node(value)
            }else{
                node = node.left
                this.add(node, value)
            }
       }else{
            if(node.right === null){
                node.right = new Node(value)
            }else{
                node = node.right
                this.add(node, value)
            }
       } 
    }



    traverseBFS(node){
        // console.log(node.value)
        // if(!this.root) console.log( 'The tree does not exist')
        // else if(node.left){
        //     console.log(`Value left: ${node.value}`)
        //     traverseBFS(node.left)
        // }
        // else{
        //     console.log(`Value right: ${node.value}`)
        //     traverseBFS(node.right)
        // }
    }


    traverseDFS(node){
        if(!this.root) console.log( 'The tree does not exist')
        else if(node){
            console.log(`Value: ${node.value}`)
            this.traverseDFS(node.left)
            this.traverseDFS(node.right)
        }
    }

    ValidateTraverseDFS(node){
        if(!this.root) console.log( 'The tree does not exist')
        else if(node){
            if(node.left !== null && node.right !== null){
                if(node.left.value < node.value && node.right.value > node.value){
                    console.log(`left child: ${node.left.value} Parent: ${node.value} Right child: ${node.right.value} ====> TRUE`)
                }else{
                    console.log(`left child: ${node.left.value} Parent: ${node.value} Right child: ${node.right.value} ====> FALSE`)
                }
            }else{
                console.log(`Node with value ${node.value} does not have childs`)
            }


            this.ValidateTraverseDFS(node.left)
            this.ValidateTraverseDFS(node.right)
        }
    }


}

class Node{
    constructor(value, right=null, left=null){
        this.value = value
        this.right = right
        this.left = left
    }
}

// const tree = new BinaryTree()
// tree.createTree(4)
// tree.add(tree.root, 2)
// tree.add(tree.root, 7)

// tree.add(tree.root, 1)
// tree.add(tree.root, 3);
// console.log('--------- LEFT ------------')
// console.log(tree.root.left)
// console.log('--------- RIGHT ------------')
// console.log(tree.root.right)
// tree.traverseBFS(tree.root)
// tree.traverseDFS(tree.root)

module.exports = {BinaryTree, Node}