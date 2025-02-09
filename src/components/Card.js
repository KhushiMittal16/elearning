import React from "react";

const Card = ({ CardData, isDashboard }) => {
  return (
    <div className="cardMain flex flex-wrap">
      {CardData?.map((cardDetails, index) => {
        return (
          <div
            key={index}
            className="cardMain border rounded-lg max-w-xs m-5 p-3"
          >
            <div className="cardImg pb-4 border">
              <img src={cardDetails.cardImg} alt="proj name" />
            </div>
            <div className="cardBody">
              <div className="cardTitle font-bold">{cardDetails.cardName}</div>
              {!isDashboard && (
                <div className="cardDesc">{cardDetails.cardDesc}</div>
              )}
            </div>
            {isDashboard && (
              <div className="flex align-middle justify-center font-bold uppercase">
                <button className="border-2 rounded capitalize w-full m-3 p-2 italic">
                  {cardDetails.cardName === "Tutorials"
                    ? `Get into your tutorials `
                    : `Start project `}
                  <i class="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
