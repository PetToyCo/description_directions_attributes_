import Description from './Components/Description.jsx';
import Directions from './Components/Directions.jsx';
import Attributes from './Components/Attributes.jsx';
import Additional from './Components/Additional.jsx';
import axios from 'axios';

class DescriptionService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'description',
      data: {}
    }

    this.changeModule = this.changeModule.bind(this);
  }

  componentDidMount() {
    //call endpoint for desc obj
    axios.get('/descriptionObject/100')
      .then(data => {
        console.log('success getting data in componentDidMount: ', data);
        this.setState({
          data: data.data
        });
        console.log('state: ', this.state);
      })
      .catch(err => {
        console.log('error getting descObj in componentDidMount: ', err);
      });
  }

  changeModule(e) {
    console.log('inside changeModule: ', e.target);
    var newState = e.target.id;
    this.setState({
      current: newState
    });
  }


  render() {
    return (
      <div>
        <div id='buttons'>
          <button id='description' onClick={this.changeModule}>Description</button>
          <button id='directions' onClick={this.changeModule}>Directions</button>
          <button id='attributes' onClick={this.changeModule}>Attributes/Specifications</button>
          <button id='additional' onClick={this.changeModule}>Additional Details</button>
        </div>
        {this.state.current === 'description' && <Description description={this.state.data.description}/>}
        {this.state.current === 'directions' && <Directions directions={this.state.data.directions}/>}
        {this.state.current === 'attributes' && <Attributes attributes={this.state.data.attributes}/>}
        {this.state.current === 'additional' && <Additional additional={this.state.data.additional}/>}
      </div>
    )
  }
}

ReactDOM.render(<DescriptionService />, document.getElementById('description'));