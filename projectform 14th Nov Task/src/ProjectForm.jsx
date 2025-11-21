import React, { useState } from "react";

const ProjectForm = () => {
  const [formData, setFormData] = useState({
    projectTitle: "",
    projectCategory: "",
    projectDescription: "",
    teamLeader: "",
    teamMembers: "",
    guideName: "",
    department: "",
    frontend: "",
    backend: "",
    database: "",
    otherTools: "",
    reportFile: null,
    presentationFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Project Submission Details", 20, 20);
    doc.setFontSize(12);
    let y = 30;

    const entries = [
      ["Project Title", formData.projectTitle],
      ["Project Category", formData.projectCategory],
      ["Project Description", formData.projectDescription],
      ["Team Leader", formData.teamLeader],
      ["Team Members", formData.teamMembers],
      ["Guide Name", formData.guideName],
      ["Department", formData.department],
      ["Frontend Technologies", formData.frontend],
      ["Backend Technologies", formData.backend],
      ["Database Used", formData.database],
      ["Other Tools / Libraries", formData.otherTools],
      ["Project Report File", formData.reportFile ? formData.reportFile.name : "No file selected"],
      ["Presentation File", formData.presentationFile ? formData.presentationFile.name : "No file selected"],
    ];

    entries.forEach(([key, value]) => {
      doc.text(`${key}: ${value}`, 20, y);
      y += 10;
      if (y > 280) {  // Add new page if content exceeds
        doc.addPage();
        y = 20;
      }
    });

    doc.save(`${formData.projectTitle || "project"}.pdf`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-purple-50 border border-purple-300 rounded-2xl shadow-lg text-purple-900">
      <h2 className="text-3xl text-center mb-6 font-bold">Project Addition Form</h2>

      <form className="space-y-6" onSubmit={handleSubmit}>

        {/* Project Details */}
        <div className="bg-purple-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-semibold mb-4">1. Project Details</h3>
          <input
            type="text"
            name="projectTitle"
            placeholder="Project Title"
            value={formData.projectTitle}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <select
            name="projectCategory"
            value={formData.projectCategory}
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          >
            <option value="">Select Category</option>
            <option>Web Development</option>
            <option>AI / ML</option>
            <option>Mobile App</option>
            <option>Database Project</option>
          </select>
          <textarea
            name="projectDescription"
            value={formData.projectDescription}
            onChange={handleChange}
            placeholder="Project Description"
            className="w-full p-3 rounded-md border border-purple-300 h-28 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Team Details */}
        <div className="bg-purple-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-semibold mb-4">2. Team Details</h3>
          <input
            type="text"
            name="teamLeader"
            value={formData.teamLeader}
            onChange={handleChange}
            placeholder="Team Leader Name"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <input
            type="text"
            name="teamMembers"
            value={formData.teamMembers}
            onChange={handleChange}
            placeholder="Team Members"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Guide Details */}
        <div className="bg-purple-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-semibold mb-4">3. Guide / Mentor Details</h3>
          <input
            type="text"
            name="guideName"
            value={formData.guideName}
            onChange={handleChange}
            placeholder="Guide Name"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <input
            type="text"
            name="department"
            value={formData.department}
            onChange={handleChange}
            placeholder="Department"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* Technology Stack */}
        <div className="bg-purple-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-semibold mb-4">4. Technology Stack</h3>
          <input
            type="text"
            name="frontend"
            value={formData.frontend}
            onChange={handleChange}
            placeholder="Frontend Technologies"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <input
            type="text"
            name="backend"
            value={formData.backend}
            onChange={handleChange}
            placeholder="Backend Technologies"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <input
            type="text"
            name="database"
            value={formData.database}
            onChange={handleChange}
            placeholder="Database Used"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 mb-2"
          />
          <input
            type="text"
            name="otherTools"
            value={formData.otherTools}
            onChange={handleChange}
            placeholder="Other Tools / Libraries"
            className="w-full p-3 rounded-md border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        {/* File Upload */}
        <div className="bg-purple-100 p-6 rounded-xl shadow space-y-4">
          <h3 className="text-2xl font-semibold mb-4">5. Upload Files</h3>
          <input
            type="file"
            name="reportFile"
            accept=".pdf"
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-purple-300 mb-2"
          />
          <input
            type="file"
            name="presentationFile"
            accept=".ppt,.pptx"
            onChange={handleChange}
            className="w-full p-3 rounded-md border border-purple-300"
          />
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="bg-purple-500 text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-purple-600 transition"
          >
            Submit & Download PDF
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
