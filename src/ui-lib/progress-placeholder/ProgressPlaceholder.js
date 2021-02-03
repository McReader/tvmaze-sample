import { CircularProgress } from "@material-ui/core"
import { FillParentPlaceholder } from "../fill-parent-placeholder/FillParentPlaceholder"

export function ProgressPlaceholder() {
	return (
		<FillParentPlaceholder>
			<CircularProgress />
		</FillParentPlaceholder>
	)
}
