"use strict";

var getData = function getData(url) {
  fetch(url).then(function (response) {
    if (response.ok) {
      return response.json();
    }
  }).then(function (data) {
    return console.log(data);
  })["catch"](function (err) {
    return console.err(err.message);
  });
};

getData("https://data.ntpc.gov.tw/api/datasets/EDC3AD26-8AE7-4916-A00B-BC6048D19BF8/json?page=0&size=5");