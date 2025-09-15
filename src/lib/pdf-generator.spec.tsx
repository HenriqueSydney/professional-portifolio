import { vi, describe, it, expect } from "vitest";
import { ResumeData } from "@/@types/Resume";
import { generateResumePDF } from "./pdf-generator";
import { randomUUID } from "node:crypto";

// Mock do @react-pdf/renderer
vi.mock("@react-pdf/renderer", async () => {
  const actual: any = await vi.importActual("@react-pdf/renderer");
  return {
    ...actual,
    pdf: vi.fn(() => ({
      toBlob: vi.fn().mockResolvedValue({
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(8)),
      }),
    })),
  };
});

describe("generateResumePDF", () => {
  it("should generate a PDF buffer from resume data", async () => {
    const mockData = {
      basicProfile: { personalInfo: { name: "Henrique" } } as ResumeData,
      profileStats: [],
      skills: [],
      certifications: { id: randomUUID(), certifications: [], courses: [] },
      experience: [],
    };

    const buffer = await generateResumePDF(mockData);

    expect(buffer).toBeInstanceOf(Buffer);
    expect(buffer.byteLength).toBeGreaterThan(0);
  });
});
