export default function solve() {

    var arestas = [];

    for(var id in layout) {
        if(!graph[id])
        graph[id] = {};
        layout[id].forEach(function(aid) {
        graph[id][aid] = Math.floor(Math.random() * (25 + 1) + 3);
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
      
      for(var n in solutions) {
        if(!solutions[n])
          continue
        var ndist = solutions[n].dist;
        var adj = graph[n];
        for(var a in adj) {
          if(solutions[a])
            continue;
          var d = adj[a] + ndist;
          if(d < dist) {
            parent = solutions[n];
            nearest = a;
            dist = d;
          }
        }
      }
      
      if(dist === Infinity) {
          break;
      }
      
      solutions[nearest] = parent.concat(nearest);
      solutions[nearest].dist = dist;
    }

    let solution = [];
    for(var x in solutions) {
        if(x === destino){
            solution = solutions[x];
        }
    }
    return [solution, arestas];
  }
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


