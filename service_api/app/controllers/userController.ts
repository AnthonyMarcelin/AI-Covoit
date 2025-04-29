import User from "../models/User";
import { Request, Response } from "express";

const userController = {
  async getAllUsers(req: Request, res: Response) {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ message: "Error while fetching data" });
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
