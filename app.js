async function axiosRequest() {
  const search = $(".search").val();
  let req = await axios.get("https://api.giphy.com/v1/gifs/search", {
    params: {
      api_key: "TMEdZa0Gb6uwbZSEyJgA9zzBLmUQnYs8",
      q: search,
      limit: "25",
      rating: "g",
      lang: "en",
    },
  });
  return req.data.data[Math.floor(Math.random() * 25)].images.downsized_large
    .url;
}

async function addGIF(axiosRequest) {
  const url = await axiosRequest();
  const gif = $("<img>").attr("src", url);

  $("#gifContainer").append(gif);
}

$(".add").on("click", function () {
  addGIF(axiosRequest);
});

$(".deleteAll").on("click", function () {
  $("img").remove();
});
