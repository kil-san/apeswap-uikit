import React from "react";
import { renderWithTheme } from "../../testHelpers";
import Progress from "../../components/Progress/Progress";

it("renders correctly", () => {
  const { asFragment } = renderWithTheme(<Progress primaryStep={50} />);
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      <div
        class="sc-gsDKAQ epuuTd"
      >
        <div
          class="sc-bdvvtL jCMjCC"
          style="width: 50%;"
        />
      </div>
    </DocumentFragment>
  `);
});
