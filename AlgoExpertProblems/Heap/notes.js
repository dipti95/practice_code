/* 
Heap => type of binary tree
Should have two condition to satify!!!
 1=> All of its level should be entirely fill up;
 2=> Heap property >> have two type 
 >> Min Heap 
 >> Max Heap
 MIN HEAP => ** Every node value is smaller than or equal to its children node value.
            ** ROOT NODE would be SMALLEST value of Heap;
 MAX HEAP => ** Every node value id larger than or equal to its children node value.
             ** ROOT NODE would be LARGEST value of Heap;
*/

// For example if we have min heap
/*
                            8
                          /  \
                        12   23
                       / \   / \
                     17  31 30  44
                    / \  
                 102   18 


In the form of array it  is written  as
[8,12,23,17,31,30,44,102,18]

SO IF WE WANT TO KNOW THE INDEX OF NODE AND THERE CHILDREN THEN THE FORMULA IS :-
      
       if CURRENT NODE is => i ;
       then, CHILD ONE => 2i +1;
       and CHILD TWO =>2i +2

                 
                 
*/
