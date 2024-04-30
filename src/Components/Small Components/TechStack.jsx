import React from 'react'

function TechStack({obj}) {
    
    return (
        <div>
            <div className="overflow-hidden sm:text-6xl text-4xl text-gray-400 flex gap-20">
            {
                obj.map((items,index)=>(
                    <div key={index}>
                        {items}
                    </div>
                ))
            }
            </div>
        </div>
    )
}

export default TechStack