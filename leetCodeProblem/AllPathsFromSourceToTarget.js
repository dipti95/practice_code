function allPathsSourceTarget(graph) {
  let arr = [];
  function depthFS(index, path) {
    console.log(path[path.length - 1] == graph.length - 1);

    if (path[path.length - 1] == graph.length - 1) {
      arr.push(path);
      return;
    }
    for (let i = 0; i < graph[index].length; i++) {
      depthFS(graph[index][i], [...path, graph[index][i]]);
    }
  }
  depthFS(0, [0]);
  return arr;
}
