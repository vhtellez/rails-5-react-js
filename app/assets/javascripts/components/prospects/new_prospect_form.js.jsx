class NewProspectForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      address: "",
      formErrors: {}
    };
    this.resetState = this.resetState.bind(this)
    this.handleValidationError = this.handleValidationError.bind(this)
    this.newProspectSubmit = this.newProspectSubmit.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleAddressChange = this.handleAddressChange.bind(this)
  }

  resetState(){
    this.setState( {
      name: "",
      address: "",
      formErrors: {}
    } );
  }

  handleValidationError(formErrorObj){
    this.setState({
      formErrors: formErrorObj
    })
  }

  newProspectSubmit(e){
    e.preventDefault();

    this.props.parentProspectSubmit(
      {
        prospect: {
          name: this.state.name,
          address: this.state.address
        }
      },
      this.resetState,
      this.handleValidationError
    );
  }

  handleNameChange(e){
    this.setState( { name: e.target.value } )
  }

  handleAddressChange(e){
    this.setState( { address: e.target.value} );
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


  renderProspectNameField(){
    var formGroupClass = this.state.formErrors["name"] ? "form-group has-error" : "form-group"
    return(
      <div className='row'>
        <div className='col-sm-4'>
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
        </div>
      </div>
    );
  }

  renderProspectAddressField(){
    var formGroupClass = this.state.formErrors["address"] ? "form-group has-error" : "form-group"

    return(
      <div className='row'>
        <div className='col-sm-4'>
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
        </div>
      </div>
    );

  }

  render() {
    return(
      <div>
        <h4 style={{marginTop: "50px"}}> Create New Prospect </h4>
        <form style={{marginTop: "30px"}} onSubmit={this.newProspectSubmit}>
          <div className='form-inputs'/>
          {this.renderProspectNameField()}
          {this.renderProspectAddressField()}
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
