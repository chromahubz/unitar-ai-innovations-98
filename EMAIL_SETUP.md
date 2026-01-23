# Email Form Setup Instructions

The contact form is configured to use Web3Forms (free service) to send emails to contact@unitar.app.

## Setup Steps

### 1. Get Your Web3Forms Access Key (Free)

1. Visit [https://web3forms.com](https://web3forms.com)
2. Enter your email: **contact@unitar.app**
3. Click "Create Access Key"
4. You'll receive an access key (looks like: `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`)

### 2. Add the Access Key to Your Code

1. Open `/src/pages/Index.tsx`
2. Find this line (around line 70):
   ```typescript
   access_key: "YOUR_WEB3FORMS_ACCESS_KEY_HERE",
   ```
3. Replace `YOUR_WEB3FORMS_ACCESS_KEY_HERE` with your actual access key:
   ```typescript
   access_key: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
   ```

### 3. Deploy

Once you add your access key and deploy, the contact form will send emails directly to contact@unitar.app.

## Features

- ✅ Form validation (all fields required)
- ✅ Loading state during submission
- ✅ Success message with green checkmark
- ✅ Error handling with fallback to mailto
- ✅ Spam protection built-in (Web3Forms)
- ✅ No backend required

## Testing

1. Fill out the form
2. Submit
3. Check contact@unitar.app inbox
4. You should receive the form submission

## Troubleshooting

**Form not sending emails?**
- Verify the access key is correct
- Check browser console for errors
- Ensure contact@unitar.app is the email registered with Web3Forms

**Want to use a different email service?**
- Alternative: [Formspree](https://formspree.io)
- Alternative: [EmailJS](https://www.emailjs.com)
- Alternative: Build Vercel serverless function

## Cost

Web3Forms is **completely free** for up to 250 submissions per month. More than enough for a business website.

## Security

- No API keys exposed in frontend (Web3Forms access key is safe to expose)
- Built-in spam protection
- CAPTCHA optional (can enable in Web3Forms dashboard)
