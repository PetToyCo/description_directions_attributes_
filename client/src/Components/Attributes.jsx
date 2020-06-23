var Attributes = (props) => (
  <div>
    <ul className='table2'>
      <li className='tableLine'>
      <span className='key'>Additional Features</span>
      <span className='val'></span>
      </li>
      <li className='tableLine'>
      <span className='key'>Primary Color</span>
      <span className='val'>{props.attributes.primaryColor}</span>
      </li>
      <li className='tableLine'>
      <span className='key'>Material</span>
      <span className='val'>{props.attributes.material}</span>
      </li>
    </ul>
    <ul className='table2'>
      <li className='tableLine'>
      <span className='key'>Item Dimensions</span>
      <span className='val'></span>
      </li>
      <li className='tableLine'>
      <span className='key'>Length</span>
      <span className='val'>{props.attributes.length}</span>
      </li>
      <li className='tableLine'>
      <span className='key'>Width</span>
      <span className='val'>{props.attributes.width}</span>
      </li>
    </ul>
  </div>
)

export default Attributes;