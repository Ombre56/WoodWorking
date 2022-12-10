/** Controller */

import Users from "../model/user"

// get http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({});

    if (!users) {
      return res.status(404).send({error: "Data not Found"})
    }
    res.status(200).send(users)
  } catch (error) {
    res.status(404).send({error: "Error While Fetching Data"})
  }
}

// get http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findById(userId);
      res.status(200).send(user)
    }
    res.status(404).send({ error: "User not Selected...!" });
  } catch (error) {
    res.status(404).send({ error: "Cannot get the Product...!" });
  }
}

// post http://localhost:3000/api/users
export async function postUser(req, res) {
  const { email } = req.body;
  try {
    const user = await Users.find({ email });

    if (!user) {
      return res.status(422).send("User is already registered!")
    }
    const formData = req.body;
    
    if (!formData) {
      return res.status(404).send({error: "Form Data Not Provided...!"})
    }
    Users.create(formData, function (err, data) {
      return res.status(200).send(data)
    })

  } catch (error) {
    res.status(404).send({error: "Error While Fetching Data"})
    res.status(400).send({ status: "Not able to create a new user." })
    res.status(422).send(error.message)
  }
}

// put http://localhost:3000/api/users
export async function putUser(req, res) {
  try {
    const { userId } = req.query;
    const formData = req.body;

    if (userId && formData) {
      const user = await Users.findByIdAndUpdate(userId, formData);
      res.status(200).send(user)
    }
    res.status(400).send({error: "User Not Selected...!"})
  } catch (error) {
    res.status(404).send({error: "Error While Updating the Data.."})
  }
}

// delete http://localhost:3000/api/users
export async function deleteUser(req, res) {
  try {
    const { userId } = req.query;

    if (userId) {
      const user = await Users.findByIdAndDelete(userId)
      return res.status(200).send(user)
    }
    res.status(400).send({error: "User Not Selected...!"})
  } catch (error) {
    res.status(404).send({error: "Error While Deleting the Data.."})
  }
}
