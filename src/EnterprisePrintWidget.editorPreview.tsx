import { ReactElement } from "react";
import { PrintButton } from "./components/PrintButton";

export function preview(): ReactElement {
    return (
        <div style={{ padding: "20px" }}>
            <PrintButton
                label="Print"
                disabled={false}
                onClick={() => {}}
            />
        </div>
    );
}