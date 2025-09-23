import { NextRequest } from "next/server";

import { apiLogger } from "@/lib/logger";
import { generateResumePDF } from "@/lib/pdf-generator";
import { getProfileStats } from "@/services/profileInformation/getProfileStats";
import { getSkills } from "@/services/profileInformation/getSkills";
import { getExperience } from "@/services/profileInformation/getExperience";
import { getCertifications } from "@/services/profileInformation/getCertifications";
import { getGraduations } from "@/services/profileInformation/getGraduations";
import { getBasicInfo } from "@/services/profileInformation/getBasicInfo";
import { getProjects } from "@/services/profileInformation/getProjects";

export async function GET(request: NextRequest) {
  try {
    const start = performance.now();
    apiLogger.debug({ request }, "Resume download request");

    const [
      basicInfo,
      profileStats,
      skills,
      experiences,
      certifications,
      graduations,
      projects,
    ] = await Promise.all([
      getBasicInfo(),
      getProfileStats(),
      getSkills(),
      getExperience(),
      getCertifications(),
      getGraduations(),
      getProjects(),
    ]);

    if (
      profileStats[0] ||
      skills[0] ||
      experiences[0] ||
      certifications[0] ||
      graduations[0] ||
      basicInfo[0] ||
      projects[0]
    ) {
      throw new Error("Não localizado");
    }

    const pdfBuffer = await generateResumePDF({
      basicInfo: basicInfo[1],
      profileStats: profileStats[1],
      skills: skills[1],
      experience: experiences[1],
      certifications: certifications[1],
      graduations: graduations[1],
      projects: projects[1],
    });

    const pdfData = new Uint8Array(pdfBuffer);

    const time = performance.now() - start;
    apiLogger.info({ time }, "Resume download - OK");
    return new Response(pdfData, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="henrique-lima-resume.pdf"',
        "Cache-Control": "public, max-age=3600", // Cache de 1 hora
      },
    });
  } catch (error) {
    console.log(error);
    apiLogger.error({ stackTrace: error }, "Resume download - Error");
    return Response.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}
