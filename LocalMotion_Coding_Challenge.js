//LocalMotion Coding Challenge

function turn(vehicles,peoples,buildings){
//    var buildID = ['A','E','G','D','B','C','F']
    var buildID = ['A','B','C','D','E','F','G']
    for(var paxID = 0; paxID < peoples.length; paxID++){
         if(peoples[paxID].x === 15 && peoples[paxID].y === 16){peoples[paxID].at = "A"}
    else if(peoples[paxID].x === 5 && peoples[paxID].y === 10){peoples[paxID].at = "B"}     
    else if(peoples[paxID].x === 23 && peoples[paxID].y === 2){peoples[paxID].at = "C"}
    else if(peoples[paxID].x === 23 && peoples[paxID].y === 18){peoples[paxID].at = "D"}
    else if(peoples[paxID].x === 17 && peoples[paxID].y === 20){peoples[paxID].at = "E"}
    else if(peoples[paxID].x === 2 && peoples[paxID].y === 23){peoples[paxID].at = "F"}
    else if(peoples[paxID].x === 16 && peoples[paxID].y === 10){peoples[paxID].at = "G"};
    }
//   console.log("vehicles:",vehicles);
//   console.log("buildings:",buildings);
//   console.log("peoples:", peoples);
   for(var i = 0 ; i < vehicles.length; i ++){
       if(vehicles[i].peoples.length === 0 && !vehicles[i].at){
           vehicles[i].moveTo(buildings[i]);
             if(vehicles[i].y === buildings[i].y && vehicles[i].x === buildings[i].x){
             vehicles[i].at = buildings[i].name;
             }  
       }
       for(var paxnum = 0; paxnum < peoples.length; paxnum++){
           if(vehicles[i].peoples.length < 4 && peoples[paxnum].at === vehicles[i].at){
               vehicles[i].pick(peoples[paxnum]);   
           }
           setDest(vehicles[i]);
       }
       if(vehicles[i].dest !== vehicles[i].at && buildings[buildID.indexOf(vehicles[i].dest)]){
         vehicles[i].moveTo(buildings[buildID.indexOf(vehicles[i].dest)]);
               if(vehicles[i].x === 15 && vehicles[i].y === 16){vehicles[i].at = "A"}
          else if(vehicles[i].x === 5 && vehicles[i].y === 10){vehicles[i].at = "B"}
          else if(vehicles[i].x === 23 && vehicles[i].y === 2){vehicles[i].at = "C"}
          else if(vehicles[i].x === 23 && vehicles[i].y === 18){vehicles[i].at = "D"}
          else if(vehicles[i].x === 17 && vehicles[i].y === 20){vehicles[i].at = "E"}
          else if(vehicles[i].x === 2 && vehicles[i].y === 23){vehicles[i].at = "F"}
          else if(vehicles[i].x === 16 && vehicles[i].y === 10){vehicles[i].at = "G"}
      }
  }
function setDest(car){
    if(car.at !== undefined && car.peoples.length > 0){
       var dest = [];
       for(var k = 0; k < car.peoples.length; k++){
           dest.push(car.peoples[k].destination);
       }
      dest.sort();
      if(dest.indexOf(buildID[buildID.indexOf(car.at)-1]) !== -1){
            car.dest = dest[dest.indexOf(buildID[buildID.indexOf(car.at)-1])];
      }else if (dest.indexOf(buildID[buildID.indexOf(car.at)+1]) !== -1){
            car.dest = dest[dest.indexOf(buildID[buildID.indexOf(car.at)+1])];
      }else{
            car.dest = car.peoples[0].destination;
      } 
    } 
   }
}