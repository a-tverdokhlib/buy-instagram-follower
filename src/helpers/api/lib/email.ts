import getConfig from 'next/config'
const nodemailer = require('nodemailer')

const ejs = require('ejs')
const path = require('path')

const { serverRuntimeConfig } = getConfig()

const transport = nodemailer.createTransport({
  host: serverRuntimeConfig.smtp.host,
  port: serverRuntimeConfig.smtp.port,
  auth: {
    user: serverRuntimeConfig.smtp.auth.user,
    pass: serverRuntimeConfig.smtp.auth.pass,
  },
})

module.exports = async (to, fromName, templateData) => {
  try {
    // const ejsFile = await ejs.renderFile(path.join(__dirname,'./templates/quote256.ejs'),{
    //     data: {
    //         host: 'host',
    //         user: 'user',
    //         email: to,
    //     }
    // });

    const templatesDirectory = path.resolve(process.cwd(), 'public')

    const ejsFile = await ejs.renderFile(
      path.join(templatesDirectory, 'templates', 'email.ejs'),
      { data: templateData },
    )

    console.log(
      'Message FROM =>',
      `${serverRuntimeConfig.smtp.sender} ${fromName}`,
    )
    console.log('Message TO =>', to)

    const message = await transport.sendMail({
      to: to,
      from: `${serverRuntimeConfig.smtp.sender} ${fromName}`,
      subject: `Don't forget me. Grab me before I'm gone. ${fromName}`,
      html: ejsFile,
    })

    return message
  } catch (err) {
    throw err
  }
}
