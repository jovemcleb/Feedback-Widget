import { MailAdapter, SendMailData } from "../mail-adpter";
import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "180ee721a5f4f3",
    pass: "46031ba106cc6e",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Caleb Lima <lima.cardoso.caleb@gmail.com>",
      subject,
      html: body,
    });
  }
}
