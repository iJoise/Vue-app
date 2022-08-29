import http from "@/api/http";

export async function load(token) {
  let { data } = await http.get("cart.php", {
    params: { token },
    errorAlert: {
      text: "при загрузке корзины",
      critical: true,
    },
  });

  return data;
}

export async function add(token, id) {
  let { data } = await http.post(
    "cart.php",
    { token, id },
    {
      errorAlert: "при добавлении товара",
    }
  );
  return data;
}

export async function remove(token, id) {
  let { data } = await http.delete("cart.php", {
    params: { token, id },
    errorAlert: "при удалении товара",
  });
  return data;
}

export async function change(token, id, cnt) {
  let { data } = await http.put(
    "cart.php",
    { token, id, cnt },
    {
      errorAlert: "при изменении количества товара",
    }
  );
  return data;
}
