export const productsListDb = async () => {
  const list = await fetch("http://localhost:3000/products");
  return await list.json();
};

export const productAddDb = async (product) => {
  const post = await fetch("http://localhost:3000/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  if (!post.ok) {
    throw new Error("Erro ao adicionar produto");
  }
  return await post.json();
}

export const productDeleteDb = async (id) => {
  const del = await fetch(`http://localhost:3000/products/${id}`, {
    method: "DELETE",
  });
  if (!del.ok) {
    throw new Error("Erro ao deletar produto");
  }
  return await del.json();
}