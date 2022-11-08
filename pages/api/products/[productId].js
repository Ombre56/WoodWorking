import connectMongo from "../../../database/conn";
import { getProduct, putProduct, deleteProduct } from "../../../database/controller";

export default function handler(req, res) {
  connectMongo().catch(() => res.status(405).json({ error: "Error in the Connection" }));

  //type of request
  const { method } = req;

  switch (method) {
    case 'GET':
      getProduct(req, res)
      break;
    case 'PUT':
      putProduct(req, res)
      break;
    case 'DELETE':
      deleteProduct(req, res)
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowd`);
      break;
  }
}