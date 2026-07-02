import { useState } from "react";
import { customers as initialCustomers } from "../services/customerData";

export default function Dashboard() {
 const [customers, setCustomers] = useState(initialCustomers);
const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [search, setSearch] = useState("");

  const addCustomer = () => {
    if (!name || !phone) {
      alert("이름과 전화번호를 입력하세요.");
      return;
    }

    const newCustomer = {
      id: Date.now(),
      name,
      phone,
      vip: false,
    };

    setCustomers([...customers, newCustomer]);

    setName("");
    setPhone("");
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>💅 AI Salon OS</h1>

      <h2>고객 등록</h2>

      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <input
        placeholder="전화번호"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <br />
      <br />

      <button onClick={addCustomer}>고객 등록</button>

      <hr />

      <h2>고객 목록</h2>

      {customers
  .filter((customer) =>
    customer.name.includes(search)
  )
  .map((customer) => (
        <div key={customer.id}>
          <h3>
            {customer.name}
            {customer.vip ? " ⭐VIP" : ""}
          </h3>

          <p>{customer.phone}</p>
        </div>
      ))}

      <h2>🔍 고객 검색</h2>

<input
  placeholder="이름 검색"
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>

<br />
<br />
    </div>
  );

  
}