class OpportunityTable extends React.Component {

  renderOpportunityRows(){
    return (
      this.props.opportunities.map(function(opportunity){
        return(
          <OpportunityRow
            key={opportunity.id}
            id={opportunity.id}
            name={opportunity.name}
            monetary_value={opportunity.monetary_value}
            user_name={opportunity.user_name}
            user_id={opportunity.user_id}
            prospect_name={opportunity.prospect_name}
            prospect_id={opportunity.prospect_id}
            current_status_name={opportunity.current_status_name}
            current_status_id={opportunity.current_status_id}
            parentUpdateOpportunity={this.props.parentUpdateOpportunity}
            parentDeleteOpportunity={this.props.parentDeleteOpportunity}
            prospects={this.props.prospects}
            opportunity_status_names={this.props.opportunity_status_names}
            opportunity_statuses_log={opportunity.opportunity_statuses_log}
            users={this.props.users}/>
          );
        }.bind(this))
      );
    }

    render() {
      return(
        <div>
          <div className="row" style={{marginTop: "50px"}}>
            <div className="col-sm-1" style={{fontWeight: "bold"}}>
              Name
            </div>
            <div className="col-sm-1" style={{fontWeight: "bold"}}>
              Monetary Value
            </div>
            <div className="col-sm-1" style={{fontWeight: "bold"}}>
              User
            </div>
            <div className="col-sm-2" style={{fontWeight: "bold"}}>
              Prospect
            </div>
            <div className="col-sm-2" style={{fontWeight: "bold"}}>
              Current Status
            </div>
            <div className="col-sm-2">
            </div>
          </div>
          {this.renderOpportunityRows()}
        </div>
      );
    }

  }
