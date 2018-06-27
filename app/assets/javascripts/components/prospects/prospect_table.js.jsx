class ProspectTable extends React.Component {

  renderProspectRows(){
    return (
      this.props.prospects.map(function(prospect){
        return(
          <ProspectRow
            key={prospect.id}
            id={prospect.id}
            name={prospect.name}
            address={prospect.address}
            created_by_user_name={prospect.created_by_user_name}
            parentUpdateProspect={this.props.parentUpdateProspect}
            parentDeleteProspect={this.props.parentDeleteProspect} />
          );
        }.bind(this))
      );
    }

    render() {
      return(
        <div>
          <div className="row" style={{marginTop: "50px"}}>
            <div className="col-sm-2" style={{fontWeight: "bold"}}>
              Name
            </div>
            <div className="col-sm-4" style={{fontWeight: "bold"}}>
              Address
            </div>
            <div className="col-sm-4" style={{fontWeight: "bold"}}>
              Created By
            </div>
            <div className="col-sm-2">
            </div>
          </div>
          {this.renderProspectRows()}
        </div>
      );
    }

  }
