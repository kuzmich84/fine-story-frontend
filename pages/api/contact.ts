import nodemailer from 'nodemailer'
import NextCors from 'nextjs-cors'
import type {NextApiRequest, NextApiResponse} from 'next'


export default async (req: NextApiRequest, res: NextApiResponse) => {


    if (req.method === 'POST') {
        await NextCors(req, res, {
            // Options
            methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        })
        const {name, phone, message} = req.body

        const transporter = nodemailer.createTransport({
            host: 'smtp.yandex.ru',
            port: 465,
            secure: true,
            auth: {
                user: `${process.env.user}`,
                pass: `${process.env.pass}`,
            },
        })

        try {
            await transporter.sendMail({
                from: 'kudim84@yandex.ru',
                to: 'kudim84@gmail.com',
                subject: 'Оповещение с сайта Fine-Story',
                html: `<p>У вас новое сообщение с сайта Fine-Story</p><br>
                    <p><strong>Имя: </strong> ${name}</p>
                    <p><strong>Номер телефона: </strong> ${phone}</p>
                    <p><strong>Текст сообщения: </strong> ${message}</p>
                `,
            })


        } catch (e) {
            console.log(e)
        }


        res.status(200).json(req.body)

    }

}