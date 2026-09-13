import {
  UploadCloud,
  FileCheck2,
  Sparkles,
  Wrench,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Files,
  Users,
  Lock,
  Bot,
} from "lucide-react";

export const heroContent = {
  title: {
    first: "Documents ready.",
    second: "Applications ready.",
    highlight: "You ready.",
  },
  description:
    "Formio automatically prepares your documents exactly as per requirements. Upload, verify, and get application-ready in minutes.",
  primaryButton: "Get Started Free",
  secondaryButton: "Watch Demo",
  trustText: "Trusted by 10,000+ students",
};

export const workflowSteps = [
  {
    number: "01",
    title: "Upload Notification",
    description: "Upload the official notification or select the application.",
    icon: UploadCloud,
    color: "#2563eb",
    bgColor: "#eff6ff",
  },
  {
    number: "02",
    title: "Upload Documents",
    description: "Upload your documents in any format or size.",
    icon: Files,
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
  {
    number: "03",
    title: "AI Understands",
    description: "Formio AI reads requirements and identifies your documents.",
    icon: Sparkles,
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    number: "04",
    title: "Auto Process & Verify",
    description: "We resize, compress, convert and verify everything.",
    icon: Wrench,
    color: "#f59e0b",
    bgColor: "#fffbeb",
  },
  {
    number: "05",
    title: "Download & Submit",
    description: "Download all documents application-ready!",
    icon: CheckCircle2,
    color: "#059669",
    bgColor: "#ecfdf5",
  },
];

export const stats = [
  {
    value: "10,000+",
    label: "Happy Users",
    description: "Students trust Formio",
    icon: Users,
    color: "#2563eb",
    bgColor: "#eff6ff",
  },
  {
    value: "50,000+",
    label: "Documents Processed",
    description: "Application-ready documents",
    icon: ShieldCheck,
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
  {
    value: "95%",
    label: "Time Saved",
    description: "Average time saved",
    icon: Zap,
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  {
    value: "100%",
    label: "Data Secure",
    description: "Your data is safe with us",
    icon: Lock,
    color: "#0284c7",
    bgColor: "#f0f9ff",
  },
];

export const features = [
  {
    title: "AI Requirement Analysis",
    description:
      "Understand complex application notifications and convert requirements into a simple checklist.",
    icon: Bot,
  },
  {
    title: "Smart Document Validation",
    description:
      "Check format, dimensions, file size and other requirements before you submit.",
    icon: FileCheck2,
  },
  {
    title: "Automatic Optimization",
    description:
      "Automatically resize, compress and convert documents according to requirements.",
    icon: Zap,
  },
  {
    title: "Secure Document Handling",
    description:
      "Keep your application documents protected throughout the preparation process.",
    icon: ShieldCheck,
  },
];