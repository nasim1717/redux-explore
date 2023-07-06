const { createAsyncThunk } = require("@reduxjs/toolkit");
const fetch = require("node-fetch");

const randomvedio = createAsyncThunk("random/vedio", async () => {
  const response = await fetch("http://localhost:9000/videos");
  const data = await response.json();
  return data;
});

module.exports = randomvedio;
