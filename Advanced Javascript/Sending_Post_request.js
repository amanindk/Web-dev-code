const createTodo = async (todor) => {
  let options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(
      todor
      //     {
      //   title: "Amaan",
      //   body: "depptech",
      //   userId: 9999,
      // }
    ),
  };

  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  let response = await p.json();
  return response;
};

const getTodo = async (id) => {
  let response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id
  );
  let r = await response.json();
  return r;
};

const mainFunc = async () => {
  let todor = {
    title: "Amaan",
    body: "depptech",
    userId: 9999,
  };
  let todo = await createTodo(todor);
  console.log(todo);
  console.log(await getTodo(23));
};
mainFunc();
//   .then((response) => response.json())
//   .then((json) => console.log(json));
