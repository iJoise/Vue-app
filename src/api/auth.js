import http from "@/api/http";

export async function login(login, password) {
  let { data } = await http.post(
    "auth/login.php",
    { login, password },
    {
      errorAlert: "при попытке логина",
    }
  );
  return data;
}

export async function check() {
  try {
    let { data } = await http.get("auth/check.php");
    return data;
  } catch (e) {
    return { res: false };
  }
}
