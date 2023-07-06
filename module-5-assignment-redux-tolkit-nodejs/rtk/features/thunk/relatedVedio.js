const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const relatedVedios = createAsyncThunk("related/vedios", async (urlParameter) => {
  const response = await fetch(`http://localhost:9000/videos?${urlParameter}`);
  const data = await response.json();
  const datas = data.sort((prev, next) => {
    a = prev.views.toLowerCase();
    b = next.views.toLowerCase();
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else return 0;
  });
  //   console.log("datas sorted", datas);
  return datas;
});

module.exports = relatedVedios;
