//To Display Flight Details
function populateCards(flightData) {

    const length = Object.keys(flightData).length;
    console.log(length);
    let content = '';

    for (let i = 0; i < length; i++) {

        // To convert Date and Time to UTC
        let flightObj = flightData[i];
        const departTime = new Date(flightObj.departTime)
        const arriveTime = new Date(flightObj.ArrivalTime)

        content += `

        <div class="col">    
            <div class="card" >
                <div class="card-body">
                    <h6>Flight Number</h6>
                    <p class="Flight-number">${flightData[i]['flightNum']}</p>
                    <h6>Origin</h6>
                    <p class="origin">${flightData[i]['origin']}</p>
                    <h6>Destination</h6>
                    <p class="destination">${flightData[i]['destination']}</p>
                    <h6>Departure</h6>
                    <p class="departure-time">${departTime.toUTCString()}</p>
                    <h6>Arrival</h6>
                    <p class="arrival-time">${arriveTime.toUTCString()}</p>
                    <h6>Price</h6>
                    <p class="price">&#8377;${flightData[i]['price']}</p>
                    <button type="button" class="btn btn-primary" id="flight${flightData[i]['id']}" onclick="return getFlightID(${flightData[i]['id']});">Proceed</button>
                </div>
            </div>
        </div>    
        `
    }

    document.querySelector("#cardrow").innerHTML = content;

}

//To store Flight ID
function getFlightID(flightID) {

    window.localStorage.clear();
    localStorage.setItem("FlightID", flightID);
    location.href = "booking.html";

}


//To access Flight Data
fetch('flights.json')
    .then(response => {
        return response.json();
    })
    .then(data => {

        populateCards(data);

    });





