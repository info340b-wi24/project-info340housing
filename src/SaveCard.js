function saveCard() {

  // Get a reference to the cards collection
  const cardsRef = ref(db, 'path?','cards');

  // Push the new card to the database
  cardsRef.push({
      title: cardTitle,
      content: cardContent
  }).then(() => {
      // Redirect to the next page
      
  }).catch(error => {
      console.error('Error saving card: ', error);
  });
}
