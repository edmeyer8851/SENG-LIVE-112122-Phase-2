// Should render once for every object inside "projects"


// destructured project from props object
const ProjectListItem = ({project}) => {

    //descructured attributes form each project object
    const { name, about, phase, link, image} = project

    return (
        <li>
            <p>Project Name: {name}</p>
            <p>About: {about}</p>
            <p>Phase: {phase}</p>
            <a href={link}>Project Link</a>
            {/* <img src={image} /> */}
        </li>
    )
}

export default ProjectListItem