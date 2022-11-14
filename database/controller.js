/** Controller */

import Products from "../model/product"

// get http://localhost:3000/api/products
export async function getProducts(req, res) {
  try {
    const products = await Products.find({});

    if (!products) {
      return res.status(404).json({error: "Data not Found"})
    }
    res.status(200).json(products)
  } catch (error) {
    res.status(404).json({error: "Error While Fetching Data"})
  }
}

// get http://localhost:3000/api/products/1
export async function getProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Products.findById(productId);
      res.status(200).json(product)
    }
    res.status(404).json({ error: "Product not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the Product...!" });
  }
}

// post http://localhost:3000/api/products
export async function postProduct(req, res) {
  try {
    const formData = req.body;

    if (!formData) {
      return res.status(404).json({error: "Form Data Not Provided...!"})
    }
    Products.create(formData, function (err, data) {
      return res.status(200).json(data)
    })
  } catch (error) {
    res.status(404).json({error: "Error While Fetching Data"})
  }
}

// put http://localhost:3000/api/products
export async function putProduct(req, res) {
  try {
    const { productId } = req.query;
    const formData = req.body;

    if (productId && formData) {
      const product = await Products.findByIdAndUpdate(productId, formData);
      res.status(200).json(product)
    }
    res.status(400).json({error: "Product Not Selected...!"})
  } catch (error) {
    res.status(404).json({error: "Error While Updating the Data.."})
  }
}

// delete http://localhost:3000/api/products
export async function deleteProduct(req, res) {
  try {
    const { productId } = req.query;

    if (productId) {
      const product = await Products.findByIdAndDelete(productId)
      return res.status(200).json(product)
    }
    res.status(400).json({error: "Product Not Selected...!"})
  } catch (error) {
    res.status(404).json({error: "Error While Deleting the Data.."})
  }
}
