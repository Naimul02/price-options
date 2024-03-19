import React from "react";
import PropTypes from "prop-types";
import Feature from "../Feature/Feature";

const PriceOption = ({ option }) => {
  const { name, price, features } = option;

  return (
    <div className="bg-blue-500 rounded-md flex flex-col p-4 text-white">
      <h2 className="text-center">
        <span className="text-6xl font-extrabold">{price}</span>
        <span className="text-2xl">/mon</span>
      </h2>
      <h4 className="text-3xl text-center my-8">{name}</h4>

      {/* grow mane prosarito howya . ekhane joto tuku jayga ache tumi grow hoite thako ba prosarito hote thako. */}
      <div className="pl-6 flex-grow">
        {features.map((feature, index) => (
          <Feature feature={feature} key={index}></Feature>
        ))}
      </div>
      <button className="mt-12 bg-green-600 w-full py-2 font-bold rounded-lg hover:bg-green-900">
        Buy Now
      </button>
    </div>
  );
};

PriceOption.propTypes = {
  option: PropTypes.object,
};

export default PriceOption;
