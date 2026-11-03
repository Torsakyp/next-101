"use client";
import { useState, useEffect } from "react";
import Hero from "@/components/Hero";
import ProfileCard from "@/components/ProfileCard";
import EmployeeCard from "@/components/EmployeeCard";
import ButtonClick from "@/components/ButtonClick";
import Counter from "@/components/Counter";
import StatusToggle from "@/components/StatusToggle";
import InteractiveEmployeeCard from "@/components/interactiveEmployeeCard";
import NameInput from "@/components/NameInput";
import ControlInput from "@/components/Controlnput";
import UserForm from "@/components/UserForm";
import CounterEffect from "@/components/CounterEffect";
import Timer from "@/components/Timer";
import UserList from "@/components/UserList";
import UserDirectory from "@/components/UserDirectory";

const person = {
  name: "Tor",
  role: "FE Dev",
  experince: 4,
  isAvaliable: true,
};

const person2 = {
  name: "Benz",
  experince: 2,
  isAvaliable: false,
};

const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 590,
  },
  {
    id: 2,
    name: "Hoodie",
    price: 1290,
  },
  {
    id: 3,
    name: "Cap",
    price: 390,
  },
];

const employees = [
  {
    id: 1,
    name: "Tor",
    role: "Developer",
    experience: 4,
    isAvailable: true,
  },
  {
    id: 2,
    name: "Pure",
    role: "Developer & Designer",
    experience: 10,
    isAvailable: false,
  },
  {
    id: 3,
    name: "Earn",
    role: "Designer",
    experience: 12,
    isAvailable: false,
  },
];

const interactiveemployee = {
  name: "Tor",
  role: "FE Dev",
  experience: 4,
  isAvailable: false,
};

export default function Home() {
  const [showTimer, setshowTimer] = useState(true);
  return (
    <div className="container">
      {/* <Hero name="Tor" position="FE Dev" experience={4} />

      <Hero name="Jane" position="Designer" experience={2} />

      <Hero name="Benz" position="Logistics" experience={2} /> */}
      {/* <ProfileCard name="Tor" role="FE Dev" experince={4} isAvaliable={true} />

      <ProfileCard name="Jane" experince={2} isAvaliable={false} />

      <ProfileCard
        name="Benz"
        role="Logistics"
        experince={2}
        isAvaliable={true}
      /> */}
      <ProfileCard person={person} />
      <ProfileCard person={person2} />
      <hr className="my-5" />
      <div>
        <p> {products[0].name}</p>
        <p> {products[1].price}</p>
        <p> {products[2].id}</p>
      </div>
      <hr className="my-5" />
      <div>
        {products.map((product) => (
          <p key={product.id} id={product.id}>
            {product.name}
          </p>
        ))}
      </div>
      <hr className="my-5" />
      <div>
        {employees.map((employee) => (
          <EmployeeCard key={employee.id} employee={employee} />
        ))}
      </div>
      <hr className="my-5" />
      <ButtonClick />
      <hr className="my-5" />
      <Counter />
      <hr className="my-5" />
      <StatusToggle />
      <hr className="my-5" />
      <InteractiveEmployeeCard props={interactiveemployee} />
      <hr className="my-5" />
      <NameInput />
      <hr className="my-5" />
      <ControlInput />
      <hr className="my-5" />
      <UserForm />
      <hr className="my-5" />
      <CounterEffect />
      <hr className="my-5" />
      {/* <Timer /> */}
      <hr className="my-5" />
      {showTimer && <Timer />}
      <button onClick={() => setshowTimer((prev) => !prev)}>
        Toggle Timer
      </button>
      <hr className="my-5" />
      <UserList />
      <hr className="my-5" />
      <UserDirectory />
    </div>
  );
}
