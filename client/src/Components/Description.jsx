var Description = (props) => (
  <div>
    <h4>{props.description.title}</h4>
    <ul>
      <li>{props.description.description}</li>
    </ul>
    <table>
      <tr>
        <td>SKU</td>
        <td>{props.description.SKU}</td>
      </tr>
      <tr>
        <td>Primary Brand</td>
        <td>{props.description.primaryBrand}</td>
      </tr>
      <tr>
        <td>Days to Ship</td>
        <td>{props.description.daysToShip}</td>
      </tr>
    </table>
  </div>
)

export default Description;