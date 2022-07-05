import http from "@/api/http";

export async function load(token) {
  let { data } = await http.get("cart/load.php", { params: { token } });
  return data;
}

export async function add(token, id) {
  let { data } = await http.get(`cart/add.php?token=${token}&id=${id}`, {
    errorAlert: "при добавлении товара",
  });
  return data;
}

export async function remove(token, id) {
  let { data } = await http.get(`cart/remove.php?token=${token}&id=${id}`, {
    errorAlert: "при удалении товара",
  });
  return data;
}

export async function change(token, id, cnt) {
  let { data } = await http.get(
    `cart/change.php?token=${token}&id=${id}&cnt=${cnt}`,
    {
      errorAlert: "при изменении количества товара",
    }
  );
  return data;
}
