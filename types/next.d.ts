// types/next.d.ts

import { IncomingForm } from 'formidable';

declare module 'next' {
  interface NextApiRequest {
    file?: Express.Multer.File;
  }
}
