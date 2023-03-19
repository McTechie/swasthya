const useCipher = (str: string, enchipher: boolean) => {

  if (!str) return str

  // Define a variable to store the result
  let result = ''

  // Determine the direction of the shift based on the shouldShift flag
  let direction = enchipher ? 1 : -1

  // Loop through each character in the string
  for (let i = 0; i < str.length; i++) {
    // Get the ASCII code for the current character
    let c = str.charCodeAt(i)

    // Shift the ASCII code by "n" places
    if (c >= 48 && c <= 57) {
      // If the character is a digit, shift it by "n" places
      c = ((c - 48 + direction * parseInt(process.env.NEXT_PUBLIC_QR_SHIFT || '0') + 10) % 10) + 48
    } else if (c >= 65 && c <= 90) {
      // If the character is an uppercase letter, shift it by "n" places
      c = ((c - 65 + direction * parseInt(process.env.NEXT_PUBLIC_QR_SHIFT || '0') + 26) % 26) + 65
    } else if (c >= 97 && c <= 122) {
      // If the character is a lowercase letter, shift it by "n" places
      c = ((c - 97 + direction * parseInt(process.env.NEXT_PUBLIC_QR_SHIFT || '0') + 26) % 26) + 97
    }

    // Convert the shifted ASCII code back to a character and add it to the result
    result += String.fromCharCode(c)
  }

  // Return the result
  return result

}

export default useCipher
