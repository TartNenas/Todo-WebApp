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
      versionNumber: "0.0.4",
      title: "Enhanced Category Filtering",
      titleIcon: "FaLayerGroup",
      date: "",
      description: "Extended category filtering to all routine types for a more consistent user experience.",
      changes: [
        {
          title: "Universal Filtering",
          icon: "FaFilter",
          description: "Category filtering now works across all routine types: Weekly Tasks, Morning Routine, and Night Routine."
        },
        {
          title: "Consistent Interface",
          icon: "FaColumns",
          description: "Maintained a consistent interface for filtering across all routine views."
        },
        {
          title: "Visual Indicators",
          icon: "FaTag",
          description: "Added category badges to all routine types when a specific category is selected."
        },
        {
          title: "Improved Navigation",
          icon: "FaExchangeAlt",
          description: "Categories remain selected when switching between different routine types."
        }
      ]
    },
    {
      versionNumber: "0.0.3",
      title: "Category Filtering",
      titleIcon: "FaFilter",
      date: "",
      description: "Added the ability to filter weekly tasks by category for better organization and focus.",
      changes: [
        {
          title: "Clickable Categories",
          icon: "FaList",
          description: "Categories in the sidebar are now clickable and will filter the weekly tasks view."
        },
        {
          title: "Category Indicator",
          icon: "FaTag",
          description: "When a category is selected, a badge appears in the header showing the current filter."
        },
        {
          title: "All Categories Option",
          icon: "FaLayerGroup",
          description: "Added an 'All Categories' option to view all tasks regardless of category."
        },
        {
          title: "Empty State Messages",
          icon: "FaInfoCircle",
          description: "Improved empty state messages to indicate when no tasks exist for a selected category."
        }
      ]
    },
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