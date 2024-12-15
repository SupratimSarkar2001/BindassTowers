/**
 * Checks if all required fields for user sign up are present and if password is secure enough.
 * @param {Object} UserInstance - The user instance containing the required fields
 * @throws {Error} - If any of the required fields are not present or if password is not secure enough
 */
const singUpValidation = (UserInstance) => {
 const { firstName, lastName, password, email , mobileNumber, age, city, state, town} = UserInstance;

 if (!firstName || !lastName || !password || !email || !mobileNumber || !age || !city || !state || !town) {
   throw new Error("Mentioned filed are required - firstName, lastName, password, email, mobileNumber, age, city, state, town");
 }

 if (password.toLowerCase().includes(firstName.toLowerCase()) || password.toLowerCase().includes(lastName.toLowerCase())) {
   throw new Error("Password should not contain firstName or lastName in it");
 }
}

module.exports={
 singUpValidation
}