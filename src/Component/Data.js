// var userdata = [
//     [
//       1,
//       "408-254656-6512",
//       "Rohan Kumar",
//       "04/01/2024",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "order-placed"
//     ],
//     [
//       2,
//       "408-254656-6512",
//       "Sharma",
//       "04/01/2024",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "picked"
//     ],
//     [
//       3,
//       "408-254656-6512",
//       "Krish",
//       "04/01/2024",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "picked"
//     ],
//     [
//       4,
//       "408-254656-6512",
//       "Jone",
//       "03/12/2023",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "processing"
//     ],
//     [
//       5,
//       "408-254656-6512",
//       "Rohan Kumar",
//       "03/12/2023",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "picked"
//     ],
//     [
//       6,
//       "408-254656-6512",
//       "Billo",
//       "04/01/2024",
//       "01:23 PM",
//       "Normal Washing (Wash & Fold)",
//       "2.5 Kg",
//       "$485.00",
//       "delivered"
//     ],
//     [
//         7,
//         "408-254656-6512",
//         "Rohan Kumar",
//         "04/01/2024",
//         "01:23 PM",
//         "Normal Washing (Wash & Fold)",
//         "2.5 Kg",
//         "$485.00",
//         "order-placed"
//       ],
//       [
//         8,
//         "408-254656-6512",
//         "Sharma",
//         "04/01/2024",
//         "01:23 PM",
//         "Normal Washing (Wash & Fold)",
//         "2.5 Kg",
//         "$485.00",
//         "picked"
//       ],
//       [
//         9,
//         "408-254656-6512",
//         "Krish",
//         "04/01/2024",
//         "01:23 PM",
//         "Normal Washing (Wash & Fold)",
//         "2.5 Kg",
//         "$485.00",
//         "picked"
//       ],
//       [
//         10,
//         "408-254656-6512",
//         "Jone",
//         "03/12/2023",
//         "01:23 PM",
//         "Normal Washing (Wash & Fold)",
//         "2.5 Kg",
//         "$485.00",
//         "processing"
//       ],
      
//   ];

//   export default userdata;


// const [formData, setFormData] = useState({
//   name: "",
//   phone: "",
//   services: "",
//   date: "",
//   timing: "",
//   user : {email : "dhiraj@gmail.com",
//       firstName : "Dhiraj ",
//       lastName : "Sahu",
//       phoneNumber : "937298739",
//       _id : "6596c30cabab474ae8448833"},
//   address: "",
//   specialInstruction: "",
// });


const userdata=[
  // Example fetch for orders
  // try {
  //   const response = await fetch('http://localhost:5000/api/order');

  //   const data = await response.json();
  //   console.log(data);

  // } catch (error) {
  //   console.error(error);
  // }

  // Example fetch for orders by id
  // try {
  //   const response = await fetch('http://localhost:5000/api/order/' + orderId);

  //   const data = await response.json();
  //   console.log(data);

  // } catch (error) {
  //   console.error(error);
  // }

  // Example fetch for User orders
  // try {
  //   const response = await fetch('http://localhost:5000/api/order/user/' + userId);

  //   const data = await response.json();
  //   console.log(data);

  // } catch (error) {
  //   console.error(error);
  // }

  // Example Update for orders
  // formData = {
  //   "name": "Dhiraj Sahu",
  //   "phone": "124321",
  //   "services": "dnibfweubf",
  //   "date": "ncbsidbi",
  //   "timing": "bxidbciwe",
  //   "user" : 2,
  //   "address": "cbdisbscs",
  //   "specialInstruction": "sndkjbchs"
  // }
  // try {
  //   const response = await fetch('http://localhost:5000/api/order/' + orderId,{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });

  // Example Post responses
  // formData = {"name" : "Dhiraj Sahu"
  // , "subject" : "Hello Bolra tha ", "feedback" : "Badhiya kaamm", "contact" : "9324211798"}
  // try {
  //   const response = await fetch('http://localhost:5000/api/response/',{
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   });


  // Example fetch for All responses
  // try {
  //   const response = await fetch('http://localhost:5000/api/response/');

  //   const data = await response.json();
  //   console.log(data);

  // } catch (error) {
  //   console.error(error);
  // }
  {
    _id:"10x03byu37",
  name: "Rohan",
  phone: "9845367856",
  services: "Normal Washing (Washing & Fold)",
  date: "03/10/2023",
  timing: "01:23PM",
  user : {email : "rohan@gmail.com",
      firstName : "Rohan ",
      lastName : "Kumar",
      phoneNumber : "937298739",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"order-placed",

  totalWeight : 2.4,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },

  {
    _id:"10x03byu37",
  name: "Sharma",
  phone: "9845367856",
  services: "Dry cleaning (Washing & Fold)",
  date: "03/10/2023",
  timing: "12:02PM",
  user : {email : "sharma@gmail.com",
      firstName : "Sharma ",
      lastName : "",
      phoneNumber : "9167829728",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"picked",

  totalWeight : 2.5,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },

  {
    _id:"10x03byu37",
  name: "Krish",
  phone: "9845367856",
  services: "Dry cleaning (Washing & Fold)",
  date: "03/10/2023",
  timing: "12:02PM",
  user : {email : "krish@gmail.com",
      firstName : "Krish ",
      lastName : "",
      phoneNumber : "9167829728",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"processing",

  totalWeight : 2.5,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },
  {
    _id:"10x03byu37",
  name: "Dhiraj",
  phone: "9845367856",
  services: "Normal Washing (Washing & Fold)",
  date: "03/10/2023",
  timing: "01:23PM",
  user : {email : "rohan@gmail.com",
      firstName : "Rohan ",
      lastName : "Kumar",
      phoneNumber : "937298739",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"order-placed",

  totalWeight : 2.4,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },

  
  {
    _id:"10x03byu37",
  name: "Jane",
  phone: "9845360856",
  services: "Dry cleaning (Washing & Fold)",
  date: "03/10/2023",
  timing: "12:02PM",
  user : {email : "jane@gmail.com",
      firstName : "Jane ",
      lastName : "",
      phoneNumber : "9167829728",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"delivered",

  totalWeight : 2.5,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },

  {
    _id:"10x03byu37",
  name: "Dhiraj",
  phone: "9845367856",
  services: "Normal Washing (Washing & Fold)",
  date: "03/10/2023",
  timing: "01:23PM",
  user : {email : "rohan@gmail.com",
      firstName : "Rohan ",
      lastName : "Kumar",
      phoneNumber : "937298739",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"order-placed",

  totalWeight : 2.4,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },

  
  {
    _id:"10x03byu37",
  name: "Krish",
  phone: "9845367856",
  services: "Dry cleaning (Washing & Fold)",
  date: "03/10/2023",
  timing: "12:02PM",
  user : {email : "krish@gmail.com",
      firstName : "Krish ",
      lastName : "",
      phoneNumber : "9167829728",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"out-for-delivery",

  totalWeight : 2.5,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },
  {
    _id:"10x03byu37",
  name: "Dhiraj",
  phone: "9845367856",
  services: "Normal Washing (Washing & Fold)",
  date: "03/10/2023",
  timing: "01:23PM",
  user : {email : "rohan@gmail.com",
      firstName : "Rohan ",
      lastName : "Kumar",
      phoneNumber : "937298739",
      _id : "408-254656-6512"},
  address: "AJ/3 Haweliya Churaha",
  specialInstruction: "",
  status:"order-placed",

  totalWeight : 2.4,

  totalItems:  12 ,
  costPerItem:  23 ,
  totalAmount: 485,
  },
]

export default userdata;