import React, { useState } from 'react'

const ListRender = ({ items }) => {
    

    return (
    <div>
        <h2>Список элементов:</h2>
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
              maxWidth: "300px", // ограничиваем ширину
              width: "100%"
            }}
          >
            {Object.entries(item).map(([key, value]) => (
              <div key={key} style={{ marginBottom: "8px" }}>
                <h3 style={{ margin: "4px 0" }}>{key}</h3>
                {Object.entries(value).map(([subKey, subValue]) => (
                    <div key={subKey}>
                      {subKey}: {subValue}
                    </div>
                ))
                }
              </div>
            ))}
          </li>
        ))}
      </ul>
    </div>
    )
}

// Пример использования:
// <ListRenderer items={['Яблоко', 'Банан', 'Апельсин']} />

export default ListRender