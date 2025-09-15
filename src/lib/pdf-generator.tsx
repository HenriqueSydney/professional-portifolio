import React from "react";
import {
  Document,
  Link,
  Page,
  pdf,
  StyleSheet,
  Text,
  View,
} from "@react-pdf/renderer";

import { ResumeData } from "@/@types/Resume";

import { Certifications } from "@/services/notion/getCertificationsFromNotion";
import { Experience } from "@/services/notion/getExperienceFromNotion";
import { ProfileStats } from "@/services/notion/getProfileStatsFromNotion";
import { Skills } from "@/services/notion/getSkillsFromNotion";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    backgroundColor: "#ffffff",
    padding: 40,
    fontFamily: "Helvetica",
    fontSize: 11,
    lineHeight: 1.4,
    color: "#333333",
  },

  // Header Styles
  header: {
    marginBottom: 25,
    alignItems: "center",
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 8,
    textAlign: "center",
  },
  profession: {
    fontSize: 16,
    color: "#4a5568",
    marginBottom: 12,
    textAlign: "center",
    fontWeight: "bold",
  },
  contactInfo: {
    fontSize: 11,
    color: "#666666",
    textAlign: "center",
    lineHeight: 1.3,
  },

  // Section Styles
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#1a1a1a",
    marginBottom: 12,
    textTransform: "uppercase",
    letterSpacing: 0.8,
    borderBottom: "1pt solid #e2e8f0",
    paddingBottom: 4,
  },

  // Content Styles
  paragraph: {
    fontSize: 11,
    lineHeight: 1.5,
    color: "#4a5568",
    textAlign: "justify",
    marginBottom: 8,
  },

  // Experience Styles
  experienceItem: {
    marginBottom: 16,
    paddingLeft: 8,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 3,
  },
  company: {
    fontSize: 12,
    color: "#4a5568",
    fontWeight: "bold",
    marginBottom: 2,
  },
  period: {
    fontSize: 10,
    color: "#718096",
    marginBottom: 8,
    fontStyle: "italic",
  },
  description: {
    fontSize: 10,
    lineHeight: 1.4,
    color: "#4a5568",
    textAlign: "justify",
  },

  // Skills Styles
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 15,
  },
  skillCategory: {
    flex: 1,
    minWidth: "45%",
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2d3748",
    marginBottom: 6,
  },
  skillTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillTag: {
    fontSize: 9,
    backgroundColor: "#edf2f7",
    color: "#4a5568",
    padding: "3px 8px",
    borderRadius: 2,
    marginBottom: 3,
  },

  // Education & Certifications
  listItem: {
    fontSize: 11,
    color: "#4a5568",
    marginBottom: 6,
    paddingLeft: 12,
    lineHeight: 1.4,
  },
  bulletPoint: {
    fontSize: 11,
    color: "#4a5568",
    marginBottom: 4,
    paddingLeft: 0,
    lineHeight: 1.4,
  },

  // Subsection
  subsectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#2d3748",
    marginTop: 12,
    marginBottom: 8,
  },

  // Footer
  footer: {
    marginTop: 20,
    alignItems: "center",
    borderTop: "1pt solid #e2e8f0",
    paddingTop: 12,
  },
  footerText: {
    fontSize: 11,
    color: "#4a5568",
    fontWeight: "bold",
    marginBottom: 4,
  },
  link: {
    fontSize: 11,
    color: "#3182ce",
    textDecoration: "underline",
  },
});

interface IResumeDocument {
  basicProfile: ResumeData;
  profileStats: ProfileStats[];
  skills: Skills[];
  certifications: Certifications;
  experience: Experience[];
}

const ResumeDocument = ({
  basicProfile,
  certifications,
  experience,
  skills,
}: IResumeDocument) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{basicProfile.personalInfo.name}</Text>
        <Text style={styles.profession}>Full Stack Developer</Text>
        <Text style={styles.contactInfo}>
          36 anos | Águas Claras | (61) 99512-5151 |
          henriquesydneylima@gmail.com
        </Text>
      </View>

      {/* Resumo Profissional */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Resumo Profissional</Text>
        <Text style={styles.paragraph}>
          Profissional com 8 anos de experiência em desenvolvimento de sistemas
          fullstack, destacando-se na liderança de equipes e projetos de
          desburocratização e inovação na gestão de pessoas. Experiência
          consolidada em tecnologias como NodeJS, NextJS, PHP e ferramentas de
          DevOps. Forte atuação em otimização de processos, automatização e
          desenvolvimento de plataformas robustas, com conhecimento em
          governança e planejamento estratégico. Inglês fluente. Atualmente,
          estou investindo em preparação para certificação Multicloud (AWS,
          Azure e Google Cloud), focado em DevOps.
        </Text>
      </View>

      {/* Formação Acadêmica */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Formação Acadêmica</Text>
        <Text style={styles.bulletPoint}>
          • Pós-graduação em Engenharia DevOps – CEUB (conclusão prevista:
          Jul/2025)
        </Text>
        <Text style={styles.bulletPoint}>
          • Graduação em Análise e Desenvolvimento de Sistemas – 4º semestre –
          CEUB – (previsão: Dez/2025)
        </Text>
        <Text style={styles.bulletPoint}>
          • Pós-graduação em Gestão de Pessoas e Coaching – CEUB (2015)
        </Text>
        <Text style={styles.bulletPoint}>
          • Graduação em Nutrição Clínica – Centro Universitário de Brasília –
          CEUB (2012)
        </Text>
      </View>

      {/* Experiência Profissional */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência Profissional</Text>
        {experience.map((exp, index) => (
          <View key={index}>
            <Text style={styles.bulletPoint}>
              • {exp.title} – {exp.company} – {exp.period}
            </Text>
            {exp.description && (
              <Text
                style={[
                  styles.description,
                  { marginLeft: 12, marginBottom: 8 },
                ]}
              >
                {exp.description}
              </Text>
            )}
          </View>
        ))}
      </View>

      {/* Conhecimentos Técnicos */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Conhecimentos Técnicos</Text>
        {skills.map((skillGroup, index) => (
          <View key={index} style={{ marginBottom: 2 }}>
            <View
              style={{
                flexDirection: "row",
                flexWrap: "wrap",
                alignItems: "flex-start",
              }}
            >
              <Text
                style={[
                  styles.skillCategoryTitle,
                  { minWidth: 120, marginRight: 8 },
                ]}
              >
                • {skillGroup.category}:
              </Text>
              <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
                {skillGroup.stack.map((skill, skillIndex) => (
                  <Text key={skill.id} style={styles.bulletPoint}>
                    {skill.label}
                    {skillIndex < skillGroup.stack.length - 1 ? ", " : ";"}
                  </Text>
                ))}
              </View>
            </View>
          </View>
        ))}
      </View>

      {/* Cursos e Certificações */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>
          Cursos e Certificações (principais)
        </Text>

        {certifications.certifications.length > 0 && (
          <>
            <Text style={styles.subsectionTitle}>Certificações</Text>
            {certifications.certifications.slice(0, 5).map((cert) => (
              <Text key={cert.id} style={styles.bulletPoint}>
                • {cert.description}
              </Text>
            ))}
          </>
        )}

        <Text style={styles.subsectionTitle}>Cursos</Text>
        {certifications.courses.slice(0, 10).map((course) => (
          <Text key={course.id} style={styles.bulletPoint}>
            • {course.description}
          </Text>
        ))}
      </View>

      {/* Projetos Relevantes */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projetos Relevantes</Text>
        <Text style={styles.subsectionTitle}>
          Desenvolvimento de módulos de gestão de pessoas em PHP:
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Módulo do Programa de Gestão e Desenvolvimento
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Automatização de cálculos para pagamento e automatização e
          levantamento de registro para lançamento de Afastamentos no Sigepe
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Gestão de Documento com assinatura digital integrada ao Assinador
          Serpro
        </Text>

        <Text style={styles.subsectionTitle}>
          Sistema de processamento de atos do Diário Oficial da União e Boletim
          de Serviço em NextJS e NodeJS:
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Integrado com o InLabs e com o Microsoft Sharepoint
        </Text>

        <Text style={styles.subsectionTitle}>
          Plataforma de Desenvolvimento Interno (IDP) em NextJS e NodeJS:
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Integração com o Microsoft EntraID
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Integração com GitLab, MinIO e Kafka
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Simplificação da disponibilização de recursos para deploy de
          aplicações e banco de dados em clusters Kubernetes
        </Text>
        <Text style={styles.bulletPoint}>
          {" "}
          • Estruturado em arquitetura de microsserviços
        </Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Para ver mais informações, acesse:
        </Text>
        <Link src="https://henriquelima.dev" style={styles.link}>
          HenriqueLima.dev
        </Link>
      </View>
    </Page>
  </Document>
);

export async function generateResumePDF(
  data: IResumeDocument
): Promise<Buffer> {
  const doc = <ResumeDocument {...data} />;
  const pdfBlob = await pdf(doc).toBlob();
  const arrayBuffer = await pdfBlob.arrayBuffer();
  return Buffer.from(arrayBuffer);
}
