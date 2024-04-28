// // components/PolotnoEditor.tsx
// import React, { useEffect } from 'react';
// import MyComponent from './MyComponent';

// interface PolotnoEditorProps {
//  templateData: any; // Adjust the type based on your template data structure
// }

// const PolotnoEditor: React.FC<PolotnoEditorProps> = ({ templateData }) => {
//  useEffect(() => {
//     function inchesToPx(inches: number): number {
//       var dpi = 72; // dots per inch
//       return inches * dpi;
//     }

//     // Check if window is defined to avoid SSR issues
//     if (typeof window !== 'undefined' && window.createPolotnoEditor) {
//       window.createPolotnoEditor({
//         key: 'api key',
//         sections: [
//           'templates',
//           'photos',
//           'text',
//           'elements',
//           'upload',
//           'background',
//           'layers',
//           'size',
//         ],
//         defaultSection: 'photos',
//         width: inchesToPx(20),
//         height: inchesToPx(10),
//         jsonUrl: templateData.jsonUrl, // Use templateData to set initial values
//         publishLabel: 'Save',
//         onPublish: (url: any) => {
//           // Handle the published content
//           <MyComponent url={url} />
//         },
//         uploads: [
//           {
//             url: templateData.uploadUrl, // Assuming templateData has an uploadUrl property
//             preview: templateData.uploadPreview, // Assuming templateData has an uploadPreview property
//           },
//         ],
//         animationsEnabled: true,
//         translations: {
//           sidePanel: {
//             templates: 'Шаблоны',
//           },
//         },
//       });
//     }
//  }, [templateData]); // Add templateData to the dependency array

//  return <div id="polotno-editor"></div>;
// };

// export default PolotnoEditor;
