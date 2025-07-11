import express from "express";
import { VCode } from "../function/verification-code";
import { UserAccount } from "../function/user-account";

export const userRouter = express.Router();

userRouter.get("/api/account/v-code", async (req, res) => {
  const email: string = req.query.email as string;
  if (!VCode.isValidEmail(email)) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_EMAIL" });
    return;
  }
  VCode.createVcode(email);
  res.send({ result: "SUCCESS", email: email });

});

userRouter.post("/api/account/v-code", async (req, res) => {
  const { email, code } = req.body; // Expecting email and code in the body

  if (!email || !VCode.isValidEmail(email) || !code) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return
  }

  try {
    // Find the verification record by email
    const verification_record = await VCode.getRecord(email);

    if (!verification_record) {
      res
        .status(404)
        .send({ result: "UNSUCCESS", error: "VERIFICATION_NOT_FOUND" });
      return;
    }

    if (await VCode.checkVCode(verification_record, code)) {
      res.status(200).send({ result: "SUCCESS", email: email });
    } else {
      res.status(400).send({ result: "UNSUCCESS", error: "INVALID_CODE" });
    }
  } catch (error) {
    //console.error("Error verifying code:", error);
    res
      .status(500)
      .send({ result: "UNSUCCESS", error: "FAILED_TO_VERIFY_CODE" });
    return;
  }
});

userRouter.post("/api/account/create", async (req, res) => {
  const { email, code, password, invitation } = req.body; // Expecting email and code in the body

  if (!email || !VCode.isValidEmail(email) || !code || !password) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return;
  }

  try {
    const result = await UserAccount.createAccount(
      email,
      password,
      code,
      invitation
    );
    if (result.result == "SUCCESS") {
      res.status(200).send(result);
    } else {
      res.status(400).send(result);
    }
  } catch (error) {
    res.status(500).send({ result: "UNSUCCESS", error: "FAILED_TO_CREATE" });
    return;
  }
});

userRouter.post("/api/account/login/password", async (req, res) => {
  const { email, password } = req.body; // Expecting email and code in the body

  if (!email || !VCode.isValidEmail(email) || !password) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return;
  }

  try {
    // Fetch the user by email
    const user = await UserAccount.getRecord(email, password);

    // Check if user exists
    if (!user) {
      res.status(400).send({ result: "UNSUCCESS", error: "USER_NOT_FOUND" });
      return;
    }

    const token = await UserAccount.generateJWT(user);

    // Return success response with the token
    res.status(200).send({ result: "SUCCESS", token: token });
  } catch (error) {
    res.status(500).send({ result: "UNSUCCESS", error: "LOGIN_FAILED" });
  }
});

userRouter.post("/api/account/login/token", async (req, res) => {
  let { token } = req.body; // Expecting email and code in the body
  if (!token) {
    token = req.headers["authorization"];
    if (!token) {
      res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
      return;
    }
  }

  try {
    // decode JWT
    const decoded = await UserAccount.checkJWT(token);

    // Check if user exists
    if (decoded.result == "SUCCESS") {
 
      res.status(200).send({
        result: "SUCCESS",
        user: decoded.user,
        detail: {
          user_id: decoded.detail!.user_id,
          name: decoded.detail!.name,
          email: decoded.detail!.email,
          email_2fa: decoded.detail!.email_2fa,
        },
      });
      return;
    } else {
      res.status(400).send({ result: "UNSUCCESS", error: "USER_NOT_FOUND" });
      return
    }
  } catch (error) {
    res.status(500).send({ result: "UNSUCCESS", error: "LOGIN_FAILED" });
  }
});

userRouter.post("/api/account/2fa-setting", async (req, res) => {
  let { token, active } = req.body; // Expecting email and code in the body

  if (!token) {
    token = req.headers["authorization"];
    if (!token)
      res.status(400).send({ result: "UNSUCCESS", error: "INVALID_TOKEN" });
    return;
  }

  if (!(active == "ON" || active == "OFF")) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return;
  }

  const decoded = await UserAccount.checkJWT(token);
  if (decoded.result == "SUCCESS") {
    const result_2fa = await UserAccount.update2FA(
      decoded.detail!.user_id,
      active
    );
    res.status(200).send(result_2fa);
    return;
  } else {
    res.status(400).send({ result: "UNSUCCESS", error: "USER_NOT_FOUND" });
    return;
  }
});

userRouter.post("/api/account/password", async (req, res) => {
  let { token, password } = req.body; // Expecting email and code in the body

  if (!token) {
    token = req.headers["authorization"];
    if (!token)
      res.status(400).send({ result: "UNSUCCESS", error: "INVALID_TOKEN" });
    return;
  }

  if (!password) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return;
  }

  const decoded = await UserAccount.checkJWT(token);
  if (decoded.result == "SUCCESS") {
    const result_password = await UserAccount.updatePassword(
      decoded.detail!.user_id,
      password
    );
    if (result_password.result == "SUCCESS") {
      res.status(200).send(result_password);
    } else {
      res.status(400).send(result_password);
    }

    return;
  } else {
    res.status(400).send({ result: "UNSUCCESS", error: "USER_NOT_FOUND" });
    return;
  }
});

userRouter.post("/api/account/username", async (req, res) => {
  let { token, username } = req.body; // Expecting email and code in the body

  if (!token) {
    token = req.headers["authorization"];
    if (!token)
      res.status(400).send({ result: "UNSUCCESS", error: "INVALID_TOKEN" });
    return;
  }

  if (!username) {
    res.status(400).send({ result: "UNSUCCESS", error: "INVALID_INPUT" });
    return;
  }

  const decoded = await UserAccount.checkJWT(token);
  if (decoded.result == "SUCCESS") {
    const result_username = await UserAccount.updateUsername(
      decoded.detail!.user_id,
      username
    );
    if (result_username.result == "SUCCESS") {
      res.status(200).send(result_username);
    } else {
      res.status(400).send(result_username);
    }

    return;
  } else {
    res.status(400).send({ result: "UNSUCCESS", error: "USER_NOT_FOUND" });
    return;
  }
});
