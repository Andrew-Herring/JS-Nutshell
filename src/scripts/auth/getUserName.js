import {authDataManager} from "./authDataManager"

const getUserName = (activeUser) => {
  return authDataManager.singleUser(activeUser).then((user)=> {
    return user.username
  })
}

export {getUserName}