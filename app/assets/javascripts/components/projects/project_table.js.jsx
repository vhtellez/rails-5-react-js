class ProjectTable extends React.Component {

  renderProjectRows(){
    return (
      this.props.projects.map(function(project){
        return(
          <ProjectRow
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            project_cost={project.project_cost}
            parentUpdateProject={this.props.parentUpdateProject} />
          );
        }.bind(this))
      );
    }

    render() {
      return(
        <div>
          <div className="row" style={{marginTop: "50px"}}>
            <div className="col-sm-2" style={{fontWeight: "bold"}}>
              Name
            </div>
            <div className="col-sm-4" style={{fontWeight: "bold"}}>
              Description
            </div>
            <div className="col-sm-2" style={{fontWeight: "bold"}}>
              Project Cost
            </div>
            <div className="col-sm-2">
            </div>
          </div>
          {this.renderProjectRows()}
        </div>
      );
    }

  }
