function intersection(arr1, arr2) {
    return arr1.filter(num => arr2.includes(num));
  }
  
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  const result = intersection(arr1, arr2);
  console.log(result); 