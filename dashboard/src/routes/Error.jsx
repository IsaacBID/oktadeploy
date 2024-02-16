import { useRouteError } from "react-router-dom";

export default function Error() {
    const { error } = useRouteError();
    return (
        <div>
            {error == undefined && <h1>Unknown error</h1>}
            {error.statusText != undefined && <h1>{error.statusText}</h1>}
            {error.message != undefined && <p>{error.message}</p>}
        </div>
    );
}