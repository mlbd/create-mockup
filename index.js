// Add Express
const express = require("express");

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

app.post("/", async (req, res) => {

    try {
        const { thumbnail_url, position_data, post_id, logo } = req.body;

        // Log received data for debugging
        console.log('Received thumbnail_url:', thumbnail_url);
        console.log('Received position_data:', position_data);
        console.log('Received post_id:', post_id);
        console.log('Received logo:', logo);

        const file_ext = getFileExtensionFromUrl(thumbnail_url);
        let filename = post_id + '.' + file_ext;

        res.json({ filename, thumbnail_url });
    } catch (error) {
        console.error('Error:', error);

        res.setHeader('Content-Type', 'application/json');
        res.status(500).json({ error: 'Internal Server Error' });
    }
})

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;