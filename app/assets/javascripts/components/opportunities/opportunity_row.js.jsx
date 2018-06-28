class OpportunityRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      monetary_value: this.props.monetary_value,
      user_name: this.props.user_name,
      user_id: this.props.user_id,
      prospect_name: this.props.prospect_name,
      prospect_id: this.props.prospect_id,
      current_status_name: this.props.current_status_name,
      current_status_id: this.props.current_status_id,
      opportunity_statuses_log: this.props.opportunity_statuses_log,
      edit: false,
      formErrors: {}
    };
    this.editOpportunity = this.editOpportunity.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMonetaryValueChange = this.handleMonetaryValueChange.bind(this)
    this.handleProspectChange = this.handleProspectChange.bind(this)
    this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleValidationErrors = this.handleValidationErrors.bind(this)
    this.updateOpportunity = this.updateOpportunity.bind(this)
    this.deleteOpportunity = this.deleteOpportunity.bind(this)
  }

  editOpportunity(){
    this.setState({ edit: true })
  }

  cancelEdit(e){
    e.preventDefault();
    this.setState({
      name: this.props.name,
      monetary_value: this.props.monetary_value,
      user_name: this.props.user_name,
      user_id: this.props.user_id,
      prospect_name: this.props.prospect_name,
      prospect_id: this.props.prospect_id,
      current_status_name: this.props.current_status_name,
      current_status_id: this.props.current_status_id,
      edit: false,
      formErrors: {}
    });
  }

  handleNameChange(e){
    this.setState({name: e.target.value});
  }

  handleMonetaryValueChange(e){
    this.setState({monetary_value: e.target.value});
  }

  handleUserChange(e){
    this.setState( {
      user_id: e.target.value,
      user_name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
    } );
  }

  handleProspectChange(e){
    this.setState( {
      prospect_id: e.target.value,
      prospect_name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
    } );
  }

  handleCurrentStatusChange(e){
    last_status_id = this.state.current_status_id
    this.setState( {
      current_status_id: e.target.value,
      current_status_name: e.nativeEvent.target[e.nativeEvent.target.selectedIndex].text
      //TODO change this.state.opportunity_statuses_log if (last_status_id != e.target.value)
    } );
  }

  handleValidationErrors(formErrorObject){
    this.setState({edit: true, formErrors: formErrorObject});
  }

  handleUpdate(){
    this.setState({edit: false, formErrors: false});
  }

  updateOpportunity(e){
    e.preventDefault();
    this.props.parentUpdateOpportunity(
      {
        opportunity: {
          id: this.state.id,
          name: this.state.name,
          monetary_value: this.state.monetary_value,
          prospect_id: this.state.prospect_id,
          current_status_id: this.state.current_status_id
        }
      },
      this.handleUpdate,
      this.handleValidationErrors
    );
  }

  deleteOpportunity(e){
    e.preventDefault();
    this.props.parentDeleteOpportunity(this.state.id);
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

  renderOpportunityNameEditFields(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"
    return(
      <div className= {formGroupClass}>
        <input
          name="opportunity[name]"
          type="string"
          placeholder="Opportunity Name"
          value={this.state.name}
          onChange={this.handleNameChange}
          className="string form-control"
        />
        {this.renderFieldErrors("name")}
      </div>
    );
  }

  renderOpportunityMonetaryValueEditFields(){
    var formGroupClass = this.state.formErrors["monetary_value"] ? "form-group has-error" : "form-group"
    return(
      <div className= {formGroupClass}>
        <input
          name="opportunity[monetary_value]"
          type="number"
          placeholder="Opportunity Monetary Value"
          value={this.state.monetary_value}
          onChange={this.handleMonetaryValueChange}
          className="string form-control"
        />
        {this.renderFieldErrors("monetary_value")}
      </div>
    );
  }

  renderOpportunityProspectEditFields(){
    var formGroupClass = this.state.formErrors["prospect"] ? "form-group has-error" : "form-group"
    return(
      <div className= {formGroupClass}>
        <select
          name="opportunity[prospect_id]"
          value={this.state.prospect_id}
          onChange={this.handleProspectChange}
          className="string form-control">
          {this.props.prospects.map( prospect =>
            <option key={prospect.id} value={prospect.id} selected={this.state.prospect_id == prospect.id}>{prospect.name}</option>
          )};
        </select>
        {this.renderFieldErrors("prospect")}
      </div>
    );
  }

  renderOpportunityCurrentStatusFields(){
    var formGroupClass = this.state.formErrors["current_status"] ? "form-group has-error" : "form-group"
    return(
      <div className= {formGroupClass}>
        <select
          name="opportunity[current_status_id]"
          value={this.state.current_status_id}
          onChange={this.handleCurrentStatusChange}
          className="string form-control">
          {this.props.opportunity_status_names.map( name =>
            <option
              key={name.id}
              value={name.id}
              selected={this.state.current_status_id == name.id}
              >{name.name}
            </option>
          )};
        </select>
        {this.renderFieldErrors("current_status")}
      </div>
    );
  }

  renderOpportunityUserFields(){
    var formGroupClass = this.state.formErrors["user"] ? "form-group has-error" : "form-group"
    return(
      <div className= {formGroupClass}>
        <select
          name="opportunity[user_id]"
          value={this.state.user_id}
          onChange={this.handleUserChange}
          className="string form-control">
          {this.props.users.map( user =>
            <option
              key={user.id}
              value={user.id}
              selected={this.state.user_id == user.id}
              >{user.user_name}
            </option>
          )};
        </select>
        {this.renderFieldErrors("current_status")}
      </div>
    );
  }

  renderStatusHistory(){
    return(
      <div className="col-sm-10">
        {this.state.opportunity_statuses_log.map( (status,i) =>
          <div >
            [{i+1}] {status.changed_date} from:"{status.status_from_name}" to: "{status.status_to_name}" by: {status.user_name}
          </div>
        )}
      </div>
    );
  }


  render() {
    if(this.state.edit == false){
      return(
        <div className="row" style={{marginTop: "20px"}}>
          <div className="col-sm-1">
            {this.state.name}
          </div>
          <div className="col-sm-1">
            {this.state.monetary_value}
          </div>
          <div className="col-sm-1">
            {this.state.user_name}
          </div>
          <div className="col-sm-2">
            {this.state.prospect_name}
          </div>
          <div className="col-sm-2">
            {this.state.current_status_name}
          </div>
          <div className="col-sm-4" >
            <button className='btn btn-sm btn-primary'  data-toggle="collapse" data-target={"#history_"+this.state.id}>
              Status History
            </button>
            <button className='btn btn-sm btn-primary' style={{marginLeft:'10px'}} onClick={this.editOpportunity}>
              Edit
            </button>
            <button className='btn btn-sm btn-danger' style={{marginLeft:'10px'}}
              onClick={(e) => { if (window.confirm('Are you sure you wish to delete this opportunity?')) this.deleteOpportunity(e) } }>
              Delete
            </button>
          </div>
          <div className="col-sm-12 collapse" id={"history_"+this.state.id}>
            {this.renderStatusHistory()}
          </div>
        </div>
      );
    }
    else{
      return(
        <div className="row" style={{marginTop: "20px"}}>
          <form style={{marginTop: "30px"}} onSubmit={this.updateOpportunity}>
            <div className="col-sm-1">
              {this.renderOpportunityNameEditFields()}
            </div>
            <div className="col-sm-1">
              {this.renderOpportunityMonetaryValueEditFields()}
            </div>
            <div className="col-sm-1">
              {this.renderOpportunityUserFields()}
            </div>
            <div className="col-sm-2">
              {this.renderOpportunityProspectEditFields()}
            </div>
            <div className="col-sm-2">
              {this.renderOpportunityCurrentStatusFields()}
            </div>
            <div className="col-sm-4">
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
