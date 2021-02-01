import { Provider } from "react-redux";

import { ShowDetailsPageContainer } from "../shows/show-details/ShowDetailsPageContainer";

import { App } from "./App";
import { store } from "./store";

export function AppContainer() {
    return (
        <Provider store={store}>
            <App
                showDetailsElement={<ShowDetailsPageContainer />}
            />
        </Provider>
    );
}
