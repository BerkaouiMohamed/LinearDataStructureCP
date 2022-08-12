var arr1 = [3, 1, 7, 9]
var arr2 = [2, 4, 1, 9, 3]
let sum = 0
let test, i, j, k, l
let a = 0
var arr3=[]

for (i = 0; i < arr1.length; i++) {
  test = 0
  for (j = 0; j < arr2.length; j++) {
    if (arr1[i] == arr2[j]) {
      test = -1
      break;
    }
  }
  if (test != -1) {
    sum = sum + arr1[i];
    arr3[a] = arr1[i];
    a++
  }
}

for (k = 0; k < arr2.length; k++) {
  test = 0
  for (l = 0; l < arr1.length; l++) {
    if (arr2[k] == arr1[l]) {
      test = -1;
      break;
    }
  }
  if (test != -1) {
    sum = sum + arr2[k];
    arr3[a] = arr2[k];
    a++;
  }
}
document.write("les numeros deffirent sont:", arr3, " et la somme :", sum)
