// =====================================================
// GOOGLE APPS SCRIPT FOR CHARACTER ACTIVITY
// This script saves student submissions to Google Drive
// =====================================================

// 🔴 CHANGE THIS TO YOUR GOOGLE DRIVE FOLDER ID
// Get it from: https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE
const DRIVE_FOLDER_ID = "YOUR_FOLDER_ID_HERE";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const studentName = data.studentName;
    const timestamp = data.timestamp;
    
    // Create student folder
    const parentFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    const studentFolderName = `${studentName}_${new Date().toISOString().split('T')[0]}`;
    let studentFolder = null;
    
    // Check if folder exists
    const folders = parentFolder.getFoldersByName(studentFolderName);
    if (folders.hasNext()) {
      studentFolder = folders.next();
    } else {
      studentFolder = parentFolder.createFolder(studentFolderName);
    }
    
    // Save photos
    if (data.photos) {
      const photosFolder = createOrGetFolder(studentFolder, 'Photos');
      data.photos.forEach(photo => {
        if (photo.data) {
          const base64 = photo.data.split(',')[1];
          const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'image/png', `${photo.character}.png`);
          photosFolder.createFile(blob);
        }
      });
    }
    
    // Save voice recordings
    if (data.voices) {
      const voicesFolder = createOrGetFolder(studentFolder, 'Voices');
      data.voices.forEach(voice => {
        if (voice.data) {
          const base64 = voice.data.split(',')[1];
          const blob = Utilities.newBlob(Utilities.base64Decode(base64), 'audio/wav', `${voice.character}.wav`);
          voicesFolder.createFile(blob);
        }
      });
    }
    
    // Save submission info
    const infoBlob = Utilities.newBlob(
      `Student: ${studentName}\nSubmitted: ${timestamp}`,
      'text/plain',
      'submission_info.txt'
    );
    studentFolder.createFile(infoBlob);
    
    return ContentService.createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    Logger.log('Error: ' + error);
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function createOrGetFolder(parentFolder, folderName) {
  const folders = parentFolder.getFoldersByName(folderName);
  if (folders.hasNext()) {
    return folders.next();
  } else {
    return parentFolder.createFolder(folderName);
  }
}