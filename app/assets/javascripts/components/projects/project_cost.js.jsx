class ProjectCost extends React.Component {

  calculateCost(){
    totalCost = 0;

    this.props.projects.map(function(project){
      cost = project.project_cost == null || project.project_cost == undefined ? 0 : parseFloat(project.project_cost)
      totalCost += cost;
    })

    return totalCost.toFixed(2);
  }

  render(){
    return(
      <div style={{marginTop: "30px"}}>
        <h4>
          Total Project Cost
        </h4>
        <h4>
          {this.calculateCost()}
        </h4>
      </div>
    );

  }

}
