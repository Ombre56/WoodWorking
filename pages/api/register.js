// import bcrypt from 'bcryptjs'
import Users from '../../model/user'
export default async function handler(req, res) {
const body = req.body
const user = await Users.findOne({ email: body.email })
if (user) {
res.status(200).json({ message: 'already registered' })
return;
}
// const salt = await bcrypt.genSalt(10);
// const hashPass = await bcrypt.hash(body.password, salt)
const newUser = new Users({ email: body.email, password: body.password })
await newUser.save()
res.status(200).json({ message: 'success' })
}