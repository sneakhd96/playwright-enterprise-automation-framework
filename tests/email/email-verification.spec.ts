import { test, expect } from '@playwright/test';
import 'dotenv/config';
import { MailosaurHelper } from '../../helpers/mailosaurHelper';

const hasMailosaurConfig =
  !!process.env.MAILOSAUR_API_KEY &&
  !!process.env.MAILOSAUR_SERVER_ID &&
  !!process.env.MAILOSAUR_SERVER_DOMAIN;

test.describe('Email Workflow Tests', () => {
  test.skip(!hasMailosaurConfig, 'Mailosaur credentials are not configured.');

  test('should generate a unique Mailosaur email address', async () => {
    const mailosaurHelper = new MailosaurHelper();

    const testEmail = mailosaurHelper.generateEmailAddress('email-verification');

    expect(testEmail).toContain('@');
    expect(testEmail).toContain(process.env.MAILOSAUR_SERVER_DOMAIN);
    expect(testEmail).toContain('email-verification');
  });
});