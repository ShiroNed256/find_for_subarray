import React, { useState } from 'react'

const ListRender = ({ items }) => {
    

    return (
    <div>
        <h2 style={{textAlign: "center"}}>Список элементов</h2>
        <ul style={{
          listStyle: "none",
          padding: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
        >
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "10px",
              marginBottom: "10px",
              background: "#4B0082",
              maxWidth: "300px",
              width: "100%"
            }}
          >
            {Object.entries(item).map(([key, value]) => (
              <div key={key} style={{ marginBottom: "8px" }}>
                <div>
                      <strong>{key}:</strong>{" "}
                      {`{`+Object.entries(value)
                        .map(([subKey, subValue]) => `${subKey}: ${subValue}`)
                        .join(", ")+`}`}
                </div>
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
    )
}


export default ListRender