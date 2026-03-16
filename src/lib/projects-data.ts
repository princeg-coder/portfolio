
import { Play, Globe, ExternalLink, ShieldCheck, Cpu, Server, Database, Cloud, Terminal } from 'lucide-react';
import { PlaceHolderImages } from './placeholder-images';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tech: string[];
  shortDesc: string;
  longDescription: string;
  responsibilities: string[];
  architecture: string[];
  link: string;
  type: string;
  iconName: 'Play' | 'Globe' | 'ExternalLink' | 'ShieldCheck';
  img: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'qiklet',
    title: 'QIKLET',
    subtitle: 'Hyperlocal Marketplace & POS Platform',
    tech: ['Node.js', 'Express.js', 'PostgreSQL', 'Multer', 'AWS S3', 'AWS EC2 Linux', 'Socket.IO'],
    shortDesc: 'Architected the entire backend ecosystem for a high-traffic hyperlocal marketplace. Built scalable REST APIs and managed full AWS infrastructure.',
    longDescription: 'QIKLET is a comprehensive hyperlocal commerce ecosystem connecting shops, customers, and delivery agents. As the lead Backend Developer, I was responsible for designing a modular architecture that could handle high-concurrency order processing and real-time state synchronization.',
    responsibilities: [
      'Designed and developed scalable REST APIs for Android and iOS mobile applications.',
      'Implemented real-time order tracking and notifications using Socket.IO.',
      'Integrated Multer for efficient image processing and multi-part uploads to AWS S3.',
      'Built a robust POS integration layer for vendor inventory management.',
      'Managed full deployment on AWS EC2 Linux instances, including shell scripting for automation.'
    ],
    architecture: [
      'Service-oriented backend with Node.js and Express.',
      'Relational data modeling with PostgreSQL for ACID compliance.',
      'AWS S3 for distributed media storage.',
      'Production monitoring using PM2 and CloudWatch.'
    ],
    link: 'https://play.google.com/store/apps/details?id=com.dreamfiller.qiklet',
    type: 'Android & iOS App',
    iconName: 'Play',
    img: PlaceHolderImages.find(i => i.id === 'qiklet-thumbnail')?.imageUrl || 'https://picsum.photos/seed/qiklet/800/600'
  },
  {
    id: 'broan-nutone',
    title: 'Broan & NuTone',
    subtitle: 'IoT Device Platform',
    tech: ['Node.js', 'AWS IoT Core', 'MQTT', 'PostgreSQL', 'AWS Lambda'],
    shortDesc: 'Engineered a real-time IoT platform for smart home hardware onboarding and telemetry processing.',
    longDescription: 'Collaborated on a global IoT platform for Broan & NuTone smart devices. The system manages thousands of connected devices, processing real-time telemetry and enabling low-latency remote control through MQTT protocols.',
    responsibilities: [
      'Developed backend APIs for IoT device onboarding and lifecycle management.',
      'Engineered telemetry processing pipelines to handle real-time sensor data.',
      'Integrated AWS IoT Core with Node.js via MQTT for bidirectional device communication.',
      'Implemented remote control features with sub-second latency for smart hardware.'
    ],
    architecture: [
      'Event-driven architecture using AWS IoT Core rules.',
      'MQTT protocol for lightweight hardware-to-cloud communication.',
      'Serverless components for specific telemetry transformations.'
    ],
    link: 'https://play.google.com/store/apps/details?id=com.ciaqbroan.overture.mobile&hl=en_IN',
    type: 'IoT Mobile App',
    iconName: 'Play',
    img: PlaceHolderImages.find(i => i.id === 'iot-platform-thumbnail')?.imageUrl || 'https://picsum.photos/seed/iot/800/600'
  },
  {
    id: 'age-industries',
    title: 'Age Industries',
    subtitle: 'BLDC Fan IoT Platform',
    tech: ['Node.js', 'MQTT', 'PostgreSQL', 'Real-time APIs'],
    shortDesc: 'Developed backend services for smart BLDC fans, enabling remote telemetry and analytics.',
    longDescription: 'A custom IoT solution for smart fan hardware. I built the backend services that allow users to control their fans remotely and view usage analytics through telemetry data processing.',
    responsibilities: [
      'Created backend services for remote monitoring of BLDC fans.',
      'Implemented MQTT-based communication for device state management.',
      'Developed data processing workers for fan telemetry and usage analytics.'
    ],
    architecture: [
      'Real-time message brokering for device control.',
      'Optimized database schemas for time-series telemetry data.'
    ],
    link: '#',
    type: 'Development Project',
    iconName: 'ShieldCheck',
    img: PlaceHolderImages.find(i => i.id === 'age-industries-thumbnail')?.imageUrl || 'https://picsum.photos/seed/fan/800/600'
  },
  {
    id: 'school-management',
    title: 'School Management',
    subtitle: 'Enterprise ERP System',
    tech: ['Node.js', 'React', 'PostgreSQL', 'REST APIs'],
    shortDesc: 'A comprehensive digital campus solution covering admissions, administration, and financial workflows.',
    longDescription: 'Designed a multi-tenant ERP system for educational institutions. The platform digitizes complex workflows including student registration, attendance tracking, and fee management.',
    responsibilities: [
      'Architected the administrative and student lifecycle modules.',
      'Implemented complex RBAC (Role-Based Access Control) for different staff levels.',
      'Designed financial reporting engines for fee tracking and reconciliation.'
    ],
    architecture: [
      'Monolithic backend for consistency in enterprise workflows.',
      'Complex SQL query optimization for large-scale reporting.'
    ],
    link: 'https://schoolmanagement.dream-filler.com/',
    type: 'Web Application',
    iconName: 'Globe',
    img: 'https://picsum.photos/seed/school-er/800/600'
  },
  {
    id: 'exam-portal',
    title: 'Exam Portal',
    subtitle: 'Digital Assessment Platform',
    tech: ['Node.js', 'PostgreSQL', 'Security Middleware', 'Real-time Proctoring'],
    shortDesc: 'Secure digital assessment platform for high-stakes online examinations.',
    longDescription: 'Developed a robust examination platform designed for security and scalability. The system supports thousands of concurrent test-takers with real-time proctoring and automated grading.',
    responsibilities: [
      'Developed secure assessment APIs with strict anti-cheat middleware.',
      'Engineered real-time proctoring signals for exam integrity.',
      'Built automated grading systems for various objective question types.'
    ],
    architecture: [
      'Stateless API design for high horizontal scalability during peak exam loads.',
      'PostgreSQL with optimized indexing for fast result retrieval.'
    ],
    link: 'https://examportal.dream-filler.com/',
    type: 'Web Application',
    iconName: 'Globe',
    img: 'https://picsum.photos/seed/exam-portal/800/600'
  },
  {
    id: 'core-desk',
    title: 'Core Desk',
    subtitle: 'Team Collaboration Workspace',
    tech: ['Next.js', 'Node.js', 'Tailwind', 'Real-time Sync'],
    shortDesc: 'Modern collaborative workspace tool for agile teams and task management.',
    longDescription: 'Core Desk is a productivity suite for agile teams. I built the infrastructure that handles task synchronization, team workspaces, and project progress tracking.',
    responsibilities: [
      'Implemented real-time workspace collaboration features.',
      'Developed task management and assignment engines.',
      'Integrated rich-text editing and document storage.'
    ],
    architecture: [
      'Next.js for the frontend with a decoupled Node.js backend.',
      'Responsive design using Tailwind CSS.'
    ],
    link: 'https://coredesk.vercel.app/',
    type: 'Web Application',
    iconName: 'ExternalLink',
    img: 'https://picsum.photos/seed/core-desk/800/600'
  },
  {
    id: 'aws-optimization',
    title: 'AWS Optimization',
    subtitle: 'Infrastructure Cost & Performance Engineering',
    tech: ['AWS EC2', 'Linux', 'Networking', 'VPC', 'Security Groups'],
    shortDesc: 'Reduced infrastructure costs by 60% through strategic migration and network redesign.',
    longDescription: 'A critical engineering project where I audited the existing Windows-based server farm and migrated production workloads to a more efficient Linux-based environment.',
    responsibilities: [
      'Migrated production EC2 instances from Windows to Linux, improving runtime efficiency.',
      'Redesigned VPC, subnets, and security groups for enhanced security and cost-efficiency.',
      'Implemented auto-scaling groups and refined instance sizing, resulting in a 60% cost reduction.'
    ],
    architecture: [
      'Highly available multi-AZ network design.',
      'Linux-based application servers for lower licensing costs and better performance.'
    ],
    link: '#',
    type: 'Case Study',
    iconName: 'ShieldCheck',
    img: PlaceHolderImages.find(i => i.id === 'aws-opt-thumbnail')?.imageUrl || 'https://picsum.photos/seed/aws/800/600'
  }
];
