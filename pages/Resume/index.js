import { useState } from "react";
import classes from "./Resume.module.css";

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className={classes.layout}>
      <h1>RESUME</h1>
      <a
        className={classes.resumeLink}
        href="/files/resume.pdf"
        target="_blank"
      >
        See Resume in New Tab (PDF)
      </a>
      <iframe
        src="https://drive.google.com/file/d/1JEzWH9MznXb8JBiKWUTGY7nsKToUU3tI/preview"
        width="640"
        height="850"
      ></iframe>
    </div>
  );
}

export default Resume;
