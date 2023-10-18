import React from "react"
import Select from "react-select"

class Selectbox extends React.Component {
  handleChange = selectedOption => {
    const { onChange } = this.props
    if (onChange && selectedOption) {
      if (Array.isArray(selectedOption)) {
        onChange(selectedOption)
      } else {
        onChange(selectedOption.value)
      }
    }
  }
  render() {
    return <Select {...this.props} onChange={this.handleChange} />
  }
}

export default Selectbox
