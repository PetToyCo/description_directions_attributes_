import Description from './Components/Description.jsx';
import Directions from './Components/Directions.jsx';
import Attributes from './Components/Attributes.jsx';
import Additional from './Components/Additional.jsx';

class DescriptionService extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h4>React</h4>
        <Description />
        <Directions />
        <Attributes />
        <Additional />
      </div>
    )
  }
}

ReactDOM.render(<DescriptionService />, document.getElementById('description'));