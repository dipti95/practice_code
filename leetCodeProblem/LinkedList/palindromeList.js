function isPalindrome(head) {
    let stack = []
    while (head) {
        stack.push(head.val)
        head = head.next
    }

    return stack.every((e, i) => e === stack[stack.length - i - 1]);
}
//-----------------------
// better than previous
function isPalindrome(head) {
    let current = head;
    let orig = "";
    let rev = "";
    while (current) {
        orig += current.val;
        rev = current.val + rev
        current = current.next
    }

    return orig === rev
}
// -----------------------