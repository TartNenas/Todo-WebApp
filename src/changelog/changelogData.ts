export interface ChangeItem {
  title: string;
  description: string;
  icon?: string;
}

export interface PatchNote {
  version: string;
  description: string;
}

export interface VersionEntry {
  versionNumber: string;
  title: string;
  titleIcon?: string;
  isRolling?: boolean;
  date: string;
  description: string;
  changes: ChangeItem[];
  patches?: PatchNote[];
}

export interface ChangelogData {
  versions: VersionEntry[];
}

const changelogData: ChangelogData = {
  versions: [
    {
      versionNumber: "0.0.2",
      title: "Color Scheme Update",
      titleIcon: "FaPalette",
      date: "",
      description: "Implemented a consistent color scheme throughout the application for better visual coherence and user experience.",
      changes: [
        {
          title: "Unified Color System",
          icon: "FaSwatchbook",
          description: "Standardized on three main colors: Green (#4CAF50), Red (#FF6B6B), and Purple (#845EC2) for consistent visual language."
        },
        {
          title: "Status Indicators",
          icon: "FaCircle",
          description: "Updated status indicators to use consistent colors: Red for not started, Purple for in-progress, and Green for completed tasks."
        },
        {
          title: "Routine Headers",
          icon: "FaHeading",
          description: "Color-coded routine headers to match their respective icons: Green for Weekly Tasks, Red for Morning Routine, and Purple for Night Routine."
        },
        {
          title: "Sidebar Icons",
          icon: "FaIcons",
          description: "Updated sidebar icons to use the new color scheme, enhancing visual consistency across the application."
        }
      ]
    },
    {
      versionNumber: "0.0.1",
      title: "Initial Release",
      titleIcon: "FaRocket",
      isRolling: true,
      date: "",
      description: "First version of our Todo application with essential features to help you organize your tasks.",
      changes: [
        {
          title: "Task Management",
          icon: "FaCheckSquare",
          description: "Create, organize, and track your tasks with our intuitive interface."
        },
        {
          title: "Status Columns",
          icon: "FaChartBar",
          description: "Organize tasks in three columns: To Do, Ongoing, and Completed."
        },
        {
          title: "Weekly Task View",
          icon: "FaCalendarWeek",
          description: "Plan your week with our table-format weekly task view."
        },
        {
          title: "Categories & Routines",
          icon: "FaFolderOpen",
          description: "Classify tasks with categories and set up routines for recurring tasks."
        },
        {
          title: "Local Storage",
          icon: "FaSave",
          description: "Your tasks are automatically saved to local storage for persistence between sessions."
        },
        {
          title: "Modern UI",
          icon: "FaPaintBrush",
          description: "Clean, responsive design with color-coded statuses and categories."
        },
        {
          title: "Responsive Design",
          icon: "FaMobileAlt",
          description: "Works seamlessly on desktop, tablet, and mobile devices."
        },
        {
          title: "Changelog",
          icon: "FaHistory",
          description: "Added this changelog to keep you informed about updates and improvements."
        }
      ]
    }
  ]
};

export default changelogData; 