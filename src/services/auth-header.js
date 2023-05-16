export default function authHeader() {
  const token = sessionStorage.getItem("token") ? JSON.parse(sessionStorage.getItem("token")) : null;
  //const token = sessionStorage.getItem("token") ;

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
