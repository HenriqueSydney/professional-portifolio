// app/api/resume/download/route.ts
import { NextRequest } from 'next/server';
import { generateResumePDF } from '@/lib/pdf-generator';
// import { analytics } from '@/lib/analytics';
import { getResumeData } from '@/data/resumeData';

export async function GET(request: NextRequest) {
  try {
    // 1. Buscar dados atualizados (pode vir de CMS, DB, etc.)
    const resumeData = await getResumeData();
    
    // 2. Gerar PDF
    const pdfBuffer = await generateResumePDF(resumeData);

    const pdfData = new Uint8Array(pdfBuffer);
    // // 3. Analytics (demonstra integração)
    // await analytics.track('resume_downloaded', {
    //   userAgent: request.headers.get('user-agent'),
    //   timestamp: new Date().toISOString()
    // });
    
    // 4. Retornar PDF
    return new Response(pdfData, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="joao-silva-resume.pdf"',
        'Cache-Control': 'public, max-age=3600', // Cache de 1 hora
      },
    });
  } catch (error) {
    return Response.json(
      { error: 'Failed to generate PDF' }, 
      { status: 500 }
    );
  }
}