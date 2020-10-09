import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@exemple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'jdoe@exemple.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Mary Jane',
    email: 'mjane@exemple.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
