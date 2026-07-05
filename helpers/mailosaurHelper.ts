import MailosaurClient from 'mailosaur';

export class MailosaurHelper {
  private client: MailosaurClient;
  private serverId: string;
  private serverDomain: string;

  constructor() {
    if (!process.env.MAILOSAUR_API_KEY) {
      throw new Error('MAILOSAUR_API_KEY is missing from .env');
    }

    if (!process.env.MAILOSAUR_SERVER_ID) {
      throw new Error('MAILOSAUR_SERVER_ID is missing from .env');
    }

    if (!process.env.MAILOSAUR_SERVER_DOMAIN) {
      throw new Error('MAILOSAUR_SERVER_DOMAIN is missing from .env');
    }

    this.client = new MailosaurClient(process.env.MAILOSAUR_API_KEY);
    this.serverId = process.env.MAILOSAUR_SERVER_ID;
    this.serverDomain = process.env.MAILOSAUR_SERVER_DOMAIN;
  }

  generateEmailAddress(prefix: string): string {
    const timestamp = Date.now();
    return `${prefix}-${timestamp}@${this.serverDomain}`;
  }

  async getLatestEmail(sentTo: string, subject?: string) {
    return await this.client.messages.get(this.serverId, {
      sentTo,
      subject,
    });
  }

  getEmailBody(email: any): string {
    return email.text?.body || email.html?.body || '';
  }

  extractFirstLink(emailBody: string): string {
    const linkMatch = emailBody.match(/https?:\/\/[^\s"<>]+/);

    if (!linkMatch) {
      throw new Error('No link found in email body');
    }

    return linkMatch[0];
  }

  extractOtpCode(emailBody: string): string {
    const otpMatch = emailBody.match(/\b\d{6}\b/);

    if (!otpMatch) {
      throw new Error('No 6-digit OTP code found in email body');
    }

    return otpMatch[0];
  }
}