import User from "../models/User";
import { Request, Response } from "express";
import mongoose from "mongoose";

const userController = {

  async findByEmail(req: Request, res: Response) {
    const { email } = req.params;

    if (!mongoose.Types.ObjectId.isValid(email)) {
      res.status(400).json({ message: " ID non valide "});
      return;
    }

    try {
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json({ user });
    } catch (error) {
      res.status(500).json({ message: "Erreur serveur" });
    }
  },

  async getUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error while fetching data" });
    }
  },

  async createUser(req: Request, res: Response) {
    const { firstname, lastname, email, password, role_id } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      res.status(409).json({
        message:
          "L'utilisateur existe déjà, impossible de procéder à la création !",
      });
      return;
    }
    const newUser = new User({
      firstname: firstname,
      lastname,
      email,
      password,
      role_id,
    });
    try {
      await newUser.save();
      console.log(newUser);
      res.status(201).json({ user: newUser });
    } catch (err) {
      console.log(err);
      res
        .status(500)
        .json({ message: "Erreur durant la création d'un utilisateur !" });
    }
  },

  async updateUser(req: Request, res: Response) {
    const { id } = req.params;
    const { firstname, lastname, image, description, role_id } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: " ID non valide "});
      return;
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          firstname,
          lastname,
          image,
          description,
          role_id,
        },
        { new: true, runValidators: true },
      );

      if (!updatedUser) {
        return res.status(404).json({
          message: "Utilisateur introuvable, mise à jour impossible.",
        });
      }

      res.status(200).json({ user: updatedUser });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur durant la mise à jour de l'utilisateur !" });
    }
  },

  async deleteUser(req: Request, res: Response) {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(400).json({ message: " ID non valide "});
      return;
    }

    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res
          .status(404)
          .json({
            message: "Utilisateur introuvable, suppression impossible.",
          });
      }

      res.status(200).json({ message: "Utilisateur supprimé avec succès." });
    } catch (error) {
      res
        .status(500)
        .json({ message: "Erreur durant la suppression de l'utilisateur !" });
    }
  },
};

export default userController;

// import { Request, Response } from "express";
// import User from "../models/User";

// const userController = {
//     async list(req: Request, res: Response) {
//         const users = await User.find()
//         res.status(200).json({ users: users })
//     },
//     async findByEmail(req: Request, res: Response) {
//         const { email } = req.params
//         const user = await User.findOne({ email })
//         if(!user) {
//             res.status(404).json({ message: "L'utilisateur n'a pas été trouvé !" })
//             return
//         }
//         res.status(200).json({ user })
//     },
//     async create(req: Request, res: Response) {
//         const { firstname, lastname, email, password, role_id } = req.body;
//         const user = await User.findOne({ email })
//         if(user) {
//             res.status(409).json({ message: "L'utilisateur existe déjà, impossible de procéder à la création !" })
//             return
//         }
//         const newUser = new User({
//             firstname: firstname,
//             lastname,
//             email,
//             password,
//             role_id,
//         });
//         try {
//             await newUser.save();
//             console.log(newUser);
//             res.status(201).json({ user: newUser })
//         } catch (err) {
//             console.log(err);
//             res.status(500).json({ message: "Erreur durant la création d'un utilisateur !"})
//         }
//     },
//     async update(req: Request, res: Response) {
//     },
//     async delete(req: Request, res: Response) {
//     },
// }

// export default userController;
