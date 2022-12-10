import { Schema, models, model } from 'mongoose';
const bcrypt = require("bcryptjs")

const userSchema = new Schema({
  username: {
    type: String,
    index: { unique: true, sparse: true },
  },
  email: {
    type: String,
    required: true,
    index: { unique: true, sparse: true },
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
  },
  address: {
    type: Array,
    required: true
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

export default Users;