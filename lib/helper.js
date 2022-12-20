
const BASE_URL = process.env.BASE_URL;

// all products
export const getProducts = async () => {
  const response = await fetch(`${BASE_URL}api/products`);
  const json = await response.json()

  return json;
}

// single product
export const getProduct = async (productId) => {
  const response = await fetch(`${BASE_URL}api/products/${productId}`)
  const json = await response.json()

  if (json) return json;
  return {}
}

// posting a new product
export async function addProduct(formData) {
  try {
    const Options = {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/products`, Options)
    const json = await response.json()
    return json;

  } catch(error) {
    return error;
  }
}

// Update a new product
export async function updateProduct(productId, formData){
    const Options = {
        method : 'PUT',
        headers : { 'Content-Type': "application/json"},
        body: JSON.stringify(formData)
    }

    const response = await fetch(`${BASE_URL}api/products/${productId}`, Options)
    const json = await response.json()
    return json;
}

// Delete a new product
export async function deleteProduct(productId){
    const Options = {
        method : 'DELETE',
        headers : { 'Content-Type': "application/json"},
    }

    const response = await fetch(`${BASE_URL}api/products/${productId}`, Options)
    const json = await response.json()
    return json;
}
