import PropTypes from "prop-types"

import "./FillParentPlaceholder.scss"

export function FillParentPlaceholder({ children }) {
	return <div className="FillParentPlaceholder">{children}</div>
}

FillParentPlaceholder.propTypes = {
	children: PropTypes.node,
}
