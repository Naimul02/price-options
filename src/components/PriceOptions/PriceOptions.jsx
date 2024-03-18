import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "1",
      name: "Basic Membership",
      price: "$30/month",
      features: [
        "Access to cardio equipment",
        "Access to weightlifting area",
        "Locker usage",
        "Basic fitness classes",
        "Discounts on merchandise",
        "Sauna access",
        "Limited access to swimming pool (specific hours)",
      ],
    },
    {
      id: "2",
      name: "Premium Membership",
      price: "$50/month",
      features: [
        "Access to all equipment and facilities",
        "Locker and towel service",
        "Unlimited fitness classes",
        "Personal training session once a month",
        "Discounts on personal training packages",
        "Full access to swimming pool",
        "Access to sauna and steam room",
      ],
    },
    {
      id: "3",
      name: "VIP Membership",
      price: "$100/month",
      features: [
        "Priority access to all facilities",
        "Personal locker with daily cleaning service",
        "Unlimited fitness classes and personal training sessions",
        "Access to exclusive VIP lounge",
        "Complimentary smoothies or protein shakes",
        "Free access to special events and workshops",
        "Guest passes for friends/family",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
