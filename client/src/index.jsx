import Description from './Components/Description.jsx';
import Directions from './Components/Directions.jsx';
import Attributes from './Components/Attributes.jsx';
import Additional from './Components/Additional.jsx';

class DescriptionService extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 'description'
    }
  }

  render() {
    return (
      <div>
        <div id='buttons'>
          <button>Description</button>
          <button>Directions</button>
          <button>Attributes/Specifications</button>
          <button>Additional Details</button>
        </div>
        {this.state.current === 'description' && <Description />}
        {this.state.current === 'directions' && <Directions />}
        {this.state.current === 'attributes' && <Attributes />}
        {this.state.current === 'additional' &&<Additional />}
      </div>
    )
  }
}

ReactDOM.render(<DescriptionService />, document.getElementById('description'));