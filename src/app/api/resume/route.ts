// app/api/resume/download/route.ts
import { NextRequest } from 'next/server';
import { generateResumePDF } from '@/lib/pdf-generator';
// import { analytics } from '@/lib/analytics';
import { getResumeData } from '@/data/resumeData';
import { apiLogger } from '@/lib/logger';
import { getProfileStats } from '@/services/notion/getProfileStats';
import { getSkills } from '@/services/notion/getSkills';
import { getExperience } from '@/services/notion/getExperience';
import { getCertifications } from '@/services/notion/getCertifications';

export async function GET(request: NextRequest) {
  try {
    const start = performance.now();
    apiLogger.debug({ request }, 'Resume download request')

    const [profileStats, skills, experiences, certifications, basicProfile] = await Promise.all([
      getProfileStats(),
      getSkills(),
      getExperience(),
      getCertifications(),
      getResumeData()
    ])

    if (profileStats[0] || skills[0] || experiences[0] || certifications[0]) {
      throw new Error('Não localizado')

    }


    const pdfBuffer = await generateResumePDF({
      basicProfile,
      profileStats: profileStats[1],
      skills: skills[1],
      experience: experiences[1],
      certifications: certifications[1]
    });

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
    console.log(error)
    apiLogger.error({ stackTrace: error }, 'Resume download - Error')
    return Response.json(
      { error: 'Failed to generate PDF' },
      { status: 500 }
    );
  }
}