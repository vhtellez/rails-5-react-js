
class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      opportunity_status_names: this.props.opportunity_status_names
    };
  }



  render(){
    return(
      <div>
        <OpportunityStatusNameTable
           opportunity_status_names={this.state.opportunity_status_names}
         />
        </div>
    )
  }
}
