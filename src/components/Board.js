import React from "react";

import Pit from "./Pit";
import Kalaha from "./Kalaha";

import "../../style/circle-container.scss";

export default props => {
  const { pits, kalahas, makeMove } = props;
  return (
    <div className="circle-container">
      {pits.map(pit => {
        if (kalahas) {
          for (var kalaha of kalahas) {
            if (kalaha.pitNumber && kalaha.pitNumber == pit.pitNumber) {
              return (
                <Kalaha
                  key={pit.pitNumber}
                  stones={pit.numberOfStones}
                  number={pit.pitNumber}
                  makeMove={makeMove}
                  owningPlayerIndex={pit.owningPlayerIndex}
                />
              );
            }
          }
        }
        return (
          <Pit
            key={pit.pitNumber}
            stones={pit.numberOfStones}
            number={pit.pitNumber}
            makeMove={makeMove}
            owningPlayerIndex={pit.owningPlayerIndex}
          />
        );
      })}
    </div>
  );
};
