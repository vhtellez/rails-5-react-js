class ProjectRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      description: this.props.description,
      project_cost: this.props.project_cost,
      edit: false,
      formErrors: {}
    };
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleValidationErrors = this.handleValidationErrors.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this)
    this.handleProjectCostChange = this.handleProjectCostChange.bind(this)
    this.handleValidationErrors = this.handleValidationErrors.bind(this)
    this.updateProject = this.updateProject.bind(this)
    this.editProject = this.editProject.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
  }

  editProject(){
    this.setState({ edit: true })
  }

  cancelEdit(e){
    e.preventDefault();
    this.setState({edit: false, name: this.props.name, description: this.props.description, project_cost: this.props.project_cost, formErrors: {}});
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleDescriptionChange(e){
    this.setState({description: e.target.value});
  }

  handleProjectCostChange(e){
    this.setState({project_cost: e.target.value});
  }

  handleValidationErrors(formErrorObject){
    this.setState({edit: true, formErrors: formErrorObject});
  }

  handleUpdate(){
    this.setState({edit: false, formErrors: false});
  }

  updateProject(e){
    e.preventDefault();
    this.props.parentUpdateProject(
      {
        project: {
          id: this.state.id,
          name: this.state.name,
          description: this.state.description,
          project_cost: this.state.project_cost
        }
      },
      this.handleUpdate,
      this.handleValidationErrors
    );
  }

  renderFieldErrors(attribute){
    if(this.state.formErrors[attribute]){
      return(
        this.state.formErrors[attribute].map(function(error, i){
          return(
            <span key={i} className="help-block">
              {error}
            </span>
          );
        })
      );
    }
    else{
      return "";
    }
  }

  renderProjectNameEditFields(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(
      <div className= {formGroupClass}>
        <input
          name="project[name]"
          type="string"
          placeholder="Project Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="string form-control"
        />
        {this.renderFieldErrors("name")}
      </div>
    );
  }

  renderProjectDescriptionEditFields(){
    var formGroupClass = this.state.formErrors["description"] ? "form-group has-error" : "form-group"

    return(
      <div className= {formGroupClass}>
        <textarea
          name="project[description]"
          placeholder="Project Description"
          value={this.state.description}
          onChange={this.handleDescriptionChange}
          className="text form-control"
        />
        {this.renderFieldErrors("description")}
      </div>
    );
  }

  renderProjectCostEditFields(){

    var formGroupClass = this.state.formErrors["project_cost"] ? "form-group has-error" : "form-group"

    return(
      <div className={formGroupClass}>
        <input
          name="project[project_cost]"
          type="number"
          placeholder="Project Cost"
          value={this.state.project_cost}
          onChange={this.handleProjectCostChange}
          className="numeric decimal form-control"
        />
        {this.renderFieldErrors("project_cost")}
      </div>
    );

  }

  render() {
    if(this.state.edit == false){
      return(
        <div className="row" style={{marginTop: "20px"}}>
          <div className="col-sm-2">
            {this.state.name}
          </div>
          <div className="col-sm-4">
            {this.state.description}
          </div>
          <div className="col-sm-2">
            {this.state.project_cost}
          </div>
          <div className="col-sm-2">
            <button className='btn btn-sm btn-primary' onClick={this.editProject}>
              Edit
            </button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="row" style={{marginTop: "20px"}}>
          <form style={{marginTop: "30px"}} onSubmit={this.updateProject}>
            <div className="col-sm-2">
              {this.renderProjectNameEditFields()}
            </div>
            <div className="col-sm-4">
              {this.renderProjectDescriptionEditFields()}
            </div>
            <div className="col-sm-2">
              {this.renderProjectCostEditFields()}
            </div>
            <div className="col-sm-2">
              <input type="submit" value="Save" className='btn btn-success' />
              <button className='btn btn-sm btn-primary' style={{marginLeft:'10px'}} onClick={this.cancelEdit}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      );
    }
  }

}
