function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  let swap = nums2.length < nums1.length
  if (swap) {
    ;[nums1, nums2] = [nums2, nums1]
  }

  let total = nums1.length + nums2.length
  let half = Math.floor(total / 2)

  let left = 0

  let right = nums1.length - 1
  while (true) {
    let mid = Math.floor((left + right) / 2)
    let remaining = half - mid - 2
    let num1left, num1right, nums2left, num2right
    mid >= 0 ? (num1left = nums1[mid]) : (num1left = -Infinity)
    mid + 1 < nums1.length
      ? (num1right = nums1[mid + 1])
      : (num1right = Infinity)
    remaining >= 0 ? (nums2left = nums2[remaining]) : (nums2left = -Infinity)
    remaining + 1 < nums2.length
      ? (num2right = nums2[remaining + 1])
      : (num2right = Infinity)
    if (num1left <= num2right && nums2left <= num1right) {
      if (total % 2 === 0) {
        let median =
          (Math.max(num1left, nums2left) + Math.min(num1right, num2right)) / 2

        return median
      } else return Math.min(num1right, num2right)
    } else if (num1left > num2right) {
      right = mid - 1
    } else left = mid + 1
  }
}
