// app/api/resume/download/route.ts
import { NextRequest } from "next/server";

import { getCertifications } from "@/services/notion/getCertificationsFromNotion";
import { getExperience } from "@/services/notion/getExperienceFromNotion";
import { getProfileStats } from "@/services/notion/getProfileStatsFromNotion";
import { getSkills } from "@/services/notion/getSkillsFromNotion";

// import { analytics } from '@/lib/analytics';
import { getResumeData } from "@/data/resumeData";
import { apiLogger } from "@/lib/logger";
import { generateResumePDF } from "@/lib/pdf-generator";

export async function GET(request: NextRequest) {
  try {
    const start = performance.now();
    apiLogger.debug({ request }, "Resume download request");

    const [profileStats, skills, experiences, certifications, basicProfile] =
      await Promise.all([
        getProfileStats(),
        getSkills(),
        getExperience(),
        getCertifications(),
        getResumeData(),
      ]);

    if (profileStats[0] || skills[0] || experiences[0] || certifications[0]) {
      throw new Error("Não localizado");
    }

    const pdfBuffer = await generateResumePDF({
      basicProfile,
      profileStats: profileStats[1],
      skills: skills[1],
      experience: experiences[1],
      certifications: certifications[1],
    });

    const pdfData = new Uint8Array(pdfBuffer);

    const time = performance.now() - start;
    apiLogger.info({ time }, "Resume download - OK");
    return new Response(pdfData, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="joao-silva-resume.pdf"',
        "Cache-Control": "public, max-age=3600", // Cache de 1 hora
      },
    });
  } catch (error) {
    console.log(error);
    apiLogger.error({ stackTrace: error }, "Resume download - Error");
    return Response.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
