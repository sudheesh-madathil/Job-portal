const multer = require("multer");
const path = require("path");

// Set up storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Ensure the directory exists or handle directory creation
    cb(null, path.join(__dirname, '../multer/file')); // Adjust path if necessary
  },
  filename: (req, file, cb) => {
    // Generate a unique filename with timestamp and original extension
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

// Initialize multer upload
const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // Limit file size to 5MB
  fileFilter: (req, file, cb) => {
    // Define acceptable file types
    const filetypes = /pdf|doc|docx/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error("Only .pdf, .doc, and .docx files are allowed!"));
    }
  },
});

// Handle file upload errors
upload.fileFilter = (req, file, cb) => {
  const filetypes = /pdf|doc|docx/;
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = filetypes.test(file.mimetype);

  if (mimetype && extname) {
    cb(null, true);
  } else {
    cb(new Error("Only .pdf, .doc, and .docx files are allowed!"), false);
  }
};

module.exports = upload;
