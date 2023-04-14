import bcrypt from "bcrypt";

const passwordPlainText = "hunter42";
const passwordPlainText2 = "notHunter";
const hashedPassword = "";

const encryptedPassword = await bcrypt.hash(passwordPlainText, 12);
console.log(encryptedPassword);

const isSame = await bcrypt.compare(passwordPlainText2, encryptedPassword);

console.log(isSame);