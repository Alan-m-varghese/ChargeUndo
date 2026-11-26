// server/bee-kerala-data.ts
// Verified Kerala records extracted from official BEE document:
// "EV Public Charging Stations Data till 26th October 2025" (Ministry of Power, Govt of India)

export interface BeeKeralaStation {
  cpo: string;
  station_name: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  max_power_kw: number | null;
  connectors: Array<{
    type: string;
    current_type: 'AC' | 'DC' | 'unknown';
    power_kw: number | null;
    stalls_count: number;
  }>;
}

export const BEE_KERALA_STATIONS: BeeKeralaStation[] = [
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Amaravila, Kerala 695122",
    "city": "Thiruvananthapuram",
    "latitude": 8.389452,
    "longitude": 77.106735,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Bakery Jct Rd, Near Rbi, Nandavanam, Palayam, Thiruvananthapuram, Kerala695033",
    "city": "Thiruvananthapuram",
    "latitude": 8.50308,
    "longitude": 76.953763,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Sycamore Complex, Plamoodu Junction, Pattom",
    "city": "Thiruvananthapuram",
    "latitude": 8.514473,
    "longitude": 76.94588,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Opposite Infosys/Ust, On Road Opposite Infosys Main Gate, Behind Al SajArena, Poundukadavu",
    "city": "Thiruvananthapuram",
    "latitude": 8.533965,
    "longitude": 76.880734,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Kulathoor Nh Bypass Kazhakkuttam, Thiruvananthapuram, Kerala 695583",
    "city": "Thiruvananthapuram",
    "latitude": 8.545103,
    "longitude": 76.876892,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Queen Tower, Kazhakootam, Thiruvananthapuram, Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.549333,
    "longitude": 76.877257,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram  Vazhayila - Kallayam Rd, Vazhayila, Padmanabha Nagar, Thiruvananthapuram, Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.551375,
    "longitude": 76.974801,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Mamam, Attingal, Kerala 695104",
    "city": "Thiruvananthapuram",
    "latitude": 8.676922,
    "longitude": 76.828229,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Varkala Kallambalam Rd, Palachira, Kerala 695143",
    "city": "Thiruvananthapuram",
    "latitude": 8.736033,
    "longitude": 76.745662,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Kairali Junction, Janardhanapuram, Po, Varkala, Kerala 695141",
    "city": "Thiruvananthapuram",
    "latitude": 8.736492,
    "longitude": 76.709439,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kollam",
    "address": "Kollam Kollam Pallimukku, Kollam, Kerala 691021",
    "city": "Kollam",
    "latitude": 8.876007,
    "longitude": 76.624791,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kollam",
    "address": "Kollam Kollam Chinnakada, Kollam, Kerala 691001",
    "city": "Kollam",
    "latitude": 8.889569,
    "longitude": 76.585894,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kollam",
    "address": "Kollam Kollam Raj Plaza Building, Kilikkolloor P.O, Kollam",
    "city": "Kollam",
    "latitude": 8.899214,
    "longitude": 76.612997,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kollam",
    "address": "Kollam Kollam Pioneer Building, Pulamon, Kottarakkara - 691531",
    "city": "Kollam",
    "latitude": 9.005279,
    "longitude": 76.778656,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kollam",
    "address": "Kollam Kollam Near Parabrahma Hospital, Pallumikk, Oachira, Kollam - 690528",
    "city": "Kollam",
    "latitude": 9.121632,
    "longitude": 76.51812,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Thottappally, Karuvatta, Kerala 688561",
    "city": "Alappuzha",
    "latitude": 9.315635,
    "longitude": 76.40173,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Erezha, Mullakkal, Kerala 688011",
    "city": "Alappuzha",
    "latitude": 9.498014,
    "longitude": 76.340207,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Vishnu Bhavan Pathirappally Po , Poomkavu, Alappuzha. , 688521",
    "city": "Alappuzha",
    "latitude": 9.526362,
    "longitude": 76.327279,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kottayam",
    "address": "Kottayam Kottayam Near Mathrubhumi, Nagampadam, Kottayam, Kerala 686004",
    "city": "Kottayam",
    "latitude": 9.599412,
    "longitude": 76.531404,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kottayam",
    "address": "Kottayam Kottayam Pala Road, Pallickathodu, Kerala 686503",
    "city": "Kottayam",
    "latitude": 9.605131,
    "longitude": 76.681247,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Prashanthi Super Clinic, Iv-558, Ac Rd, Krishnakripa, Cherthala, Kerala688524",
    "city": "Alappuzha",
    "latitude": 9.676118,
    "longitude": 76.340465,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Near Keltron Jn, Aroor, Cherthala",
    "city": "Alappuzha",
    "latitude": 9.8658,
    "longitude": 76.305244,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Bypass Road, Chottanikkara, Ernakulam",
    "city": "Kochi",
    "latitude": 9.932146,
    "longitude": 76.388634,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi 50/698 Pushpamangalam Heritage, Petta Maradu Road Near Gandhi Square",
    "city": "Kochi",
    "latitude": 9.94493,
    "longitude": 76.335421,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Thykoodam Service Rd, Vyttila,  Thykoodam, Kochi,  Kerala",
    "city": "Kochi",
    "latitude": 9.961851,
    "longitude": 76.318848,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Subhash Chandra Bose Road,  Jawahar Nagar, Kadavanthra,  Ernakulam,Kerala",
    "city": "Kochi",
    "latitude": 9.972137,
    "longitude": 76.302077,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi 40/6972, Mahatma Gandhi Rd, Rajaji Junction, Kochi, Kerala",
    "city": "Kochi",
    "latitude": 9.977934,
    "longitude": 76.280871,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Ponnurunni-Chalikkavattom Rd, Ponnurunni East, Ponnurunni, Vyttila,Ernakulam, Kerala",
    "city": "Kochi",
    "latitude": 9.98014,
    "longitude": 76.317365,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Opposite Ksfe, Palarivattom Junction, Ernakulam, Kerala 682025",
    "city": "Kochi",
    "latitude": 10.001819,
    "longitude": 76.306455,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Infopark Expy, Infopark Campus, Kakkanad, Kerala 682030",
    "city": "Kochi",
    "latitude": 10.003016,
    "longitude": 76.361709,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Puthuppady, Muvattupuzha, Kerala 686673",
    "city": "Kochi",
    "latitude": 10.004396,
    "longitude": 76.603584,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi \u03f3\u036c\u03f1\u0003\u03ed\u0003\u03f2\u0372\u0003\u03ed\u0355\u0003\u03ee\u0355\u0003\u03ef\u0355\u0003\u0003^\u011e\u0102\u0189\u017d\u018c\u019a\u0003\u0374\u0003\u0004\u015d\u018c\u0189\u017d\u018c\u019a\u0003Z\u011a\u0355\u0003D\u0102\u01c0\u011e\u016f\u015d\u0189\u01b5\u018c\u0102\u0175\u0355\u0003<\u0102\u016c\u016c\u0102\u0176\u0102\u011a\u0355\u0003<\u011e\u018c\u0102\u016f\u0102",
    "city": "Kochi",
    "latitude": 10.023176,
    "longitude": 76.341164,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Panvel - Kochi - Kanyakumari Hwy, Toll Junction, Edappally, Kochi, Kerala",
    "city": "Kochi",
    "latitude": 10.024412,
    "longitude": 76.308956,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Erumeli Junction, Kizhakambalam, Ernakulam :",
    "city": "Kochi",
    "latitude": 10.031967,
    "longitude": 76.407518,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Soubhagya Nagar, Thrikkakara, Ernakulam, Kerala 682021",
    "city": "Kochi",
    "latitude": 10.03495,
    "longitude": 76.330575,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Choornikkara, Thaikkavu, Kerala 683106",
    "city": "Kochi",
    "latitude": 10.069927,
    "longitude": 76.331349,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Ernakulam Kochi Near Metro Station, Ambattukavu, Choornikkara, Aluva, Kerala 683501",
    "city": "Kochi",
    "latitude": 10.078888,
    "longitude": 76.338379,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Near Old Police Station , Nh Road, Nh544, Puthukkad, Kerala",
    "city": "Thrissur",
    "latitude": 10.417348,
    "longitude": 76.270158,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Nattika, Triprayar, Kerala 680566",
    "city": "Thrissur",
    "latitude": 10.430089,
    "longitude": 76.10002,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Angels Nagar, Ollur, Thrissur, Kerala 680306",
    "city": "Thrissur",
    "latitude": 10.476581,
    "longitude": 76.240472,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Autostarke Energy Pvt Ltd, 14/3 A1, Puzhakkal",
    "city": "Thrissur",
    "latitude": 10.54281,
    "longitude": 76.184562,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur H Highway, Pattikkad Center, Thrissur, Kerala 680652",
    "city": "Thrissur",
    "latitude": 10.557072,
    "longitude": 76.328449,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Outer Ring Road, Opp Railway Station, East Nada, Guruvayur",
    "city": "Thrissur",
    "latitude": 10.595565,
    "longitude": 76.044337,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Kecheri Road, Pannithadam",
    "city": "Thrissur",
    "latitude": 10.666181,
    "longitude": 76.113533,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Nh 66, Veliancode Town, Ponnani, Kerala",
    "city": "Malappuram",
    "latitude": 10.729249,
    "longitude": 75.947203,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Thrissur Thrissur Cheruthuruthi, Kerala 679531",
    "city": "Thrissur",
    "latitude": 10.749964,
    "longitude": 76.274664,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Palakkad",
    "address": "Palakkad Palakkad Kvr Green Energy Pvt Ltd , Ts2 Ventures , Mercy College Junction",
    "city": "Palakkad",
    "latitude": 10.770167,
    "longitude": 76.637861,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Palakkad",
    "address": "Palakkad Palakkad Palakkad - Ponnani Rd, Ottapalam",
    "city": "Palakkad",
    "latitude": 10.773716,
    "longitude": 76.387919,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Palakkad",
    "address": "Palakkad Palakkad Calicut Bypass Road, Manali, Palakkad - 678001",
    "city": "Palakkad",
    "latitude": 10.779429,
    "longitude": 76.665131,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Thrissur",
    "address": "Malappuram Malappuram Thrissur - Kunnamkulam Rd, Edappal, Kerala 679576",
    "city": "Thrissur",
    "latitude": 10.789902,
    "longitude": 76.008495,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Tirur Ashanpadi, Kootayi Road Tirur , Malappuram Dist. 676502",
    "city": "Malappuram",
    "latitude": 10.864356,
    "longitude": 75.899666,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Karinganad, Vilayur Po, Pattambi Taluk",
    "city": "Malappuram",
    "latitude": 10.8878,
    "longitude": 76.189669,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Tirur Police Lane, Tirur-Chamravattom Road, Tirur - 676105",
    "city": "Malappuram",
    "latitude": 10.896958,
    "longitude": 75.927197,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Tirur Pookkayil, Tirur, Kerala",
    "city": "Malappuram",
    "latitude": 10.923581,
    "longitude": 75.913121,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Puthanathani, Malappuram, Kerala",
    "city": "Malappuram",
    "latitude": 10.934319,
    "longitude": 75.99956,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Bypass Arena, Ponmundam, Vailathur, Malappuram, Kerala",
    "city": "Malappuram",
    "latitude": 10.951425,
    "longitude": 75.955169,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Palakkad",
    "address": "Palakkad Palakkad Tippu Sulthan Rd, Pallikurup, Kerala 678593",
    "city": "Palakkad",
    "latitude": 10.965805,
    "longitude": 76.475281,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Xxmx+J2F, Palathara, Kerala",
    "city": "Malappuram",
    "latitude": 10.984132,
    "longitude": 75.997859,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram  Sh 39, Perintalmanna, Kerala 679322",
    "city": "Malappuram",
    "latitude": 10.985978,
    "longitude": 76.225719,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Parambilangadi, Kottakkal, Kerala 676501",
    "city": "Malappuram",
    "latitude": 10.990098,
    "longitude": 75.993201,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Life Gear Building, Kottakunnu Rd, Up Hill, Malappuram, Kerala 676505",
    "city": "Malappuram",
    "latitude": 11.045531,
    "longitude": 76.08292,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Panakkad, Malappuram, Kerala 676519",
    "city": "Malappuram",
    "latitude": 11.047213,
    "longitude": 76.043551,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Vengara, Kerala 676304",
    "city": "Malappuram",
    "latitude": 11.05163,
    "longitude": 75.990539,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Matil Mall, Vengara Road, Kizhakethala, Malappuram",
    "city": "Malappuram",
    "latitude": 11.05173,
    "longitude": 76.068329,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Vengara, Malappuram, Kerala 676304",
    "city": "Malappuram",
    "latitude": 11.051864,
    "longitude": 75.981023,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Sh 72, Kizhakkethala, Down Hill, Malappuram, Kerala 676505",
    "city": "Malappuram",
    "latitude": 11.052222,
    "longitude": 76.075398,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Anjappura, Near Nahas Hospital, Parappanangadi, Kerala 676303",
    "city": "Malappuram",
    "latitude": 11.054434,
    "longitude": 75.85529,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Malappuram Malappuram Kozhikode - Palakkad Hwy, Machingal, Down Hill, Malappuram, Kerala676505",
    "city": "Kozhikode",
    "latitude": 11.057586,
    "longitude": 76.082865,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Panayi, Anakkayam, Malappuram, Kerala 676509",
    "city": "Malappuram",
    "latitude": 11.082585,
    "longitude": 76.111279,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Calicut Rd, Thurakkal, Manjeri, Kerala 676121",
    "city": "Malappuram",
    "latitude": 11.120496,
    "longitude": 76.113424,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Rajiv Gandhi Bypass, Melakkam, Manjeri, Kerala 676121",
    "city": "Malappuram",
    "latitude": 11.124418,
    "longitude": 76.11227,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Ayanikode, Porur, Malappuram Pin : 679339",
    "city": "Malappuram",
    "latitude": 11.145041,
    "longitude": 76.235542,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Pazhayangadi, Kondotty P.O Malappuram, Kerala 673638",
    "city": "Malappuram",
    "latitude": 11.147015,
    "longitude": 75.963898,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Near Calicut Airport, Kondotty, Malappuram, Kerala 673638",
    "city": "Malappuram",
    "latitude": 11.160815,
    "longitude": 75.945812,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Chungam Feroke Po, Kozhikode, Feroke, Kerala",
    "city": "Kozhikode",
    "latitude": 11.180657,
    "longitude": 75.850678,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Chungam Feroke Po, Kozhikode, Kerala 673631",
    "city": "Kozhikode",
    "latitude": 11.181012,
    "longitude": 75.85063,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Kozhikode-Nilambur-Gudallur Rd, Petta, Feroke, Kerala 673633",
    "city": "Kozhikode",
    "latitude": 11.184601,
    "longitude": 75.840707,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Sh28, Edavanna, Kerala 676541",
    "city": "Malappuram",
    "latitude": 11.21046,
    "longitude": 76.139167,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Nh66,Areekkad, Nallalam, Kozhikode,Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.213295,
    "longitude": 75.804114,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut G1003, Nh 66, Kozhikode Bypass, Poovangal, Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.248533,
    "longitude": 75.833449,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Ground Floor Baby Arcade, Pt Usha Rd, Near Gatewayhotel, Kozhikode,Kerala",
    "city": "Kozhikode",
    "latitude": 11.258248,
    "longitude": 75.774777,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Rajaji Road, Calicut-  Kerala, India",
    "city": "Kozhikode",
    "latitude": 11.258638,
    "longitude": 75.785705,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Mcc Cross Rd, Vellayil, Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.264453,
    "longitude": 75.777366,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut 2Nd Unison Tower, Thondayad Junction Thondayad Bye Pass, Near Star CareHospital, Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.264847,
    "longitude": 75.810971,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Near Sabah Holidays & Online Services, Opposite Cheruvadi Post Office,Cheruvadi, Calicut Pin : 673661",
    "city": "Kozhikode",
    "latitude": 11.26731,
    "longitude": 75.989449,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Opp. Hdfc Bank, Chevayoor, Kozhikode, Kerala 673017",
    "city": "Kozhikode",
    "latitude": 11.269693,
    "longitude": 75.827504,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Near Chullikkaparamba Juma Masjid, Cheruvadi, Calicut, Kerala 673661",
    "city": "Kozhikode",
    "latitude": 11.269786,
    "longitude": 75.98822,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Kozhikode - Mavoor - Areacode Rd, Near Hindustan Petroleum,Velliparamba, Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.269806,
    "longitude": 75.843646,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Thoppayil, Vellayil, Kozhikode, Kerala 673011",
    "city": "Kozhikode",
    "latitude": 11.275135,
    "longitude": 75.764564,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Manalody, Nilambur, Kerala 679329",
    "city": "Malappuram",
    "latitude": 11.277585,
    "longitude": 76.226955,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Katcherry Village Office, Mini Bypass Rd, East Hill, Kozhikode, Kerala 673005",
    "city": "Kozhikode",
    "latitude": 11.289508,
    "longitude": 75.776415,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Thadampattuthazham, Karaparamba, Kozhikode, Kerala 673010",
    "city": "Kozhikode",
    "latitude": 11.295302,
    "longitude": 75.791411,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Moozhikkal, Kozhikode, Kerala",
    "city": "Kozhikode",
    "latitude": 11.296198,
    "longitude": 75.830782,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Opposite Punching Station, Chettikulam, Elathur, Kerala 673303",
    "city": "Kozhikode",
    "latitude": 11.332254,
    "longitude": 75.741264,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Kozhikode-Mysore-Kollegal Hwy, Vennakkad, Koduvally, Kerala 673571",
    "city": "Kozhikode",
    "latitude": 11.340057,
    "longitude": 75.898593,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Malappuram",
    "address": "Malappuram Malappuram Dubai Mall, Edakkara, Kerala 679331",
    "city": "Malappuram",
    "latitude": 11.358187,
    "longitude": 76.30725,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Near Bus Stand, Poonoor Road, Narikkuni, Calicut",
    "city": "Kozhikode",
    "latitude": 11.368184,
    "longitude": 75.864438,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Nh 66, Arangadath, Kerala 673306",
    "city": "Kozhikode",
    "latitude": 11.426445,
    "longitude": 75.704587,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Thikkoti, Calicut, Kerala 673529",
    "city": "Kozhikode",
    "latitude": 11.4943,
    "longitude": 75.627756,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Kozhikode Calicut Vythiri -Tharuvana Rd, Vythiri, Kerala 673576",
    "city": "Kozhikode",
    "latitude": 11.559108,
    "longitude": 76.03499,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kozhikode",
    "address": "Wayanad Wayanad Kozhikode Mysore, Road, Meenangadi, Kerala 673591",
    "city": "Kozhikode",
    "latitude": 11.655866,
    "longitude": 76.153443,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Avk Nair Road, Pilakool, Thalassery, Kerala",
    "city": "Kannur",
    "latitude": 11.745544,
    "longitude": 75.49502,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Near Kannur Polytechnic, Kannur, Kerala 670007",
    "city": "Kannur",
    "latitude": 11.850254,
    "longitude": 75.417332,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Nikshan Arena, Bank Rd, Padanapalam, Kannur, Kerala",
    "city": "Kannur",
    "latitude": 11.868714,
    "longitude": 75.366022,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Nikshan Arena, Bank Rd, Padanapalam, Kannur, Kerala",
    "city": "Kannur",
    "latitude": 11.868745,
    "longitude": 75.366022,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Sn Park Rd, Kannur, Kerala 670001",
    "city": "Kannur",
    "latitude": 11.870936,
    "longitude": 75.359793,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Crux Mobility Pvt Ltd, City Tower, Near Har Cars",
    "city": "Kannur",
    "latitude": 11.874322,
    "longitude": 75.3872,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kochi",
    "address": "Kannur Kannur Near Makkani Kannur, Kochi, Kerala 670002",
    "city": "Kochi",
    "latitude": 11.88142,
    "longitude": 75.3738,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Payyambalam Beach Road, Chalad, Kannur, Kerala",
    "city": "Kannur",
    "latitude": 11.8843,
    "longitude": 75.342051,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Thalassery - Baveli Rd, Kelakam, Kerala 673101",
    "city": "Kannur",
    "latitude": 11.896026,
    "longitude": 75.809715,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Kannapuram, Kannur, Kerala 670301",
    "city": "Kannur",
    "latitude": 11.980685,
    "longitude": 75.315994,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Padikkunnu, Mayyil, Kerala 670602",
    "city": "Kannur",
    "latitude": 11.987534,
    "longitude": 75.420727,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Kasaragod - Kannur Rd, Trichambaram, Taliparamba, Kerala",
    "city": "Kannur",
    "latitude": 12.025627,
    "longitude": 75.367177,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Near Bus Stand, Payyannur 670307",
    "city": "Kannur",
    "latitude": 12.102277,
    "longitude": 75.210274,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Vayattuparamba - Kavala Rd, New Naduvil, Kerala",
    "city": "Kannur",
    "latitude": 12.151841,
    "longitude": 75.462338,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kannur",
    "address": "Kannur Kannur Nh66, Cheruvathur, Kerala 671313",
    "city": "Kannur",
    "latitude": 12.214817,
    "longitude": 75.162448,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Ather",
    "station_name": "Ather EV Station, Kasaragod",
    "address": "Kasaragod Kasargode 17/2A-B, Nousheen Complex, Near Shardamba Temple, Anangoor,Kasargode-",
    "city": "Kasaragod",
    "latitude": 12.512545,
    "longitude": 75.003777,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Trivandrum Electrical Section Kseb, Main Central Rd, Vrindavan Gardens, Pattom",
    "city": "Thiruvananthapuram",
    "latitude": 8.516602,
    "longitude": 76.93938,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Hanging Bridge, Kozhikode-Mysore-Kollegal Hwy, Vennakkad, Koduvally",
    "city": "Kozhikode",
    "latitude": 11.339766,
    "longitude": 75.89873,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.2,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kottayam",
    "address": "Kottayam Kottayam Hangout Play World, Sh 1, Near Kaithamala Muslim Church, Ettumanoor",
    "city": "Kottayam",
    "latitude": 9.661327,
    "longitude": 76.551258,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Near Govt Up School, Anthatta, Nh 66, Koyilandy",
    "city": "Kozhikode",
    "latitude": 11.427553,
    "longitude": 75.703106,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.2,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kochi",
    "address": "Alappuzha Alappuzha Near Kseb 220Kv Substation, Near Panvel - Kochi - Kanyakumari Hwy",
    "city": "Kochi",
    "latitude": 9.425684,
    "longitude": 76.346805,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kochi",
    "address": "Kollam Kollam Panvel - Kochi - Kanyakumari Hwy, T D Nagar, Olayil, High School Jn.",
    "city": "Kochi",
    "latitude": 8.89273,
    "longitude": 76.57897,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Kannur",
    "address": "Kannur Kannur Pappinisseri Co-Operative Bank, Oppo. Bakkalam Bus Stand, Bakkalam",
    "city": "Kannur",
    "latitude": 11.997448,
    "longitude": 75.370864,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPM",
    "station_name": "BPM EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Saroja Complex, Chandrathil Rd, Jn, Palarivattom - Edappally Rd, Edappally",
    "city": "Ernakulam",
    "latitude": 10.00525,
    "longitude": 76.30495,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kozhikode",
    "address": "Kozhikode Karimbanappalam Aahaar Restaurant Karimbanappalam, Vatakara P.O,  Kozhikode, Kerala -673101",
    "city": "Kozhikode",
    "latitude": 11.58663,
    "longitude": 75.593177,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kottayam",
    "address": "Kottayam Perunnermangalam Autokast Premises, South East End Adjacent To Nh 66, Mararikulam NorthVillage, Perunnermangalam, M",
    "city": "Kottayam",
    "latitude": 9.63628,
    "longitude": 76.3352,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Idukki",
    "address": "Idukki Idukki Dtpc Idukki Park   Nayarupara P.O.  Idukki - 685602   Kerala",
    "city": "Idukki",
    "latitude": 9.849202,
    "longitude": 76.977562,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thycaud K Government Guest House, State Council For Child Welfare, Cv Raman PillaiRd, Near Kerala, Housing B",
    "city": "Thiruvananthapuram",
    "latitude": 8.492775,
    "longitude": 76.957296,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Palakkad",
    "address": "Palakkad Kanjirapuzha Kanjijrapuzha Garden Kanhirapuzha Rd, Kanjirapuzha Kerala-678591",
    "city": "Palakkad",
    "latitude": 10.991903,
    "longitude": 76.532394,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kasaragod",
    "address": "Kasaragod Kasaragod Kerala Agricultural University, Padannakkad (Po) Kasaragod Kerala, 671314",
    "city": "Kasaragod",
    "latitude": 12.253362,
    "longitude": 75.119457,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Thrissur",
    "address": "Thrissur Killannur Kerala Institute Of Local Administration (Kila), Shoranur Road,Mulamkunnathukavu, Killannur, Thris",
    "city": "Thrissur",
    "latitude": 10.60165,
    "longitude": 76.214872,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Alappuzha",
    "address": "Alappuzha Krishnapuram Ktdc Aahar Restaurant, Nh66, Krishnapuram, Kayamkulam-690533",
    "city": "Alappuzha",
    "latitude": 9.149147,
    "longitude": 76.512902,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kochi",
    "address": "Ernakulam Kochi Ktdc Tourist Reception Centre, Shanmugham Road, Ernakulam, MarineDrive, Kochi, Kerala 682031",
    "city": "Kochi",
    "latitude": 9.977164,
    "longitude": 76.27777,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Malappuram",
    "address": "Malappuram Perinthalmanna Moosakutty Memorial Bust Stand Perinthalmanna Kerala 679322",
    "city": "Malappuram",
    "latitude": 10.975135,
    "longitude": 76.22122,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kannur",
    "address": "Kannur Pinarayi Pinarayi Park, Padannakara,Pinarayi. Kannur, Kerala, 670741",
    "city": "Kannur",
    "latitude": 11.785595,
    "longitude": 75.48427,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Shangumukham Shankumugham Beach, Dtpc Vehicle Parking Area, Thiruvananthapuram,Kerala 695008",
    "city": "Thiruvananthapuram",
    "latitude": 8.481159,
    "longitude": 76.912456,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat DC-001",
        "current_type": "DC",
        "power_kw": 15.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "EESL",
    "station_name": "EESL EV Station, Kollam",
    "address": "Kollam Chavara Take A Break Dtpc Restaurant, Chavara ,Panmana, Kerala, 691583",
    "city": "Kollam",
    "latitude": 9.004949,
    "longitude": 76.536378,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Blue Star Fuels, Hpc Dealer,Keezhillam P O, Pulluvazhi,Kunnathunadu,Perumbavoor,Ernakulam",
    "city": "Ernakulam",
    "latitude": 10.0585,
    "longitude": 76.5278,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Ernakulam",
    "address": "Ernakulam Eranakulam Hpc Dealer Athani-Paravoor Road, Manjali Mavinchode, Mannam P O684520",
    "city": "Ernakulam",
    "latitude": 10.149748,
    "longitude": 76.260666,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Alappuzha",
    "address": "Alappuzha Azhapuzha Hpc Dealers Opposite To Odampally Up School Arookutty - Cherthala Road688526",
    "city": "Alappuzha",
    "latitude": 9.818265,
    "longitude": 76.351044,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Hpcl Dealer,Sno.169/1,Koottanad Desom On Sh39,Chalissery Village",
    "city": "Palakkad",
    "latitude": 10.75443,
    "longitude": 76.10977,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam <\u017d\u018c\u01b5\u019a\u015a\u017d\u011a\u011e\u0003&\u01b5\u011e\u016f\u0190\u0003\u0003\u0003\u0355\u0003\u0003,\u0189\u0003W\u011e\u019a\u018c\u017d\u016f\u0003W\u01b5\u0175\u0189\u0003\u0003\u0355W\u01b5\u018c\u0102\u01c7\u015d\u011a\u0102\u019a\u015a\u015d\u016f\u0003\u0011\u01b5\u015d\u016f\u011a\u015d\u0176\u0150\u0003\u0355\u0003\u0003<\u017d\u018c\u01b5\u019a\u015a\u017d\u011a\u011e\u0003W\u0003K\u0355\u0003\u0003\u0003<\u017d\u018c\u01b5\u019a\u015a\u017d\u011a\u011e\u0003\u0355\u0003\u0003\u0003<\u017d\u019a\u019a\u0102\u01c7\u0102\u0175",
    "city": "Ernakulam",
    "latitude": 9.463098,
    "longitude": 76.96037,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram M/S. Nagarajan &Sons Fuel Stn Hpc Dealer   Ulloor Akkulam Road ,  NearNish University, Akkulam  Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "latitude": 8.524132,
    "longitude": 76.903653,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram M/S. Thakidiyil Fuels, Hpc Dealers, Anachal P O, Kattakkada,Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "latitude": 8.5025,
    "longitude": 77.0748,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "HPCL",
    "station_name": "HPCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam M/S.Srihridya Fuels Hpc Dealer Nh 85 Manamthadam Puthencruz Ernakulam",
    "city": "Ernakulam",
    "latitude": 9.964,
    "longitude": 76.4156,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Wayanad",
    "address": "Wayanad Wayanad Aayramkolli Ambalavayal Road Ambalavayal Sulthan Bathery WayanadDistrict",
    "city": "Wayanad",
    "latitude": 11.630673,
    "longitude": 76.212596,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thrissur",
    "address": "Thrissur Thrissur Crown Fuels Indian Oil Dealerkurukkenpara Guruvayur Road KunnamkulamPost",
    "city": "Thrissur",
    "latitude": 10.635135,
    "longitude": 76.059644,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Coco Service Provider Tc 91/268/4 Near Lulu Mall AnayaraTrivandrum",
    "city": "Thiruvananthapuram",
    "latitude": 8.514464,
    "longitude": 76.899432,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Coco Service Provider Tc 91/268/4 Near Lulu Mall AnayaraTrivandrum",
    "city": "Thiruvananthapuram",
    "latitude": 8.514602,
    "longitude": 76.899144,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealer Areecode - Koz. Road Edavannapara Malappuram Dist.",
    "city": "Malappuram",
    "latitude": 11.245686,
    "longitude": 75.972913,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Indian Oil Dealer Avidanallurkoorachundukoottalida Kozhikode Dist.",
    "city": "Kozhikode",
    "latitude": 11.500391,
    "longitude": 75.81498,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealer Chottanikkara Kottayathupara Kadungamangalam",
    "city": "Ernakulam",
    "latitude": 9.934251,
    "longitude": 76.375033,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Indian Oil Dealer Kuttiadi-Kallchi Road Vatayam P.O. Kozhikode District",
    "city": "Kozhikode",
    "latitude": 11.666408,
    "longitude": 75.73009,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kasaragod",
    "address": "Kasaragod Kasaragod Indian Oil Dealer Nh 17 Padanakkad Kasargod Dist - Tin 32130648865C",
    "city": "Kasaragod",
    "latitude": 12.277358,
    "longitude": 75.11021,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Dealer Opp School Pallimukku Peyad Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "latitude": 8.511469,
    "longitude": 77.010836,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealer Pandikad - Manjeri Road Pandikad Malappuram Dist.",
    "city": "Malappuram",
    "latitude": 11.095241,
    "longitude": 76.220117,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Indian Oil Dealer Sh34 Opp. Bishop House Poonoor Roadkozhikode Dist",
    "city": "Kozhikode",
    "latitude": 11.423261,
    "longitude": 75.931712,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Dealer Venjaramoodu ; Nellanadu Village Nedumangadu Taluk",
    "city": "Thiruvananthapuram",
    "latitude": 8.683804,
    "longitude": 76.907867,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kasaragod",
    "address": "Kasaragod Kasaragod Indian Oil Dealers 208/2A2 Guru Nagar Nellikatta Kasaragod District",
    "city": "Kasaragod",
    "latitude": 12.547498,
    "longitude": 75.070484,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Idukki",
    "address": "Idukki Idukki Indian Oil Dealers Balagram P.O. Karunapuram Third Campidukki District",
    "city": "Idukki",
    "latitude": 9.790944,
    "longitude": 77.20153,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealers Bp Angadi-Chamravattom Road ThriprangodeMalappuram District",
    "city": "Malappuram",
    "latitude": 10.832051,
    "longitude": 75.948289,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kannur",
    "address": "Kannur Kannur Indian Oil Dealers Chala-Koothuparamba Rd Moweri Kottayam VillageKannur District",
    "city": "Kannur",
    "latitude": 11.830454,
    "longitude": 75.534645,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kannur",
    "address": "Kannur Kannur Indian Oil Dealers Cheruvathalamotta Chattukapara P.O. Kannur District",
    "city": "Kannur",
    "latitude": 11.955829,
    "longitude": 75.459815,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode /\u0176\u011a\u015d\u0102\u0176\u0003K\u015d\u016f\u0003\u0018\u011e\u0102\u016f\u011e\u018c\u0190\u0003\u0012\u01c1\u018c\u011a\u0175\u0003Z\u017d\u0102\u011a\u0003D\u0102\u01c7\u0102\u0176\u0102\u011a\u0003W\u0358K\u0003\u034eZ\u0003W\u0102\u016f\u0102\u016c\u016c\u017d\u019a\u0003s\u0102\u01c7\u0102\u016f\u0003:\u0110\u0176<\u017d\u01cc\u015a\u015d\u016c\u017d\u011a\u011e\u0003\u0018\u015d",
    "city": "Kozhikode",
    "latitude": 11.285502,
    "longitude": 75.849882,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathananthitta Indian Oil Dealers Elamkulam Kaipattoor Road Kodumon Pathanamthitta",
    "city": "Pathanamthitta",
    "latitude": 9.191012,
    "longitude": 76.770572,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Indian Oil Dealers Kokkothamangalam P.O Cherthala Alappuzha Dist",
    "city": "Alappuzha",
    "latitude": 9.68052,
    "longitude": 76.372286,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Indian Oil Dealers Kothakurussi Ottapalam - Cheruplassery Road Palakkad",
    "city": "Palakkad",
    "latitude": 10.83084,
    "longitude": 76.344529,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathananthitta Indian Oil Dealers Kulasekharapathy Kumbazha Road Pathanamthitta",
    "city": "Pathanamthitta",
    "latitude": 9.268371,
    "longitude": 76.798094,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealers Kuruva Village Pand Chendi Pang (P.O) MalappuramDistrict",
    "city": "Malappuram",
    "latitude": 10.96591,
    "longitude": 76.08622,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealers Mannam -Kariyamthuruthu Road Ernakulam District",
    "city": "Ernakulam",
    "latitude": 10.124172,
    "longitude": 76.242282,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Indian Oil Dealers Muthuthala Perumudiyoor P.O. Pattambi Palakkad",
    "city": "Palakkad",
    "latitude": 10.8387,
    "longitude": 76.1479,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealers Near Madambi Bus Stop Viapanayikulamkongorppilly Po",
    "city": "Ernakulam",
    "latitude": 10.10201,
    "longitude": 76.271914,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealers Nh-66 P.O Punnathala Vettichira Malappuram Dist",
    "city": "Malappuram",
    "latitude": 10.928632,
    "longitude": 76.026286,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Malappuram Malappuram Indian Oil Dealers Palakkad (P.O) Via Kuzhimanna Pulpatta MalappuramDistrict",
    "city": "Palakkad",
    "latitude": 11.164482,
    "longitude": 76.028862,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Indian Oil Dealers Palakkayam Anamooli Mannarkad Palakkad District",
    "city": "Palakkad",
    "latitude": 11.0296,
    "longitude": 76.5161,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Dealers Peroorkada-Kudappanakunnu Road Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "latitude": 8.547661,
    "longitude": 76.959667,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealers Pulikkalody Vadapuram (Po) Malappuram District",
    "city": "Malappuram",
    "latitude": 11.239271,
    "longitude": 76.204974,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealers Sy.3/3-3 & 3/1-3 Pattimottom Village Kunnathunadu Taluk",
    "city": "Ernakulam",
    "latitude": 10.022851,
    "longitude": 76.402546,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Indian Oil Dealers Sy.No.101/6 Ottapalam Village Palapuram OttapalamTaluk",
    "city": "Palakkad",
    "latitude": 10.772343,
    "longitude": 76.424903,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Alappuzha",
    "address": "Alappuzha Alappuzha Indian Oil Dealers Sy.No.146/12A/2Mattathibhagam VillageArrookutty-Cherthala",
    "city": "Alappuzha",
    "latitude": 9.851003,
    "longitude": 76.327451,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealers Thiruvaniyur Village Kunnathunad Talukernakulam Dt",
    "city": "Ernakulam",
    "latitude": 9.931123,
    "longitude": 76.430074,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indian Oil Dealers Tirurkkad Post Manjeri Road Malappuram District",
    "city": "Malappuram",
    "latitude": 10.992985,
    "longitude": 76.181936,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Wayanad",
    "address": "Wayanad Wayanad Indian Oil Dealers Valad Post Puthoor Mananthavady Wayanad District",
    "city": "Wayanad",
    "latitude": 11.793187,
    "longitude": 75.910474,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Dealers Vamanapuram Karette M.C. Road Thiruvananthapuram",
    "city": "Thiruvananthapuram",
    "latitude": 8.729349,
    "longitude": 76.898731,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thrissur",
    "address": "Thrissur Thrissur Indian Oil Dealers Vattampadam Centre Kunnamkulam P.O. Trissur Dt.",
    "city": "Thrissur",
    "latitude": 10.657814,
    "longitude": 76.032574,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Indian Oil Dealers Viamalayatoor Kurishmudichurch Kalady-Malayatoor Road",
    "city": "Ernakulam",
    "latitude": 10.192466,
    "longitude": 76.505761,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indian Oil Ksk Dealers Kanakulam M Road Kulathur Uchakada PoNeyyatinkara Taluk",
    "city": "Thiruvananthapuram",
    "latitude": 8.315791,
    "longitude": 77.099676,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathananthitta Indian Oil Ksk Dealers Kumbanad - Arattupuzha Road Block No 21 KoipuramVillage Near High",
    "city": "Pathanamthitta",
    "latitude": 9.33715,
    "longitude": 76.6491,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kottayam",
    "address": "Kottayam Kottayam Indian Oil Ksk Dealers Ramapuram Near Palliampuram Shiva TempleRamapuram Village Meenachil",
    "city": "Kottayam",
    "latitude": 9.810588,
    "longitude": 76.642451,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kottayam",
    "address": "Kottayam Kottayam Indian Oil Ksk Dealers Rs No 4397 Amayannoor Po Oravakkal Kottayam TkKottayam Dist",
    "city": "Kottayam",
    "latitude": 9.609718,
    "longitude": 76.601738,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kottayam",
    "address": "Kottayam Kottayam Indian Oil Ksk Dealers Syno 462/7 Aymanam Village Kudamaloor KottayamTaluk",
    "city": "Kottayam",
    "latitude": 9.624521,
    "longitude": 76.512303,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathananthitta Indian Oil Ksk Dealers Thadiyoor P Re Sy 69/10 Ayiroor Village Near KadayarCross Jn",
    "city": "Pathanamthitta",
    "latitude": 9.385932,
    "longitude": 76.71788,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kottayam",
    "address": "Kottayam Kottayam Indian Oil Ksk Dealers Thengana Madapally Village Changanacherry TKottayam",
    "city": "Kottayam",
    "latitude": 9.479009,
    "longitude": 76.574422,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kottayam",
    "address": "Kottayam Kottayam Indian Oil Ksk Dealers Thiruvancho Ettumanoor - Manarcaud By-Pass RoadThiruvanchoor Po Kottayam Tk Kott",
    "city": "Kottayam",
    "latitude": 9.620556,
    "longitude": 76.574612,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathananthitta Indianoil Dealer Puthuval Pathanapuram Po Pathanamthitta District",
    "city": "Pathanamthitta",
    "latitude": 9.0998,
    "longitude": 76.84,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Wayanad",
    "address": "Wayanad Wayanad Indianoil Dealers Cheeral P.O Cheeral Village Wayanad District - 673595",
    "city": "Wayanad",
    "latitude": 11.613799,
    "longitude": 76.312441,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Elankur P.O Manhappatta Malappuram Dist. - 676123",
    "city": "Malappuram",
    "latitude": 11.15391,
    "longitude": 76.15297,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Kanjippura Moodal Bypass Ambalaparambu MalappuramDt",
    "city": "Malappuram",
    "latitude": 10.8971,
    "longitude": 76.04429,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Kavanur P.O Areekode-Manjeri Road Malappuram Dist.-673639",
    "city": "Malappuram",
    "latitude": 11.18575,
    "longitude": 76.064537,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indianoil Dealers Kottamugal  Mannanthala P.O. Thiruvananthapuram.",
    "city": "Thiruvananthapuram",
    "latitude": 8.556619,
    "longitude": 76.943321,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kannur",
    "address": "Kannur Kannur Indianoil Dealers Muthalapetti Aravanchal (Po) Payyanur (Via) Kannur Dist.",
    "city": "Kannur",
    "latitude": 12.204619,
    "longitude": 75.275764,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Muthuvallur Post Kondotty Via Malappuram Dist. - 673638",
    "city": "Malappuram",
    "latitude": 11.172581,
    "longitude": 75.969055,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Naduvattom Karinkalathani Road Malappuram District",
    "city": "Malappuram",
    "latitude": 10.759932,
    "longitude": 75.972687,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kannur",
    "address": "Kannur Kannur Indianoil Dealers Narikode Kaively Kottila P.O Ezhome (Via) Kannur Dt.",
    "city": "Kannur",
    "latitude": 12.039593,
    "longitude": 75.298771,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indianoil Dealers Near Ksrtc Bus Depot Vithura Via Nedumangad-Tholicode",
    "city": "Thiruvananthapuram",
    "latitude": 8.67579,
    "longitude": 77.094641,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Olipuzha Via Melattur Edayattur Post Malappuram Dist. -679326",
    "city": "Malappuram",
    "latitude": 11.082856,
    "longitude": 76.260641,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kasaragod",
    "address": "Kasaragod Kasaragod Indianoil Dealers Open Prisons & Correctional Home Cheemeni Pettykund Po",
    "city": "Kasaragod",
    "latitude": 12.229856,
    "longitude": 75.267033,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Indianoil Dealers P.O Pullurampara Thiruvambadi Kozhikode District -673603",
    "city": "Kozhikode",
    "latitude": 11.414993,
    "longitude": 76.040813,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Paloor Pulamanthole Post Malappuram Dist. - 679323",
    "city": "Malappuram",
    "latitude": 10.917136,
    "longitude": 76.187838,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Rs No.229/6-7229/6-8Edayur Village MalappuramDt-676552",
    "city": "Malappuram",
    "latitude": 10.9026,
    "longitude": 76.090888,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Indianoil Dealers Theekunni Cherapuram P.O Kozhikode Dist. - 673507",
    "city": "Kozhikode",
    "latitude": 11.640303,
    "longitude": 75.70378,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Theyyalingal Po Tanur (Via) Malappuram Dist - 676320",
    "city": "Malappuram",
    "latitude": 10.991809,
    "longitude": 75.914709,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Indianoil Dealers Thurakkal Baputty Bypass Manjeri Malappuram Dt.-676121",
    "city": "Malappuram",
    "latitude": 11.113485,
    "longitude": 76.115495,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Indianoil Dealers Veerankavu  Near Amaripalam Kallikkadu Junction",
    "city": "Thiruvananthapuram",
    "latitude": 8.528996,
    "longitude": 77.122852,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kollam",
    "address": "Kollam Kollam Indianoil Delaers Bhajanamadommukku Via Parippally Kollam - 691 302.",
    "city": "Kollam",
    "latitude": 8.813123,
    "longitude": 76.727562,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Malappuram",
    "address": "Malappuram Malappuram Ioc Dealer Muttikadavu Jn Chungathara Post Cng Road Malappuram District",
    "city": "Malappuram",
    "latitude": 11.31997,
    "longitude": 76.269,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Kannur",
    "address": "Kannur Kannur Ioc Dealer Purakkalam Pazhayanirthau Jn Koothuparamba Kannur District",
    "city": "Kannur",
    "latitude": 11.834592,
    "longitude": 75.560682,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Thrissur",
    "address": "Thrissur Thrissur Kuthiran Petro Park Indian Oil Dealerpattikka To Vaniy Pananchery PostThrissur District",
    "city": "Thrissur",
    "latitude": 10.5643,
    "longitude": 76.367315,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Ms Fuels Indian Oil Dealeranjumoorthy Post Mangalam PalamVadakkanchery Pala",
    "city": "Palakkad",
    "latitude": 10.5959,
    "longitude": 76.465,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Shree Sharavana Fuels Karimpuzha Karimpuzha  Post Palakkad Dsitrict-679513",
    "city": "Palakkad",
    "latitude": 10.925458,
    "longitude": 76.419601,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "IOCL",
    "station_name": "IOCL EV Station, Palakkad",
    "address": "Palakkad Palakkad Star Fuels Indian Oil Dealerpandalampadam Panniyankara Post  PalakkadDistri",
    "city": "Palakkad",
    "latitude": 10.5834,
    "longitude": 76.4293,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Malappuram",
    "address": "Malappuram Malappuram 110Kv Sub Station Compound, Ponnani",
    "city": "Malappuram",
    "latitude": 10.77275,
    "longitude": 75.947306,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kannur",
    "address": "Kannur Kannur 33Kv Sub Station Compound,Kannur",
    "city": "Kannur",
    "latitude": 11.878556,
    "longitude": 75.36012,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Vytilla Appellate Authority Compound, Vytilla",
    "city": "Ernakulam",
    "latitude": 9.962919,
    "longitude": 76.319187,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Cgrf, Kalamassery",
    "city": "Ernakulam",
    "latitude": 10.053644,
    "longitude": 76.330874,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kollam",
    "address": "Kollam Kollam Electrical Division, Kundara",
    "city": "Kollam",
    "latitude": 8.957142,
    "longitude": 76.671092,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thirivananthapuram Electrical Section, Avanavanchery",
    "city": "Thiruvananthapuram",
    "latitude": 8.691106,
    "longitude": 76.84849,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kollam",
    "address": "Kollam Kollam Electrical Section, Kottiyam",
    "city": "Kollam",
    "latitude": 8.866767,
    "longitude": 76.668867,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Electrical Section, Ollur",
    "city": "Thrissur",
    "latitude": 10.466835,
    "longitude": 76.245464,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kannur",
    "address": "Kannur Kannur Electrical Section, Valapattanam",
    "city": "Kannur",
    "latitude": 11.918487,
    "longitude": 75.35132,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kollam",
    "address": "Alappuzha Mavelikkara Infront Of Section Office, Kollam - Theni Hwy, Charummoodu, Kerala 690505",
    "city": "Kollam",
    "latitude": 9.171139,
    "longitude": 76.608639,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Alappuzha",
    "address": "Alappuzha Mavelikkara Infront Of Section Office, Krishnapuram - Mavelikkara Rd, Old Mavelikkara,Mavelikara, Kerala 690101",
    "city": "Alappuzha",
    "latitude": 9.238778,
    "longitude": 76.538639,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Kowdiar (Near The Salvation Army Higher Secondary School Ground Gate)",
    "city": "Thiruvananthapuram",
    "latitude": 8.522222,
    "longitude": 76.959917,
    "max_power_kw": 3.3,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.3,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Plot Near To Electrical Section, Girinagar",
    "city": "Ernakulam",
    "latitude": 9.97418,
    "longitude": 76.29374,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Sub Station Compound, Angamaly",
    "city": "Ernakulam",
    "latitude": 10.171923,
    "longitude": 76.37327,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Sub Station Compound, Chalakudy",
    "city": "Thrissur",
    "latitude": 10.31123,
    "longitude": 76.34026,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Sub Station Compound, Gandhi Road, Kozhikode",
    "city": "Kozhikode",
    "latitude": 11.262815,
    "longitude": 75.768214,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Sub Station Compound, Irinjalakuda",
    "city": "Thrissur",
    "latitude": 10.331412,
    "longitude": 76.215325,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Sub Station Compound, Kaloor",
    "city": "Ernakulam",
    "latitude": 10.000358,
    "longitude": 76.299016,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Thrissur Sub Station Compound, Kodungallur",
    "city": "Thrissur",
    "latitude": 10.227542,
    "longitude": 76.21216,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Sub Station Compound, Kunnamkulam",
    "city": "Thrissur",
    "latitude": 10.632886,
    "longitude": 76.085748,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Sub Station Compound, Madakkathara",
    "city": "Thrissur",
    "latitude": 10.56062,
    "longitude": 76.27007,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Sub Station Compound, Pavangad(West Hill)",
    "city": "Kozhikode",
    "latitude": 11.31119,
    "longitude": 75.75877,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Sub Station Compound, Valappad",
    "city": "Thrissur",
    "latitude": 10.401237,
    "longitude": 76.118994,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Malappuram",
    "address": "Malappuram Malapuram Sub Station Compound,Malapuram",
    "city": "Malappuram",
    "latitude": 11.054167,
    "longitude": 76.091944,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Ernakulam",
    "address": "Ernakulam Ernakulam Sub Station Compound,North Paravoor",
    "city": "Ernakulam",
    "latitude": 10.145736,
    "longitude": 76.256842,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Sub Station Compound,Ramanattukara",
    "city": "Kozhikode",
    "latitude": 11.178496,
    "longitude": 75.863119,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Sub Station Compound,Thamarassery",
    "city": "Kozhikode",
    "latitude": 11.444,
    "longitude": 75.9558,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "KSEB",
    "station_name": "KSEB EV Station, Thrissur",
    "address": "Thrissur Trissur Vydyuthi Bhavanam, Trissur",
    "city": "Thrissur",
    "latitude": 10.52818,
    "longitude": 76.20517,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "OLA",
    "station_name": "OLA EV Station, Kozhikode",
    "address": "Kozhikode Calicut 11/224,Cherootty Road,Kozhikode",
    "city": "Kozhikode",
    "latitude": 11.25162,
    "longitude": 75.77659,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "OLA",
    "station_name": "OLA EV Station, Ernakulam",
    "address": "Ernakulam Cochin 35/22 Ernakulam,Alwaye Road,Ernakulum",
    "city": "Ernakulam",
    "latitude": 10.00377,
    "longitude": 76.30522,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "OLA",
    "station_name": "OLA EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Trivandrum Bharat Petroleum Dealerstrivandrum",
    "city": "Thiruvananthapuram",
    "latitude": 8.50046,
    "longitude": 76.95377,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "OLA",
    "station_name": "OLA EV Station, Malappuram",
    "address": "Malappuram Pokkotur Pilakkal, Pokkotur. P.O,Nh-213,Malappuram",
    "city": "Malappuram",
    "latitude": 11.09188,
    "longitude": 76.06574,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "OLA",
    "station_name": "OLA EV Station, Thrissur",
    "address": "Thrissur Thrissur Tc/629 Karunakaran Nambiar Rdthrissur",
    "city": "Thrissur",
    "latitude": 10.53517,
    "longitude": 76.21554,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram \u0004\u0175\u010f\u015d\u016c\u0102\u0003s\u015d\u016f\u0102\u0190\u0355\u0003:\u0102\u0150\u0102\u019a\u01c7\u0355\u0003\u0004\u0175\u010f\u015d\u016c\u0102\u0003s\u015d\u016f\u0102\u0190\u0355\u0003,\u017d\u01b5\u0190\u011e\u0003E\u017d\u0003\u0372\u03ed\u03f1\u036c\u03ed\u03f0\u03f4\u03f5\u0003\u0374\u0003\u03f5\u03ec\u0355\u0003<\u0102\u0176\u015d\u018c\u01b5\u011a\u015a\u0102\u0176Z\u017d\u0102\u011a\u0355\u0003:\u0102\u0150\u0102\u019a\u01c7\u0003d\u015a\u015d\u018c\u01b5\u01c0\u0102\u0176\u0102\u0176\u019a\u015a\u0102\u0189\u01b5\u018c\u0102\u0175\u0003\u0372\u0003\u03f2\u03f5\u03f1\u03ec\u03ed\u03f0",
    "city": "Thiruvananthapuram",
    "latitude": 8.496799,
    "longitude": 76.960731,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Amritara The Poovath Heritage, Fort Kochi, 1, 246, Dutch Cemetery Rd, FortKochi, Kochi, Kerala 682001",
    "city": "Kochi",
    "latitude": 9.964565,
    "longitude": 76.238661,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thrissur",
    "address": "Thrissur Kodungallur Centro Mall, Kodungallur, Centro Mall, Near Private Bus Stand, Chandapura -Kottapuram Bypass Rd, Kodungallur, Kerala 680664",
    "city": "Thrissur",
    "latitude": 10.232697,
    "longitude": 76.195794,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Coastline Garages, Kannur Road, Opposite West Hill Post Office, KannurRoad , West Hill P.O , Kozhikode-673005",
    "city": "Kozhikode",
    "latitude": 11.282287,
    "longitude": 75.770054,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Coastline Garages, Nh 47 Muttom, Opposite Metro Pillar No 155 , Nh 47,Muttom , Near Aluva , Cochin-683106",
    "city": "Kochi",
    "latitude": 10.077281,
    "longitude": 76.337656,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Gokulam Grand, Kovalam, Tc 63, 512 To 523, Beach Rd, Kovalam, Kerala695527",
    "city": "Thiruvananthapuram",
    "latitude": 8.390198,
    "longitude": 76.976356,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Idukki",
    "address": "Idukki Munnar Gokulam Park Munnar, Power House Road, South Chithirapuram, PowerHouse Road, Munnar - 685565",
    "city": "Idukki",
    "latitude": 10.029793,
    "longitude": 77.045859,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Malappuram",
    "address": "Malappuram Malappuram Gokulam Relax Park, Karuvambram, Industrial Estate Rd, Karuvambram,Manjeri, Kerala 676121",
    "city": "Malappuram",
    "latitude": 11.118874,
    "longitude": 76.118545,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thrissur",
    "address": "Thrissur Thrissur Hyson Motors, Punkunnam, Guruvayur Rd, Puzhakkal, Punkunnam, Thrissur,Kerala 680002",
    "city": "Thrissur",
    "latitude": 10.540817,
    "longitude": 76.189423,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thrissur",
    "address": "Thrissur Kizhakkummuri Iocl - Jro Pongam, Thrissur, Jubilee Retail Outlet Koratty South Post ThrissurDistrict-680308",
    "city": "Thrissur",
    "latitude": 10.245487,
    "longitude": 76.369589,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thrissur",
    "address": "Thrissur Thrissur Iocl - Jyothi Agencies, Aswani Hospital Jn, Indian Oil Dealer Aswani HospitalJn Thrissur Thrissur District-680008",
    "city": "Thrissur",
    "latitude": 10.539266,
    "longitude": 76.215215,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode /\u017d\u0110\u016f\u0003\u0372\u0003>\u0102\u016c\u0190\u015a\u0175\u015d\u0003^\u0102\u016f\u011e\u0190\u0003\u0398\u0003^\u011e\u018c\u01c0\u015d\u0110\u011e\u0190\u0355\u0003D\u0102\u0176\u016c\u0102\u01c0\u0355\u0003/\u0176\u011a\u015d\u0102\u0176\u0003K\u015d\u016f\u0003\u0018\u011e\u0102\u016f\u011e\u018c\u0355\u0003D\u015d\u0176\u015d\u0003\u0003\u0011\u01c7\u0189\u0102\u0190\u0190\u0003Z\u017d\u0102\u011a\u0355D\u0102\u0176\u016c\u0102\u01c0\u0355\u0003<\u017d\u01cc\u015a\u015d\u016c\u017d\u011a\u011e\u0003\u0372\u0003\u03f2\u03f3\u03ef\u03ec\u03ee\u03f5",
    "city": "Kozhikode",
    "latitude": 11.233592,
    "longitude": 75.803242,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kottayam",
    "address": "Kottayam Kottayam Iocl - Malayalam Fuels, Kodimatha, Kodimatha, Kottayam, Kerala 686004",
    "city": "Kottayam",
    "latitude": 9.573858,
    "longitude": 76.519282,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kannur",
    "address": "Kannur Kannur Iocl - Mk Petroleum, Thazhe Chovva, Indian Oil Dealer, Bypass Road, ThazheChovva, Kannur - 670018",
    "city": "Kannur",
    "latitude": 11.860265,
    "longitude": 75.414409,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Palakkad",
    "address": "Palakkad Palakkad Kvr Automotive Pvt Ltd, Koppam Junction, Sukumar Arcade, KoppamJunction, Calicut Bypass Road,Palakkad, 678001",
    "city": "Palakkad",
    "latitude": 10.782377,
    "longitude": 76.658305,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Malappuram",
    "address": "Malappuram Perinthal Manna Kvr Automotive Pvt Ltd, Perinthalmanna, Chola Tower,Opp Itc, Thirurkkad,Perinthalmanna, Malappuram- 679321",
    "city": "Malappuram",
    "latitude": 10.984542,
    "longitude": 76.188012,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kannur",
    "address": "Kannur Kannur Kvr Dream Vehicles, Nadal, Ground Floor, Kizhunna - Kadappuram Rd,Chirakku Thazhe, Nadal, Kerala 670007",
    "city": "Kannur",
    "latitude": 11.83301,
    "longitude": 75.42643,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kasaragod",
    "address": "Kasaragod Kasargod Kvr Dream Vehicles, Vidya Nagar, Panalam Nayamar Moola, AlampadyManya Road, Vidya Nagar, Po, Kasaragod, Kerala 671123",
    "city": "Kasaragod",
    "latitude": 12.513823,
    "longitude": 75.027132,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Ernakulam",
    "address": "Ernakulam Aluva Malayalam Vehicles, Aluva, Building No 18/615/1, 615/2 Sy No 176/2, 176/3,Aluva West, Near Pulichode Signal, Kerala 683101",
    "city": "Ernakulam",
    "latitude": 10.099967,
    "longitude": 76.347684,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Malayalam Vehicles, Vytila, Sharon Tower, No 52/3171, 3172, OppositeSalafi Masjid, Vyttila, Ernakulam, Kerala 682019",
    "city": "Kochi",
    "latitude": 9.964435,
    "longitude": 76.318496,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Wayanad",
    "address": "Wayanad Kalpetta Marina Motors Pvt Ltd, Kalpetta, Marina Motors India Pvt Ltd, KalpettaNorth Po, Kalpetta Wayanad, Kerala 673122",
    "city": "Wayanad",
    "latitude": 11.637432,
    "longitude": 76.094698,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Marina Motors, Pantheerankavu, Bye Pass Road, Pantheerankavu,Kozhikode-673019",
    "city": "Kozhikode",
    "latitude": 11.217,
    "longitude": 75.85801,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kottayam",
    "address": "Kottayam Kottayam Misty Mountain Teyla, Mundakayam, Mundakayam Glenrock Office,Mundakayam, Kottayam, 686512",
    "city": "Kottayam",
    "latitude": 9.544748,
    "longitude": 76.877561,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Idukki",
    "address": "Idukki Kuttikkanam Misty Mountain Teyla, Peermade, Hxjc+526, Peermade, Kuttikkanam, Kerala685531",
    "city": "Idukki",
    "latitude": 9.58028,
    "longitude": 76.970186,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Pathanamthitta",
    "address": "Pathanamthitta Pathanamthitta Mk Motors, Churulikkodu Pathanamthitta, Milan Plaza, Churulikkodu,Pathanamthitta, Kerala 689668",
    "city": "Pathanamthitta",
    "latitude": 9.274402,
    "longitude": 76.763741,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Malappuram",
    "address": "Malappuram Wandoor Moto Town Auto Hub,Ootty Road, Moochikkal Ootty Road, Naduvath -Vellambram Rd, Wandoor, Kerala 679328",
    "city": "Malappuram",
    "latitude": 11.223268,
    "longitude": 76.216961,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Idukki",
    "address": "Idukki Kumily Muthoot Leisure Cardamom County, Thekkady, Kumily Thekkady Rd,Thekkady, Kumily, Kerala 685509",
    "city": "Idukki",
    "latitude": 9.60359,
    "longitude": 77.168902,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Sree Gokulam Motors, Edapally, Skyline Gateway Apartments, Pathadipalam,Edappally, Ernakulam, Kerala 682033",
    "city": "Kochi",
    "latitude": 9.926113,
    "longitude": 76.317879,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Sree Gokulam Motors, Nettoor, No. 10, 256/C, Survey No 1562/1, Nh47, ByePass Road, Nettoor, Kochi-682040",
    "city": "Kochi",
    "latitude": 10.039145,
    "longitude": 76.315574,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kasaragod",
    "address": "Kasaragod Bekal Taj Bekal, Thekkekara, Kappil Beach, Thekkekara, Bekal, Kerala 671319",
    "city": "Kasaragod",
    "latitude": 12.423968,
    "longitude": 75.014405,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Taj Greencove Resort And Spa , Taj Greencove Resort And Spa,Kovalam.Trivandrum.Kerala-695527",
    "city": "Thiruvananthapuram",
    "latitude": 8.404036,
    "longitude": 76.974099,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Retreat",
    "station_name": "Retreat EV Station, Kottayam",
    "address": "Hotels And Resorts Ltd, Kumarakom,Kottayam 686001",
    "city": "Kottayam",
    "latitude": 9.626518,
    "longitude": 76.42836,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi d\u0102\u0169\u0003D\u0102\u016f\u0102\u010f\u0102\u018c\u0003Z\u011e\u0190\u017d\u018c\u019a\u0003\u0398\u0003^\u0189\u0102\u0355\u0003t\u015d\u016f\u016f\u015d\u0176\u0150\u011a\u017d\u0176\u0003/\u0190\u016f\u0102\u0176\u011a\u0355\u0003t\u015d\u016f\u016f\u015d\u0176\u0150\u011a\u017d\u0176\u0003/\u0190\u016f\u0102\u0176\u011a\u0355\u0003\u0012\u017d\u0110\u015a\u015d\u0176\u0355<\u011e\u018c\u0102\u016f\u0102\u0003\u0374\u0003\u03f2\u03f4\u03ee\u03ec\u03ec\u03f5",
    "city": "Kochi",
    "latitude": 9.968886,
    "longitude": 76.25825,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kochi",
    "address": "Ernakulam Kochi Tata Communication, Kakkanad, VSB, VSNL Road, Kakkanad, ThrikkakkaraPO, Kochi 682030",
    "city": "Kochi",
    "latitude": 10.013698,
    "longitude": 76.345567,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode The Gateway Hotel Pt Usha Rd, Vellayil, Kozhikode, Kerala 673032",
    "city": "Kozhikode",
    "latitude": 11.25899,
    "longitude": 75.773681,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode The Gateway Hotel, The Gateway Hotel Pt Usha Rd, Vellayil, Kozhikode,Kerala 673032",
    "city": "Kozhikode",
    "latitude": 11.258784,
    "longitude": 75.773934,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Thiruvananthapuram",
    "address": "Thiruvananthapuram Thiruvananthapuram Vivanta Thiruvananthapuram, Extra Police Rd, Extra Police Rd, Nandavanam,Palayam, Thiruvananthapuram, Kerala 695033",
    "city": "Thiruvananthapuram",
    "latitude": 8.504661,
    "longitude": 76.953295,
    "max_power_kw": 7.4,
    "connectors": [
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Tata",
    "station_name": "Tata EV Station, Alappuzha",
    "address": "Alappuzha Mararikulam Xandari Pearl Beach, Mararikulam, Beach Road, Arattukulam Jn,Mararikulam N, Po, S.L.Puram, Mararikulam, Kerala 688523",
    "city": "Alappuzha",
    "latitude": 9.606054,
    "longitude": 76.301828,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      },
      {
        "type": "Type 2 AC",
        "current_type": "AC",
        "power_kw": 7.4,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Ernakulam",
    "address": "Ernakulam Pookad \u0004\u0176\u0176\u0102\u0189\u017d\u017d\u018c\u0176\u0102\u0003\u0012\u0102\u0128\u0120\u0355\u0003\u03f2\u03f5&\u0150\u043d\u03f1\u03f2,\u0355\u0003<\u0102\u018c\u01b5\u016c\u01b5\u019a\u019a\u01c7\u0355\u0003<\u011e\u018c\u0102\u016f\u0102\u0003\u03f2\u03f4\u03ef\u03f1\u03f3\u03ee",
    "city": "Ernakulam",
    "latitude": 10.223044,
    "longitude": 76.375526,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Thrissur",
    "address": "Thrissur Changanassery Bypass Road, Near Akm School, Changanassery, Kerala 686101",
    "city": "Thrissur",
    "latitude": 9.455175,
    "longitude": 76.542559,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Ernakulam",
    "address": "Ernakulam Edappally Gokul Oottupura, Nh Bypass, Near Modern Lights, Padivattom, Edappally,Ernakulam, Kerala 682024",
    "city": "Ernakulam",
    "latitude": 10.011133,
    "longitude": 76.312371,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Kochi",
    "address": "Ernakulam Kunnackal Grand Mall, Panvel - Kochi - Kanyakumari Hwy, Toll Junction, Edappally,Kochi, Kerala 682024",
    "city": "Kochi",
    "latitude": 10.024373,
    "longitude": 76.308868,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Kozhikode",
    "address": "Kozhikode Kozhikode Hilite Mall, G1003, Nh 66, Kozhikode Bypass, Poovangal, Kozhikode, Kerala673014",
    "city": "Kozhikode",
    "latitude": 11.248474,
    "longitude": 75.833512,
    "max_power_kw": 50.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 50.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "Private",
    "station_name": "Private EV Station, Thrissur",
    "address": "Thrissur Guruvayur Hotel Devaragam,Outer Ring Road, Opp Railway Station, East Nada,Guruvayur, Kerala 680101",
    "city": "Thrissur",
    "latitude": 10.595513,
    "longitude": 76.044332,
    "max_power_kw": 25.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 25.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR KANNUR 1, 4/211, CLAY HOUSE, PAYANGADIROAD, PAPPINISSERI, KANNUR, KERALA, ,City=KANNUR, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.9428,
    "longitude": 75.35,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE ULLIYERI 1/51-AA, ULLIYERI, , City=ULLIYERI, District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.453703,
    "longitude": 75.77044,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR ULLIKKAL 11, KOKKAD ROAD, ULLIKKAL, , City=ULLIKKAL, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 12.037713,
    "longitude": 75.671075,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MANKOMPU 11/160 APPY-CHANGNACHERRY RD., AC ROAD, , City=MANKOMPU,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.435664,
    "longitude": 76.420894,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT 11/224, CHEROOTTY ROAD, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.251624,
    "longitude": 75.776585,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM CHANGANACHERY 111/481 STATE HIGHWAY 1, M.C.ROAD, , City=CHANGANACHERY,District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.453689,
    "longitude": 76.536427,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA CHENGANNUR 1192 M C ROAD, CHENGANNUR, , City=CHENGANNUR, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.320617,
    "longitude": 76.610156,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM MANJERI 135/A, 8086547581, , City=MANJERI, District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.124311,
    "longitude": 76.122337,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALGHAT 14-117, KALMANDAPAM, , City=PALGHAT, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.772733,
    "longitude": 76.672881,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta PATHANAMTHITTA 16 T.K.ROAD, TIRUVALLA KOZHENCERYY ROAD, , City=PATHANAMTHITTA,District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.383014,
    "longitude": 76.6387,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Idukki",
    "address": "IDUKKI IDUKKI 16/149 K.K.ROAD, KUMILY, , City=IDUKKI, District=IDUKKI, State=Kerala",
    "city": "Idukki",
    "latitude": 9.612847,
    "longitude": 77.156675,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD NEMMARA 2/355, NEMMARA, , City=NEMMARA, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.594176,
    "longitude": 76.599933,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD UPPALA 2/748, NH17, UPPALA, UPPALA, , City=UPPALA, District=KASARAGOD,State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.679376,
    "longitude": 74.905008,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam NORTH PARAVUR 21/268 KADAVATH ROAD, KARROTTUPUTHANPURA HOUSE, , City=NORTHPARAVUR, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.142408,
    "longitude": 76.228896,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kochi",
    "address": "Ernakulam KOCHI 27/3767, MG ROAD, , City=KOCHI, District=ERNAKULUM, State=Kerala",
    "city": "Kochi",
    "latitude": 9.948571,
    "longitude": 76.291442,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM KOTTAYAM 281, KODIMATHA, , City=KOTTAYAM, District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.575455,
    "longitude": 76.519822,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM KIDANGOOR 36914, KIDANGOOR VILLAGE, , City=KIDANGOOR, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.678256,
    "longitude": 76.601753,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta ENADIMANAGALAM 394/15, ENADIMANGALAM VILLAGE, , City=ENADIMANAGALAM,District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.117483,
    "longitude": 76.823219,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM PONKUNNAM 422/7 ,ELAMKULAM VILLAGE, SH 8, PALA - PONKUNNAM ROAD, ,City=PONKUNNAM, District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.585358,
    "longitude": 76.740854,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT 6/246 YMCA CROSS ROAD, BANK ROAD, OPPOSITE TO VETERNARYHOSPITAL, , City=CALICUT, District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.261116,
    "longitude": 75.780078,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam MUVATTUPUZHA 662 M.C.ROAD, MANNOOR, , City=MUVATTUPUZHA, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.043531,
    "longitude": 76.536204,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE NOCHAD 67/2, NOCHAD VILLAGE, KALAPATHUR TALUK, , City=NOCHAD,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.5,
    "longitude": 75.73,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM EDAPPAL 7/796, EDAPPAL, , City=EDAPPAL, District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 10.783251,
    "longitude": 76.008075,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE FERROKE 8/4 CHUNGAM, FEROKE P O, , City=FERROKE, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.179506,
    "longitude": 75.853474,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR THRISSUR 82/3-1,2 MINALOOR VILLAGE ATHANI, THALAPILY TALUK THRISSUR DIST, ,City=THRISSUR, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.62645,
    "longitude": 76.224614,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA ALAPPUZHA A C ROAD, EAST OF PAKKY JN, SANTHANAPURAM-P.O, , City=ALAPPUZHA,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.470263,
    "longitude": 76.349817,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA PATHIRAPALLY AGP.IX-177/A, NH 66, , City=PATHIRAPALLY, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.533642,
    "longitude": 76.327612,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Idukki",
    "address": "IDUKKI THODUPUZHA AMBALAM BYEPASS ROAD, #, , City=THODUPUZHA, District=IDUKKI,State=Kerala",
    "city": "Idukki",
    "latitude": 9.900148,
    "longitude": 76.712341,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR PAZHAYANNUR AMBALANADA, PAZHAYANNUR, , City=PAZHAYANNUR, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.685351,
    "longitude": 76.419442,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE MUKKOM AREACODE ROAD,, MUKKOM, , City=MUKKOM, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.316818,
    "longitude": 75.997409,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA AROOR AROOR P.O, AROOR, , City=AROOR, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.881665,
    "longitude": 76.302431,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam NEDUMBASSERY ATHANI- CIAL APPROACH ROAD, ATHANI- CIAL APPROACH ROAD, ,City=NEDUMBASSERY, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.152864,
    "longitude": 76.355932,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM AREACODE B.31/RE.SE.NO.343/710/11, PUTHALAM DESAM,, , City=AREACODE,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.230251,
    "longitude": 76.054498,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA KATTANAM BHARANIKAVU, MOONNAMKUTTY JN, KATTANAM, , City=KATTANAM,District=ALAPPUZHA, KERALA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.178161,
    "longitude": 76.543761,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR VELLANGALLOR BHARAT PETROLEUM DEALER, TRICHUR, , City=VELLANGALLOR,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.29425,
    "longitude": 76.217326,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kollam",
    "address": "KOLLAM SOORANAD BPCL DEALER, KANNAMAM, KUNNATHOOR TALUK, , City=SOORANAD,District=KOLLAM, State=Kerala",
    "city": "Kollam",
    "latitude": 9.111807,
    "longitude": 76.633824,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MAVELIKARA BPCL DEALER, THIRUVALLA-KAYAMKULAM, THATTARAMBALAM, ,City=MAVELIKARA, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.242897,
    "longitude": 76.519501,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MANNAR BUDHANOOR P.O., MANNAR-PULIYOR ROAD, #, , City=MANNAR,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.307743,
    "longitude": 76.560447,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE KUNNAMANGALAM C.DEVADASAN BROTHERS, BHARAT PETROLEUM DEALERS,, ,City=KARANTHUR P.O,CALICUT, District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.291159,
    "longitude": 75.862641,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM PONKUNNAM C.P.V.27, CHIRAKADAVU VILLAGE, , City=PONKUNNAM, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.563718,
    "longitude": 76.758426,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "MALAPPURAM PERINTHALMANNA CALICUT PALAKKAD ROAD, NH966, , City=PERINTHALMANNA,District=MALAPPURAM, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.976427,
    "longitude": 76.223899,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR PERUMBILAVU CALICUT ROAD, #, , City=PERUMBILAVU, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.712542,
    "longitude": 76.088063,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM PATHANAPURAM CALICUT ROAD, AREACODE. P.O, , City=PATHANAPURAM,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.252056,
    "longitude": 76.046181,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM THIRURANGADI CALICUT ROAD, THIRURANGADY P.O, , City=THIRURANGADI,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.046777,
    "longitude": 75.911156,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT CHELAVOOR, WAYANAD ROAD, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.29694,
    "longitude": 75.845596,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CHEMANCHERRY CHEMANCHERRY, CHEMANCHERRY, , City=CHEMANCHERRY,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.394,
    "longitude": 75.711,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam CHEMBARAKKY CHEMBARACKY,-ALUVA MUNNAR ROAD, SOUTH VAZHAKULAM, ,City=CHEMBARAKKY, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.085445,
    "longitude": 76.429095,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD KASARGOD CHENGALA VILLAGE, CHERKALA, , City=KASARGOD, District=KASARAGOD,State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.509548,
    "longitude": 75.050758,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD KASARGODE CHERUPUZHA ODAYANCHAL ROAD, CHERUPUZHA ODAYANCHAL ROAD, ,City=KASARGODE, District=KASARAGOD, State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.321756,
    "longitude": 75.358775,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR CHERPU CHEVOOR, 4872340310, , City=CHERPU, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.458612,
    "longitude": 76.208677,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD CHITHALI CHITHALI, NH-544, PALAKKAD-COCHIN, , City=CHITHALI, District=PALAKKAD,State=Kerala",
    "city": "Palakkad",
    "latitude": 10.691421,
    "longitude": 76.584637,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KUNNAMKULAM CHOWALLOORPADI,CHOONDAL-, GURUVAYOOR ROAD,POST KAN, ,City=KUNNAMKULAM, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.60255,
    "longitude": 76.064984,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERANAKULAM COLLECTORS SQUIRE, MARINE DRIVE, , City=ERANAKULAM,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.990406,
    "longitude": 76.27121,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM SASTHAMAN EDAPAZHANJI, EDAPAZHANJI, , City=TRIVANDRUM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.503796,
    "longitude": 76.968957,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM EDAVA EDAVA, EDAVA, , City=EDAVA, District=THIRUVANANTHAPURAM,State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.754068,
    "longitude": 76.708446,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR ERUMAPETTY ERUMAPETTY, #, , City=ERUMAPETTY, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.677,
    "longitude": 76.158,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM ERUMELI ERUMELI POST,, ERUMELI, , City=ERUMELI, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.476654,
    "longitude": 76.844636,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM EDAKKARA GUDALUR ROAD, EDAKKARA P.O, , City=EDAKKARA, District=MALAPPURAM,State=Kerala",
    "city": "Malappuram",
    "latitude": 11.352319,
    "longitude": 76.297734,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR THRISSUR GURUVAYOOR ROAD, MUNDOOR SH69, , City=THRISSUR, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.588536,
    "longitude": 76.157366,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kollam",
    "address": "KOLLAM KUNDARA HOSPITAL JUNCTION, KUNDARA, , City=KUNDARA, District=KOLLAM,State=Kerala",
    "city": "Kollam",
    "latitude": 8.961653,
    "longitude": 76.683434,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR IRITTY IRITTY TOWN, TC ROAD, , City=IRITTY, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.980869,
    "longitude": 75.67252,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM PERUMPADAPPU IV 275 A, PERUMPADAPPU P O, , City=PERUMPADAPPU,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 10.702668,
    "longitude": 75.982346,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM KOTTAYAM IV/223, MUNDAKAYAM, , City=KOTTAYAM, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.537833,
    "longitude": 76.884456,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR THRISSUR IX/373, OPP TO SAKTHAN STAND, , City=THRISSUR, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.514493,
    "longitude": 76.216059,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta KADAMBANAD KADAMBANAD P.O,, SASTHAMKOTA - ADOOR ROAD, , City=KADAMBANAD,District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.106985,
    "longitude": 76.692819,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR KADANNAPALLI KADANAPALLI VILLAGE, RHS ON PARIYARAM TO PILATHRA, ,City=KADANNAPALLI, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 12.071063,
    "longitude": 75.28828,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA KAICHUNDI KAICHOONDIMUKKU, THATHAMPALLY .P.O., , City=KAICHUNDI,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.514764,
    "longitude": 76.33838,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM KARUVARAKUNDU KALIKAVU ROAD, KARUVARAKUNDU, , City=KARUVARAKUNDU,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.131467,
    "longitude": 76.344535,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD WAYANAD KALPETTA-MANANTHAVADI ROAD, KAVUMANNAM, , City=WAYANAD,District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.640289,
    "longitude": 76.006489,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM KANAKKARY KANAKKARI PO, EKM-ETTUMANOOR ROAD, , City=KANAKKARY,District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.706957,
    "longitude": 76.539035,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR PAYYANUR KANDOTH PO, ON NH 17, KANDOTH,, , City=PAYYANUR, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 12.120788,
    "longitude": 75.216918,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD KALLADIKODE KANJIKULAM PO, NH-213, KALLADIKODE, , City=KALLADIKODE,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.877632,
    "longitude": 76.548755,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR CHALODE KANNUR ROAD, CHALODE, , City=CHALODE, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.926253,
    "longitude": 75.5102,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT KANNUR ROAD, KANNUR ROAD, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.261708,
    "longitude": 75.777195,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR KANNUR KANNUR TELLICHERRY ROAD, KANNUR, , City=KANNUR, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 11.872795,
    "longitude": 75.391396,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM KARAKKUNU KARAKUNNU JUNCTION, MANJERI, , City=KARAKKUNU,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.140914,
    "longitude": 76.120158,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM KALLARA KARETTE PALODE ROAD, OPP. GOLDA HOTEL, KALLARA., , City=KALLARA,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.750551,
    "longitude": 76.935168,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "City=NEYYATTINKARA,",
    "station_name": "City=NEYYATTINKARA, EV Station, Thiruvananthapuram",
    "address": "City=NEYYATTINKARA, District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.502738,
    "longitude": 77.078865,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CHATHAMANGALAM KATTANGAL, CHATHAMANGALAM, , City=KATTANGAL, District=KOZHIKODE,KERALA, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.318104,
    "longitude": 75.943574,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM KILLIPALAM KILLIPALAM, KILLIPALAM, , City=TRIVANDRUM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.481334,
    "longitude": 76.962064,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR THRISSUR KOKKALAI, KOKKALAI, , City=THRISSUR, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.512062,
    "longitude": 76.211066,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM KOLIYACODE KOLIYACODE, KOLIYACODE, , City=KOLIYACODE,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.652395,
    "longitude": 76.907463,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KOMBIDINJAMAKKAL KOMBODINJAMAKKAL, THAZHEKKAD POST, , City=KOMBIDINJAMAKKAL,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.309659,
    "longitude": 76.277605,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ANGAMALI KOTHAKULANGARA, NH 47, , City=ANGAMALI, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.201027,
    "longitude": 76.383733,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "District=THIRUVANANTHAPURAM,",
    "station_name": "District=THIRUVANANTHAPURAM, EV Station, Thiruvananthapuram",
    "address": "District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.551321,
    "longitude": 76.942258,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kollam",
    "address": "KOLLAM MYLOM KOTTARAKARA-KOTTAYAM ROAD, MYLOM, KOTTARAKARA, , City=MYLOM,District=KOLLAM, State=Kerala",
    "city": "Kollam",
    "latitude": 9.032882,
    "longitude": 76.778312,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE PERAMBRA KOZHIKODE ROAD, #, , City=PERAMBRA, District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.554227,
    "longitude": 75.763536,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MAVELIKARA KRISHNAPURAM, MAVELIKKARA, , City=MAVELIKARA, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.194251,
    "longitude": 76.532433,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MANKAMKUZY KUNNAM P.O, MAVELIKKARA, , City=MANKAMKUZY, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.253535,
    "longitude": 76.566941,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD KUNNUKAD, THENKURUSSI, , City=PALAKKAD, District=PALAKKAD,State=Kerala",
    "city": "Palakkad",
    "latitude": 10.6454,
    "longitude": 76.5458,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam COCHIN KUSUMAGIRI PO, KAKKANAD, , City=COCHIN, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.01543,
    "longitude": 76.355359,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam KOTHAMANGALAM KUTHUKUZHI P O, AYYANKAVU, N H 49, , City=KOTHAMANGALAM,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.058673,
    "longitude": 76.646697,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KUTTANALL KUTTANALLOOR ROAD, THRISSUR PUTHOOR ROAD, , City=KUTTANALL,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.501347,
    "longitude": 76.249929,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "City=THONNAKKAL,",
    "station_name": "City=THONNAKKAL, EV Station, Thiruvananthapuram",
    "address": "City=THONNAKKAL, District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.641259,
    "longitude": 76.843518,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta PANTHALAM M C ROAD, PANTHALAM, #, , City=PANTHALAM, District=PATHNAMTHITA,State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.197152,
    "longitude": 76.698244,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MULAKUZHA M C ROAD, SY 252 9, , City=MULAKUZHA, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.27988,
    "longitude": 76.655106,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM VENJARAMUDU M.C. ROAD, NELLANAD VILLAGE, , City=VENJARAMUDU,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.712059,
    "longitude": 76.900919,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM VENJARAMOOD M.C.ROAD, NELLANAD VILLAGE, #, , City=VENJARAMOODE,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.664562,
    "longitude": 76.911365,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM KADAMPUZHA M.P 12/486, KADAMPUZHA, , City=KADAMPUZHA, District=MALAPPURAM,State=Kerala",
    "city": "Malappuram",
    "latitude": 10.939267,
    "longitude": 76.038841,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta KONNI MAIN ROAD, KONNI, , City=KONNI, District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.231265,
    "longitude": 76.848083,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR MALAPATTAM MALAPPATTAM, P.O. MALAPPATTAM, , City=MALAPATTAM,District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 12.017302,
    "longitude": 75.491247,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM TRIVANDRUM MALAYANKEEZHIL PO, MALAYANKEEZHIL PO, , City=TRIVANDRUM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.500854,
    "longitude": 77.028686,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA NOORANAD MAMOOD, NOORANAD, , City=NOORANAD, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.168032,
    "longitude": 76.657002,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD MANANTHAWADY MANANTHAVADY, MYSORE ROAD, CHETTAPALLAM, ,City=MANANTHAWADY, District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.8014,
    "longitude": 76.0044,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM MANARCAD MANARCAD POST, K. K. ROAD, , City=MANARCAD, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.589991,
    "longitude": 76.578871,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM PUTHUPALLY MANARCADU - PUTHUPALLY ROAD, PUTHUPALLY, , City=PUTHUPALLY,District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.567277,
    "longitude": 76.57825,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM NAVAIKULAM MANGATTUMOOLA, NH-47, NAVAIKULAM, , City=NAVAIKULAM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.782986,
    "longitude": 76.780061,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR MANGATUPARAMBA MANGATTUPARAMBA, KANNUR UNIVERSITY CAMPUS P.O, ,City=MANGATUPARAMBA, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.984258,
    "longitude": 75.366208,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM KAVANNUR MANJERI-ARECODE ROAD, KAVANNUR- P O, , City=KAVANNUR,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.188708,
    "longitude": 76.064598,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam KOTHAMANGALAM MATHIRAPPILLY, NEAR SERVICE CO-OPERATIVE BANK, ,City=KOTHAMANGALAM, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.042226,
    "longitude": 76.615422,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT MAVOOR ROAD, POOVATTUPARAMBU P O, , City=CALICUT,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.264118,
    "longitude": 75.889257,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD MAUNGAL MAVUNGAL, KANHANGAD, , City=MAUNGAL, District=KASARAGOD,State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.323064,
    "longitude": 75.086129,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA CHENGANNOR MC ROAD, #, , City=CHENGANNOR, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.32284,
    "longitude": 76.61006,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam MEEMPARA MEENPARA PO, PUTHENKURISH, , City=MEEMPARA, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.956912,
    "longitude": 76.446938,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA CHARUMOOD MEKKUMMURI,, THAMARAKULAM PO,, , City=CHARUMOOD,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.144564,
    "longitude": 76.623942,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT MINI BYE-PASS, THIRUVANNUR PO, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.224828,
    "longitude": 75.801544,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MAVELIKARA MMC.333, MMC.333, , City=MAVELIKARA, District=ALAPPUZHA,State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.250338,
    "longitude": 76.539503,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM MAMPAD MP 12/187A, MANJERI-NILAMBUR ROAD, , City=MAMPAD,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.241689,
    "longitude": 76.17711,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERNAKULAM MULANTHURUTHY VILLAGE, ERNAKULAM, , City=ERNAKULAM,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.888837,
    "longitude": 76.419856,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "City=ERNAKULAM,",
    "station_name": "City=ERNAKULAM, EV Station, Ernakulam",
    "address": "City=ERNAKULAM, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.994757,
    "longitude": 76.26306,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD MUTTIKALUNGARA, ON NH-966, MUNDUR VILLAGE, , City=PALAKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.822333,
    "longitude": 76.595701,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam MUVATTUPUZHA MUVATUPUZHA-THODUPUZHA, VAZHAKULAM P.O, , City=MUVATTUPUZHA,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.947454,
    "longitude": 76.632452,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD SULTAN BATHERY MYSORE ROAD, SULTAN BATHERY, , City=SULTAN BATHERY,District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.66784,
    "longitude": 76.26655,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "District=THIRUVANANTHAPURAM,",
    "station_name": "District=THIRUVANANTHAPURAM, EV Station, Thiruvananthapuram",
    "address": "District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.370339,
    "longitude": 77.131215,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR TRIPRAYAR N.H.17, NATTIKA, , City=TRIPRAYAR, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.414526,
    "longitude": 76.107209,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "City=EDAVANNA,",
    "station_name": "City=EDAVANNA, EV Station, Malappuram",
    "address": "City=EDAVANNA, District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.213925,
    "longitude": 76.139395,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD KASARGOD NEAR CPCRI, KUDLU, , City=KASARGOD, District=KASARAGOD, State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.530619,
    "longitude": 74.968943,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA NEDUMUDI NEAR KALLAMPALLY TEMPLE, CHAMPAKULAM P O, , City=NEDUMUDI,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.24142,
    "longitude": 76.2436,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam MUVATTUPUZHA NEAR KSRTC BUS STAND, M C ROAD, , City=MUVATTUPUZHA,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.981967,
    "longitude": 76.579569,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD KANHANGAD NEAR LATEST DAILY, KOVVALPALLY, , City=KANHANGAD,District=KASARAGOD, State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.300773,
    "longitude": 75.099806,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR TALIPARMABA NEAR MADRASA, NEAR MADRASA, , City=TALIPARMABA, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 12.04209,
    "longitude": 75.36213,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM MALAPPURAM NEAR THIRUNAVAYA KADAVU, THIRUNAVAYA P.O, , City=MALAPPURAM,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 10.863453,
    "longitude": 75.978808,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA ALAPPUZHA NEERATUPURAM, THALAVADY VILLAGE, , City=ALAPPUZHA,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.369112,
    "longitude": 76.511056,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR NADUVILA NEW NADUVIL, NADUVIL MANDALAM, OPP NADUVIL CHURCH, ,City=NADUVILA, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 12.12479,
    "longitude": 75.47948,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR MOONNUPEEDIKA NH 17, MOONUPEEDIKA, KAIPAMANGALAM PO, , City=MOONNUPEEDIKA,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.328134,
    "longitude": 76.141838,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD CHERUVATHUR NH 17, NH 17, , City=CHERUVATHUR, District=KASARAGOD, State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.213588,
    "longitude": 75.162792,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR THALIKKULAM NH 17, THALIKKULAM, , City=THALIKKULAM, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.448969,
    "longitude": 76.090214,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM PAMPADY NH 183, K K ROAD, , City=PAMPADY, District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.570726,
    "longitude": 76.629772,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD KALPETTA NH 212, PO KALPETTA, , City=KALPETTA, District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.595661,
    "longitude": 76.077657,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD ALATHUR NH 47, ERATTAKULAM, ALATHUR, , City=ALATHUR, District=PALAKKAD,State=Kerala",
    "city": "Palakkad",
    "latitude": 10.634767,
    "longitude": 76.516977,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "(VADAKKANCHERY),",
    "station_name": "(VADAKKANCHERY), EV Station, Palakkad",
    "address": "(VADAKKANCHERY), District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.590969,
    "longitude": 76.47046,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE KOZHIKODE NH-212, ADIVARAM, , City=KOZHIKODE, District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.357322,
    "longitude": 76.005233,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA KAYAMKULAM NH-47, KUNNATHALUMOODU, KAYAMKULAM, , City=KAYAMKULAM,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.157159,
    "longitude": 76.509389,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA NANGIARKULANGARA NH-47, NANGIARKULANGARA, NANGIARKULANGARA, ,City=NANGIARKULANGARA, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.2536,
    "longitude": 76.465892,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM TRIVANDRUM NH-47, NH 66, , City=MAMOM, District=THIRUVANANTHAPURAM,State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.678479,
    "longitude": 76.825208,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PUTHUSERRY,PALAKKAD NH-47, PUTHUSSERY P.O., KANJIKODE, , City=PUTHUSERRY, PALAKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.775965,
    "longitude": 76.706325,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": ",",
    "station_name": ", EV Station, Thiruvananthapuram",
    "address": ", City=TRIVANDRUM, District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.74975,
    "longitude": 76.797923,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR CHALAKKUDY NORTH CHALAKUDY, CHALAKUDY, , City=CHALAKKUDY, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.31647,
    "longitude": 76.329642,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD MEENANGADI NR. PBM HOSPITAL, NH766, , City=MEENANGADI, District=WAYANAD,State=Kerala",
    "city": "Wayanad",
    "latitude": 11.655998,
    "longitude": 76.158993,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD ODYANCHAL ODAYANCHAL, ODAYANCHAL, , City=ODYANCHAL, District=KASARAGOD,State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.393397,
    "longitude": 75.191792,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD OPP KANIKKAMATHA SCHOOL, PUDOOR ROAD, , City=PALAKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.770782,
    "longitude": 76.632514,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD OPP NILGIRI PUBLIC SCOOL, SH 52, ELAPPULLYPARA,PALAKKAD-POLLACHIRD, , City=PALAKKAD, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.758048,
    "longitude": 76.763681,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR TALAPILLY OPP. UNITY HOSPITAL, KANIPAYOOR PO,  KUNNAMKULAM, , City=TALAPILLY,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.635379,
    "longitude": 76.08114,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD PALAKKAD TOWN, BOC ROAD PALAKKAD, , City=PALAKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.7744,
    "longitude": 76.6563,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam PALLIKKARA PALLIKKARAN JN, KUMARAPURAN P O, PALLIKKARA, , City=PALLIKKARA,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.031414,
    "longitude": 76.336297,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR KANNUR PALLIKULAM, PALLIKULAM, , City=KANNUR, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.908189,
    "longitude": 75.367448,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kollam",
    "address": "KOLLAM MADATHARA PALODE MADATHARA ROAD, MADATHARA, , City=MADATHARA,District=KOLLAM, State=Kerala",
    "city": "Kollam",
    "latitude": 8.815003,
    "longitude": 77.009347,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD MANANTHAVADY PANAMARAM VILLAGE, KALPETTA TO MANATHAVADY ROAD, ,City=MANANTHAVADY, District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.7381,
    "longitude": 76.074,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta ADOOR PANDALAM THEKKEKARA VILLAGE, ANANDAPALLY - KAIPATOOR ROAD, ,City=ADOOR, District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.198407,
    "longitude": 76.74481,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE KOZHIKODE PARORATH VILLAGE, THAMARASSERY P.O, , City=KOZHIKODE,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.407277,
    "longitude": 75.932085,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta PATHANAMTHITTA PATHANAMTHITTA RING ROAD, #, , City=PATHANAMTHITTA,District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.259069,
    "longitude": 76.784721,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR TRISSUR PATTIKAD, NH 544 PANANCHERRY, , City=TRISSUR, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.559256,
    "longitude": 76.343479,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERNAKULAM PATTIMATTOM, ERNAKULAM, , City=ERNAKULAM, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.029611,
    "longitude": 76.442088,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM ANAMANGAD PERINTHALMANNA ROAD, ANAMANGAD .P .O, , City=ANAMANGAD,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 10.943912,
    "longitude": 76.254651,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM TIRURKAD PERINTHALMANNA ROAD,, TIRURKAD .P.O, , City=TIRURKAD,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 10.984261,
    "longitude": 76.188069,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam PERUMBAVOOR PMC.XVII.938 ALWAYE-MUNNAR ROAD, #, , City=PERUMBAVOOR,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.1149,
    "longitude": 76.473665,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR EACHUR PO EACHUR, EACHUR, , City=EACHUR, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.901724,
    "longitude": 75.443495,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "City=POTHENCODE,",
    "station_name": "City=POTHENCODE, EV Station, Thiruvananthapuram",
    "address": "City=POTHENCODE, District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.620915,
    "longitude": 76.892245,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CHEVAYUR POTTAMMAL ROAD, PALAZHI TOWN, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.250373,
    "longitude": 75.841325,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "District=THIRUVANANTHAPURAM,",
    "station_name": "District=THIRUVANANTHAPURAM, EV Station, Thiruvananthapuram",
    "address": "District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.540124,
    "longitude": 77.01811,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA MAVELIKARA PUNNAMOOD P.O., MAVELIKKARA, , City=MAVELIKARA,District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.231589,
    "longitude": 76.537405,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE PURAMERY PURAMERY VILLAGE, KOZHIKODE DISTRICT, , City=PURAMERY,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.669642,
    "longitude": 75.61597,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD MANNARKKAD RO AT THACHAMPARA, RO AT THACHAMPARA, , City=MANNARKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.9576,
    "longitude": 76.5055,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": ",",
    "station_name": ", EV Station, Palakkad",
    "address": ", City=MELACODE VILLAGE, NEMMARA, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.592556,
    "longitude": 76.563035,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM PALA SH 08 , PALA-THODUPUZHA ROAD, KIZHATHADIYOOR P O, , City=PALA,District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.78383,
    "longitude": 76.722108,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta MALLAPPALLY SH 9, KOZHENCERY ROAD, , City=MALLAPPALLY, District=PATHNAMTHITA,State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.446972,
    "longitude": 76.65396,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM NILAMBUR SH28, NILAMBUR, , City=NILAMBUR, District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.26918,
    "longitude": 76.215483,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM AYANIKODE SH73, WANDOOR-PANDIKKAD ROAD, , City=AYANIKODE,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.14969,
    "longitude": 76.233732,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KOLAZHY SHORNOOR ROAD,, #, , City=KOLAZHY, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.579939,
    "longitude": 76.217493,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kollam",
    "address": "KOLLAM SAKTHIKULANGARA SP.776, NH66, , City=SAKTHIKULANGARA, District=KOLLAM, State=Kerala",
    "city": "Kollam",
    "latitude": 8.929987,
    "longitude": 76.548987,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR IRIKKUR SREEKANDAPURAM- IRITTY ROAD, IRIKKUR, , City=IRIKKUR,District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.991272,
    "longitude": 75.548639,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kasaragod",
    "address": "KASARAGOD KASARGOD STATION ROAD, STATION ROAD, , City=KASARGOD, District=KASARAGOD,State=Kerala",
    "city": "Kasaragod",
    "latitude": 12.515299,
    "longitude": 75.007863,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM TEEKOY SURVEY NO 109/1, ERATTUPETA - WAGAMON ROAD, , City=TEEKOY,District=KOTTAYAM, State=Kerala",
    "city": "Kottayam",
    "latitude": 9.699233,
    "longitude": 76.816097,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD SURVEY NO 151/15, 150/16, PALAKKAD-PONNANI ROAD, MANKARA, ,City=PALAKKAD, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.7918,
    "longitude": 76.4997,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERNAKULAM SURVEY NO 185/28,THIRUVAMKULAM, VILLAGE,KANAYANNUR TALUK, ,City=ERNAKULAM, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.967678,
    "longitude": 76.356719,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "City=UZHAMALAKKAL,",
    "station_name": "City=UZHAMALAKKAL, EV Station, Thiruvananthapuram",
    "address": "City=UZHAMALAKKAL, District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.595946,
    "longitude": 77.031148,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KODUNGALLUR SY NO 119/1 METHALA VILLAGE, KODUNGALLUR BYE PASS ON NH 17, ,City=KODUNGALLUR, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.208812,
    "longitude": 76.197026,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR ASHTAMICHARA SY NO 425 VADAMA VILLAGE, ASHTAMICHARA THRISSUR 680732, ,City=ASHTAMICHARA, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.256072,
    "longitude": 76.27011,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "680302,",
    "station_name": "680302, EV Station, Thrissur",
    "address": "680302, , City=AMBALLUR, District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.430925,
    "longitude": 76.281293,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "ARAKKAPADY,",
    "station_name": "ARAKKAPADY, EV Charging Station",
    "address": "ARAKKAPADY, , City=PONJASSERY, District=ERNAKULUM, State=Kerala",
    "city": "Kerala",
    "latitude": 10.091208,
    "longitude": 76.443733,
    "max_power_kw": null,
    "connectors": [
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      },
      {
        "type": "EV Socket",
        "current_type": "AC",
        "power_kw": null,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Pathanamthitta",
    "address": "Pathanamthitta MALLAPUZHASSERY SY NO171/13 THEKKEMALA JN, KOZHENCHERRY TK ARANMULA PO, ,City=MALLAPUZHASSERY, District=PATHNAMTHITA, State=Kerala",
    "city": "Pathanamthitta",
    "latitude": 9.327406,
    "longitude": 76.698872,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE PERUMANNA SY. NO. 57/15, PATHEERAMKAVU-PERUMANNA ROAD, , City=PERUMANNA,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.2451,
    "longitude": 75.8849,
    "max_power_kw": 7.0,
    "connectors": [
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      },
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "LEV DC (IS-17017-2-7)",
        "current_type": "DC",
        "power_kw": 7.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Idukki",
    "address": "IDUKKI KARINKUNNAM SY.NO.64/4, SY.NO.64/4, , City=KARINKUNNAM, District=IDUKKI,State=Kerala",
    "city": "Idukki",
    "latitude": 9.854072,
    "longitude": 76.70479,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR KUTHUPARAMBA T C ROAD, KUTHUPARAMBA, , City=KUTHUPARAMBA, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 11.83554,
    "longitude": 75.568512,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM PARAPPANAGADI TANUR ROAD,, PARAPPANANGADY .P.O., , City=PARAPPANAGADI,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.050165,
    "longitude": 75.857449,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM THALAPPARA THALAPPARA, NH-17,THALAPPARA, , City=THALAPPARA,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.077494,
    "longitude": 75.903286,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam KALADY THANNIPUZHA, M C ROAD, OKKAL PO, , City=KALADY, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.158724,
    "longitude": 76.443737,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD THATHAMANGALAM THATHAMANGLAM TOWN, THATHAMANGLAM IN SH27, ,City=THATHAMANGALAM, District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.676741,
    "longitude": 76.70479,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM THALAYOLAPARAMBU THENETH HOUSE, #, , City=THALAYOLAPARAMBU, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.786556,
    "longitude": 76.453575,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE PAYYOLI THIKKODI VILLAGE, PAYYOLI, , City=PAYYOLI, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.494047,
    "longitude": 75.614,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM THOLICODE THOLICODE, THOLICODE, , City=THOLICODE,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.646099,
    "longitude": 77.058841,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM MANGALAPURAM THONAKKAL, NH-47, #, , City=TRIVANDRUM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.629989,
    "longitude": 76.847605,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Wayanad",
    "address": "WAYANAD SULTHAN BATHERY THOTTAPPAN KULAM, MYSORE ROAD, , City=SULTHAN BATHERY,District=WAYANAD, State=Kerala",
    "city": "Wayanad",
    "latitude": 11.659002,
    "longitude": 76.245955,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Alappuzha",
    "address": "ALAPPUZHA KARTHIKAPALLY THRIKUNNAPUZHA-KARTHIKAPALLY ROAD, MAHADEVIKADU P.O., ,City=KARTHIKAPALLY, District=ALAPPUZHA, State=Kerala",
    "city": "Alappuzha",
    "latitude": 9.258033,
    "longitude": 76.426296,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM TANUR TIRUR ROAD, K PURAM PO, , City=TANUR, District=MALAPPURAM,State=Kerala",
    "city": "Malappuram",
    "latitude": 10.967504,
    "longitude": 75.884974,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM KAKKAD TP/08/036, NH 17, CALICUT ROAD, , City=KAKKAD, District=MALAPPURAM,State=Kerala",
    "city": "Malappuram",
    "latitude": 11.038542,
    "longitude": 75.937751,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR TALIPARMABA TRICHAMBARAM, NH-17, , City=TALIPARMABA, District=KANNUR,State=Kerala",
    "city": "Kannur",
    "latitude": 12.028212,
    "longitude": 75.365395,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD SHORANUR TRICHUR-SHORNUR ROAD, KOLAPULLY, , City=SHORANUR,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.779444,
    "longitude": 76.278968,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam TRIPUNITHURA TRIPUNITHURA, VAIKOM ROAD, , City=TRIPUNITHURA,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.88645,
    "longitude": 76.374289,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM PARASSALA TRIVANDRUM - NAGERCOIL ROAD, TRIVANDRUM, , City=PARASSALA,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.342489,
    "longitude": 77.15408,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kannur",
    "address": "KANNUR URUVACHAL URUVACHAL, MATTANUR PO, URUVACHAL KOTHUPARAMBHA ROAD, ,City=URUVACHAL, District=KANNUR, State=Kerala",
    "city": "Kannur",
    "latitude": 11.898197,
    "longitude": 75.582763,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD KANNADI VADAKKUMURI KANNADI, VILLAGE KANNADI 2, , City=KANNADI,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.73823,
    "longitude": 76.6333,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERNAKULAM VAIKOM ROAD,, UDAYAMPEROOR,, , City=ERNAKULAM,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.882268,
    "longitude": 76.375279,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD KOZHINJAMPARA VANAMMADA, VANAMADA, CHITUR MANDAL, , City=KOZHINJAMPARA,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.6942,
    "longitude": 76.8548,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR VANIAMPARA VAZHUKKUMPARA, LHS ON NH 47, , City=VANIAMPARA, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.599846,
    "longitude": 76.328994,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PALAKKAD VELANTHAVALAM VILLAGE, VELANTHAVALAM VILLAGE, , City=PALAKKAD,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.814581,
    "longitude": 76.831733,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thiruvananthapuram",
    "address": "THIRUVANANTHAPURAM TRIVANDRUM VELLAYAMBALAM, ALTHARA, , City=TRIVANDRUM,District=THIRUVANANTHAPURAM, State=Kerala",
    "city": "Thiruvananthapuram",
    "latitude": 8.50737,
    "longitude": 76.962188,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam KALADY VENGOOR, M.C. ROAD, KALADY, PIRAROOR-P.O., , City=KALADY,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.179755,
    "longitude": 76.415398,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      },
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam MARADU VI/419 A NH 49, KUNDANNOOR, , City=MARADU, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.937527,
    "longitude": 76.321289,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam THIRUVANKULAM VII, 412.A, , City=THIRUVANKULAM, District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 9.944947,
    "longitude": 76.372132,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR KODUNGALLOR VII/ 349 THRISSUR ROAD, #, , City=KODUNGALLOR, District=THRISSUR,State=Kerala",
    "city": "Thrissur",
    "latitude": 10.227496,
    "longitude": 76.200017,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ERNAKULAM VILLAGE KOTTUVALLY, PANCHAYATH KOTTUVALLY, , City=ERNAKULAM,District=ERNAKULUM, State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.120174,
    "longitude": 76.25565,
    "max_power_kw": 120.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 120.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Malappuram",
    "address": "MALAPPURAM MALAPPURAM W.NO-19/177, PERINTHALMANNA ROAD, UP HILL, , City=MALAPPURAM,District=MALAPPURAM, State=Kerala",
    "city": "Malappuram",
    "latitude": 11.04083,
    "longitude": 76.085858,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Palakkad",
    "address": "PALAKKAD PATTAMBI WARD.3/1091, PERINTHELMANNA ROAD, , City=PATTAMBI,District=PALAKKAD, State=Kerala",
    "city": "Palakkad",
    "latitude": 10.807691,
    "longitude": 76.187463,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE CALICUT WESTHILL, KANNUR ROAD, , City=CALICUT, District=KOZHIKODE,State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.284804,
    "longitude": 75.768671,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kozhikode",
    "address": "KOZHIKODE ELEVENTH MILE WYNAD ROAD, KUNNAMANGALAM .P.O., , City=ELEVENTH MILE,District=KOZHIKODE, State=Kerala",
    "city": "Kozhikode",
    "latitude": 11.32815,
    "longitude": 75.886268,
    "max_power_kw": 30.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 30.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Thrissur",
    "address": "THRISSUR GURUVAYOOR X-237, GURUVAYUR-TRICHUR ROAD, , City=GURUVAYOOR,District=THRISSUR, State=Kerala",
    "city": "Thrissur",
    "latitude": 10.594516,
    "longitude": 76.04538,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Kottayam",
    "address": "KOTTAYAM KOTTAYAM XI/252, MUTTAMBALAM, , City=KOTTAYAM, District=KOTTAYAM,State=Kerala",
    "city": "Kottayam",
    "latitude": 9.588466,
    "longitude": 76.53914,
    "max_power_kw": 60.0,
    "connectors": [
      {
        "type": "CCS2",
        "current_type": "DC",
        "power_kw": 60.0,
        "stalls_count": 2
      }
    ]
  },
  {
    "cpo": "BPCL",
    "station_name": "BPCL EV Station, Ernakulam",
    "address": "Ernakulam ALUVA XVII - 70, ALUVA-ERNAKULAM ROAD, , City=ALUVA, District=ERNAKULUM,State=Kerala",
    "city": "Ernakulam",
    "latitude": 10.102725,
    "longitude": 76.350111,
    "max_power_kw": 3.0,
    "connectors": [
      {
        "type": "Bharat AC-001 (15A)",
        "current_type": "AC",
        "power_kw": 3.0,
        "stalls_count": 1
      }
    ]
  }
];
