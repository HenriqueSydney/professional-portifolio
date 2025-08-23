import { ResumeData } from '@/@types/Resume';
import { Document, Page, Text, View, StyleSheet, pdf } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 20,
    borderBottom: '1pt solid #333333',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    color: '#6666667c',
    marginBottom: 8,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    fontSize: 9,
    color: '#666666',
    gap: 15,
  },
  contactItem: {
    marginRight: 15,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    color: '#444444',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#333333',
  },
  company: {
    fontSize: 11,
    color: '#666666',
    fontStyle: 'italic',
  },
  period: {
    fontSize: 9,
    color: '#666666',
  },
  description: {
    fontSize: 10,
    lineHeight: 1.4,
    color: '#444444',
    marginBottom: 5,
  },
  achievements: {
    marginLeft: 10,
  },
  achievement: {
    fontSize: 9,
    color: '#444444',
    marginBottom: 2,
  },
  technologies: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    gap: 5,
  },
  tech: {
    fontSize: 8,
    backgroundColor: '#f0f0f0',
    color: '#666666',
    padding: '2px 6px',
    borderRadius: 3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
  },
  skillCategory: {
    flex: 1,
    minWidth: '45%',
    marginBottom: 10,
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 5,
  },
  skillItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  skillName: {
    fontSize: 9,
    color: '#444444',
  },
  skillLevel: {
    fontSize: 8,
    color: '#666666',
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
  },
  institution: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
  },
  projectItem: {
    marginBottom: 12,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 3,
  },
  projectDescription: {
    fontSize: 9,
    color: '#444444',
    lineHeight: 1.4,
    marginBottom: 5,
  },
  projectHighlights: {
    marginLeft: 10,
    marginBottom: 5,
  },
  highlight: {
    fontSize: 8,
    color: '#444444',
    marginBottom: 2,
  },
  certificationItem: {
    marginBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  certTitle: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#333333',
  },
  certIssuer: {
    fontSize: 9,
    color: '#666666',
  },
  certDate: {
    fontSize: 8,
    color: '#666666',
  },
  languageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 15,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  language: {
    fontSize: 10,
    color: '#333333',
    marginRight: 5,
  },
  languageLevel: {
    fontSize: 8,
    color: '#666666',
    backgroundColor: '#f0f0f0',
    padding: '2px 6px',
    borderRadius: 3,
  },
});

const ResumeDocument = ({ data }: { data: ResumeData }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.header}>
        <Text>{data.personalInfo.name}</Text>
        <Text style={styles.subtitle}>{data.personalInfo.title}</Text>
      </View>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experiência</Text>
        {data.experience.map((exp, index) => (
          <View key={index} style={styles.experienceItem}>
            <Text style={styles.jobTitle}>{exp.title}</Text>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.period}>{exp.period}</Text>
            <Text style={styles.description}>{exp.description}</Text>
          </View>
        ))}
      </View>
      
      {/* Mais seções... */}
    </Page>
  </Document>
);

export async function generateResumePDF(data: ResumeData): Promise<Buffer> {
  const doc = <ResumeDocument data={data} />;
  const pdfBlob = await pdf(doc).toBlob();
  const arrayBuffer = await pdfBlob.arrayBuffer();
  return Buffer.from(arrayBuffer);

}