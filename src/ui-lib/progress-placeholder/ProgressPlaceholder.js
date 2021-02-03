import { CircularProgress } from "@material-ui/core"
import { FillParentPlaceholder } from "../placeholder/FillParentPlaceholder"

export function ProgressPlaceholder() {
	return (
		<FillParentPlaceholder>
			<CircularProgress />
		</FillParentPlaceholder>
	)
}
