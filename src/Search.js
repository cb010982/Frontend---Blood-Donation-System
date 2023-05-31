import React, { useState } from 'react';


export default function BloodBankTable(){
  const [searchInput, setSearchInput] = useState("");
  
  const [tableData, setTableData] = useState([
    { donorNumber: 1, name: "John", bloodType: "O+", location: "New York" },
    { donorNumber: 2, name: "Jane", bloodType: "AB-", location: "Los Angeles" },
    { donorNumber: 3, name: "Bob", bloodType: "A+", location: "Chicago" },
    { donorNumber: 4, name: "Alice", bloodType: "B-", location: "Houston" }
  ]);

  const handleSearchInputChange = event => {
    console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const filteredTableData = tableData.filter(item =>
    item.name.toLowerCase().includes(searchInput.toLowerCase())
  );

    return (
      <div>
        <div className='search'>
        <input
        type="text"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="Search"  
        />
        </div>
    </div>
  );
    
}
