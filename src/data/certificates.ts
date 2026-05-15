import certificateAwsCloudFoundations from "@/assets/c_1.png";
import certificateCoursera from "@/assets/c_2.png";
import certificateCybersecurity from "@/assets/c_3.png";
import certificateCyberawareness from "@/assets/c_4.png";
import type { Certificate } from "@/types";

export const CERTIFICATES: Certificate[] = [
  {
    title: 'AWS Academy Graduate - Cloud Foundations',
    desc: 'AWS Academy - Nov 24, 2025 - 20 hours',
    image: certificateAwsCloudFoundations,
    link: 'https://www.credly.com/go/0OKA0x1Z',
  },
  {
    title: 'Customer Service with Python: Build a Chatbot using ChatGPT',
    desc: 'Coursera Project Network - Apr 18, 2025',
    image: certificateCoursera,
    link: 'https://coursera.org/verify/FRCJ9CQKZLIB',
  },
  {
    title: 'Basic Cybersecurity',
    desc: 'MOOC NCSA Thailand - Aug 31, 2024',
    image: certificateCybersecurity,
    link: '',
  },
  {
    title: 'Cybersecurity Awareness',
    desc: 'DGA & TDGA Thailand - Oct 20, 2023',
    image: certificateCyberawareness,
    link: 'https://portal.apps.go.th/edoc/signature/verify?DocumentID=ce7f5759-c6a9-48ce-8ddd-93ef706e801b',
  },
];
