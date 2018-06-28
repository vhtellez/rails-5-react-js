class StatusColumn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      name: this.props.name,
      total_sum: this.props.total_sum,
      opportunities: this.props.opportunities
    };
  }


  renderOpportunitiesForStatus(){
    return(
      this.state.opportunities.map(function(opportunity){
          return(
            <div style={{marginTop: "20px"}} key={opportunity.id}>
              <div >
                {opportunity.name}
              </div>
              <div >
                ${opportunity.monetary_value}
              </div>
            </div>
          );
      }.bind(this))
    );
  }

  renderStatusColumns(){
    return (
      this.props.opportunity_status_names.map(function(status){
        return(
          <StatusColumn
            key={status.id}
            id={status.id}
            name={status.name}
            total={status.opportunities_sum}
            opportunities={this.props.opportunities}
          />
        );
      }.bind(this))
    );
  }

  render() {
    return(
      <div className="columnalgo" style={{marginTop: "20px", border: "1px solid black", minHeight: "500px", width: "300px", display: "inline-block", verticalAlign: "top"}}>
        <div>
          {this.state.name}
        </div>
        <div>
          Total Value: ${this.state.total_sum}
        </div>
        <hr/>
        <div style={{marginTop: "20px"}}>
          {this.renderOpportunitiesForStatus()}
        </div>
      </div>
    );
  }
}
