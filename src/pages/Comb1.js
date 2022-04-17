import React, { useState } from "react";

const Comb1 = () => {
  const [button1, onchecked] = useState(false);
  function radiochecked() {
    onchecked(true);
  }
  return (
    <div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
          checked={button1}
          onChange={radiochecked}
        />
        <label class="form-check-label" for="flexRadioDefault1">
          Chest1
        </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
        />
        <label class="form-check-label" for="flexRadioDefault2">
          Chest2
        </label>
      </div>
    </div>
  );
};

export default Comb1;
