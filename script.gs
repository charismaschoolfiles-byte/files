// =====================================================
// GOOGLE APPS SCRIPT - MULTIPLE IMAGE UPLOAD HANDLER
// Saves multiple student images into a Drive folder
// =====================================================

// 🔴 PUT YOUR REAL DRIVE FOLDER ID HERE
const DRIVE_FOLDER_ID = "1EOflujabkwIqnlhOsx8he7QbQ3y8wDt4";

/**
 * Main endpoint for form submissions
 * Expected JSON format:
 * {
 *   "studentName": "John",
 *   "images": ["base64_1", "base64_2", ...]
 * }
 */
function doPost(e) {
  try {
    const folder = DriveApp.getFolderById(DRIVE_FOLDER_ID);

    const data = JSON.parse(e.postData.contents);
    const studentName = data.studentName || "Unknown";
    const images = data.images || [];

    if (!images.length) {
      return jsonResponse({ status: "error", message: "No images received" });
    }

    const timestamp = new Date().getTime();
    const savedFiles = [];

    // 🔁 Loop through all images properly
    images.forEach((imgBase64, index) => {
      const decoded = Utilities.base64Decode(imgBase64);
      const blob = Utilities.newBlob(decoded, "image/png", 
        `${studentName}_${timestamp}_${index + 1}.png`
      );

      const file = folder.createFile(blob);
      savedFiles.push(file.getUrl());
    });

    return jsonResponse({
      status: "success",
      uploaded: savedFiles.length,
      files: savedFiles
    });

  } catch (error) {
    return jsonResponse({
      status: "error",
      message: error.toString()
    });
  }
}

/**
 * Helper: clean JSON response
 */
function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
