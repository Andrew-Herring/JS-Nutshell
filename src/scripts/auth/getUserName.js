import {authDataManager} from "./authDataManager"

// getUserName grabs the single user from Data Manager and then returning the user name
const getUserName = (activeUser) => {
  return authDataManager.singleUser(activeUser).then((user)=> {
    return user.username
  })
}

export {getUserName}