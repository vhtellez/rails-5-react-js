class NewOpportunityForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      monetary_value: "",
      prospect_id: "",
      current_status_id: "",
      user_id: "",
      edit: false,
      formErrors: {}
    };
    this.resetState = this.resetState.bind(this)
    this.handleValidationError = this.handleValidationError.bind(this)
    this.newOpportunitySubmit = this.newOpportunitySubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleMonetaryValueChange = this.handleMonetaryValueChange.bind(this)
    this.handleProspectChange = this.handleProspectChange.bind(this)
    this.handleCurrentStatusChange = this.handleCurrentStatusChange.bind(this)
    this.handleUserChange = this.handleUserChange.bind(this)
  }

  resetState(){
    this.setState( {
      name: "",
      monetary_value: "",
      prospect_id: "",
      current_status_id: "",
      user_id: "",
      edit: false,
      formErrors: {}
    } );
  }

  handleValidationError(formErrorObj){
    this.setState({
      formErrors: formErrorObj
    })
  }

  newOpportunitySubmit(e){
    e.preventDefault();
    this.props.parentOpportunitySubmit(
      {
        opportunity: {
          name: this.state.name,
          monetary_value: this.state.monetary_value,
          prospect_id: this.state.prospect_id,
          current_status_id: this.state.current_status_id,
          user_id: this.state.user_id
        }
      },
      this.resetState,
      this.handleValidationError
    );
  }

  handleNameChange(e){
    this.setState( { name: e.target.value } )
  }

  handleMonetaryValueChange(e){
    this.setState( { monetary_value: e.target.value} );
  }
  handleProspectChange(e){
    this.setState( { prospect_id: e.target.value} );
  }
  handleCurrentStatusChange(e){
    this.setState( { current_status_id: e.target.value} );
  }
  handleUserChange(e){
    this.setState( { user_id: e.target.value} );
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


  renderOpportunityNameField(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"
    return(
      <div className='row'>
        <div className='col-sm-4'>
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
        </div>
      </div>
    );
  }

  renderOpportunityMonetaryValueField(){
    var formGroupClass = this.state.formErrors["monetary_value"] ? "form-group has-error" : "form-group"

    return(
      <div className='row'>
        <div className='col-sm-4'>
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
        </div>
      </div>
    );
  }

  renderOpportunityProspectEditFields(){
    var formGroupClass = this.state.formErrors["prospect"] ? "form-group has-error" : "form-group"
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= {formGroupClass}>
            <select
              name="opportunity[prospect_id]"
              placeholder="Opportunity Prospect"
              value={this.state.prospect_id}
              onChange={this.handleProspectChange}
              className="string form-control">
              <option value="" disabled selected>Select Prospect</option>
              {this.props.prospects.map( prospect =>
                <option key={prospect.id} value={prospect.id}>{prospect.name}</option>
              )};
            </select>
            {this.renderFieldErrors("prospect")}
          </div>
        </div>
      </div>
    );
  }

  renderOpportunityCurrentStatusFields(){
    var formGroupClass = this.state.formErrors["current_status"] ? "form-group has-error" : "form-group"
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= {formGroupClass}>
            <select
              name="opportunity[current_status_id]"
              placeholder="Opportunity Current Status"
              value={this.state.current_status_id}
              onChange={this.handleCurrentStatusChange}
              className="string form-control">
              <option value="" disabled selected>Select Current Status</option>
              {this.props.opportunity_status_names.map( name =>
                <option key={name.id} value={name.id}>{name.name}</option>
              )};
            </select>
            {this.renderFieldErrors("current_status")}
          </div>
        </div>
      </div>
    );
  }

  renderOpportunityUserFields(){
    var formGroupClass = this.state.formErrors["user"] ? "form-group has-error" : "form-group"
    return(
      <div className='row'>
        <div className='col-sm-4'>
          <div className= {formGroupClass}>
            <select
              name="opportunity[user_id]"
              value={this.state.user_id}
              onChange={this.handleUserChange}
              className="string form-control">
              <option value="" disabled selected>Assign to User</option>
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
        </div>
      </div>
    );
  }

  render() {
    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Opportunity </h4>
        <form style={{marginTop: "30px"}} onSubmit={this.newOpportunitySubmit}>
          <div className='form-inputs'/>
          {this.renderOpportunityNameField()}
          {this.renderOpportunityMonetaryValueField()}
          {this.renderOpportunityProspectEditFields()}
          {this.renderOpportunityCurrentStatusFields()}
          {this.renderOpportunityUserFields()}
          <div className='row'>
            <div className='col-sm-4'>
              <input type="submit" value="Save" className='btn btn-primary' />
            </div>
          </div>
        </form>
      </div>

    );
  }
}
