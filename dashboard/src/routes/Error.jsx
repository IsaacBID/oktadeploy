import { useRouteError } from "react-router-dom";

export default function Error() {
    const { error } = useRouteError();
    return (
        <div>
            <h1>{error.statusText}</h1>
            <p>{error.message}</p>
        </div>
    );
}