function maxArea(height) {
  let area = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let currentArea = 0;
    let smallHeight = Math.min(height[left], height[right]);
    currentArea = (right - left) * smallHeight;
    if (area < currentArea) area = currentArea;
    if (height[left] < height[right]) left++;
    else right--;
  }

  return area;
}
