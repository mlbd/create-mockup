// Add Express
const express = require("express");
const { createCanvas, loadImage } = require('canvas');

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

/**
 * Extracts the file extension from a given URL.
 *
 * @param {string} url - the URL from which to extract the file extension
 * @return {string|null} the file extension in lowercase, or null if no extension is found
 */
function getFileExtensionFromUrl(url) {
    // Use a regular expression to extract the file extension
    const regex = /(?:\.([^.]+))?$/; // Match the last dot and anything after it
    const extension = regex.exec(url)[1]; // Extract the extension (group 1 in the regex)

    // Ensure the extension is in lowercase (optional)
    if (extension) {
        return extension.toLowerCase();
    } else {
        return null; // Return null if no extension is found
    }
}

/**
 * Calculates the new height based on the aspect ratio of the original width and height.
 *
 * @param {number} originalWidth - The original width
 * @param {number} originalHeight - The original height
 * @param {number} newWidth - The new width
 * @return {number} The calculated new height
 */
function aspect_height(originalWidth, originalHeight, newWidth) {
    // Calculate the aspect ratio
    const aspectRatio = originalWidth / originalHeight;

    // Calculate the new height based on the aspect ratio
    const newHeight = newWidth / aspectRatio;

    return newHeight;
}

/**
 * A function to calculate the new y coordinate based on the given height and y coordinate.
 *
 * @param {number} newHeight - the new height value
 * @param {number} height - the current height value
 * @param {number} y - the current y coordinate value
 * @return {number} the new y coordinate value
 */
function aspectY(newHeight, height, y) {
    const newY = height > newHeight ? y + (height - newHeight) : y - ((newHeight - height)/2);
    return newY;
}

app.post("/", (req, res) => {
    res.send("Tumi Express on Vercel");
})

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;