# 🎭 Character Activity Setup Guide

**Estimated time: 15 minutes**

This guide will walk you through setting up the Character Activity app to save student submissions to your Google Drive.

---

## **STEP 1: Create a Google Drive Folder** (2 minutes)

1. Go to **Google Drive** (drive.google.com)
2. Click **"+ New"** on the left
3. Click **"Folder"**
4. Name it: **"Character Activity Submissions"**
5. Click **"Create"**

**Now you have your folder!** ✅

---

## **STEP 2: Get Your Folder ID** (1 minute)

1. Open your **"Character Activity Submissions"** folder
2. Look at the **URL** in your browser. It looks like:
   ```
   https://drive.google.com/drive/folders/1Ax-B2C3D4E5F6G7H8I9J0K1L2M3N4O5P
   ```
3. Copy the long ID after `/folders/`
   - **Start here:** `1Ax-B2C3D4E5F6G7H8I9J0K1L2M3N4O5P`
   - **Stop here:** (end of URL)

**Save this ID somewhere!** You'll need it in Step 4. 📝

---

## **STEP 3: Create a Google Apps Script** (3 minutes)

1. Go to **script.google.com**
2. Click **"+ New project"**
3. You'll see an editor with some code - **DELETE ALL OF IT**
4. Copy the code from here: https://github.com/charismaschoolfiles-byte/files/blob/main/script.gs
5. **Paste it** into the Google Apps Script editor
6. Press **Ctrl+S** (or Cmd+S on Mac) to save
7. Name it: **"Character Activity Script"**

**Done!** ✅

---

## **STEP 4: Add Your Folder ID** (2 minutes)

1. In the Google Apps Script editor, find this line at the top:
   ```
   const DRIVE_FOLDER_ID = "YOUR_FOLDER_ID_HERE";
   ```

2. **Replace** `YOUR_FOLDER_ID_HERE` with your folder ID from Step 2
   - Example:
   ```
   const DRIVE_FOLDER_ID = "1Ax-B2C3D4E5F6G7H8I9J0K1L2M3N4O5P";
   ```

3. Press **Ctrl+S** to save

**Perfect!** ✅

---

## **STEP 5: Deploy the Script** (5 minutes)

1. Click **"Deploy"** button (top right)
2. Click **"New deployment"**
3. Click the dropdown that says **"Select type"**
4. Choose **"Web app"**
5. Under **"Execute as:"** select your email
6. Under **"Who has access:"** select **"Anyone"**
7. Click **"Deploy"**
8. A popup will show your **Deployment ID**
9. Click **"Copy"** next to the deployment URL

**Save this URL!** You'll need it next. 📋

---

## **STEP 6: Add URL to the App** (2 minutes)

1. Go to: https://github.com/charismaschoolfiles-byte/files/blob/main/index.html
2. Click the **pencil icon** to edit
3. Find this line (around line 343):
   ```
   const SCRIPT_URL = "https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec";
   ```
4. **Replace** `https://script.google.com/macros/s/YOUR_SCRIPT_ID_HERE/exec` with the URL you copied in Step 5
5. Click **"Commit changes"**

**All set!** ✅

---

## **STEP 7: Test the App** (2 minutes)

1. Open the app: https://charismaschoolfiles-byte.github.io/files/
2. Enter a test name (like "Test Student")
3. Click **"Start"**
4. Choose **"Stage 1: Upload Photos"**
5. Upload a random image for one character
6. Click **"Done with Photos"**
7. Choose **"Stage 2: Record Voices"**
8. Record a quick test voice for one character
9. Click **"Submit All"**

**Check your Google Drive:**
- Open your "Character Activity Submissions" folder
- You should see a "Test Student_DATE" folder
- Inside: Photos and Voices folders with your test files

**If you see it - you're ready!** 🎉

---

## **STEP 8: Share with Students** (Optional)

If you want to give students a QR code or link:
- The app URL is: **https://charismaschoolfiles-byte.github.io/files/**
- Students just open it on their tablets
- They enter their name and start!

---

## **TROUBLESHOOTING** 🔧

### **"Error submitting"?**
- Check that your SCRIPT_URL is correct in index.html
- Make sure you deployed the script in Step 5

### **"Files not appearing in Drive"?**
- Check that your DRIVE_FOLDER_ID is correct (no extra spaces)
- Make sure the folder ID is in quotes in script.gs

### **"Script deployment error"?**
- Go back to script.google.com
- Make sure you completed Step 5 fully
- Try deploying again

---

## **YOU'RE DONE!** 🚀

Tomorrow morning, students will:
1. Open the app
2. Enter their name
3. Upload 8 photos (Stage 1)
4. Record 8 voice lines (Stage 2)
5. Click Submit

Everything saves automatically to your Google Drive!

---

**Questions?** Let me know and I can help! 📞