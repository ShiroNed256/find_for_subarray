import React, { useState } from 'react'

const ListRender = ({ items }) => {
    const [value, setValue] = useState([
        {
            'leftTop' : [{'x' : 1} ]
        }
    ])

    return (
    <div>
        <h2>Список элементов:</h2>
        <ul>
        {items.map((item, index) => (
          <li key={index} className="object-item">
            {Object.entries(item).map(([key, value]) => (
              <div key={key}>
                <strong>{key}:</strong> 
                {Object.entries(value).map(([key1, value1]) => (
                    <div key={key1}>
                        <strong>{key1}:</strong> {value1.toString()}
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