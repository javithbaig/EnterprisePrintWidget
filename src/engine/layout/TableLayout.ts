import { Logger } from "../../utils/Logger";

export class TableLayout {

    public process(
        root: HTMLElement
    ): void {

        Logger.group("TableLayout");

        const tables = root.querySelectorAll<HTMLTableElement>("table");

        Logger.info(
            `Processing ${tables.length} table(s).`
        );

        tables.forEach(table => {

            const computed = getComputedStyle(table);

            this.prepareTable(table, computed);

            this.prepareHeader(table);

            this.prepareFooter(table);

            this.prepareRows(table);

            this.prepareCells(table);

        });

        Logger.groupEnd();

    }

    private prepareTable(
        table: HTMLTableElement,
        computed: CSSStyleDeclaration
    ): void {

        table.style.width = computed.width;

        table.style.tableLayout = computed.tableLayout;

        table.style.borderCollapse = computed.borderCollapse;

        table.style.borderSpacing = computed.borderSpacing;

    }

    private prepareHeader(
        table: HTMLTableElement
    ): void {

        table.querySelectorAll("thead").forEach(head => {

            (head as HTMLElement).style.display =
                "table-header-group";

        });

    }

    private prepareFooter(
        table: HTMLTableElement
    ): void {

        table.querySelectorAll("tfoot").forEach(foot => {

            (foot as HTMLElement).style.display =
                "table-footer-group";

        });

    }

    private prepareRows(
        table: HTMLTableElement
    ): void {

        table.querySelectorAll("tr").forEach(row => {

            const element = row as HTMLElement;

            element.style.breakInside = "avoid";
            element.style.pageBreakInside = "avoid";

        });

    }

    private prepareCells(
        table: HTMLTableElement
    ): void {

        table.querySelectorAll("th, td").forEach(cell => {

            const element = cell as HTMLElement;

            const computed =
                getComputedStyle(element);

            element.style.width = computed.width;

            element.style.height = computed.height;

            element.style.verticalAlign =
                computed.verticalAlign;

            element.style.whiteSpace =
                computed.whiteSpace;

        });

    }

}