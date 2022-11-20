export const RequestTwo = (props) => {
  const data = props.preferences;
  console.log(data);

  return fetch("127.0.0.1:8080/recommendations/two", {
    method: "POST", // or 'PUT'
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Success:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
