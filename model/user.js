import { Schema, models, model } from 'mongoose';
const bcrypt = require("bcryptjs")

const addressSchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  number_home: {
    type: Number,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
});

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    index: { unique: true, sparse: true },
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: 'Użytkownik',
  },
  address: [addressSchema],
  orders: {
    type: Schema.Types.ObjectId,
    ref: 'products'
  },
}, {
  timestamps: true
});

userSchema.pre("save", function (next) {
  const user = this
  
  if (this.isModified("password") || this.isNew) {
    bcrypt.genSalt(10, function (saltError, salt) {
      if (saltError) {
        return next(saltError)
      } else {
        bcrypt.hash(user.password, salt, function(hashError, hash) {
          if (hashError) {
            return next(hashError)
          }
          
          user.password = hash
          next()
        })
      }
    })
  } else {
    return next()
  }
})

const Users = models.user || model('user', userSchema);
export const Address = models.address || model('address', addressSchema);

export default Users;