import { describe, it, expect } from "vitest";

import {
  Badge,
  Briefcase,
  Calendar,
  Cloud,
  Code,
  Cpu,
  Database,
  GraduationCap,
  Monitor,
  Workflow,
} from "lucide-react";
import { IconMap } from "./IconMapper";

describe("IconMap", () => {
  it("should have all expected keys", () => {
    const expectedKeys = [
      "Briefcase",
      "Calendar",
      "GraduationCap",
      "Badge",
      "Cpu",
      "Code",
      "Cloud",
      "Database",
      "Monitor",
      "Linguagens & Frameworks",
      "DevOps & Cloud",
      "Banco de Dados",
      "Monitoramento & Observabilidade",
      "CI/CD",
    ];

    expectedKeys.forEach((key) => {
      expect(IconMap).toHaveProperty(key);
    });
  });

  it("should map keys to correct icons", () => {
    expect(IconMap["Briefcase"]).toBe(Briefcase);
    expect(IconMap["Calendar"]).toBe(Calendar);
    expect(IconMap["GraduationCap"]).toBe(GraduationCap);
    expect(IconMap["Badge"]).toBe(Badge);
    expect(IconMap["Cpu"]).toBe(Cpu);
    expect(IconMap["Code"]).toBe(Code);
    expect(IconMap["Cloud"]).toBe(Cloud);
    expect(IconMap["Database"]).toBe(Database);
    expect(IconMap["Monitor"]).toBe(Monitor);
    expect(IconMap["Linguagens & Frameworks"]).toBe(Code);
    expect(IconMap["DevOps & Cloud"]).toBe(Cloud);
    expect(IconMap["Banco de Dados"]).toBe(Database);
    expect(IconMap["Monitoramento & Observabilidade"]).toBe(Monitor);
    expect(IconMap["CI/CD"]).toBe(Workflow);
  });
});
