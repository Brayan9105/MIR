const  solution =  (root, L, R) =>{
    ans = 0
    stack = [root]
    // def rangeSumBST(self,):
        
        while (stack){
            node = stack.pop()
            if (node){
                if( L <= node.val <= R){
                    ans += node.val
                }
                if(L < node.val){
                    stack.append(node.left)
                }
                if(node.val < R){
                    stack.append(node.right)
                }
            }
        }
        return ans
}

console.log(solution([10,5,15,3,7,null,18], L = 7, R = 15)) 32
[10,5,15,3,7,13,18,1,null,6], L = 6, R = 10 23