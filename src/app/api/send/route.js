// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEamil = process.env.FROM_EMAIL;

export async function POST(rq, res) {
  const {body} = await req.json;
  const {email, subject, message} = body; 
  try {
    const data = await resend.emails.send({
      from: fromEamil,
      to: ['a.nashif7@gmail.com', email],
      subject: subject,
      react: 
     ( <>
     <h1>{subject}</h1>
     <p>Thank you for contacting us</p>
     <p>New Message Submitted</p>
     <p>{message}</p>
     </>)
      ,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
