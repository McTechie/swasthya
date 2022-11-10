import fs from 'fs'
import formidable from 'formidable'

// required to get file data (idProof)
export const config = {
  api: {
    bodyParser: false,
  },
}

export default function idProofUpload(req, res) {
  let fileName = '' // to cross-check user's uploaded file name in a later step

  return new Promise(async (resolve, reject) => {
    const form = new formidable.IncomingForm() // create a new form object

    form.on('file', (_name, file) => {

      const data = fs.readFileSync(file.filepath) // read the contents of the file

      try {
        // remove directory if already exists
        if (fs.existsSync('public/uploads')) {
          fs.rmSync('public/uploads', { recursive: true, force: true })
        }

        fs.mkdirSync('public/uploads') // create an uploads directory
        
        fs.writeFileSync(`public/uploads/${file.originalFilename}`, data) // write the contents of the file with the same name file name
        
        fs.unlinkSync(file.filepath) // cancel out of any remaining processes
      } catch (e) {
        console.log(`\x1b[31m[error]: ${e} \x1b[0m`) // red error message
      }

      fileName = file.originalFilename // set the file name for verification in a later step

    }).on('aborted', () => {

      console.log('\x1b[31m[error]: ID Proof could not be uploaded! \x1b[0m') // red error message

      reject(res.status(500).send('ID Proof upload Aborted'))

    }).on('end', () => {

      console.log('\x1b[32m[success]: ID Proof uploaded successfully! \x1b[0m') // green success message

      resolve(res.status(201).send(JSON.stringify({
        mssg: 'ID Proof Uploaded',
        fileName: fileName
      })))

    })

    await form.parse(req) // begin parsing the required file
  })
}