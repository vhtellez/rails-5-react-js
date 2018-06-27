class ProspectRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      address: this.props.address,
      created_by_user_name: this.props.created_by_user_name,
      edit: false,
      formErrors: {}
    };
    this.editProspect = this.editProspect.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleValidationErrors = this.handleValidationErrors.bind(this)
    this.updateProspect = this.updateProspect.bind(this)
    this.deleteProspect = this.deleteProspect.bind(this)
  }

  editProspect(){
    this.setState({ edit: true })
  }

  cancelEdit(e){
    e.preventDefault();
    this.setState({edit: false, name: this.props.name, address: this.props.address, formErrors: {}});
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleAddressChange(e){
    this.setState({address: e.target.value});
  }

  handleValidationErrors(formErrorObject){
    this.setState({edit: true, formErrors: formErrorObject});
  }

  handleUpdate(){
    this.setState({edit: false, formErrors: false});
  }

  updateProspect(e){
    e.preventDefault();
    this.props.parentUpdateProspect(
      {
        prospect: {
          id: this.state.id,
          name: this.state.name,
          address: this.state.address
        }
      },
      this.handleUpdate,
      this.handleValidationErrors
    );
  }

  deleteProspect(e){
    e.preventDefault();
    this.props.parentDeleteProspect(this.state.id);
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

  renderProspectNameEditFields(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"

    return(
      <div className= {formGroupClass}>
        <input
          name="prospect[name]"
          type="string"
          placeholder="Prospect Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="string form-control"
        />
        {this.renderFieldErrors("name")}
      </div>
    );
  }

  renderProspectAddressEditFields(){
    var formGroupClass = this.state.formErrors["address"] ? "form-group has-error" : "form-group"

    return(
      <div className= {formGroupClass}>
        <textarea
          name="prospect[address]"
          placeholder="Prospect Address"
          value={this.state.address}
          onChange={this.handleAddressChange}
          className="text form-control"
        />
        {this.renderFieldErrors("address")}
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
            {this.state.address}
          </div>
          <div className="col-sm-4">
            {this.state.created_by_user_name}
          </div>
          <div className="col-sm-2">
            <button className='btn btn-sm btn-primary' onClick={this.editProspect}>
              Edit
            </button>
            <button className='btn btn-sm btn-danger' style={{marginLeft:'10px'}}
              onClick={(e) => { if (window.confirm('Are you sure you wish to delete this prospect?')) this.deleteProspect(e) } }>
              Delete
            </button>
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="row" style={{marginTop: "20px"}}>
          <form style={{marginTop: "30px"}} onSubmit={this.updateProspect}>
            <div className="col-sm-2">
              {this.renderProspectNameEditFields()}
            </div>
            <div className="col-sm-4">
              {this.renderProspectAddressEditFields()}
            </div>
            <div className="col-sm-4">
              {this.state.created_by_user_name}
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
