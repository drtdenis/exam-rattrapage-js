function information(prenom, nom, age,sexe) 
{
  const majeur = 18;

  console.log("prenom: " + prenom);
  console.log("nom: " + nom);
  console.log("age: " + age);
  //console.log("sexe" )
  // if 
  let finalAge = age - majeur;
  
  if (finalAge > 0) {
    console.log("vous êtes majeur depuis " + finalAge + " ans");
  } else {
    finalAge = majeur - age
    console.log("vous serez majeur dans " + finalAge + " ans");
  }
}
information('Sofiane', 'Akermoun', 39, 'M')
information('alice', 'Liddell', 7, 'F')
information('Valerie', 'Dupont', 7, '?')