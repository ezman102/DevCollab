import express from "express";
import { UserGroup } from "../function/user-group";
import { result } from "lodash";
import { InvitationCode } from "../function/invitation-code";
import { group } from "console";

export const groupRouter = express.Router();

groupRouter.get("/api/:userid/group", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const jwt_token = req.headers["authorization"];
  const memberlist = await UserGroup.getGroupList(userid);
  let groupList = [];
  for (let member of memberlist) {
    if (member.group != null)
      groupList[groupList.length] = {
        group: member.group,
        group_role: member.group_role,
      };
  }
  if (groupList != null) {
    res.status(201).send({ result: "SUCCESS", group: groupList });
  } else {
    res.status(404).send({ result: "UNSUCCESS", error: "GROUP_NOT_FOUND" });
  }
  return;
});

groupRouter.post("/api/:userid/group/create", async (req, res) => {
  try {
    const userid = parseInt(req.params.userid).toString();
    const jwt_token = req.headers["authorization"];
    let { group_name } = req.body;

    if (group_name === null) {
      group_name = "";
    }
    const group_data = await UserGroup.createGroup(group_name, userid);

    if (group_data.result === "SUCCESS") {
      //res.status(201).send({ result: "SUCCESS", group_id: data.group_id });
      const member_data = await UserGroup.joinGroup(
        group_data.group_id!.toString(),
        userid,
        "ADMIN"
      );

      const result_json = await InvitationCode.updateGroupCode(
        parseInt(userid),
        group_data.group_id!
      );
      if (member_data.result === "SUCCESS") {
        res.status(201).send({ result: "SUCCESS", member: member_data.member });
        return;
      } else {
        res.status(400).send({ result: "UNSUCCESS", error: member_data.error });
        return;
      }
    } else {
      res.status(400).send({ result: "UNSUCCESS", error: group_data.error });
      return;
    }
  } catch (e) {
    console.error(e); // Log the error for debugging
    res
      .status(500)
      .send({ result: "UNSUCCESS", error: "FAILED_TO_CREATE_GROUP" });
    return;
  }
});

groupRouter.post("/api/:userid/group/delete", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const jwt_token = req.headers["authorization"];
});

groupRouter.post("/api/:userid/group/join", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const { code } = req.body; // Expecting email and code in the body
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !code) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }

    const code_result = await InvitationCode.checkCode(code);

    if (code_result.result == "SUCCESS") {
      const join_result = await UserGroup.joinGroup(
        code_result.message!.group_id.toString(),
        userid.toString(),
        "MEMBER"
      );
      res.status(201).json(join_result);
      return;
    } else {
      res.status(404).json(code_result);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" ,"error": error.toString()});
    return;
  }
});

groupRouter.post("/api/:userid/:groupid/update", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const { group_name } = req.body;
  const jwt_token = req.headers["authorization"];
  if (!groupid) {
    res.status(404).json({ result: "UNSUCCESS", error: "GROUP_ID_NOT_FOUND" });
    return;
  } else {
    const result = await UserGroup.updateGroupName(
      group_name,
      groupid.toString(),
      userid.toString()
    );
    if (result.result == "SUCCESS") {
      res.status(201).json(result);
      return;
    } else {
      res.status(404).json(result);
      return;
    }
  }
});

groupRouter.get("/api/:userid/:groupid/invitation", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !groupid) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }
    const result_json = await InvitationCode.getCode(userid, groupid);

    res.status(201).json(result_json);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

groupRouter.post("/api/:userid/:groupid/invitation", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !groupid) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }
    const result_json = await InvitationCode.updateGroupCode(userid, groupid);

    res.status(201).json(result_json);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

groupRouter.get("/api/:userid/:groupid/members", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !groupid) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }
    const result_json = await UserGroup.getMemberList(userid, groupid);

    res.status(201).json(result_json);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});

groupRouter.delete("/api/member/:userid/:groupid/:target_id", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const target_id = parseInt(req.params.target_id);
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !groupid || !target_id) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }
    const result = await UserGroup.removeMember(userid, groupid, target_id);
    res.status(201).json(result);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});
groupRouter.delete("/api/group/:userid/:groupid/", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const jwt_token = req.headers["authorization"];

  try {
    if (!userid || !groupid) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND" });
      return;
    }
    const result = await UserGroup.deleteGroup(userid, groupid);
    res.status(201).json(result);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});
groupRouter.delete("/api/leave/:userid/:groupid/", async (req, res) => {
  const userid = parseInt(req.params.userid);
  const groupid = parseInt(req.params.groupid);
  const jwt_token = req.headers["authorization"];
  console.log(userid)
  console.log(groupid)
  try {
    console.log("CHECK")
    if (!userid || !groupid) {
      res
        .status(404)
        .json({ result: "UNSUCCESS", error: "USER_OR_GROUP_NOT_FOUND"+groupid+"C" });
      return;
    }

    const result = await UserGroup.leaveGroup(userid,groupid)
    res.status(201).json(result);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
    return;
  }
});