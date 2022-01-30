const arr = [1, 2, 3, 4];
const getNumberPrint = async (arr) => {
  function createNumber(arr) {
    return new Promise((resolve, reject) => {
      resolve(arr);
    });
  }

  function getSum(arr) {
    const sum = arr.reduce((acc, cur) => (acc += cur), 0);
    return sum;
  }

  const numberArr = await createNumber(arr);
  const sum = getSum(numberArr);
  console.log(sum);
  return sum;
};

getNumberPrint([1, 2, 3, 4]);
