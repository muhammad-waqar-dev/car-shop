export const carsTypeslist = [
        {
          id: 1,
          name: "Toyota Camry",
          type: "Sedan",
          seater: 5, // highlight 1
          doors: 4,
          fuelType: "Petrol",
          hybrid: false,
          electric: "No", // highlight 2
          averageMpg: 30,
          topSpeedMph: 120,
          airbags: true,
          interiorQuality: "High",
          brands: "Toyota", // highlight 3
          rating: 4.5, // highlight 4
          partsInfo: [
              {
                partsName: "Engine",
                value: "2.5L Inline-4",
              },
              {
                partsName: "Transmission",
                value: "8-speed Automatic",
              },
              {
                partsName: "Suspension",
                value: "Independent MacPherson Strut",
              },
              {
                partsName: "Brakes",
                value: "Disc brakes",
              },
            ],
          description: `
          The Toyota Camry, a quintessential midsize sedan, has earned its place as a reliable and enduring choice in the automotive world. With seating for up to five passengers and a four-door configuration, the Camry offers a blend of practicality and elegance. The well-crafted interior boasts a high-quality finish, contributing to a premium driving experience. Its powerful 2.5L Inline-4 engine, mated to an 8-speed automatic transmission, delivers a harmonious balance of performance and fuel efficiency. The Camry's responsive suspension, featuring independent MacPherson struts, ensures a smooth ride over a variety of road surfaces. Safety remains a paramount focus, with a suite of airbags and effective disc brakes providing confidence and peace of mind on the road. Whether on city streets or open highways, the Toyota Camry continues to exemplify reliability, comfort, and lasting value.
        `,
          partsDescription: `
            The Toyota Camry's engineering excellence extends to its meticulously crafted components and systems. At the heart of the Camry lies a robust 2.5-liter inline-4 engine, delivering a harmonious blend of power and efficiency. This engine is paired with an advanced 8-speed automatic transmission that ensures seamless gear shifts and optimal performance across a range of driving scenarios. The Camry's suspension system features independent MacPherson struts, contributing to a smooth and controlled ride quality. Disc brakes provide reliable stopping power, enhancing safety and confidence on the road. Beyond the mechanical components, the Camry's interior showcases a commitment to quality, with high-grade materials and attention to detail evident in every corner. With its well-engineered parts, the Toyota Camry continues to be a symbol of reliability and innovation.
          `,
          imageURL:
            "https://www.motortrend.com/uploads/sites/5/2020/01/2020-Toyota-Camry-TRD-front-three-quarter-in-motion-2.jpg",
        },
        {
          id: 2,
          name: "Tesla Model 3",
          type: "Electric",
          seater: 5,
          doors: 4,
          fuelType: "Electric",
          hybrid: false,
          electric: "Yes",
          averageMpg: 133, // electric equivalent
          topSpeedMph: 140,
          airbags: true,
          interiorQuality: "Premium",
          brands: "Tesla",
          rating: 4.8,
          partsInfo: [
              {
                partsName: "Engine",
                value: "N/A", // No traditional engine
              },
              {
                partsName: "Transmission",
                value: "Single-speed",
              },
              {
                partsName: "Suspension",
                value: "Independent Multi-Link",
              },
              {
                partsName: "Brakes",
                value: "Regenerative Braking",
              },
              {
                partsName: "Motor",
                value: "Dual Motor All-Wheel Drive",
              },
              {
                partsName: "Battery",
                value: "75 kWh Lithium-ion",
              },
            ],
          description: `
            The Tesla Model 3 stands at the forefront of electric vehicle innovation, representing a seismic shift in the automotive landscape. With its all-electric powertrain, this sedan provides a glimpse into the future of sustainable transportation. Accommodating up to five passengers across four doors, the Model 3 seamlessly blends eco-consciousness with modernity. Its premium interior boasts high-quality materials and minimalist design, creating a serene driving environment. The dual motor all-wheel drive, paired with regenerative braking, offers remarkable acceleration and efficiency. The absence of a traditional engine opens up new possibilities for space utilization, leading to a spacious interior and large cargo capacity. Pioneering autonomous driving features further elevate the driving experience, while a 75 kWh lithium-ion battery ensures an impressive electric range. As an emblem of electric mobility, the Tesla Model 3 shapes the path toward a sustainable and exhilarating driving future.
          `,
          partsDescription: `
          The Tesla Model 3 is a marvel of modern engineering, with its cutting-edge components propelling it into the realm of automotive innovation. As an all-electric vehicle, the Model 3 redefines traditional powertrain architecture. With no internal combustion engine, the car relies on its electric motor and sophisticated single-speed transmission to deliver instantaneous torque and seamless acceleration. Regenerative braking technology harnesses energy during deceleration, contributing to the vehicle's remarkable efficiency. The Model 3's dual motor all-wheel drive system provides exceptional traction and control, enhancing both performance and safety. Central to its operation is a 75 kWh lithium-ion battery pack, which forms the heart of the car's energy storage and delivery. By ingeniously integrating these advanced components, the Model 3 represents the pinnacle of electric mobility, offering a glimpse into the future of transportation.
        `,
          imageURL:
            "https://hips.hearstapps.com/hmg-prod/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg?crop=1xw:1xh;center,top&resize=2048:*",
        },
        {
          id: 3,
          name: "Volkswagen",
          type: "Hatchback",
          description: "Hatchbacks are similar to sedans, but with a rear door that includes the rear window and opens upward, providing access to the cargo area. They come in various sizes and are often more versatile due to their flexible cargo space.",
          seater: 5,
          doors: 4,
          fuelType: "Petrol",
          hybrid: false,
          electric: "No",
          averageMpg: 28,
          topSpeedMph: 110,
          airbags: true,
          interiorQuality: "Moderate",
          brands: "Volkswagen",
          rating: 4.2,
          partsInfo: [
            { partsName: "Engine", value: "1.6L Inline-4" },
            { partsName: "Transmission", value: "5-speed Manual" },
            { partsName: "Suspension", value: "MacPherson Strut Front, Torsion Beam Rear" },
            { partsName: "Brakes", value: "Disc and Drum" },
          ],
          imageURL: "https://assets.volkswagen.com/is/image/volkswagenag/VW_NGW6_Homepage_NewCars_Small-AllVehicles?Zml0PWNyb3AlMkMxJndpZD04MDAmaGVpPTYwMCZmbXQ9anBlZyZxbHQ9NzkmYmZjPW9mZiYwNDY2",
        },
        {
          id: 3,
          name: "SUV",
          type: "Sport Utility Vehicle",
          description: "SUVs (Sport Utility Vehicles) are known for their higher ground clearance and versatile interior space. They are available in different sizes, including compact, midsize, and full-size. Some SUVs are designed for off-road capability, while others are focused on on-road performance and comfort.",
          seater: 7,
          doors: 4,
          fuelType: "Petrol / Diesel",
          hybrid: false,
          electric: "No",
          averageMpg: 25,
          topSpeedMph: 130,
          airbags: true,
          interiorQuality: "Varies by Brand",
          brands: "Ford",
          rating: 4.0,
          partsInfo: [
            { partsName: "Engine", value: "2.4L Inline-4 / 3.0L V6" },
            { partsName: "Transmission", value: "6-speed Automatic / 8-speed Automatic" },
            { partsName: "Suspension", value: "Independent Front and Rear" },
            { partsName: "Brakes", value: "Disc brakes" },
          ],
          imageURL: "https://www.usatoday.com/gcdn/-mm-/a34ac105546c707123f0b267aed831873d61c763/c=1830-2106-6777-4901/local/-/media/2017/04/10/USATODAY/USATODAY/636274636125305442-explorer1.jpg",
        },
        {
          id: 5,
          name: "Crossover",
          type: "Crossover",
          description: "Crossovers are a subcategory of SUVs, often built on a car platform rather than a truck chassis. They offer SUV-like features in a more compact and fuel-efficient package.",
          seater: 5,
          doors: 4,
          fuelType: "Petrol / Hybrid",
          hybrid: true,
          electric: "No",
          averageMpg: 32,
          topSpeedMph: 120,
          airbags: true,
          interiorQuality: "Moderate",
          brands:  "Nissan",
          rating: 4.2,
          partsInfo: [
            { partsName: "Engine", value: "2.0L Inline-4 / Hybrid System" },
            { partsName: "Transmission", value: "Continuously Variable Transmission (CVT)" },
            { partsName: "Suspension", value: "Independent MacPherson Strut" },
            { partsName: "Brakes", value: "Disc brakes" },
          ],
          imageURL: "https://images.hgmsites.net/hug/2018-nissan-kicks_100634995_h.jpg",
        },
      
        {
          id: 5,
          name: "Electric Cars",
          type: "Electric",
          description: "Electric Cars run entirely on electric power stored in batteries. They can come in various body styles, including sedans, SUVs, and hatchbacks.",
          seater: 4,
          doors: 4,
          fuelType: "Electric",
          hybrid: false,
          electric: "Yes",
          averageMpg: "Equivalent to over 100 MPG",
          topSpeedMph: 140,
          airbags: true,
          interiorQuality: "High",
          brands: "Tesla",
          rating: 4.5,
          partsInfo: [
            { partsName: "Engine", value: "Electric Motor" },
            { partsName: "Transmission", value: "Single-speed" },
            { partsName: "Suspension", value: "Independent Multi-Link" },
            { partsName: "Brakes", value: "Regenerative Braking" },
            { partsName: "Battery", value: "60 kWh Lithium-ion" },
          ],
          imageURL: "https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2022-05/220516-tesla-mn-1210-5e91e9.jpg",
        },
        // Add more cars here...
      ];
      