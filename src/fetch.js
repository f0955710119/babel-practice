const getData = (url) => {
  fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
    })
    .then((data) => console.log(data))
    .catch((err) => console.err(err.message));
};

getData(
  "https://data.ntpc.gov.tw/api/datasets/EDC3AD26-8AE7-4916-A00B-BC6048D19BF8/json?page=0&size=5"
);
