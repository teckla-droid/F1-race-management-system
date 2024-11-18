const tracks = [
    {
        location: "Bahrain",
        images: {
        flag: "bahrain.png",
        track: "bahrain.png",
        },
        info: {
        name: "Bahrain International Circuit",
        first_gp: "2004",
        num_laps: "57",
        track_length: "5.412 km",
        race_distance: "308.238 km",
        record_lap: "1:31.447 Pedro de la Rosa (2005)"
        }
    },
    {
        location: "Saudi Arabia",
        images: {
        flag: "saudi_arabia.png",
        track: "saudi_arabia.png",
        },
        info: {
        name: "Jeddah Street Circuit",
        first_gp: "2021",
        num_laps: "50",
        track_length: "6.174 km",
        race_distance: "308.045 km",
        record_lap: "1:20.734 Lewis Hamilton (2021)"
        }
    },
    {
        location: "Australia",
        images: {
        flag: "australia.png",
        track: "australia.png",
        },
        info: {
        name: "Melbourne Grand Prix Circuit",
        first_gp: "1996",
        num_laps: "58",
        track_length: "5.303 km",
        race_distance: "307.574 km",
        record_lap: "1:24.125 Michael Schumacher (2004)"
        }
    },
    {
        location: "Italy",
        images: {
        flag: "italy.png",
        track: "italy.png",
        },
        info: {
        name: "Autodromo Enzo e Dino Ferrari",
        first_gp: "1980",
        num_laps: "63",
        track_length: "4.909 km",
        race_distance: "309.049 km",
        record_lap: "1:15.484 Lewis Hamilton (2020)"
        }
    }, 
    {
        location: "United States",
        images: {
        flag: "united_states.png",
        track: "united_states2.png",
        },
        info: {
        name: "Miami International Autodrome",
        first_gp: "2022",
        num_laps: "57",
        track_length: "5.041 km",
        race_distance: "308.037 km",
        record_lap: "None"
        }
    },
    {
        location: "Spain",
        images: {
        flag: "spain.png",
        track: "spain.png",
        },
        info: {
        name: "Circuit de Barcelona-Catalunya",
        first_gp: "1991",
        num_laps: "66",
        track_length: "4.675 km",
        race_distance: "308.424 km",
        record_lap: "1:18.149 Max Verstappen (2021)"
        }
    },
    {
        location: "Monaco",
        images: {
        flag: "monaco.png",
        track: "monaco.png",
        },
        info: {
        name: "Monaco Circuit",
        first_gp: "1950",
        num_laps: "78",
        track_length: "3.337 km",
        race_distance: "260.286 km",
        record_lap: "1:12.909 Lewis Hamilton (2021)"
        }
    },
    {
        location: "Azerbaijan",
        images: {
        flag: "azerbaijan.png",
        track: "azerbaijan.png",
        },
        info: {
        name: "Baku City Circuit",
        first_gp: "2016",
        num_laps: "51",
        track_length: "6.003 km",
        race_distance: "306.049 km",
        record_lap: "1:43.009 Charles Leclerc (2019)"
        }
    },
    {
        location: "Canada",
        images: {
        flag: "canada.png",
        track: "canada.png",
        },
        info: {
        name: "Gilles Villeneuve Circuit",
        first_gp: "1978",
        num_laps: "70",
        track_length: "4.361 km",
        race_distance: "305.027 km",
        record_lap: "1:13.078 Valtteri Bottas (2019)"
        }
    },
    {
        location: "Great Britain",
        images: {
        flag: "great_britain.png",
        track: "great_britain.png",
        },
        info: {
        name: "Silverstone Circuit",
        first_gp: "1950",
        num_laps: "52",
        track_length: "5. 891 km",
        race_distance: "306.198 km",
        record_lap: "1:27.097 Max Verstappen (2020)"
        }
    }, 
    {
        location: "Austria",
        images: {
        flag: "austria.png",
        track: "austria.png",
        },
        info: {
        name: "Red Bull Ring",
        first_gp: "1970",
        num_laps: "71",
        track_length: "4.318 km",
        race_distance: "306.452 km",
        record_lap: "1:05.619 Carlos Sainz (2020)"
        }
    },
    {
        location: "France",
        images: {
        flag: "france.png",
        track: "france.png",
        },
        info: {
        name: "Paul Ricard Circuit",
        first_gp: "1971",
        num_laps: "53",
        track_length: "5.842 km",
        race_distance: "309.069 km",
        record_lap: "1:32.740 Sebastian Vettel (2019)"
        }
    },
    {
        location: "Hungary",
        images: {
        flag: "hungary.png",
        track: "hungary.png",
        },
        info: {
        name: "Hungaroring",
        first_gp: "1986",
        num_laps: "70",
        track_length: "4.381 km",
        race_distance: "306.063 km",
        record_lap: "1:16.627 Lewis Hamilton (2020)"
        }
    },
    {
        location: "Belgium",
        images: {
        flag: "belgium.png",
        track: "belgium.png",
        },
        info: {
        name: "Spa-Francorchamps Circuit",
        first_gp: "1950",
        num_laps: "44",
        track_length: "7.004 km",
        race_distance: "308.052 km",
        record_lap: "1:46.286 Valtteri Bottas (2018)"
        }
    },
    {
        location: "Netherlands",
        images: {
        flag: "netherlands.png",
        track: "netherlands.png",
        },
        info: {
        name: "Zandvoort Circuit",
        first_gp: "1952",
        num_laps: "72",
        track_length: "4.259 km",
        race_distance: "306.648 km",
        record_lap: "1:11.097 Lewis Hamilton (2021)"
        }
    },
    {
        location: "Italy",
        images: {
        flag: "italy.png",
        track: "italy2.png",
        },
        info: {
        name: "Autodromo Nazionale Monza",
        first_gp: "1950",
        num_laps: "53",
        track_length: "5.793 km",
        race_distance: "306.072 km",
        record_lap: "1:21.046 Rubens Barrichello (2004)"
        }
    },
    {
        location: "Singapore",
        images: {
        flag: "singapore.png",
        track: "singapore.png",
        },
        info: {
        name: "Marina Bay Street Circuit",
        first_gp: "2008",
        num_laps: "61",
        track_length: "5.063 km",
        race_distance: "308.706 km",
        record_lap: "1:41.905 Kevin Magnussen (2018)"
        }
    },
    {
        location: "Japan",
        images: {
        flag: "japan.png",
        track: "japan.png",
        },
        info: {
        name: "Suzuka Circuit",
        first_gp: "1987",
        num_laps: "53",
        track_length: "5.807 km",
        race_distance: "307.471 km",
        record_lap: "1:30.983 Lewis Hamilton (2019)"
        }
    },
    {
        location: "United States",
        images: {
        flag: "united_states.png",
        track: "united_states.png",
        },
        info: {
        name: "Circuit of the Americas",
        first_gp: "2012",
        num_laps: "56",
        track_length: "5.513 km",
        race_distance: "308.405 km",
        record_lap: "1:36.169 Charles Leclerc (2019)"
        }
    },
    {
        location: "Mexico",
        images: {
        flag: "mexico.png",
        track: "mexico.png",
        },
        info: {
        name: "Hermanos Rodríguez Autodrome",
        first_gp: "1963",
        num_laps: "71",
        track_length: "4.304 km",
        race_distance: "305.354 km",
        record_lap: "1:17.774 Valtteri Bottas (2021)"
        }
    },
    {
        location: "Brazil",
        images: {
        flag: "brazil.png",
        track: "brazil.png",
        },
        info: {
        name: "José Carlos Pace Autodrome",
        first_gp: "1973",
        num_laps: "71",
        track_length: "4.309 km",
        race_distance: "305.909 km",
        record_lap: "1:10.540 Valtteri Bottas (2018)"
        }
    },
    {
        location: "Abu Dhabi",
        images: {
        flag: "abu_dhabi.png",
        track: "abu_dhabi.png",
        },
        info: {
        name: "Yas Marina Circuit",
        first_gp: "2009",
        num_laps: "55",
        track_length: "5.554 km",
        race_distance: "305.355 km",
        record_lap: "1:26.103 Max Verstappen (2021)"
        }
    },  
]

const drivers = [
    {
        driver: {
        name: "Lewis",
        surname: "Hamilton",
        number: "44"
        },
        photo: "hamilton.png",
        info: {
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "182",
        championships: "7",
        birthdate: "07/01/1985"
        }
    },
    {
        driver: {
        name: "Max",
        surname: "Verstappen",
        number: "1"
        },
      photo: "verstappen.png",
      info: {
        team: "Red Bull Racing",
        country: "Netherlands",
        podiums: "60",
        championships: "1",
        birthdate: "30/09/1997"
      }
    },
    {
      driver: {
        name: "Charles",
        surname: "Leclerc",
        number: "16"
      },
      photo: "leclerc.png",
      info: {
        team: "Ferrari",
        country: "Monaco",
        podiums: "13",
        championships: "None",
        birthdate: "16/10/1997"
      }
    },
    {
      driver: {
        name: "Daniel",
        surname: "Ricciardo",
        number: "3"
      },
      photo: "ricciardo.png",
      info: {
        team: "McLaren",
        country: "Australia",
        podiums: "32",
        championships: "None",
        birthdate: "01/07/1989"
      }
    },
    {
      driver: {
        name: "Fernando",
        surname: "Alonso",
        number: "14"
      },
      photo: "alonso.png",
      info: {
        team: "Alpine",
        country: "Spain",
        podiums: "98",
        championships: "2",
        birthdate: "29/07/1981"
      }
    },
    {
      driver: {
        name: "Pierre",
        surname: "Gasly",
        number: "10"
      },
      photo: "gasly.png",
      info: {
        team: "AlphaTauri",
        country: "France",
        podiums: "3",
        championships: "None",
        birthdate: "07/02/1996"
      }
    },
    {
      driver: {
        name: "Sebastian",
        surname: "Vettel",
        number: "5"
      },
      photo: "vettel.png",
      info: {
        team: "Aston Martin",
        country: "Germany",
        podiums: "122",
        championships: "4",
        birthdate: "03/07/1987"
      }
    },
    {
      driver: {
        name: "Nicholas",
        surname: "Latifi",
        number: "6"
      },
      photo: "latifi.png",
      info: {
        team: "Williams",
        country: "Canada",
        podiums: "None",
        championships: "None",
        birthdate: "29/06/1995"
      }
    },
    {
      driver: {
        name: "Valtteri",
        surname: "Bottas",
        number: "77"
      },
      photo: "bottas.png",
      info: {
        team: "Alfa Romeo",
        country: "Finland",
        podiums: "67",
        championships: "None",
        birthdate: "28/08/1989"
      }
    },
    {
      driver: {
        name: "Mick",
        surname: "Schumacher",
        number: "47"
      },
      photo: "schumacher.png",
      info: {
        team: "Haas F1 Team",
        country: "Germany",
        podiums: "None",
        championships: "None",
        birthdate: "22/03/1999"
      }
    },
    {
      driver: {
        name: "George",
        surname: "Russell",
        number: "63"
      },
      photo: "russell.png",
      info: {
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "1",
        championships: "None",
        birthdate: "15/02/1998"
      }
    },
    {
      driver: {
        name: "Sergio",
        surname: "Perez",
        number: "11"
      },
      photo: "perez.png",
      info: {
        team: "Red Bull Racing",
        country: "Mexico",
        podiums: "15",
        championships: "None",
        birthdate: "26/01/1990"
      }
    },
    {
      driver: {
        name: "Carlos",
        surname: "Sainz",
        number: "55"
      },
      photo: "sainz.png",
      info: {
        team: "Ferrari",
        country: "Spain",
        podiums: "6",
        championships: "None",
        birthdate: "01/09/1994"
      }
    },
    {
      driver: {
        name: "Lando",
        surname: "Norris",
        number: "4"
      },
      photo: "norris.png",
      info: {
        team: "McLaren",
        country: "United Kingdom",
        podiums: "5",
        championships: "None",
        birthdate: "13/11/1999"
      }
    },
    {
      driver: {
        name: "Esteban",
        surname: "Ocon",
        number: "31"
      },
      photo: "ocon.png",
      info: {
        team: "Alpine",
        country: "France",
        podiums: "2",
        championships: "None",
        birthdate: "17/09/1996"
      }
    },
    {
      driver: {
        name: "Yuki",
        surname: "Tsunoda",
        number: "22"
      },
      photo: "tsunoda.png",
      info: {
        team: "AlphaTauri",
        country: "Japan",
        podiums: "None",
        championships: "None",
        birthdate: "11/05/2000"
      }
    },
    {
      driver: {
        name: "Lance",
        surname: "Stroll",
        number: "18"
      },
      photo: "stroll.png",
      info: {
        team: "Aston Martin",
        country: "Canada",
        podiums: "3",
        championships: "None",
        birthdate: "29/10/1998"
      }
    },
    {
      driver: {
        name: "Alexander",
        surname: "Albon",
        number: "23"
      },
      photo: "albon.png",
      info: {
        team: "Williams",
        country: "Thailand",
        podiums: "2",
        championships: "None",
        birthdate: "23/03/1996"
      }
    },
    {
      driver: {
        name: "Guanyu",
        surname: "Zhou",
        number: "24"
      },
      photo: "zhou.png",
      info: {
        team: "Alfa Romeo",
        country: "China",
        podiums: "None",
        championships: "None",
        birthdate: "30/05/1999"
      }
    },
    {
      driver: {
        name: "Kevin",
        surname: "Magnussen",
        number: "20"
      },
      photo: "magnussen.png",
      info: {
        team: "Haas F1 Team",
        country: "Denmark",
        podiums: "1",
        championships: "None",
        birthdate: "05/10/1992"
      }
    },
  ]

const teams = [
    {
        name: "Mercedes",
        images: {
        logo: "mercedes.png",
        car: "mercedes.png"
        },
        info: {
        full_name: "Mercedes-AMG Petronas Formula One Team",
        chief: "Toto Wolff",
        debut: "1970",
        championships: "8",
        engine: "Mercedes",
        base: "Brackley, United Kingdom"
      },
      drivers: {
        first: "Lewis Hamilton",
        second: "George Russell"
      }
    },
    {
      name: "Red Bull",
      images: {
        logo: "redbull.png",
        car: "redbull.png"
      },
      info: {
        full_name: "Red Bull Racing",
        chief: "Christian Horner",
        debut: "1997",
        championships: "4",
        engine: "Red Bull Engines",
        base: "Milton Keynes, United Kingdom"
      },
      drivers: {
        first: "Max Verstappen",
        second: "Sergio Perez"
      }
    },
    {
      name: "Ferrari",
      images: {
        logo: "ferrari.png",
        car: "ferrari.png"
      },
      info: {
        full_name: "Scuderia Ferrari",
        chief: "Mattia Binotto",
        debut: "1950",
        championships: "16",
        engine: "Ferrari",
        base: "Maranello, Italy"
      },
      drivers: {
        first: "Charles Leclerc",
        second: "Carlos Sainz"
      }
    },
    {
      name: "McLaren",
      images: {
        logo: "mclaren.png",
        car: "mclaren.png"
      },
      info: {
        full_name: "McLaren F1 Team",
        chief: "Andreas Seidl",
        debut: "1966",
        championships: "8",
        engine: "Mercedes",
        base: "Woking, United Kingdom"
      },
      drivers: {
        first: "Daniel Ricciardo",
        second: "Lando Norris"
      }
    },
    {
      name: "Alpine",
      images: {
        logo: "alpine.png",
        car: "alpine.png"
      },
      info: {
        full_name: "Alpine F1 Team",
        chief: "Otmar Szafnauer",
        debut: "1986",
        championships: "2",
        engine: "Renault",
        base: "Enstone, United Kingdom"
      },
      drivers: {
        first: "Fernando Alonso",
        second: "Esteban Ocon"
      }
    },
    {
      name: "AlphaTauri",
      images: {
        logo: "alphatauri.png",
        car: "alphatauri.png"
      },
      info: {
        full_name: "Scuderia AlphaTauri",
        chief: "Franz Tost",
        debut: "1985",
        championships: "None",
        engine: "Red Bull Engines",
        base: "Faenza, Italy"
      },
      drivers: {
        first: "Pierre Gasly",
        second: "Yuki Tsunoda"
      }
    },
    {
      name: "Aston Martin",
      images: {
        logo: "astonmartin.png",
        car: "astonmartin.png"
      },
      info: {
        full_name: "Aston Martin Cognizant Formula One Team",
        chief: "Mike Krack",
        debut: "2018",
        championships: "None",
        engine: "Mercedes",
        base: "Silverstone, United Kingdom"
      },
      drivers: {
        first: "Sebastian Vettel",
        second: "Lance Stroll"
      }
    },
    {
      name: "Williams",
      images: {
        logo: "williams.png",
        car: "williams.png"
      },
      info: {
        full_name: "Williams Racing",
        chief: "Jost Capito",
        debut: "1978",
        championships: "9",
        engine: "Mercedes",
        base: "Grove, United Kingdom"
      },
      drivers: {
        first: "Nicholas Latifi",
        second: "Alexander Albon"
      }
    },
    {
      name: "Alfa Romeo",
      images: {
        logo: "alfaromeo.png",
        car: "alfaromeo.png"
      },
      info: {
        full_name: "Alfa Romeo F1 Team ORLEN",
        chief: "Frédéric Vasseur",
        debut: "1993",
        championships: "None",
        engine: "Ferrari",
        base: "Hinwil, Switzerland"
      },
      drivers: {
        first: "Valtteri Bottas",
        second: "Guanyu Zhou"
      }
    },
    {
      name: "Haas",
      images: {
        logo: "haas.png",
        car: "haas.png"
      },
      info: {
        full_name: "Uralkali Haas F1 Team",
        chief: "Guenther Steiner",
        debut: "2016",
        championships: "None",
        engine: "Ferrari",
        base: "Kannapolis, United States"
      },
      drivers: {
        first: "Mick Schumacher",
        second: "Kevin Magnussen"
      }
    },
  ]