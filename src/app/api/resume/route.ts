// app/api/resume/download/route.ts
import { NextRequest } from 'next/server';
import { generateResumePDF } from '@/lib/pdf-generator';
// import { analytics } from '@/lib/analytics';
import { getResumeData } from '@/data/resumeData';
import { apiLogger } from '@/lib/logger';

export async function GET(request: NextRequest) {
  try {
    const start = performance.now();
    apiLogger.debug({ request }, 'Resume download request')

    const resumeData = await getResumeData();

    const pdfBuffer = await generateResumePDF(resumeData);

    const pdfData = new Uint8Array(pdfBuffer);

    const time = performance.now() - start;
    apiLogger.info({ time }, 'Resume download - OK')
    return new Response(pdfData, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="joao-silva-resume.pdf"',
        'Cache-Control': 'public, max-age=3600', // Cache de 1 hora
      },
    });
  } catch (error) {

    apiLogger.error({ stackTrace: error }, 'Resume download - Error')
    return Response.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}