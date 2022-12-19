import { render, screen } from "@testing-library/react";
import { FilterList } from ".";

describe('filer text molecule', () => {
    it("renders checked Radio button", () => {
        render(<FilterList labelArray={["sample string"]} />)
        const gridContainer = screen.getByTestId("filterListId");
        expect(gridContainer).toBeTruthy();
    });
}); 