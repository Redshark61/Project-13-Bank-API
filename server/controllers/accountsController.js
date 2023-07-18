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

export default {
    getUserAccounts
}