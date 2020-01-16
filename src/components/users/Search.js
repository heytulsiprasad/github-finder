import React from "react"
import PropTypes from "prop-types"

class Search extends React.Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired
    }

    onSubmit = e => {
        e.preventDefault()
        this.props.searchUsers(this.state.text)
        // this.setState({ text: '' })
    }

    onChange = e => this.setState({ [e.target.name]: e.target.value })

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" value={this.state.text} onChange={this.onChange} placeholder="Search Users..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
            </div>
        )
    }
}

export default Search
