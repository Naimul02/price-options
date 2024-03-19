import axios from "axios";
import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    // fetch("https://openapi.programming-hero.com/api/phones?search=iphone")
    //   .then((res) => res.json())
    //   .then((data) => setPhones(data.data));

    // axios diye jodi tumi koro tahole .then diye data k json a convert kora lage na. se automatic json a convert kore diye de.
    axios
      .get("https://openapi.programming-hero.com/api/phones?search=iphone")
      .then((data) => {
        const phoneData = data.data.data;
        const phoneWithFakeData = phoneData.map((phone) => {
          const obj = {
            name: phone.phone_name,
            //split :  - eta jekhane khuje pabe sekhane bibhokto kore array banai tomare diye dibe
            price: parseInt(phone.slug.split("-")[1]),
          };
          return obj;
        });
        console.log(phoneWithFakeData);
        setPhones(phoneWithFakeData);
      });
  }, []);
  return (
    <div>
      <h2 className="text-5xl">Phones : {phones.length}</h2>
      <BarChart width={1140} height={400} data={phones}>
        <Bar dataKey="price" fill="#8884d8" />
        <XAxis dataKey="name" />
        <YAxis dataKey="" />
        <Tooltip></Tooltip>
      </BarChart>
    </div>
  );
};

export default Phones;
