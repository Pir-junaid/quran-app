/**
 * Simple PDF Export helper
 * Client-side only
 */

export function exportToPDF(title, content) {
  if (typeof window === "undefined") return;

  const printWindow = window.open("", "_blank");
  printWindow.document.write(`
    <html>
      <head>
        <title>${title}</title>
        <style>
          body {
            font-family: serif;
            padding: 20px;
          }
          h1 {
            text-align: center;
          }
          p {
            font-size: 18px;
            line-height: 1.8;
          }
        </style>
      </head>
      <body>
        <h1>${title}</h1>
        <p>${content}</p>
      </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.print();
}// Export notes to PDF
