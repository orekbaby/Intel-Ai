// pages/api/uploadVideo.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import multer from 'multer';
import { IncomingForm } from 'formidable';
import cloudinary from 'cloudinary';
import stream from 'stream';

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configure multer for handling file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Helper function to convert buffer to stream
const bufferToStream = (buffer: Buffer) => {
  const readable = new stream.Readable();
  readable._read = () => {}; // _read is required but you can noop it
  readable.push(buffer);
  readable.push(null);
  return readable;
};

const uploadHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Use multer to handle file buffer
    upload.single('file')(req as any, res as any, async (err) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }

      const file = req.file;
      if (!file) {
        return res.status(400).json({ message: 'No file uploaded.' });
      }

      const uploadStream = cloudinary.v2.uploader.upload_stream(
        { resource_type: 'video' },
        (error, result) => {
          if (error) return res.status(500).json({ error });
          return res.status(200).json(result);
        }
      );

      // Convert buffer to stream and pipe to Cloudinary
      bufferToStream(file.buffer).pipe(uploadStream);
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export default uploadHandler;
