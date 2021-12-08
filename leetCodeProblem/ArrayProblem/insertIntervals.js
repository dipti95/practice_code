function insertInerval(intervals, newIntervals) {
  if (intervals.length === 0) return [newIntervals];

  let result = [];
  let inBetween = false;
  let idx;
  for (idx = 0; idx < intervals.length; idx++) {
    let interval = intervals[idx];
    if (interval[1] < newIntervals[0]) result.push(interval);
    else if (interval[0] > newIntervals[1]) {
      result.push(newIntervals);
      inBetween = true;
      break;
    } else {
      newIntervals[0] = Math.min(newIntervals[0], interval[0]);
      newIntervals[1] = Math.max(newIntervals[1], interval[1]);
    }
  }
  if (inBetween === false) {
    result.push(newIntervals);
    return result;
  } else return result.concat(intervals.slice(idx));
}
