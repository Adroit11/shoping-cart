import _ from 'lodash';

export default {
  // Get a user profile using rest api
  getUserProfile:(req, res) => {
    //To access GET variable use.
    //request.var1, request.var2 etc
    res.json({msg:'Welcome smartmed!'})
  },

  // Add a user profile using rest api
  postUserProfile:(req, res) => {
    //To access POST variable use request.body
    // user = { name,email,mobile }
    res.status(200).end();
  },

  // Update a user profile using rest api
  putUserProfile:(req, res) => {
    res.status(200).end();
  },

  // Delete a user profile using rest api
  deleteUserProfile:(req, res) => {
    res.status(200).end();
  }

}
