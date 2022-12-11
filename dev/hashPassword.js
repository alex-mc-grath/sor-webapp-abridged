import hashManager from "../server/util/hashManager/index.js";

const encodePass = async (pass) => {
    let hashedPass = await hashManager.hash(pass)
}

encodePass("password")