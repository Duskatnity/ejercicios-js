(() => {

  let owner = [ "row-bqfz-nvx7~tgt9", "00000000-0000-0000-F9AE-98CCA39DA3F7", 0, 1713754806, null, 1713754806, null, "{ }", "ETV/6707", "RUSTIC HOUSE IN ESPORLAS", "Estada turística en habitatge (ETV)", "Allotjaments", "2016-06-09T00:00:00", "Alta", "Carretera ESPORLES- ESTABLIMETS, 3. 07190, ESPORLES", null, null, null, "8", null, null, null, "4", "2", "MALLORKEYS, SL (B57892192)", null ]
  
  let data = owner[14]

  let [address, PC, place] = data.split(", ")

  console.log(place.toLowerCase())

})()