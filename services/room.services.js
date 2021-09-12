//Data for API

let data = [
  {
    rooms: [
      {
        name: "Room1",
        status: "booked",
        customer: "Customer1",
        date: ["11/9/21", "12/9/21"],
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
        id: 1,
      },
      {
        name: "Room2",
        status: "booked",
        customer: "Customer3",
        date: ["10/9/21",],
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
        id: 2,
      },
      {
        name: "Room3",
        status: "available",
        customer: "",
        date: [],
        start: "",
        end: "",
        seats: 1000,
        id: 3,
      },
      {
        name: "Room4",
        status: "booked",
        customer: "Customer2",
        date: ["11/9/21", "12/9/21", "13/9/21"],
        start: "12.01 am",
        end: "11.59 pm",
        seats: 1000,
        id: 4,
      },
    ],
  },
  {
    customer: [
      {
        name: "Customer1",
        room: "Room1",
        date: ["11/9/21", "12/9/21"],
        start: "12.01 am",
        end: "11.59 pm",
      },
      {
        name: "Customer2",
        room: "Room4",
        date: ["11/9/21", "12/9/21", "13/9/21"],
        start: "12.01 am",
        end: "11.59 pm",
      },
      {
        name: "Customer3",
        room: "Room2",
        date: ["10/9/21"],
        start: "12.01 am",
        end: "11.59 pm",
      },
    ],
  },
];

const service = {
  displayRooms() {
    return data[0].rooms;
  },
  displayCustomers() {
    return data[1].customer;
  },

  //To create room
  createRoom(newData) {
    console.log(newData);
    data[0].rooms.push(newData);
    return data[0].rooms;
  },

  //Function to book room
  bookRoom(id, newData) {
    let flag = true;
    let output;
    let message = "";
    let selectedRoom = data[0].rooms.filter((r) => r.id == id);
    let selectedCustomer = data[1].customer.filter((c) => {
      return c.name == newData.customer;
    });

    //Checking if room already booked
    selectedRoom[0].date.forEach((d) => {
      if (d === newData.date) {
        flag = false;
        message = "Room already booked";
      }
    });

    //Checking if customer already booked another room at same time
    selectedCustomer[0].date.forEach((d) => {
      if (d === newData.date) {
        flag = false;
        message = "Customers cant book more than 1 room for the same day";
      }
    });

    if (flag) {
      for (let i in data[0].rooms) {
        if (data[0].rooms[i].id == newData.id) {
          data[0].rooms[i].date.push(newData.date);
          output = data[0].rooms[i];
          return output;
        }
      }
    } else {
      return { error: message };
    }
  },
};

module.exports = service;
