import type { NextApiRequest, NextApiResponse } from 'next';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const video = req.body.video; // Assume video is the base64 encoded string or file path

      const uploadResponse = await cloudinary.uploader.upload_large(video, {
        resource_type: 'video',
        chunk_size: 6000000, // Adjust chunk size if needed
      });

      return res.status(200).json({ url: uploadResponse.secure_url });
    } catch (error) {
      return res.status(500).json({ error: 'Video upload failed' });
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' });
  }
}
