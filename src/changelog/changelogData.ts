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
      versionNumber: "0.0.1",
      title: "Initial Release",
      titleIcon: "FaRocket",
      isRolling: true,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
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