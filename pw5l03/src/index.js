function displayComments(response) {
  console.log(response.data);
  console.log(response.data[0].body);
}

let apiURL = "https://jsonplaceholder.typicode.com/comments";
axios.get(apiURL).then(displayComments);
