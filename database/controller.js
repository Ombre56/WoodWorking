/** Controller */

import Products from "../model/product"

// get http://localhost:3000/api/products
export async function getProducts(req, res) {
  try {
    const products = await Products.find({});

    if (!products) {
      return res.status(404).send({error: "Data not Found"})
    }
    return res.status(200).send(products)
  } catch (error) {
    res.status(404).send({error: "Error While Fetching Data"})
  }
}

// get http://localhost:3000/api/products/1
export async function getProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Products.findById(productId);
      return res.status(200).send(product)
    }
    res.status(404).send({ error: "Product not Selected...!" });
  } catch (error) {
    res.status(404).send({ error: "Cannot get the Product...!" });
  }
}

// post http://localhost:3000/api/products
export async function postProduct(req, res) {
  try {
    const formData = req.body;

    if (!formData) {
      return res.status(404).send({error: "Form Data Not Provided...!"})
    }
    Products.create(formData, function (err, data) {
      return res.status(200).send(data)
    })
  } catch (error) {
    res.status(404).send({error: "Error While Fetching Data"})
  }
}

// put http://localhost:3000/api/products
export async function putProduct(req, res) {
  try {
    const { productId } = req.query;
    const formData = req.body;

    if (productId && formData) {
      const product = await Products.findByIdAndUpdate(productId, formData);
      return res.status(200).send(product)
    }
    res.status(400).send({error: "Product Not Selected...!"})
  } catch (error) {
    res.status(404).send({error: "Error While Updating the Data.."})
  }
}

// delete http://localhost:3000/api/products
export async function deleteProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Products.findByIdAndDelete(productId)
      return res.status(200).send(product)
    }
    res.status(400).send({error: "Product Not Selected...!"})
  } catch (error) {
    res.status(404).send({error: "Error While Deleting the Data.."})
  }
}
