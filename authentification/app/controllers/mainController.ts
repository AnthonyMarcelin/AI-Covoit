import type { Request, Response } from "express";
import { hash, verify } from "../crypto/script";
import debug from "debug";
import jwt from "jsonwebtoken";
import { ObjectId } from "mongoose";

const log = debug("app:authentication:mainController");

const JWT_SECRET = process.env.JWT_SECRET!;
const API_SERVICE_URL = process.env.API_SERVICE_URL!;
interface TokenCredentials {
  id: ObjectId;
  firstname: string;
  email: string;
  role: number;
}

function generateToken(tokenCredentials: TokenCredentials): string {
  log("generate token for", tokenCredentials);
  const token = jwt.sign(
    {
      user: {
        firstname: tokenCredentials.firstname,
        email: tokenCredentials.email,
        role: tokenCredentials.role,
        id: tokenCredentials.id,
      },
    },
    JWT_SECRET,
    {
      expiresIn: "4h",
    },
  );
  return token;
}

const mainController = {
  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    log("login", req.body);

    const response = await fetch(`${API_SERVICE_URL}/users/email/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    const user = data.user;

    if (!user || !(await verify(password, user.password))) {
      res.status(401).json({ error: "Invalid credentials" });
      return;
    }

    const token = generateToken({
      id: user.id,
      firstname: user.firstname || "",
      email: user.email,
      role: user.role_id,
    });
    res.json({ status: "success", data: { token } });
  },

  async cryptPassword(req: Request, res: Response) {
    const { password } = req.params;
    if (password) {
      const passwordHash = await hash(password.toString());
      res.json({ status: "success", data: { password, passwordHash } });
    }
  },

  async register(req: Request, res: Response) {
    const { firstname, lastname, email, password, rol_id } = req.body;
    // console.log(req.body);

    const hashedPassword = await hash(password.toString());
    // console.log(hashedPassword);

    if (!hashedPassword) {
      console.log("erreur lors du hash");
      res.json({ err: "Merci de réessayer" }).status(500);
    }

    // A changer pour fetch sur service_api

    // const newUser = new User({
    //   firstname: firstname,
    //   lastname,
    //   email,
    //   password: hashedPassword,
    //   description,
    //
    // });

    // try {
    //   await newUser.save();
    //   console.log(newUser);
    //   res.json({ user: newUser }).status(201)
    // } catch (err) {
    //   console.log(err);
    //   res.status(500)
    // }
  },
};

export default mainController;
