var Attributes = (props) => (
  <div>
    <table>
      <tr>
        <td>Additional Features</td>
        <td></td>
      </tr>
      <tr>
        <td>Primary Color</td>
        <td>{props.attributes.primaryColor}</td>
      </tr>
      <tr>
        <td>Material</td>
        <td>{props.attributes.material}</td>
      </tr>
    </table>
    <table>
      <tr>
        <td>Item Dimensions</td>
        <td></td>
      </tr>
      <tr>
        <td>Length</td>
        <td>{props.attributes.length}</td>
      </tr>
      <tr>
        <td>Width</td>
        <td>{props.attributes.width}</td>
      </tr>
    </table>
  </div>
)

export default Attributes;