# Contact Form Setup Guide - UNSW Email Compatible

## Problem: UNSW Emails Don't Work with EmailJS
University email systems block third-party services like EmailJS for security reasons.

## ✅ Updated Solutions (3 Options)

### **Option 1: Netlify Forms** (Recommended - FREE)
**Best for: Netlify deployments**

✅ **Already Implemented!** The form is ready for Netlify.

**Setup:**
1. Deploy to Netlify
2. Form submissions automatically go to your Netlify dashboard
3. Set up email notifications in Netlify settings
4. **No additional configuration needed!**

### **Option 2: Formspree** (Recommended for other deployments)
**Best for: Any hosting platform**

**Setup:**
1. Go to [formspree.io](https://formspree.io/)
2. Create free account (50 submissions/month)
3. Create a new form
4. Copy your form endpoint
5. Add to `.env`: `VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your_form_id`
6. Works with any email address!

### **Option 3: Backend API** (For advanced users)
Create your own backend with Node.js/Express to handle email sending.

## Current Implementation Features

✅ **Multiple Form Handlers**: Supports Netlify Forms + Formspree fallback
✅ **Form Validation**: Required fields validated
✅ **User Feedback**: Success/error toast notifications  
✅ **Loading States**: "Sending..." button feedback
✅ **Spam Protection**: Honeypot fields for Netlify
✅ **UNSW Email Compatible**: Works with any email provider

## Quick Setup for UNSW

### For Netlify Deployment:
1. Deploy to Netlify - **That's it!** ✅
2. Check form submissions in Netlify dashboard
3. Set up email notifications in Netlify settings

### For Other Deployments:
1. Create Formspree account
2. Copy `.env.example` to `.env`
3. Add your Formspree endpoint
4. **Done!** ✅

## Testing
- **Local Development**: Form shows success message (actual sending requires deployment)
- **Production**: Form sends to your specified email

**No more UNSW email restrictions!** 🎉
