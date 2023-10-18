// import CarDescription from "../components/molecules/CarDescription/CarDescription";
// import PartsDescription from "../components/molecules/PartsDescription/PartsDescription";
// // Render tabs based on tab index
// export function tabComponents(tabIndex, data) {
//   switch (tabIndex) {
//     case 0:
//       return <CarDescription selectedCar={data} />;
//     case 1:
//       return <PartsDescription selectedCar={data} />;

//     default:
//       <h1>No component selected</h1>;
//       break;
//   }
// }
// Tabs data 
export const tabsData = [
    {
      isActive: true,
      name: "Description",
    },
    {
      isActive: false,
      name: "Parts Information",
    },
  ];

// Features Card Data
export const featureCards = [
    {
        title:"Brand",
        icon:"fa fa-car",
        field:"brands"
    },
    {
        title:"Electric",
        icon:"fa fa-bolt",
        field:"electric"
    },
    {
        title:"Doors",
        icon:"fa fa-door-open",
        field:"doors"
    },
    {
        title:"Rating",
        icon:"fa fa-star",
        field:"rating"
    },
    {
        title:"Interior Quality",
        icon:"fa fa-book",
        field:"interiorQuality"
    },
    {
        title:"Speed(mph)",
        icon:"fa fa-clock",
        field:"topSpeedMph"
    },
] 
