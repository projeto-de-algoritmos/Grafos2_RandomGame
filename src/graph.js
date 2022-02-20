//dijkstra solve graph starting at s
export default function solve() {

    var arestas = [];

    for(var id in layout) {
        if(!graph[id])
        graph[id] = {};
        layout[id].forEach(function(aid) {
        graph[id][aid] = Math.floor(Math.random() * (5 + 1) + 3);
        arestas.push([id, aid, graph[id][aid]])
        });
    }

    var s = 'Sun Keep';
    var destino = 'Guardia Castle';
    var solutions = {};
    solutions[s] = [];
    solutions[s].dist = 0;
    
    while(true) {
      var parent = null;
      var nearest = null;
      var dist = Infinity;
      
      //for each existing solution
      for(var n in solutions) {
        if(!solutions[n])
          continue
        var ndist = solutions[n].dist;
        var adj = graph[n];
        //for each of its adjacent nodes...
        for(var a in adj) {
          //without a solution already...
          if(solutions[a])
            continue;
          //choose nearest node with lowest *total* cost
          var d = adj[a] + ndist;
          if(d < dist) {
            //reference parent
            parent = solutions[n];
            nearest = a;
            dist = d;
          }
        }
      }
      
      //no more solutions
      if(dist === Infinity) {
          break;
      }
      
      //extend parent's solution path
      solutions[nearest] = parent.concat(nearest);
      //extend parent's cost
      solutions[nearest].dist = dist;
    }

    let solution = [];
    for(var x in solutions) {
        if(x === destino){
            solution = solutions[x];
            // console.log(" -> " + x + ": [" + solutions[x].join(", ") + "]   (dist:" + solutions[x].dist + ")");
        }
    }
    return [solution, arestas];
  }
  //create graph
    var graph = {};
    
    var layout = {
        'Sun Keep': ['Ozzies Fort','Northern Ruins'],
        'Ozzies Fort': ['Magic Cave 1'],
        'Northern Ruins': ['Choras','Giants Claw'],
        'Choras': ['Giants Claw'],
        'Giants Claw': ['Magic Cave 1'],
        'Magic Cave 1': ['Magus Lair', 'Magic Cave 2'],
        'Magus Lair': ['Truce'],
        'Magic Cave 2': ['Denadoro Mtns','Fionas Villa'],
        'Fionas Villa': ['Sunken Desert'],
        'Sunken Desert': ['Porre', 'Dorino'],
        'Porre': ['Cursed Woods'],
        'Cursed Woods': ['Zenan Bridge'],
        'Denadoro Mtns': ['Dorino'],
        'Dorino': ['Zenan Bridge'],
        'Zenan Bridge': ['Cathedral', 'Guardia Forest', 'Truce'],
        'Cathedral': ['Guardia Castle'],
        'Guardia Forest': ['Cathedral', 'Truce'],
        'Truce': ['Truce Canyon'],
        'Truce Canyon': ['Guardia Castle']
    }

    // function generateWeights (){
    //     for(var id in layout) {
    //         if(!graph[id])
    //         graph[id] = {};
    //         layout[id].forEach(function(aid) {
    //         graph[id][aid] = Math.floor(Math.random() * (5 + 1) + 3);
    //         arestas.push([id, aid, graph[id][aid]])
    //         });
    //     }
    // }


