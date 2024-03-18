// You can add JavaScript functionality here if needed
// For example, if you want to fetch project data from an API and dynamically populate the projects section:

document.addEventListener("DOMContentLoaded", function () {
    fetchProjects();
});

function fetchProjects() {
    // Simulating fetching projects from an API
    const projects = [
        { name: "Project 1", description: "Description of project 1.", url: "#" },
        { name: "Project 2", description: "Description of project 2.", url: "#" }
    ];

    displayProjects(projects);
}

function displayProjects(projects) {
    const projectsContainer = document.querySelector("#projects-container");

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "bg-white p-6 rounded-lg shadow-md";
        const projectName = document.createElement("h3");
        projectName.className = "text-lg font-semibold mb-2";
        projectName.textContent = project.name;
        const projectDescription = document.createElement("p");
        projectDescription.className = "mb-4";
        projectDescription.textContent = project.description;
        const projectLink = document.createElement("a");
        projectLink.href = project.url;
        projectLink.className = "text-blue-500 hover:underline";
        projectLink.textContent = "View project";

        projectCard.appendChild(projectName);
        projectCard.appendChild(projectDescription);
        projectCard.appendChild(projectLink);

        projectsContainer.appendChild(projectCard);
    });
}
