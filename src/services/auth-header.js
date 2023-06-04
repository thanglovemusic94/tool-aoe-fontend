export default function authHeader() {
  const token = localStorage.getItem("token") ? JSON.parse(localStorage.getItem("token")) : null;
  //const token = localStorage.getItem("token") ;

  console.log(token.token)
  if (token) {
    // For Spring Boot back-end
    return { Authorization: "Bearer " + token.token };

    // for Node.js Express back-end
    // return { "x-access-token": token };
  } else {
    return {};
  }
}
