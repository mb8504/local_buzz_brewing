import React from 'react'


function fetchJSONData() {
    fetch("src/data/data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data))
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
fetchJSONData();



const BeerCards = () => {
  return (
    <section>
        <div className='siteContainer'>
            <div>
                
            </div>
            <div>

            </div>
        </div>
    </section>
  )
}

export default BeerCards