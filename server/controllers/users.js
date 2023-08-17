import mongoose from "mongoose";
import users from '../models/authModel.js'

export const getAllUsers = async (req, res) => {
    try {
        const allUsers = await users.find(); //users is schema name from authModel.js
        const allUserDetails = []
        allUsers.forEach(user => { //user is each user in the array
            allUserDetails.push({ _id: user._id, name: user.name, about: user.about, tags: user.tags, joinedOn: user.joinedOn });

        });

        res.status(200).json(allUserDetails);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
};

export const updateProfile = async(req, res) => {
    const { id: _id } = req.params;
    const { name, about, tags } = req.body;



     if(!mongoose.Types.ObjectId.isValid(_id)){
        return res.status(404).send('Question unavailable...');
     }

     try {
          const updatedProfile = await users.findByIdAndUpdate( _id, { $set: { name: name, about: about, tags: tags }}, {new: true});

          res.status(200).json(updatedProfile)

     } catch (error) {
         res.status(405).json({message: error.message})
        }
};

export const follow = async (req, res) => {
    const currentUserId = req.userId;
    const friendId = req.params.id;
    try {
      const updatedUser = await users.findByIdAndUpdate(
        currentUserId,
        {
          $addToSet: { followings: friendId },
        },
        { new: true }
      );
      await users.findByIdAndUpdate(
        friendId,
        {
          $addToSet: { followers: currentUserId },
        },
        { new: true }
      );
      const { password, ...user_data } = updatedUser._doc;
      res.status(200).json(user_data);
    } catch (error) {
      res.status(500).json(error);
    }
  };
  
  export const unfollow = async (req, res) => {
    const currentUserId = req.userId;
    const friendId = req.params.id;
    try {
      const updatedUser = await users.findByIdAndUpdate(
        currentUserId,
        {
          $pull: { followings: friendId },
        },
        { new: true }
      );
      await users.findByIdAndUpdate(
        friendId,
        {
          $pull: { followers: currentUserId },
        },
        { new: true }
      );
      const { password, ...user_data } = updatedUser._doc;
      res.status(200).json(user_data);
    } catch (error) {
      res.status(500).json(error);
    }
  };