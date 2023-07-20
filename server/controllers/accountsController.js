import accountsService from "../services/accountsService.js";

const getUserAccounts = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await accountsService.getUserAccounts(req)
    response.status = 200
    response.message = 'Successfully got user accounts'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = error.type
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

const getUserTransactions = async (req, res) => {
  let response = {}

  try {
    const responseFromService = await accountsService.getUserTransactions(req)
    response.status = 200
    response.message = 'Successfully got user transactions'
    response.body = responseFromService
  } catch (error) {
    console.log('Error in userController.js')
    response.status = error.type
    response.message = error.message
  }

  return res.status(response.status).send(response)
}

const getCategories = async (req, res) => {
    let response = {}

    try {
        const responseFromService = await accountsService.getCategories(req)
        response.status = 200
        response.message = 'Successfully got categories'
        response.body = responseFromService
    } catch (error) {
        console.log('Error in userController.js')
        response.status = error.type
        response.message = error.message
    }

    return res.status(response.status).send(response)
}

export default {
  getUserAccounts,
  getUserTransactions,
  getCategories
}