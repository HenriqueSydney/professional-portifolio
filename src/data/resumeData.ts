import { ResumeData } from "@/@types/Resume";

// Mock data - substitua pelos seus dados reais
const mockResumeData: ResumeData = {
  personalInfo: {
    name: 'João Silva',
    title: 'Full Stack Developer',
    email: 'joao.silva@email.com',
    phone: '+55 (11) 99999-9999',
    location: 'São Paulo, SP',
    linkedin: 'https://linkedin.com/in/joaosilva',
    github: 'https://github.com/joaosilva',
    website: 'https://joaosilva.dev',
    summary: 'Desenvolvedor Full Stack com 5+ anos de experiência em React, Node.js e tecnologias cloud. Especializado em arquiteturas escaláveis e desenvolvimento de produtos digitais de alta performance.'
  },
  experience: [
    {
      id: '1',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp',
      location: 'São Paulo, SP',
      period: 'Jan 2023 - Presente',
      startDate: '2023-01-01',
      endDate: null,
      description: 'Desenvolvimento de aplicações web escaláveis usando React, Next.js, Node.js e AWS.',
      achievements: [
        'Reduziu tempo de carregamento da aplicação em 40%',
        'Implementou arquitetura de microserviços que aumentou a disponibilidade em 99.9%',
        'Liderou equipe de 4 desenvolvedores júnior'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes']
    },
    {
      id: '2',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'São Paulo, SP',
      period: 'Mar 2021 - Dez 2022',
      startDate: '2021-03-01',
      endDate: '2022-12-31',
      description: 'Desenvolvimento de MVP e features para plataforma de e-commerce B2B.',
      achievements: [
        'Desenvolveu sistema de pagamentos que processou R$ 2M+ em transações',
        'Implementou dashboard analytics que aumentou retenção de usuários em 25%',
        'Criou API REST consumida por 10+ aplicações parceiras'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Redis', 'Docker']
    }
  ],
  education: [
    {
      id: '1',
      degree: 'Bacharelado em Ciência da Computação',
      institution: 'Universidade de São Paulo (USP)',
      location: 'São Paulo, SP',
      period: '2017 - 2020',
      startDate: '2017-02-01',
      endDate: '2020-12-15',
      gpa: '8.5/10',
      honors: ['Magna Cum Laude', 'Menção Honrosa em Algoritmos']
    }
  ],
  skills: [
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 'Expert', years: 5 },
        { name: 'Next.js', level: 'Avançado', years: 3 },
        { name: 'TypeScript', level: 'Avançado', years: 4 },
        { name: 'Tailwind CSS', level: 'Avançado', years: 2 }
      ]
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js', level: 'Expert', years: 5 },
        { name: 'Python', level: 'Intermediário', years: 2 },
        { name: 'PostgreSQL', level: 'Avançado', years: 4 },
        { name: 'MongoDB', level: 'Avançado', years: 3 }
      ]
    },
    {
      category: 'DevOps & Cloud',
      skills: [
        { name: 'AWS', level: 'Avançado', years: 3 },
        { name: 'Docker', level: 'Avançado', years: 3 },
        { name: 'Kubernetes', level: 'Intermediário', years: 1 },
        { name: 'Terraform', level: 'Intermediário', years: 1 }
      ]
    }
  ],
  projects: [
    {
      id: '1',
      title: 'E-commerce Platform',
      description: 'Plataforma de e-commerce completa com painel administrativo, sistema de pagamentos e dashboard analytics.',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com/joaosilva/ecommerce-platform',
      liveUrl: 'https://ecommerce-demo.com',
      highlights: [
        'Processou R$ 500K+ em vendas no primeiro mês',
        'Dashboard em tempo real com métricas de negócio',
        'Sistema de recomendação com ML'
      ],
      startDate: '2023-06-01',
      endDate: '2023-11-30'
    },
    {
      id: '2',
      title: 'Task Management App',
      description: 'Aplicativo de gerenciamento de tarefas com colaboração em tempo real e integrações.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Docker'],
      githubUrl: 'https://github.com/joaosilva/task-manager',
      highlights: [
        'Colaboração em tempo real para 100+ usuários simultâneos',
        'Integrações com Slack, Trello e Google Calendar',
        'PWA com sincronização offline'
      ],
      startDate: '2022-01-01',
      endDate: '2022-05-31'
    }
  ],
  certifications: [
    {
      id: '1',
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      issueDate: '2023-08-15',
      expiryDate: '2026-08-15',
      credentialId: 'AWS-SAA-123456',
      credentialUrl: 'https://credly.com/badges/aws-saa-123456'
    },
    {
      id: '2',
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB Inc.',
      issueDate: '2022-05-20',
      expiryDate: '2025-05-20',
      credentialId: 'MONGO-DEV-789012'
    }
  ],
  languages: [
    { language: 'Português', level: 'Nativo' },
    { language: 'Inglês', level: 'Fluente' },
    { language: 'Espanhol', level: 'Intermediário' }
  ],
  lastUpdated: new Date().toISOString(),
  version: '1.0.0'
};

// Função para buscar dados do resume
export async function getResumeData(version: string = 'latest'): Promise<ResumeData> {
  // Em produção, isso viria de um CMS, banco de dados, ou API
  // Por enquanto, retornamos os dados mock

  try {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 100));

    // Aqui você pode implementar:
    // - Busca no Strapi/Contentful
    // - Consulta no banco de dados
    // - Cache no Redis
    // - Versionamento de dados

    return mockResumeData;
  } catch (error) {
    console.error('Erro ao buscar dados do resume:', error);
    throw new Error('Falha ao carregar dados do currículo');
  }
}

// Função para buscar dados específicos por seção
export async function getResumeSection<K extends keyof ResumeData>(section: K): Promise<ResumeData[K]> {
  const data = await getResumeData();
  return data[section];
}

// Função para validar dados do resume
export function validateResumeData(data: Partial<ResumeData>): string[] {
  const errors: string[] = [];

  if (!data.personalInfo?.name) {
    errors.push('Nome é obrigatório');
  }

  if (!data.personalInfo?.email) {
    errors.push('Email é obrigatório');
  }

  if (!data.experience || data.experience.length === 0) {
    errors.push('Pelo menos uma experiência é obrigatória');
  }

  return errors;
}