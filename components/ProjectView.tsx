import { AddProject } from "islands/AddProject.tsx";
import { DelProjectButton } from "islands/DelProjectButton.tsx";
import { Project } from "lib/commonTypes.ts";

interface Projects {
    projects: Project[];
}

function printProject(project: Project) {
    return (
        <details class="w-50">
            <summary class="secondary">{project.name}</summary>
            <table>
                <tr>
                    <td class="strong">Id</td>
                    <td>{project.id}</td>
                </tr>
                <tr>
                    <td class="strong">Description</td>
                    <td>{project.description || ""}</td>
                </tr>
                <tr>
                    <td class="strong">Options</td>
                    <td>{JSON.stringify(project.options)}</td>
                </tr>
                <tr>
                    <td class="strong">Allowed Origins</td>
                    <td>{project.allowedOrigins}</td>
                </tr>
            </table>
            <div class="grid mt-1">
                <div>
                    <a href={"/dashboard/projects?edit=" + project.id} role="button" class="block primary">Edit</a>
                </div>
                <div>
                    <DelProjectButton id={project.id} />
                </div>
            </div>
        </details>
    );
}
export function ProjectView(data: Projects) {
    const { projects } = data;

    return (
        <section>
            <AddProject />
            <h1>Projects</h1>
            {projects?.length > 0 ? projects.map((project) => printProject(project)) : <p>No projects</p>}
        </section>
    );
}
