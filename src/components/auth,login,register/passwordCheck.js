function verifyPassword(password) {
    // Regular expressions to check for uppercase, lowercase, and minimum length
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const minLength = 6;

    // Check if password meets all requirements
    if (
        password.length >= minLength &&
        uppercaseRegex.test(password) &&
        lowercaseRegex.test(password)
    ) {
        return true; // Password meets all requirements
    } else {
        return false; // Password does not meet all requirements
    }
}
export default verifyPassword