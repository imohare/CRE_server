import { getAllAlbums } from "Services/Album";

function albumList () {


  const cardIdArr = comments.map(comment => comment.cardId);

  const correctCardIds = (cardIdArr) => {
    const cardIds = new Set(cards.map(({ _id }) => _id))
    console.log(cardIds)
    const filteredCards = cardIdArr.filter(_id => cardIds.has(_id))
    console.log("filtered", filteredCards)
    return filteredCards
  }

  const correctIdArr = correctCardIds(cardIdArr)

  const correctCards = cards.map(id => id === correctIdArr);
  console.log("correctCards", correctCards)

  // cards.map(card => card._id === 
   

  return (
    <div>
      <ArtistWipsButton/>
      <LogoutButton/>
      <br/>
      <Text  p={3} fontFamily='system-ui' fontSize={[ 4, 5 ]} fontWeight='bold' lineHeight='body'> @ELIZA_BLAKEMORE PROFILE</Text>
      <Flex>
      <Card width={[256, 320]} mx='auto' boxShadow='card'>
      <Image src={profilePicture}></Image>
      </Card>
      <Text  p={3} fontFamily='system-ui'> followers. </Text>
      <Text fontFamily='system-ui'> @ROMAN_ROAD </Text>
      <Text p={3} fontFamily='system-ui'> wips. </Text>
      {wips.map(wip => <Link to={`/a/wip/${wip.wip_title}`} ><Text system-ui>{wip.wip_title} / </Text></Link>)}
      <Text  p={3}fontFamily='system-ui'> new comments from @ROMAN_ROAD: </Text>
      {comments.map(comment => comment.seen_by_state === "false" ? <Card width={[ 256, 320 ]} mx='auto'><Text p={3}fontFamily='system-ui'>{comment.comment}</Text></Card> :
  null)}
      </Flex>

    </div>
  )
}

export default albumList;