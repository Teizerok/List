export const getPosts = async () => {
  const responce = await fetch("https://jsonplaceholder.typicode.com/posts");
  return responce.json();
};
