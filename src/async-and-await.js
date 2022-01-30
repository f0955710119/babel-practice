const getNumberPrint = async (arr) => {
  function createNumber(arr) {
    return new Promise(function (resolve, reject) {
      resolve(arr);
    });
  }

  function getSum(arr) {
    let sum = 0;
    for (const i in arr) {
      sum += +i;
    }
    return sum;
  }

  try {
    const numberArr = await createNumber(arr);
    const sum = getSum(numberArr);
    console.log(sum);
    return sum;
  } catch (err) {
    console.err(err.message);
  }
};

getNumberPrint([1, 2, 3, 4]);
