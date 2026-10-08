import Link from 'next/link';
import React from 'react';

const ScrolData = async() => {
    const res = await fetch("https://api.api-store.workers.dev/api/bazardor/products")
    const data = await res.json()
    console.log(data)
    return (
        <div>
            {data.map((item) => (
              <span key={item.id || item.nameBn} className="inline-block">
                {item.nameBn}
                <span className="mx-5">{item.categoryIcon}</span>
              </span>
            ))}
            
        </div>
    );
};

export default ScrolData;