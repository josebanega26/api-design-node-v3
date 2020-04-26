export const crudControllers = {
  getAll: async (req, res, next) => {
    res.send({
      message: 'send all'
    })
  },
  getOne: async (req, res, next) => {
    res.send({
      message: 'send one'
    })
  },
  postOne: async (req, res, next) => {
    res.send({
      message: 'posted one'
    })
  },
  putOne: async (req, res, next) => {
    res.send({
      message: 'put one'
    })
  },
  deleteOne: async (req, res, next) => {
    res.send({
      message: 'delete one'
    })
  }
}
