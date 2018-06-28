
class OpportunitiesContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunities: this.props.opportunities,
    };
    this.parentOpportunitySubmit = this.parentOpportunitySubmit.bind(this)
    this.parentUpdateOpportunity = this.parentUpdateOpportunity.bind(this)
    this.parentDeleteOpportunity = this.parentDeleteOpportunity.bind(this)
    prospects = this.props.prospects
    opportunity_status_names = this.props.opportunity_status_names
    users = this.props.users
  }

  parentOpportunitySubmit(formData, onSuccess, onError){
    $.ajax({
      url: "/opportunities",
      dataType: 'json',
      type: 'POST',
      data: formData,

      success: function(opportunities) {
        this.setState({opportunities: opportunities});
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  parentUpdateOpportunity(formData, onSuccess, onError){
    $.ajax({
      url: ("/opportunities/" + formData["opportunity"]["id"]),
      dataType: 'json',
      type: 'PATCH',
      data: formData,

      success: function(opportunities) {
        this.setState( {opportunities: opportunities, showNewForm: false} );
        onSuccess();
      }.bind(this),
      error: function(response, status, err) {
        onError(response.responseJSON)
      }
    });
  }

  parentDeleteOpportunity(id){
      $.ajax({
        url: ("/opportunities/" + id),
        dataType: 'json',
        type: 'DELETE',
        data: { id:  id },
        success: function(opportunities) {
          this.setState( {opportunities: opportunities, showNewForm: false} );
        }.bind(this)
      });
  }

  render(){
    return(
      <div>
        <h1> Opportunities </h1>
         <OpportunityTable
           opportunities={this.state.opportunities}
           parentUpdateOpportunity={this.parentUpdateOpportunity}
           parentDeleteOpportunity={this.parentDeleteOpportunity}
           prospects={this.props.prospects}
           opportunity_status_names={this.props.opportunity_status_names}
           users={this.props.users}
         />
        <NewOpportunityForm parentOpportunitySubmit={this.parentOpportunitySubmit} prospects={this.props.prospects} opportunity_status_names={this.props.opportunity_status_names} users={this.props.users}/>
      </div>
    )
  }
}
