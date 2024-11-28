const tracks = [
    {
        location: "Bahrain",
        images: {
        flag: "../../../../../assets/flags/bahrain.png",
        track: "../../../../../assets/tracks/bahrain.png",
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
        flag: "../../../../../../assets/flags/saudi arabia.png",
        track: "../../../../../../assets/tracks/saudi arabia.png",
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
        flag: "../../../../../../assets/flags/australia.png",
        track: "../../../../../../assets/tracks/australia.png",
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
        flag: "../../../../../../../assets/flags/italia.png",
        track: "../../../../../../../assets/tracks/italia.png",
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
        flag: "../../../../../../../assets/flags/united states.png",
        track: "../../../../../../../assets/tracks/united states.png",
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
        flag: "../../../../../../../assets/flags/spain.png",
        track: "../../../../../../../assets/tracks/spain.png",
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
        flag: "../../../../../../../assets/flags/monaco.png",
        track: "../../../../../../assets/tracks/monaco.png",
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
        flag: "../../../../../../assets/flags/azerbaijan.png",
        track: "../../../../../../assets/tracks/azerbaijan.png",
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
        flag: "../../../../../../assets/flags/canada.png",
        track: "../../../../../assets/tracks/canada.png",
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
        flag: "../../../../../../assets/flags/great britain.png",
        track: "../../../../../../assets/tracks/great britain.png",
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
        flag: "../../../../../../assets/flags/austria.png",
        track: "../../../../../assets/tracks/austria.png",
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
        flag: "../../../../../../assets/flags/france.png",
        track: "../../../../../assets/tracks/france.png",
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
        flag: "../../../../../../assets/flags/hungary.png",
        track: "../../../../../../assets/tracks/hungary.png",
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
        flag: "../../../../../../../assets/flags/belgium.png",
        track: "../../../../../../assets/tracks/belgium.png",
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
        flag: "../../../../../../../assets/flags/netherlands.png",
        track: "../../../../../../assets/tracks/netherlands.png",
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
        flag: "../../../../../../assets/flags/italia.png",
        track: "../../../../../../assets/tracks/italia2.png",
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
        flag: "../../../../../../assets/flags/singapore.png",
        track: "../../../../../assets/tracks/singapore.png",
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
        flag: "../../../../../../assets/flags/japan.png",
        track: "../../../../../../assets/tracks/japan.png",
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
        flag: "../../../../../../assets/flags/united states.png",
        track: "../../../../../assets/tracks/united states 2.png",
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
        flag: "../../../../../../assets/flags/mexico.png",
        track: "../../../../../assets/tracks/mexico.png",
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
        flag: "../../../../../../assets/flags/brasil.png",
        track: "../../../../../assets/tracks/brasil.png",
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
        flag: "../../../../../../assets/flags/abu_dhabi.png",
        track: "../../../../../../assets/tracks/abu_dhabi.png",
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
        photo: "../../../../../../../../assets/drivers/lewham01.png",
        info: {
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "201",
        championships: "7",
        birthdate: "07/01/1985"
        ,ergastLink: "https://ergast.com/api/f1/drivers/hamilton.json"
        }
    },
    {
      driver: {
        name: "George",
        surname: "Russell",
        number: "63"
      },
      photo: "../../../../../../../../../../../../../../assets/drivers/georus01.png",
      info: {
        team: "Mercedes",
        country: "United Kingdom",
        podiums: "14",
        championships: "None",
        birthdate: "15/02/1998"
        ,ergastLink: "https://ergast.com/api/f1/drivers/russell.json"
      }
    },
    {
        driver: {
        name: "Max",
        surname: "Verstappen",
        number: "1"
        },
      photo: "../../../../../../assets/drivers/maxver01.png",
      info: {
        team: "Red Bull Racing",
        country: "Netherlands",
        podiums: "111",
        championships: "4",
        birthdate: "30/09/1997"
        ,ergastLink: "https://ergast.com/api/f1/drivers/verstappen.json"
      }
    },
    {
      driver: {
        name: "Sergio",
        surname: "Perez",
        number: "11"
      },
      photo: "../../../../../../../../../../../../../assets/drivers/serper01.png",
      info: {
        team: "Red Bull Racing",
        country: "Mexico",
        podiums: "39",
        championships: "None",
        birthdate: "26/01/1990"
        ,ergastLink: "https://ergast.com/api/f1/drivers/perez.json"
      }
    },
    {
      driver: {
        name: "Charles",
        surname: "Leclerc",
        number: "16"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/chalec01.png",
      info: {
        team: "Ferrari",
        country: "Monaco",
        podiums: "41",
        championships: "None",
        birthdate: "16/10/1997"
        ,ergastLink: "http://ergast.com/api/f1/drivers/leclerc.json"
      }
    },
    {
      driver: {
        name: "Carlos",
        surname: "Sainz",
        number: "55"
      },
      photo: "../../../../../../../../../../../assets/drivers/carsai01.png",
      info: {
        team: "Ferrari",
        country: "Spain",
        podiums: "25",
        championships: "None",
        birthdate: "01/09/1994"
        ,ergastLink: "https://ergast.com/api/f1/drivers/sainz.json"
      }
    },
    {
      driver: {
        name: "Fernando",
        surname: "Alonso",
        number: "14"
      },
      photo: "../../../../../../../assets/drivers/feralo01.png",
      info: {
        team: "Aston Martin",
        country: "Spain",
        podiums: "106",
        championships: "2",
        birthdate: "29/07/1981"
        ,ergastLink: "https://ergast.com/api/f1/drivers/alonso.json"
      }
    },
    {
      driver: {
        name: "Lance",
        surname: "Stroll",
        number: "18"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/lanstr01.png",
      info: {
        team: "Aston Martin",
        country: "Canada",
        podiums: "3",
        championships: "None",
        birthdate: "29/10/1998"
        ,ergastLink: "https://ergast.com/api/f1/drivers/stroll.json"
      }
    },
    {
      driver: {
        name: "Pierre",
        surname: "Gasly",
        number: "10"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/piegas01.png",
      info: {
        team: "Alpine",
        country: "France",
        podiums: "5",
        championships: "None",
        birthdate: "07/02/1996"
        ,ergastLink: "https://ergast.com/api/f1/drivers/gasly.json"
      }
    },
    {
      driver: {
        name: "Esteban",
        surname: "Ocon",
        number: "31"
      },
      photo: "../../../../../../../../../../../../assets/drivers/estoco01.png",
      info: {
        team: "Alpine",
        country: "France",
        podiums: "4",
        championships: "None",
        birthdate: "17/09/1996"
        ,ergastLink: "https://ergast.com/api/f1/drivers/ocon.json"
      }
    },
    {
      driver: {
        name: "Valtteri",
        surname: "Bottas",
        number: "77"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/valbot01.png",
      info: {
        team: "Kck Sauber",
        country: "Finland",
        podiums: "67",
        championships: "None",
        birthdate: "28/08/1989"
        ,ergastLink: "https://ergast.com/api/f1/drivers/bottas.json"
      }
    },
    {
      driver: {
        name: "Guanyu",
        surname: "Zhou",
        number: "24"
      },
      photo: "../../../../../../../../../../../../assets/drivers/guazho01.png",
      info: {
        team: "Kick Sauber",
        country: "China",
        podiums: "None",
        championships: "None",
        birthdate: "30/05/1999"
        ,ergastLink: "https://ergast.com/api/f1/drivers/zhoul.json"
      }
    },
    {
      driver: {
        name: "Lando",
        surname: "Norris",
        number: "4"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/lannor01.png",
      info: {
        team: "McLaren",
        country: "United Kingdom",
        podiums: "25",
        championships: "None",
        birthdate: "13/11/1999"
        ,ergastLink: "https://ergast.com/api/f1/drivers/norris.json"
      }
    },
    {
      driver: {
          name: "Oscar",
          surname: "Piastri",
          number: "81"
          },
          photo: "../../../../../../../../../../../../assets/drivers/oscpia01.png",
          info: {
              team: "McLaren F1 Team",
              country: "Australia",
              podiums: "9",
              championships: "None",
              birthdate: "06/04/2001"
              ,ergastLink: "https://ergast.com/api/f1/drivers/piastri.json"

  }
  },
    {
      driver: {
        name: "Yuki",
        surname: "Tsunoda",
        number: "22"
      },
      photo: "../../../../../../../../../../../../assets/drivers/yuktsu01.png",
      info: {
        team: "RB",
        country: "Japan",
        podiums: "None",
        championships: "None",
        birthdate: "11/05/2000"
        ,ergastLink: "https://ergast.com/api/f1/drivers/tsunoda.json"
      }
    },
    {
      driver: {
          name: "Liam ",
          surname: "Lawson",
          number: "30"
          },
          photo: "../../../../../../../../../../../../assets/drivers/lialaw01.png",
          info: {
              team: "RB",
              country: "New Zealand",
              podiums: "None",
              championships: "None",
              birthdate: "11/02/2002"
              ,ergastLink: "https://ergast.com/api/f1/drivers/lawson.json"
              }
  },
    {
      driver: {
          name: "Franco",
          surname: "Colapinto",
          number: "43"
          },
          photo: "../../../../../../../../../../../../assets/drivers/fracol01.png",
          info: {
              team: "Williams",
              country: "Argentina",
              podiums: "None",
              championships: "None",
              birthdate: "27/05/2003"
              ,ergastLink: "https://ergast.com/api/f1/drivers/colapinto.json"
              }
  },
    {
      driver: {
        name: "Alexander",
        surname: "Albon",
        number: "23"
      },
      photo: "../../../../../../../../../../../../../../../assets/drivers/alealb01.png",
      info: {
        team: "Williams",
        country: "Thailand",
        podiums: "2",
        championships: "None",
        birthdate: "23/03/1996"
        ,ergastLink: "https://ergast.com/api/f1/drivers/albon.json"
      }
    },
   
    {
      driver: {
        name: "Kevin",
        surname: "Magnussen",
        number: "20"
      },
      photo: "../../../../../../../../../../../../assets/drivers/kevmag01.png",
      info: {
        team: "Haas F1 Team",
        country: "Denmark",
        podiums: "1",
        championships: "None",
        birthdate: "05/10/1992"
        ,ergastLink: "https://ergast.com/api/f1/drivers/magnussen.json"
      }
    },
    
   
    
    {
        driver: {
            name: "Ollie",
            surname: "Bearman",
            number: "47"
            },
            photo: "../../../../../../../../../../../../assets/drivers/olibea01.png",
            info: {
                team: "Haas F1 Team",
                country: "England",
                podiums: "None",
                championships: "None",
                birthdate: "27/05/2003"
                ,ergastLink: "https://ergast.com/api/f1/drivers/bearman.json"
    }
    },
    {
        driver: {
            name: "Nico",
            surname: "Hulkenberg",
            number: "27"
            },
            photo: "../../../../../../../../../../../../assets/drivers/nichul01.png",
            info: {
                team: "Haas F1 Team",
                country: "Germany",
                podiums: "None",
                championships: "None",
                birthdate: "19/08/1987"
                ,ergastLink: "https://ergast.com/api/f1/drivers/hulkenberg.json"
    }
    },

]


const teams = [
    {
        name: "Mercedes",
        images: {
        logo: "../../../../../../../../../../../../assets/logos/mercedes-logo.png",
        car: "../../../../../../../../../../../../../assets/cars/mercedes.png"
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
        logo: "../../../../../../../../../../../../assets/logos/red-bull-racing-logo.png",
        car: "../../../../../../../../../../../../../assets/cars/red-bull-racing.png"
        },
        info: {
        full_name: "Red Bull Racing",
        chief: "Christian Horner",
        debut: "1997",
        championships: "6",
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
        logo: "../../../../../../../../../../../../assets/logos/ferrari-logo.png",
        car: "../../../../../../../../../../../../../assets/cars/ferrari.png"
      },
      info: {
        full_name: "Scuderia Ferrari",
        chief: "Frédéric Vasseur",
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
        logo: "../../../../../../../../../../../../../../../assets/logos/mclaren-logo.png",
        car: "../../../../../../../../../../../../../assets/cars/mclaren.png"
      },
      info: {
        full_name: "McLaren F1 Team",
        chief: "Andrea Stella",
        debut: "1966",
        championships: "8",
        engine: "Mercedes",
        base: "Woking, United Kingdom"
      },
      drivers: {
        first: "Oscar Piastri",
        second: "Lando Norris"
      }
    },
    {
      name: "Alpine",
      images: {
        logo: "../../../../../../../../../../../../../assets/logos/alpine-logo.png",
        car: "../../../../../../../../../../../../../../assets/cars/alpine.png"
      },
      info: {
        full_name: "Alpine F1 Team",
        chief: "Oliver Oakes",
        debut: "1986",
        championships: "2",
        engine: "Renault",
        base: "Enstone, United Kingdom"
      },
      drivers: {
        first: "Pierre Gasly",
        second: "Esteban Ocon"
      }
    },
    {
      name: "RB",
      images: {
        logo: "../../../../../../../../../../../../../assets/logos/rb-logo.png",
        car: "../../../../../../../../../../../../assets/cars/rb.png"
      },
      info: {
        full_name: "Visa Cash App RB Formula One Team",
        chief: "Laurent Mekies",
        debut: "1985",
        championships: "None",
        engine: "Red Bull Engines",
        base: "Faenza, Italy"
      },
      drivers: {
        first: "Liam Lawson",
        second: "Yuki Tsunoda"
      }
    },
    {
      name: "Aston Martin",
      images: {
        logo: "../../../../../../../../../../../../../assets/logos/aston-martin-logo.png",
        car: "../../../../../../../../../../../assets/cars/aston-martin.png"
      },
      info: {
        full_name: "Aston Martin Aramco F1 Team",
        chief: "Mike Krack",
        debut: "2018",
        championships: "None",
        engine: "Mercedes",
        base: "Silverstone, United Kingdom"
      },
      drivers: {
        first: "Fernando Alonso",
        second: "Lance Stroll"
      }
    },
    {
      name: "Williams",
      images: {
        logo: "../../../../../../../../../../../../assets/logos/williams-logo.png",
        car: "../../../../../../../../../../../assets/cars/williams.png"
      },
      info: {
        full_name: "Williams Racing",
        chief: "James Vowles",
        debut: "1978",
        championships: "9",
        engine: "Mercedes",
        base: "Grove, United Kingdom"
      },
      drivers: {
        first: "Franco Colapinto",
        second: "Alexander Albon"
      }
    },
    {
      name: "Kick Sauber",
      images: {
        logo: "../../../../../../../../../../../../../../../assets/logos/kick-sauber-logo.png",
        car: "../../../../../../../../../../../../assets/cars/kick-sauber.png"
      },
      info: {
        full_name: "Stake F1 Team Kick Sauber",
        chief: "Alessandro Alunni Bravi",
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
        logo: "../../../../../../../../../../../../../assets/logos/haas-logo.png",
        car: "../../../../../../../../../../../../assets/cars/haas.png"
      },
      info: {
        full_name: "MoneyGram Haas F1 Team",
        chief: "Ayao Komatsu",
        debut: "2016",
        championships: "None",
        engine: "Ferrari",
        base: "Kannapolis, United States"
      },
      drivers: {
        first: "Nico Hulkenberg",
        second: "Kevin Magnussen"
      }
    },
  ]