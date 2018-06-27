
class ProjectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: this.props.projects,
    };
    this.parentProjectSubmit = this.parentProjectSubmit.bind(this)
    this.parentUpdateProject = this.parentUpdateProject.bind(this)
    this.parentDeleteProspect = this.parentDeleteProspect.bind(this)
  }

  parentProjectSubmit(formData, onSuccess, onError){
    $.ajax({
      url: "/projects",
      dataType: 'json',
      type: 'POST',
      data: formData,

      success: function(projects) {
        this.setState({projects: projects});
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  parentUpdateProject(formData, onSuccess, onError){
    $.ajax({
      url: ("/projects/" + formData["project"]["id"]),
      dataType: 'json',
      type: 'PATCH',
      data: formData,

      success: function(projects) {
        this.setState( {projects: projects, showNewForm: false} );
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  

  render(){
    return(
      <div>
        <h1> Project List </h1>
        <ProjectCost projects={this.state.projects}  />
        <ProjectTable projects={this.state.projects} parentUpdateProject={this.parentUpdateProject} parentDeleteProspect={this.parentDeleteProspect} />
        <NewProjectForm parentProjectSubmit={this.parentProjectSubmit} />
      </div>
    )
  }
}
