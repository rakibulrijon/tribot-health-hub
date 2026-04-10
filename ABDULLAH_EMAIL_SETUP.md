# Quick Setup: Send Contact Form to r.rejon@unsw.edu.au

## 🎯 **Target Email:** `r.rejon@unsw.edu.au`

## ⚡ **Fastest Setup (Recommended): Formspree**

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io/)
2. Sign up with any email (can be your personal email)
3. Click "New Form"

### Step 2: Configure Form
1. **Form Name**: "TRIBOT Contact Form"
2. **Email Address**: `r.rejon@unsw.edu.au`
3. Click "Create Form"
4. Copy your form endpoint (looks like: `https://formspree.io/f/abc123xyz`)

### Step 3: Add to Your Project
1. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your endpoint:
   ```
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_ACTUAL_FORM_ID
   VITE_RECIPIENT_EMAIL=r.rejon@unsw.edu.au
   ```

### Step 4: Test
1. Restart your dev server: `npm run dev`
2. Fill out the contact form
3. Submit - it will go to `r.rejon@unsw.edu.au`!

## 🚀 **Alternative: Netlify Forms (If deploying to Netlify)**

### For Netlify Deployment:
1. Deploy to Netlify
2. Go to your Netlify dashboard → Forms
3. Set up email notifications to `r.rejon@unsw.edu.au`
4. **Done!** Forms automatically work.

## ✅ **What Happens When Someone Submits:**

**Email to r.rejon@unsw.edu.au:**
```
Subject: New TRIBOT Contact Form Submission

From: [User's Name]
Email: [User's Email]
Organization: [User's Organization]
Country: [User's Country]

Reason for Contact: [Selected Reason]

Message:
[User's Message]

Wants Updates: Yes/No
```

## 🔧 **Current Status:**
✅ Form is ready and configured
✅ Will send to `r.rejon@unsw.edu.au`
✅ Just need to set up Formspree account (5 minutes)

**You're almost done!** Just create the Formspree account and add the endpoint to `.env`.
