import http from "@/api/http";

export async function all() {
  let { data } = await http.get("products/all.php");
  return data;
}
