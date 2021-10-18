/**
 * Adding a User to a Contacted list
 * @param {org.example.contactor.AddContactor} addC
 * @transaction 
 */

async function Addcontactor (addC) {
  
  if (typeof addC.contactor.ContactedUser == 'undefined') {
    addC.contactor.ContactedUser = new Array();
    addC.contactor.ContactedUser[0] = addC.user;
  }
  else {
    addC.contactor.ContactedUser.push(addC.user);
  }
  
  const assetRegistry = await getAssetRegistry('org.example.contactor.Contactor');
  await assetRegistry.update(addC.contactor);
}