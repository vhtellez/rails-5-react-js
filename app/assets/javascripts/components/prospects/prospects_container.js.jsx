
class ProspectsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prospects: this.props.prospects,
    };
    this.parentProspectSubmit = this.parentProspectSubmit.bind(this)
    this.parentUpdateProspect = this.parentUpdateProspect.bind(this)
    this.parentDeleteProspect = this.parentDeleteProspect.bind(this)
  }

  parentProspectSubmit(formData, onSuccess, onError){
    $.ajax({
      url: "/prospects",
      dataType: 'json',
      type: 'POST',
      data: formData,

      success: function(prospects) {
        this.setState({prospects: prospects});
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  parentUpdateProspect(formData, onSuccess, onError){
    $.ajax({
      url: ("/prospects/" + formData["prospect"]["id"]),
      dataType: 'json',
      type: 'PATCH',
      data: formData,

      success: function(prospects) {
        this.setState( {prospects: prospects, showNewForm: false} );
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  parentDeleteProspect(id){
      $.ajax({
        url: ("/prospects/" + id),
        dataType: 'json',
        type: 'DELETE',
        data: { id:  id },

        success: function(prospects) {
          this.setState( {prospects: prospects, showNewForm: false} );
        }.bind(this)
      });
  }

  render(){
    return(
      <div>
        <h1> Prospects </h1>
        <ProspectTable prospects={this.state.prospects} parentUpdateProspect={this.parentUpdateProspect} parentDeleteProspect={this.parentDeleteProspect} />
        <NewProspectForm parentProspectSubmit={this.parentProspectSubmit} />
      </div>
    )
  }
}
