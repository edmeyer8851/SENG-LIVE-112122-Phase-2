import Header from "./components/Header"
import ProjectForm from "./components/ProjectForm"
import ProjectList from "./components/ProjectList"

// import data
import projects from "./projects"

// we import our data here because we want to make our data
// available to throughout our entire component hierarchy

// data flow => We want to make sure that our data is available throughout our
// component hierarchy

const App = () => {
  
  return (
    <div>
      <div>Project showcase</div>
      <Header 
        firstName="Eddie" 
        astName="Meyer" 
        age={27}
      />
      <ProjectForm />
      <ProjectList 
        // our props are immutable (we just pass em down, they dont change)
        projects={projects}  
      />
      
    </div>
  );
}

// import App from ""./App.js"
export default App;
