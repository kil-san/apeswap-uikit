import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Toggle from "../../components/Toggle/Toggle";

const handleChange = jest.fn();

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Toggle checked onChange={handleChange} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-dkPtRN fWyFut"
      >
        <input
          checked=""
          class="sc-gsDKAQ hSJhvP"
          type="checkbox"
        />
        <div
          class="sc-bdvvtL eTJQde"
        />
      </div>
    </DocumentFragment>
  `);
});
