class OpportunityStatusNameTable extends React.Component {

  renderStatusColumns(){
    return (
      this.props.opportunity_status_names.map(function(status){
        return(
          <StatusColumn
            key={status.id}
            id={status.id}
            name={status.name}
            total={1000}
            opportunities={status.opportunities}
            total_sum={status.opportunities_sum}
          />
          );
        }.bind(this))
      );
    }

    render() {
      return(
        <div style={ {overflow: "scroll", whiteSpace: 'nowrap', width: "100%"} }>
          {this.renderStatusColumns()}
        </div>
      );
    }

  }
